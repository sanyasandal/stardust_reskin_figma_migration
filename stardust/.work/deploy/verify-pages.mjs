// Verify every deployed sibling page on the preview:
//   HTTP 200, all [data-block-status] === "loaded", 0 about:error / broken <img>,
//   preview .plain.html <img> count === source .plain.html <img> count minus the
//   source's own about:error images (dropped by convert-plain.mjs).
// usage: node stardust/.work/deploy/verify-pages.mjs [pathsFile] > verify.json
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const ORIGIN = 'https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page';
const DIR = 'stardust/.work/deploy';
const pathsFile = process.argv[2] || `${DIR}/pages51.txt`;
const paths = readFileSync(pathsFile, 'utf8').split('\n').map((s) => s.trim()).filter(Boolean);
const report = JSON.parse(readFileSync(`${DIR}/convert-report.json`, 'utf8'));
const byPath = Object.fromEntries(report.map((r) => [r.path, r]));

const countImgs = (html) => (html.match(/<img\b/gi) || []).length;
const countErr = (html) => (html.match(/<img\b[^>]*src="about:error"/gi) || []).length;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const results = [];
for (const path of paths) {
  const web = path === '/index' ? '/' : path;
  const url = `${ORIGIN}${web}`;
  const r = { path: web, url };
  const slug = web === '/' ? 'index' : web.slice(1).replaceAll('/', '~');
  const srcFile = `${DIR}/source/${slug}.plain.html`;
  if (existsSync(srcFile)) {
    const s = readFileSync(srcFile, 'utf8');
    r.srcImgs = countImgs(s);
    r.srcAboutError = countErr(s);
  }
  const plain = await fetch(`${ORIGIN}${web === '/' ? '/index' : web}.plain.html?cb=${Date.now()}`);
  r.plainHttp = plain.status;
  r.daImgs = countImgs(await plain.text());
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e.message).slice(0, 160)));
  const resp = await page.goto(`${url}?cb=${Date.now()}`, { waitUntil: 'load' });
  r.http = resp.status();
  await page.waitForFunction(() => document.body.classList.contains('appear'), null, { timeout: 15000 }).catch(() => {});
  // scroll to trigger lazy images and lazily-loaded blocks
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((res) => { setTimeout(res, 120); });
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(
    () => [...document.querySelectorAll('[data-block-status]')].every((b) => b.dataset.blockStatus === 'loaded'),
    null,
    { timeout: 15000 },
  ).catch(() => {});
  await page.waitForTimeout(800);
  Object.assign(r, await page.evaluate(() => {
    const blocks = [...document.querySelectorAll('main [data-block-status], header [data-block-status], footer [data-block-status]')];
    const notLoaded = blocks.filter((b) => b.dataset.blockStatus !== 'loaded')
      .map((b) => `${b.dataset.blockName}:${b.dataset.blockStatus}`);
    const imgs = [...document.querySelectorAll('main img')];
    const aboutError = imgs.filter((i) => i.getAttribute('src') === 'about:error').length;
    const broken = imgs.filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute('src') !== 'about:error')
      .map((i) => i.currentSrc || i.src);
    return {
      blocks: blocks.length,
      blockNames: [...new Set(blocks.map((b) => b.dataset.blockName))],
      notLoaded,
      mainImgs: imgs.length,
      aboutError,
      broken,
      h1: document.querySelectorAll('main h1').length,
    };
  }));
  r.jsErrors = errs;
  const expected = (r.srcImgs ?? 0) - (r.srcAboutError ?? 0);
  // home and the nav fragment are not part of the 51-page source set (home was gated earlier)
  r.imgMatch = r.srcImgs === undefined ? true : r.daImgs === expected;
  r.convertImages = byPath[web]?.images;
  r.pass = r.http === 200 && r.plainHttp === 200 && r.notLoaded.length === 0
    && r.aboutError === 0 && r.broken.length === 0 && r.imgMatch;
  results.push(r);
  await page.close();
  process.stderr.write(`${r.pass ? 'PASS' : 'FAIL'} ${web} http=${r.http} blocks=${r.blocks} notLoaded=${r.notLoaded.length} img src=${r.srcImgs}-${r.srcAboutError} da=${r.daImgs} broken=${r.broken.length}\n`);
}
await browser.close();
writeFileSync(`${DIR}/verify-results.json`, `${JSON.stringify(results, null, 2)}\n`);
const failed = results.filter((r) => !r.pass);
process.stderr.write(`\n${results.length - failed.length}/${results.length} pass\n`);
process.exit(failed.length ? 1 : 0);
