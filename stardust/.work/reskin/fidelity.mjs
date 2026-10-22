// Fidelity benchmark: original vs deployed EDS preview, same capture instrument (stitch-shot) both sides.
import fs from 'node:fs';
import { spawn } from 'node:child_process';
const PREVIEW = 'https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page';
const S = 'stardust/reports/screens';
const state = JSON.parse(fs.readFileSync('stardust/state.json', 'utf8'));
const run = (args) => new Promise((res) => { const c = spawn('node', args); let o = ''; c.stdout.on('data', (d) => { o += d; }); c.stderr.on('data', (d) => { o += d; }); c.on('close', (code) => res({ code, o })); });
const jsonOf = (o) => { const m = o.match(/\{[\s\S]*\}\s*$/); try { return m ? JSON.parse(m[0]) : null; } catch { return null; } };
fs.mkdirSync(`${S}/migrated`, { recursive: true }); fs.mkdirSync(`${S}/diff`, { recursive: true });
const jobs = [];
for (const p of state.pages) {
  const path = new URL(p.url).pathname;
  jobs.push({ slug: p.slug, w: 1440, url: PREVIEW + path, orig: `${S}/original/${p.slug}-1440.png`, origUrl: p.url });
  if (['home', 'school-life', 'learning-and-support-wellbeing'].includes(p.slug)) for (const w of [768, 390]) jobs.push({ slug: p.slug, w, url: PREVIEW + path, orig: `${S}/original/${p.slug}-${w}.png`, origUrl: p.url });
}
const out = [];
async function one(j) {
  const mig = `${S}/migrated/${j.slug}-${j.w}.png`;
  if (!fs.existsSync(j.orig)) await run(['stardust/scripts/replica/stitch-shot.mjs', j.origUrl, j.orig, '--width', String(j.w), '--settle']);
  const s = await run(['stardust/scripts/replica/stitch-shot.mjs', j.url, mig, '--width', String(j.w), '--settle']);
  if (s.code) { out.push({ ...j, error: s.o.slice(-300) }); return; }
  const px = await run(['stardust/scripts/replica/pixel-compare.mjs', j.orig, mig, '--out', `${S}/diff/${j.slug}-${j.w}.png`, '--json', '--threshold', '100']);
  const ss = await run(['stardust/.work/reskin/ssim.mjs', j.orig, mig, '--json']);
  const r = { slug: j.slug, w: j.w, url: j.url, pixel: jsonOf(px.o), ssim: jsonOf(ss.o) };
  out.push(r); console.log(j.slug, j.w, JSON.stringify({ px: r.pixel && (r.pixel.diffPct ?? r.pixel.pct ?? r.pixel), ssim: r.ssim }).slice(0, 300));
}
const q = [...jobs];
await Promise.all(Array.from({ length: 3 }, async () => { while (q.length) await one(q.shift()); }));
fs.writeFileSync('stardust/reports/fidelity.json', JSON.stringify(out, null, 2));
console.log('done', out.length);
