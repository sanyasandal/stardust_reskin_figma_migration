// Carries what gate (a′) found missing from the reskin target pages — the source's breadcrumb, section-nav
// sidebar and dark band tones — into stardust/reskin/pages/*.html, mirroring the deployed EDS layout
// (breadcrumb, then a 400/800 sidebar + main grid after a full-width hero). The breadcrumb trail, nav tree and
// dark headings are read from the rendered preview, so the target and EDS carry the same thing.
// Originals are kept in stardust/.work/reskin/pages-pre-carry/. Idempotent (skips marked pages).
// Usage (from the repo root): node stardust/.work/reskin/carry-chrome.mjs [slug]
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const EDS = 'https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page';
const PAGES = 'stardust/reskin/pages';
const BACKUP = 'stardust/.work/reskin/pages-pre-carry';
const MARK = '<!-- carried (gate a′): breadcrumb, section-nav, dark tones -->';
mkdirSync(BACKUP, { recursive: true });

const only = process.argv[2];
const rels = execSync('find content -name "*.html"', { encoding: 'utf8' }).trim().split('\n')
  .map((f) => f.slice('content/'.length, -5))
  .filter((r) => !/^(index|nav|footer|section-nav)$|^(library|fragments|widgets)\//.test(r));
const jobs = rels.map((r) => ({ path: `/${r}`, slug: r.replace(/\//g, '-') }))
  .filter((j) => existsSync(`${PAGES}/${j.slug}.html`) && (!only || j.slug === only));

const CSS = `<style id="carried-chrome">
  .site-main .crumbs { padding: 16px 0 8px; }
  .site-main .crumbs .container { max-width: 1168px; padding: 0 16px; }
  .site-main .breadcrumb ol { display: flex; flex-wrap: wrap; margin: 0; padding: 0; list-style: none; font-size: 14px; line-height: 20px; }
  .site-main .breadcrumb li { display: flex; align-items: center; margin-top: 8px; }
  .site-main .breadcrumb li + li::before { content: ''; width: 6px; height: 6px; margin: 0 10px 0 6px; border: solid currentcolor; border-width: 0 1.5px 1.5px 0; transform: rotate(-45deg); }
  .site-main .breadcrumb a { color: var(--palette-heading-fg); text-decoration: underline; }
  .site-main .section-nav nav { font-size: 16px; line-height: 24px; }
  .site-main .section-nav ul { margin: 0; padding: 0; list-style: none; }
  .site-main .section-nav a { display: block; color: var(--palette-body-fg); text-decoration: none; }
  .site-main .section-nav li a { padding: 16px; border-bottom: 1px solid rgb(222 227 229); }
  .site-main .section-nav li li a { padding-left: 32px; }
  .site-main .section-nav li li li a { padding-left: 48px; }
  .site-main .section-nav .section-nav-header a { padding: 8px; border-bottom: 2px solid var(--palette-heading-fg); font-weight: 700; }
  .site-main .section-nav a[aria-current='page'] { background: rgb(242 242 242); font-weight: 600; }
  .site-main .page-aside { display: none; }
  @media (width >= 1024px) {
    .site-main .page-layout { display: grid; grid-template-columns: 400px minmax(0, 800px); max-width: 1200px; margin: 0 auto; }
    .site-main .page-aside { display: block; padding: 16px 48px 16px 16px; }
    .site-main .page-main section > .container { max-width: none; padding: 0 16px; }
  }
</style>`;

const norm = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
let done = 0;
for (const j of jobs) {
  const file = `${PAGES}/${j.slug}.html`;
  let html = readFileSync(file, 'utf8');
  if (html.includes(MARK)) { console.log('skip (carried)', j.slug); continue; }
  const page = await ctx.newPage();
  await page.goto(EDS + j.path, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.waitForSelector('.section-nav nav, main:not(:has(.page-layout))', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(800);
  const eds = await page.evaluate(() => {
    const crumbs = document.querySelector('main .breadcrumb nav, main .breadcrumb ol');
    const nav = document.querySelector('main .page-aside .section-nav nav');
    const layout = document.querySelector('main .page-layout');
    const prev = layout?.previousElementSibling;
    const heroOut = !!(prev && prev.querySelector('.hero'));
    const dark = [...document.querySelectorAll('main .section.dark, main .columns.dark')]
      .map((s) => s.querySelector('h1,h2,h3,h4')?.textContent.trim()).filter(Boolean);
    return { crumbs: crumbs?.outerHTML || null, nav: nav?.outerHTML || null, hasLayout: !!layout, heroOut, dark };
  });
  await page.close();

  const mi = html.search(/<main class="site-main"[^>]*>/);
  const mo = html.indexOf('>', mi) + 1;
  const me = html.lastIndexOf('</main>');
  let main = html.slice(mo, me);

  // dark tones: a target section holding a heading the EDS page shows on a dark band
  let toned = 0;
  const secRe = /<section\b[^>]*>[\s\S]*?<\/section>/g;
  main = main.replace(secRe, (sec) => {
    const open = sec.match(/^<section\b[^>]*>/)[0];
    if (/tone-dark/.test(open)) return sec;
    const heads = [...sec.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g)].map((m) => norm(m[1]));
    if (!heads.length || !eds.dark.some((d) => heads[0] === norm(d))) return sec;
    toned += 1;
    const cls = open.match(/class="([^"]*)"/)[1].replace(/\btone-(light|accent)\b/g, '').replace(/\s+/g, ' ').trim();
    const next = `${cls} tone-dark${/\bbleed\b/.test(cls) ? '' : ' bleed'}`;
    return sec.replace(open, open.replace(`class="${open.match(/class="([^"]*)"/)[1]}"`, `class="${next}"`));
  });

  // chrome: breadcrumb, then sidebar + main grid after a full-width hero (as EDS wrapPageLayout)
  let chrome = false;
  if (eds.hasLayout && eds.nav) {
    const secs = [...main.matchAll(secRe)];
    if (secs.length) {
      const keep = eds.heroOut ? 1 : 0;
      const head = keep ? main.slice(0, secs[0].index + secs[0][0].length) : main.slice(0, secs[0].index);
      const restStart = keep ? secs[0].index + secs[0][0].length : secs[0].index;
      const last = secs[secs.length - 1];
      const rest = main.slice(restStart, last.index + last[0].length);
      const tail = main.slice(last.index + last[0].length);
      const crumbs = eds.crumbs ? `<div class="crumbs"><div class="container breadcrumb">${eds.crumbs}</div></div>` : '';
      main = `${head}\n${crumbs}<div class="page-layout"><aside class="page-aside"><div class="section-nav">${eds.nav}</div></aside><div class="page-main">${rest}</div></div>${tail}`;
      chrome = true;
    }
  }
  if (!toned && !chrome) { console.log('nothing to carry', j.slug); continue; }
  copyFileSync(file, `${BACKUP}/${j.slug}.html`);
  html = html.slice(0, mo) + main + html.slice(me);
  html = html.replace('</head>', `${CSS}\n${MARK}\n</head>`);
  writeFileSync(file, html);
  done += 1;
  console.log(`carried ${j.slug}: chrome ${chrome ? (eds.heroOut ? 'after hero' : 'full') : 'no'}, dark ${toned}/${eds.dark.length}`);
}
await b.close();
console.log('pages changed', done, 'of', jobs.length);
