import { chromium } from 'playwright';
const [url, expr] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
console.log(JSON.stringify(await p.evaluate(expr), null, 1));
await b.close();
