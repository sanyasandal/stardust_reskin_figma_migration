import { chromium } from 'playwright';
const [url, out, width = '1440', full = '1'] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +width, height: 900 } });
await p.goto(url, { waitUntil: 'load' });
await p.waitForTimeout(1500);
await p.screenshot({ path: out, fullPage: full === '1' });
console.log(await p.evaluate(() => document.documentElement.scrollHeight));
await b.close();
