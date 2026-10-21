// Block-library generator following excat block-library-creator (DA path), steps 1b–3.
// Writes blocks/<b>/metadata.json (if missing), content/library/blocks/<b>.plain.html, content/library/blocks.json.
import { chromium } from 'playwright';
import {
  readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, copyFileSync,
} from 'fs';
import { join, relative } from 'path';

const ROOT = process.cwd();
const ORG = 'sanyasandal';
const REPO = 'stardust-reskin-figma-migration';
const SKILL_REF = '/Users/ssandal/repos/EMA/aem-experience-catalyst/resources/plugins/aem-excat-plugin/excat-extended/excat-block-library/skills/block-library-creator/references';
const MAX_ROWS = 3;
const NOW = new Date().toISOString();

const BLOCKS = {
  hero: { name: 'Hero', purpose: 'page-intro', structure: 'image-row + heading-body-cta-row', desc: 'Page intro banner: a full-bleed image row, then a heading, intro copy and an optional CTA link.' },
  cards: { name: 'Cards', purpose: 'teaser-grid', structure: 'image-body repeating', desc: 'Grid of teaser cards: each row is an image cell plus a body cell (linked heading, copy).' },
  columns: { name: 'Columns', purpose: 'media-text-split', structure: 'media-text split', desc: 'Two-column split of media and text; each row is one panel pair.' },
  accordion: { name: 'Accordion', purpose: 'faq', structure: 'title-body-expandable', desc: 'Expandable panels: each row is a title cell and a body cell.' },
  table: { name: 'Table', purpose: 'data-table', structure: 'header-row + data-rows', desc: 'Data table; first row is the header unless the no-header variant is used.' },
  gallery: { name: 'Gallery', purpose: 'image-gallery', structure: 'image repeating', desc: 'Image gallery: one image per row, laid out as a grid.' },
  'content-container': { name: 'Content Container', purpose: 'boxed-content', structure: 'single-cell rich text', desc: 'Light-band container that boxes a run of rich text content.' },
  'facebook-feed': { name: 'Facebook Feed', purpose: 'social-embed', structure: 'single-cell link', desc: 'School Facebook feed panel driven by a single page link.' },
  planningreporting: { name: 'Planning and Reporting', purpose: 'document-links', structure: 'key-value config (reporttype, schoolcode)', desc: 'Config block (rows: reporttype = report | plan, schoolcode = NSW school code) that loads the school annual report or plan documents.' },
  embed: { name: 'Embed', purpose: 'video-map-embed', structure: 'single-cell link', desc: 'Privacy-friendly embed: a single Brightcove or Google Maps link, loaded on click.' },
  fragment: { name: 'Fragment', purpose: 'reuse', structure: 'single-cell link', desc: 'Includes another page (fragment) by path.' },
};
const VARIANT_LABELS = {
  list: 'list', horizontal: 'horizontal', dark: 'dark', 'off-white': 'off-white', 'quick-links': 'quick links', highlight: 'highlight', light: 'light', bordered: 'bordered', 'no-header': 'no header',
};
const SYNTH = {
  embed: '<div class="embed"><div><div><p><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3!2d151.152!3d-33.887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRm9ydCBTdHJlZXQgSGlnaCBTY2hvb2w!5e0!3m2!1sen!2sau!4v1">Fort Street High School location (Google Maps)</a></p></div></div></div>',
  fragment: '<div class="fragment"><div><div><p><a href="/footer">/footer</a></p></div></div></div>',
};

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return f === 'library' ? [] : walk(p);
  return p.endsWith('.html') && !/(nav|footer)\.html$/.test(p) ? [p] : [];
});
const pages = walk(join(ROOT, 'content')).sort();
const pageKey = (p) => relative(join(ROOT, 'content'), p).replace(/\.html$/, '');

const browser = await chromium.launch();
const page = await browser.newPage();
const usage = {}; // block -> { pages:Set, variants: Map(token -> sampleHTML) }

for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  const found = await page.evaluate(({ names, maxRows }) => {
    const out = [];
    document.querySelectorAll('main div[class]').forEach((el) => {
      const cls = [...el.classList];
      if (!names.includes(cls[0])) return;
      const c = el.cloneNode(true);
      [...c.children].slice(maxRows + (cls[0] === 'table' ? 1 : 0)).forEach((r) => r.remove());
      c.querySelectorAll('picture source').forEach((s) => s.remove());
      c.querySelectorAll('*').forEach((n) => {
        [...n.attributes].filter((a) => /^data-(aue|richtext)-/.test(a.name)).forEach((a) => n.removeAttribute(a.name));
      });
      c.querySelectorAll('img').forEach((img) => {
        img.setAttribute('src', cls[0] === 'hero' ? './images/placeholder-16x9.png' : './images/placeholder-4x3.png');
        if (!img.getAttribute('alt')) img.setAttribute('alt', 'Sample image');
        ['width', 'height', 'loading'].forEach((a) => img.removeAttribute(a));
      });
      if (cls[0] === 'cards') {
        [...c.children].forEach((row) => {
          const cell = row.children[0];
          if (row.children.length > 1 && cell && !cell.innerHTML.trim()) cell.innerHTML = '<picture><img src="./images/placeholder-4x3.png" alt="Sample image"></picture>';
        });
      }
      out.push({ block: cls[0], variant: cls.slice(1).join(' '), html: c.outerHTML });
    });
    return out;
  }, { names: Object.keys(BLOCKS), maxRows: MAX_ROWS });
  for (const f of found) {
    usage[f.block] ??= { pages: new Set(), variants: new Map() };
    usage[f.block].pages.add(pageKey(p));
    const prev = usage[f.block].variants.get(f.variant);
    // prefer the first instance that carries an image (more representative sample)
    if (!prev || (!prev.includes('<img') && f.html.includes('<img'))) usage[f.block].variants.set(f.variant, f.html);
  }
}
await browser.close();

// Step 1b — metadata.json (only where missing)
const createdMeta = [];
for (const [b, info] of Object.entries(BLOCKS)) {
  const mp = join(ROOT, 'blocks', b, 'metadata.json');
  if (existsSync(mp)) continue;
  const u = usage[b];
  const variants = u ? [...u.variants.keys()].filter(Boolean) : [];
  const meta = {
    variantName: b,
    baseBlock: b,
    version: '1.0.0',
    created: NOW,
    visualCharacteristics: { purpose: info.purpose, imagePattern: ['hero', 'cards', 'columns', 'gallery'].includes(b) ? 'image' : 'noimg' },
    contentPattern: { structure: info.structure },
    ...(variants.length ? { variants } : {}),
    ...(u ? { usage: { pagesUsing: [...u.pages], reuseCount: u.pages.size, lastUsed: NOW } } : {}),
  };
  writeFileSync(mp, `${JSON.stringify(meta, null, 2)}\n`);
  createdMeta.push(b);
}

// Step 2 — sample pages
const libDir = join(ROOT, 'content/library/blocks');
mkdirSync(join(libDir, 'images'), { recursive: true });
['placeholder-16x9.png', 'placeholder-4x3.png'].forEach((f) => copyFileSync(join(SKILL_REF, f), join(libDir, 'images', f)));

const section = (blockHtml, name, desc) => `<div>\n${blockHtml}\n<div class="library-metadata"><div><div>name</div><div>${name}</div></div><div><div>description</div><div>${desc}</div></div></div>\n</div>`;
const generated = [];
for (const [b, info] of Object.entries(BLOCKS)) {
  const u = usage[b];
  const entries = [];
  if (u) {
    const keys = [...u.variants.keys()].sort((x, y) => {
      if (x === '') return -1;
      if (y === '') return 1;
      return x.localeCompare(y);
    });
    if (!keys.includes('')) {
      // no default instance on any page: derive one from the first variant instance
      entries.push(['', u.variants.get(keys[0]).replace(/^<div class="[^"]*">/, `<div class="${b}">`)]);
    }
    keys.forEach((k) => entries.push([k, u.variants.get(k)]));
  } else if (SYNTH[b]) entries.push(['', SYNTH[b]]);
  if (!entries.length) {
    console.warn(`⚠️ Skipped ${b}: no usable reference page or structure`);
  } else {
    const body = entries.map(([v, h]) => {
      const label = v ? ` (${v.split(' ').map((t) => VARIANT_LABELS[t] || t).join(', ')})` : '';
      return section(h, `${info.name}${label}`, v ? `${info.desc} Variant: ${v}.` : info.desc);
    }).join('\n');
    writeFileSync(join(libDir, `${b}.plain.html`), `${body}\n`);
    generated.push({ b, name: info.name, n: entries.length, source: u ? 'reference page' : 'structure+JS' });
    console.log(`Generated content/library/blocks/${b}.plain.html (${entries.length} variants, ${u ? 'reference page' : 'structure+JS'})`);
  }
}

// Step 3 — blocks.json (once)
const data = generated.map(({ b, name }) => ({ name, path: `https://content.da.live/${ORG}/${REPO}/library/blocks/${b}` }))
  .sort((x, y) => x.name.localeCompare(y.name));
writeFileSync(join(ROOT, 'content/library/blocks.json'), `${JSON.stringify({
  total: data.length, offset: 0, limit: data.length, data, ':type': 'sheet',
}, null, 2)}\n`);
writeFileSync(join(ROOT, 'stardust/.work/library/generate-summary.json'), `${JSON.stringify({ createdMeta, generated }, null, 2)}\n`);
console.log(`metadata.json created: ${createdMeta.length} [${createdMeta.join(', ')}]; blocks.json entries: ${data.length}`);
