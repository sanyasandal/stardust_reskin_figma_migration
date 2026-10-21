import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://fortstreet-h.schools.nsw.gov.au/', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(2000);
console.log(await p.evaluate(() => {
  const s = document.querySelector('main .facebook-feed-container');
  const walk = (el, d) => d > 5 ? '' : [...el.children].map(c => '  '.repeat(d) + `<${c.tagName.toLowerCase()} class="${c.className}"> ${(c.innerText||'').replace(/\s+/g,' ').slice(0,70)}\n` + walk(c, d + 1)).join('');
  return walk(s, 0);
}));
console.log(await p.evaluate(() => [...document.querySelectorAll('main h1, main h2, main h3, main [role=heading]')].map(h=>h.tagName+':'+h.innerText.slice(0,50)).join('\n')));
await b.close();
