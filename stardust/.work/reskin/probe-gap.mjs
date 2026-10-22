import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const url of process.argv.slice(2)) {
  await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
  console.log(url, JSON.stringify(await p.evaluate(() => [...document.body.children].map((e) => [e.tagName + '.' + e.className, (e.innerText || '').replace(/\s+/g, ' ').trim().length, (e.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 80)]).filter((x) => x[1]))));
}
await b.close();
