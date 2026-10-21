import { chromium } from 'playwright';
const [url, sel] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(2000);
console.log(await p.evaluate((s) => [...document.querySelectorAll(s)].slice(0, 3).map((e) => { const c = getComputedStyle(e); return { t: e.textContent.trim().slice(0, 30), color: c.color, a: e.querySelector('a') && getComputedStyle(e.querySelector('a')).color }; }), sel));
await b.close();
