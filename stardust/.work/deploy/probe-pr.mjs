import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
const reqs = [];
p.on('request', (r) => { if (/plan|report|config/i.test(r.url())) reqs.push(r.url()); });
await p.goto('https://fortstreet-h.schools.nsw.gov.au/about-us/policies-and-reports', { waitUntil: 'networkidle' });
console.log(reqs.join('\n'));
console.log(await p.$$eval('.planningreporting', (els) => els.map((e) => e.outerHTML.slice(0, 1500))));
await b.close();
