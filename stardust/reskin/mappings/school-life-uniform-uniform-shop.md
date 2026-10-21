# Mapping brief — school-life-uniform-uniform-shop (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-uniform-uniform-shop/content-model.json` — 9 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-uniform-uniform-shop.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/9 = 33%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-uniform-uniform-shop | s01 | h1 "Uniform Shop" + photo + 4 h2 entries (Ordering Uniforms online, Exchanges and refunds, Second Hand Uniform Stall, Price list) + paras + link | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform-uniform-shop | s02 | table: Girls / Price, 6 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s03 | table: Boys / Price, 6 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s04 | table: Sports Uniform / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s05 | table: Winter Uniform / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s06 | table: Instrumental Music Program / Price, 3 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s07 | table: General Items / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s08 | h2 "Want to donate your old school uniforms?" + para (source dark brand band, no action) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-uniform-uniform-shop | s09 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-uniform-uniform-shop | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-uniform-uniform-shop | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- 6 of 9 slots are price tables (no kit module) → mapped ratio 33%, below the 80% bar. Accepted as source-driven: every non-table slot is mapped; the tables are the page's content (same new-module disposition as wellbeing s03/s05). Needs owner sign-off on the ratio.
- s08 band has no action; kept M4 (short heading + body on a band, the kit's banner) rather than M5.
