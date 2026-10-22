import { chromium } from 'playwright';
const [url, sel] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
const out = await p.evaluate((sel) => [...document.querySelectorAll(sel)].slice(0, 3).map((e) => e.outerHTML.replace(/\s+/g, ' ').slice(0, 2500)), sel);
console.log(out.join('\n-----\n'));
await b.close();
