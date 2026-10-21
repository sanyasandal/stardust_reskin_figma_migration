import { chromium } from 'playwright';
const [url, w = '1440', scope = 'main > section'] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await p.waitForTimeout(2000);
const out = await p.$$eval(scope, (secs) => secs.map((s) => {
  const r = s.getBoundingClientRect(); const c = getComputedStyle(s);
  const el = (q) => { const e = s.querySelector(q); if (!e) return null; const rr = e.getBoundingClientRect(); const cc = getComputedStyle(e); return `${e.tagName} ${Math.round(rr.x)},${Math.round(rr.y - r.y)} ${Math.round(rr.width)}x${Math.round(rr.height)} fs${cc.fontSize}/${cc.lineHeight} ${cc.fontWeight} ${cc.color} m${cc.margin}`; };
  return { cls: s.className, h: Math.round(r.height), pad: c.paddingTop + ' ' + c.paddingBottom, bg: c.backgroundColor, h2: el('h1,h2,h4'), p: el('p'), a: el('a'), img: el('img'), li: el('li'), card: el('.card, .cards-card-body, li') };
}));
for (const o of out) console.log(JSON.stringify(o));
console.log('docH', await p.evaluate(() => document.documentElement.scrollHeight));
await b.close();
