// Survey source .plain.html block shapes (stardust deploy, siblings). Writes survey.json.
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const dir = path.resolve('stardust/.work/deploy/source');
const pages = fs.readFileSync('stardust/.work/deploy/pages51.txt', 'utf8').trim().split('\n');
const browser = await chromium.launch();
const page = await browser.newPage();
const out = [];
for (const p of pages) {
  const f = `${p.slice(1).replaceAll('/', '~')}.plain.html`;
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const r = await page.evaluate((src) => {
    const doc = new DOMParser().parseFromString(`<main>${src}</main>`, 'text/html');
    const sig = (el) => [...el.children].map((c) => c.tagName.toLowerCase() + (c.className ? `.${c.className.replace(/ /g, '.')}` : '')).join(',');
    const sections = [...doc.querySelector('main').children].map((sec, si) => {
      const items = [...sec.children].map((el) => {
        if (el.tagName === 'DIV' && el.className) {
          const rows = [...el.children].map((row) => [...row.children].map((cell) => sig(cell) || (cell.textContent.trim() ? '#text' : '')));
          const meta = el.classList.contains('section-metadata')
            ? Object.fromEntries([...el.children].map((row) => [row.children[0]?.textContent.trim(), row.children[1]?.textContent.trim()])) : undefined;
          return { block: el.className, rows: rows.length, cols: Math.max(0, ...rows.map((r) => r.length)), rowsig: rows, meta };
        }
        return { dc: el.tagName.toLowerCase() };
      });
      return { si, items };
    });
    return { sections, imgs: doc.querySelectorAll('img').length, h1: doc.querySelectorAll('h1').length, iframes: doc.querySelectorAll('iframe').length };
  }, html);
  out.push({ path: p, ...r });
}
await browser.close();
fs.writeFileSync('stardust/.work/deploy/survey.json', JSON.stringify(out, null, 1));
console.log('ok', out.length);
