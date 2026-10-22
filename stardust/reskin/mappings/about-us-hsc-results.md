# Mapping brief — about-us-hsc-results

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-hsc-results/content-model.json`, 16 slots, 1 images, text 11578/12583 (0.92), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(1) > div:nth-child(3)!,main > div:nth-child(1) > div:nth-child(4)!,main > div:nth-child(1) > div:nth-child(5)!,main > div:nth-child(1) > div:nth-child(6)!,main > div:nth-child(1) > div:nth-child(7)!,main > div:nth-child(1) > div:nth-child(8)!,main > div:nth-child(1) > div:nth-child(9)!,main > div:nth-child(1) > div:nth-child(10)!,main > div:nth-child(1) > div:nth-child(11)!,main > div:nth-child(1) > div:nth-child(12)!,main > div:nth-child(1) > div:nth-child(13)!,main > div:nth-child(1) > div:nth-child(14)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-hsc-results.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-hsc-results.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-hsc-results | s01 | h1 "HSC results" + h2 "Dux of Fort Street 2025" + h2 "2025 Top All Rounders" + 6 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-hsc-results | s02 | table: 18 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s03 | h2 "Top Achievers (State Ranking)" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s04 | table: 10 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s05 | h2 "HSC Showcases" + h3 "Encore - Music" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s06 | table: 12 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s07 | h3 "Artexpress - Visual Art" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s08 | table: 2 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s09 | h3 "OnStage - Drama" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s10 | table: 20 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s11 | h3 "SHAPE - Design and Technology" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s12 | table: 3 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s13 | h3 "Science Extension" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s14 | table: 3 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s15 | h2 "HSC Distinguished Achievers" + h3 "129 students achieved a mark of 90 or ab" + 137 paras | M5 (Block Content) | stack, h2 — source dark brand band (8947 chars of names → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s16 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-hsc-results | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-hsc-results | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 16. Mapped: 9. New-module: 7. Carried-invisible: 0.
- **Mapped ratio: 56.2%** (bar ≥ 80%) — **BELOW BAR, needs owner sign-off**.
- New modules: s02 table, s04 table, s06 table, s08 table, s10 table, s12 table, s14 table.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. **Mapped ratio is 56%, below the 80% bar.** The cause is the 7 source tables (s02–s14, even slots), each an atomic table-wrapper. They use the content archetype's granted table new-module. Coarser scopes would hide them inside a mega-slot (section 1 holds 14 wrappers), which content-model.md § 3b rules out. Owner sign-off on the larger table share is needed.
2. In s01, the photo sits inside a `<p>` (renderer limit 1: it renders as an inline icon).
3. The lone h3 captions (s07/s09/s11/s13) take the M5 h3 role.
4. s15 is a source dark band of 8947 chars (the distinguished achievers name list). It takes the M5 text band.
