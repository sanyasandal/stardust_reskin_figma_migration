import { chromium } from 'playwright';
const [url, ...sels] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle' });
for (const s of sels) console.log(s, JSON.stringify(await p.$$eval(s, (els) => els.slice(0, 3).map((e) => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); return { w: Math.round(r.width), x: Math.round(r.x), mw: c.maxWidth, pad: c.padding, ff: c.fontFamily.slice(0, 30), fs: c.fontSize }; }))));
await b.close();
