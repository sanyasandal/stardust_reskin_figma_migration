import { chromium } from 'playwright';
const [url, sel = 'header'] = process.argv.slice(2);
const b = await chromium.launch();
for (const w of [360, 390, 480, 600, 640, 641, 768, 899, 900, 1024, 1280, 1440, 1920]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(800);
  const r = await p.evaluate((s) => { const h = document.querySelector(s); const l = h.querySelector('img'); const r = h.getBoundingClientRect(); return { h: Math.round(r.height * 10) / 10, logo: l ? [l.getBoundingClientRect().width, l.getBoundingClientRect().height, l.complete, l.naturalWidth] : null, doc: document.documentElement.scrollHeight }; }, sel);
  console.log(w, JSON.stringify(r));
  await p.close();
}
await b.close();
