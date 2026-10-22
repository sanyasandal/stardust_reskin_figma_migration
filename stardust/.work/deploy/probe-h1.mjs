import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto(process.argv[2], { waitUntil: 'load' }); await p.waitForTimeout(2500);
console.log(await p.evaluate((sel) => { const h = document.querySelector(sel); return h && { color: getComputedStyle(h).color, sec: h.closest('.section')?.className, html: h.outerHTML.slice(0, 200), parent: h.parentElement.className }; }, process.env.SEL || 'main h1'));
await b.close();
