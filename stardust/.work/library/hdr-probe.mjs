import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us', { waitUntil: 'networkidle' });
await p.waitForTimeout(4000);
const r = await p.evaluate(() => ({ hdrStatus: document.querySelector('header .header')?.dataset.blockStatus, css: [...document.styleSheets].map((s) => s.href).filter(Boolean), navClasses: document.querySelector('header nav')?.className, hdrH: document.querySelector('header')?.offsetHeight }));
console.log(JSON.stringify(r, null, 1));
await p.screenshot({ path: '/tmp/hdr.png', clip: { x: 0, y: 0, width: 1440, height: 400 } });
await b.close();
