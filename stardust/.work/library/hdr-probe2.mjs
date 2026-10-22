import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us', { waitUntil: 'networkidle' });
await p.waitForTimeout(3000);
console.log(await p.evaluate(() => document.querySelector('header').outerHTML.slice(0, 2500)));
await b.close();
