// Runs the reskin sibling gate (handoff.md § Sibling gate) on migrate's output for each page.
import fs from 'node:fs';
import { spawn } from 'node:child_process';
const state = JSON.parse(fs.readFileSync('stardust/state.json', 'utf8'));
const only = process.argv.slice(2);
const pages = state.pages.filter((p) => !only.length || only.includes(p.slug));
const run = (args, log) => new Promise((res) => {
  const c = spawn('node', args, { stdio: ['ignore', 'pipe', 'pipe'] });
  let out = ''; c.stdout.on('data', (d) => { out += d; }); c.stderr.on('data', (d) => { out += d; });
  c.on('close', (code) => { fs.appendFileSync(log, `$ node ${args.join(' ')}\n${out}\nexit ${code}\n\n`); res(code); });
});
const results = {};
async function gate(p) {
  const meta = JSON.parse(fs.readFileSync(`stardust/migrated/${p.slug === 'home' ? '' : p.url.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '') + '/'}_meta.json`, 'utf8'));
  const html = `stardust/migrated/${meta.outputPath}`;
  const model = `stardust/reskin/content-model/${p.slug}/content-model.json`;
  const cm = JSON.parse(fs.readFileSync(model, 'utf8'));
  const scope = cm.scope.map((s) => s.sel + (s.whole ? '!' : '')).join(',');
  const dir = `stardust/reskin/gates/${p.slug}/migrated`; fs.mkdirSync(dir, { recursive: true });
  const log = `${dir}/run.log`; fs.writeFileSync(log, '');
  const norm = `stardust/reskin/normalize/${p.slug}.mjs`;
  const r = {};
  r.dom = await run(['stardust/scripts/reskin/dom-equality.mjs', '--source', p.url, '--source-scope', scope, ...(fs.existsSync(norm) ? ['--normalize', norm] : []), '--rendered', html, '--rendered-scope', 'main', '--wait-until', 'load', '--report', `${dir}/dom-equality.md`], log);
  r.slot = await run(['stardust/scripts/reskin/slot-coverage.mjs', '--model', model, '--rendered', html, '--rendered-scope', 'main', '--report', `${dir}/slot-coverage.md`], log);
  r.probe = await run(['stardust/scripts/reskin/donor-probe.mjs', '--tokens', 'stardust/reskin/donor-tokens.json', '--rendered', html, '--model', model, '--report', `${dir}/donor-probe.md`], log);
  results[p.slug] = r; console.log(p.slug, JSON.stringify(r));
}
const q = [...pages]; const N = 4;
await Promise.all(Array.from({ length: N }, async () => { while (q.length) await gate(q.shift()); }));
fs.writeFileSync('stardust/.work/reskin/migrated-gates.json', JSON.stringify(results, null, 2));
console.log('done', Object.keys(results).length);
