# DA Block Library — Fort Street High School

**Skill used:** `excat-block-library/skills/block-library-creator` (DA path), from `aem-experience-catalyst/resources/plugins/aem-excat-plugin/excat-extended/`.
**DA target:** `sanyasandal/stardust-reskin-figma-migration`. There is no `.migration/project.json`, so the skill defaulted to DA. The org and site are the known DA target and are not parsed from the git remote, whose repo name uses underscores.
**Open in DA:** https://da.live/#/sanyasandal/stardust-reskin-figma-migration. In any page, open **Library → Blocks**.

## Result

| Step (workflow-da.md) | Outcome |
|---|---|
| 0. Initialize | Project type is untagged, so the skill defaults to DA. The DA target is `sanyasandal/stardust-reskin-figma-migration`. |
| 0.4 Scope | The user was unavailable, so I chose: the 9 blocks used in content, plus `embed` and `fragment`. `header` and `footer` are page chrome. `widget` is unused and has no sample source. |
| 1b. metadata.json | **11 created** (`blocks/<b>/metadata.json`). None existed before. They use the block-variant-manager shape and contain only inferable fields. |
| 2. Sample HTML | **11 generated**: 9 from a reference page and 2 from structure + JS (embed, fragment). There are **19 variant sections** in total. |
| 3. blocks.json | 11 entries; `total`, `limit` and `data.length` are all 11. |
| 4. Upload | Placeholders 2/2 → 201. Samples 11/11 → 201. `library/blocks.json` → 201. |
| 5. Verify | `blocks.json` Source API response was 2xx (`stardust/.work/library/da-upload-source.json`). |
| 6. Config API | The first GET returned 404, so there was no config to merge. POST `library` → 201 (`Blocks` → `…/library/blocks.json`). A re-run did GET (200) → merge → POST (201); the sheets are unchanged (`library`). |
| Preview + render check | 11/11 previewed (200). Rendered at 1440: every block instance is `data-block-status=loaded`, every section has its `library-metadata`, and there are **0 broken images**. Screenshots are in `stardust/reports/screens/library/`. |

## Blocks in the library

| Block | Library sections (variants) | Source of sample | Pages using it |
|---|---|---|---|
| Accordion | default | reference page | 13 |
| Cards | default, dark, highlight, horizontal, list, off-white, quick-links | reference page | 52 |
| Columns | default, light | reference page | 33 |
| Content Container | default | reference page | 2 |
| Embed | default (Google Maps link) | structure + JS (`embed.js` link contract) | 0 (auto-blocked from links) |
| Facebook Feed | default | reference page | 3 |
| Fragment | default (`/footer`) | structure + JS | 0 |
| Gallery | default | reference page | 6 |
| Hero | default | reference page | 44 |
| Planning and Reporting | default (`reporttype`, `schoolcode` rows) | reference page | 1 |
| Table | default, bordered, no-header | reference page | 13 |

Sample pages: `https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/library/blocks/<block>`
Block index: `https://content.da.live/sanyasandal/stardust-reskin-figma-migration/library/blocks.json`

## How a sample is formed

1. `gen-library.mjs` opens every `content/**/*.html` page in headless Chromium. It finds each `main div[class]` whose first class is an in-scope block.
2. For each block and variant token, it keeps the first instance, but prefers an instance that has an image. The sample is the exact div-grid authors use: the block `<div class="block variant">`, a child `<div>` per row and a grandchild `<div>` per cell.
3. Clean-up:
   - rows are capped at 3 (table: header + 3)
   - `<source>` and `data-aue-*` attributes are stripped
   - every `<img>` is swapped for a placeholder: 16:9 for hero, 4:3 otherwise
   - empty card image cells get a 4:3 placeholder
4. Each variant becomes one section: the block, then `library-metadata` (`name`, `description`).

## Deviations from the skill

- **Sample pages were uploaded by this run, not by the user.** The skill hands this step to the excat app's DA upload, which isn't available in this environment. The run used the DA Source API instead:
  - the same `<body><header/><main>…</main><footer/></body>` wrapper as the 52 migrated pages
  - `./images/placeholder-*.png` rewritten to the uploaded `content.da.live/…/library/blocks/images/` copies
  - The local `content/library/blocks/*.plain.html` files keep the relative refs the skill specifies.
- **Reference pages are `content/<path>.html`, not `.plain.html`.** This project's converted content uses `.html` files. `usage.pagesUsing[]` holds paths without the extension.
- **Sample pages were previewed** on the `fortstreet` branch. The skill doesn't preview; this run did it to render-verify. Nothing was published.
- **Row cap of 3** per sample to keep library inserts short. The skill says to reuse the block "almost verbatim".

## Artifacts

- `stardust/.work/library/gen-library.mjs`: steps 1b–3
- `upload-library.mjs`: steps 4–6, plus sample upload and preview
- `verify-library.mjs`
- `generate-summary.json`, `upload-log.json`, `preview-log.json`, `verify-results.json`
- `da-upload-source.json`, `da-fetch-config.json`, `da-upload-config.json`
- `content/library/{blocks/*.plain.html, blocks/images/*, blocks.json, da-library-config.json}`, `blocks/*/metadata.json`
