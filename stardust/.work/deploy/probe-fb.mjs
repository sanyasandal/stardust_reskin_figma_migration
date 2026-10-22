import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
for (const u of ['/about-us/stories-and-highlights', '/contact-us', '/school-life/travel-to-school', '/about-us/why-choose-us', '/about-us/enrol']) {
  await p.goto(`https://fortstreet-h.schools.nsw.gov.au${u}`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  console.log(u, JSON.stringify(await p.$$eval('.facebook-feed, .embed', (els) => els.map((e) => e.outerHTML.replace(/\s+/g, ' ').slice(0, 900)))));
}
await b.close();
