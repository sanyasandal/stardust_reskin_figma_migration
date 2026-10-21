// Block-library upload (excat block-library-creator DA path, steps 4–6) + sample-page upload/preview.
// Token read from ~/.aem/da-token.json; never printed.
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const ORG = 'sanyasandal';
const REPO = 'stardust-reskin-figma-migration';
const BRANCH = 'fortstreet';
const DA = 'https://admin.da.live';
const HLX = 'https://admin.hlx.page';
const CONTENT = `https://content.da.live/${ORG}/${REPO}`;
const ROOT = process.cwd();
const LIB = join(ROOT, 'content/library');
const OUT = join(ROOT, 'stardust/.work/library');
const { access_token: TOKEN, expires_at: EXP } = JSON.parse(readFileSync(join(homedir(), '.aem/da-token.json'), 'utf8'));
if (!TOKEN || EXP < Date.now() + 60000) { console.error('DA token missing/expired'); process.exit(3); }
const auth = { Authorization: `Bearer ${TOKEN}` };
const log = [];

async function src(path, blob) {
  const fd = new FormData();
  fd.append('data', blob);
  const res = await fetch(`${DA}/source/${ORG}/${REPO}/${path}`, { method: 'POST', headers: auth, body: fd });
  const body = await res.text();
  log.push({ step: 'source', path, status: res.status, body: body.slice(0, 400) });
  console.log(`${res.ok ? '✓' : '✗'} source ${path} ${res.status}`);
  return { status: res.status, body };
}

// images
for (const f of readdirSync(join(LIB, 'blocks/images'))) {
  await src(`library/blocks/images/${f}`, new Blob([readFileSync(join(LIB, 'blocks/images', f))], { type: 'image/png' }));
}

// sample pages (normally user-uploaded via the excat app; that app is not present here)
const samples = readdirSync(join(LIB, 'blocks')).filter((f) => f.endsWith('.plain.html')).sort();
for (const f of samples) {
  const name = f.replace('.plain.html', '');
  const inner = readFileSync(join(LIB, 'blocks', f), 'utf8').replaceAll('./images/', `${CONTENT}/library/blocks/images/`);
  const doc = `<body>\n  <header></header>\n  <main>\n${inner}  </main>\n  <footer></footer>\n</body>\n`;
  await src(`library/blocks/${name}.html`, new Blob([doc], { type: 'text/html' }));
}

// Step 4.3 — blocks.json
const bj = await src('library/blocks.json', new Blob([readFileSync(join(LIB, 'blocks.json'))], { type: 'application/json' }));
writeFileSync(join(OUT, 'da-upload-source.json'), bj.body);

// preview the sample pages (preview only, no publish)
for (const f of samples) {
  const p = `library/blocks/${f.replace('.plain.html', '')}`;
  const res = await fetch(`${HLX}/preview/${ORG}/${REPO}/${BRANCH}/${p}`, { method: 'POST', headers: auth });
  log.push({ step: 'preview', path: p, status: res.status });
  console.log(`${res.ok ? '✓' : '✗'} preview /${p} ${res.status}`);
}

// Step 5 — verify
if (!(bj.status >= 200 && bj.status < 300)) { console.error('blocks.json upload failed — not configuring library'); writeFileSync(join(OUT, 'upload-log.json'), JSON.stringify(log, null, 2)); process.exit(1); }

// Step 6 — Config API: GET → merge → POST (POST is full replace)
const blocksRow = { title: 'Blocks', path: `${CONTENT}/library/blocks.json` };
const g = await fetch(`${DA}/config/${ORG}/${REPO}/`, { headers: auth });
const gBody = await g.text();
writeFileSync(join(OUT, 'da-fetch-config.json'), gBody);
console.log(`config GET ${g.status}`);
let cfg;
if (g.ok) {
  cfg = JSON.parse(gBody);
  if (cfg[':type'] !== 'multi-sheet') {
    // single sheet → wrap as "data" sheet
    const { ':type': _t, ...sheet } = cfg;
    cfg = { data: sheet, ':names': ['data'], ':type': 'multi-sheet' };
  }
  const lib = cfg.library || { total: 0, offset: 0, limit: 0, data: [] };
  const i = lib.data.findIndex((r) => r.title === 'Blocks');
  if (i >= 0) lib.data[i] = { ...lib.data[i], ...blocksRow }; else lib.data.push(blocksRow);
  lib.total = lib.data.length; lib.limit = lib.data.length; lib.offset ??= 0;
  cfg.library = lib;
  cfg[':names'] = [...new Set([...(cfg[':names'] || []), 'library'])];
} else if (g.status === 404) {
  cfg = { library: { total: 1, offset: 0, limit: 1, data: [blocksRow] }, ':names': ['library'], ':type': 'multi-sheet' };
} else {
  console.error(`config GET ${g.status} — skipping POST (manual fallback)`);
  writeFileSync(join(OUT, 'upload-log.json'), JSON.stringify(log, null, 2));
  process.exit(2);
}
writeFileSync(join(LIB, 'da-library-config.json'), `${JSON.stringify(cfg, null, 2)}\n`);
const fd = new FormData();
fd.append('config', JSON.stringify(cfg));
const pr = await fetch(`${DA}/config/${ORG}/${REPO}/`, { method: 'POST', headers: auth, body: fd });
const prBody = await pr.text();
writeFileSync(join(OUT, 'da-upload-config.json'), prBody);
log.push({ step: 'config', status: pr.status, sheetsBefore: g.ok ? JSON.parse(gBody)[':names'] : null, sheetsAfter: cfg[':names'] });
console.log(`config POST ${pr.status}; sheets: ${cfg[':names'].join(', ')}`);
writeFileSync(join(OUT, 'upload-log.json'), JSON.stringify(log, null, 2));
