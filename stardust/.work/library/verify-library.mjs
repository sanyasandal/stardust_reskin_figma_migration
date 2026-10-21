import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
const base = 'https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/library/blocks/';
const names = ['accordion','cards','columns','content-container','embed','facebook-feed','fragment','gallery','hero','planningreporting','table'];
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const out = [];
for (const n of names) {
  await p.goto(base + n, { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  const r = await p.evaluate((n) => {
    const blocks = [...document.querySelectorAll(`main .${n}`)].filter((e) => e.classList.contains('block') || e.dataset.blockStatus);
    return {
      instances: blocks.length,
      loaded: blocks.filter((e) => e.dataset.blockStatus === 'loaded').length,
      libMeta: document.querySelectorAll('main .library-metadata').length,
      imgs: document.querySelectorAll('main img').length,
      brokenImgs: [...document.querySelectorAll('main img')].filter((i) => i.complete && i.naturalWidth === 0).length,
    };
  }, n);
  await p.screenshot({ path: `stardust/reports/screens/library/${n}.png`, fullPage: true });
  out.push({ block: n, ...r }); console.log(n, JSON.stringify(r));
}
await b.close();
writeFileSync('stardust/.work/library/verify-results.json', JSON.stringify(out, null, 2));
