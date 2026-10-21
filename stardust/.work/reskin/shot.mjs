import { chromium } from 'playwright';
const [url, out, w = '1440', full = '1'] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } window.scrollTo(0, 0); });
await p.waitForTimeout(1500);
await p.screenshot({ path: out, fullPage: full === '1' }); await b.close();
