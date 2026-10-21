# Mapping brief — about-us-our-principal-and-staff

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-our-principal-and-staff/content-model.json`, 17 slots, 2 images, text 6083/7100 (0.857), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(2)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(2)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(2)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(2)!,main > div:nth-child(8) > div:nth-child(1)!,main > div:nth-child(8) > div:nth-child(2)!,main > div:nth-child(9) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(2)!,main > div:nth-child(10) > div:nth-child(1)!,main > div:nth-child(11) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-our-principal-and-staff.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-our-principal-and-staff.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-our-principal-and-staff | s01 | h1 "Our principal and staff" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us-our-principal-and-staff | s02 | h2 "Welcome from our principal" + 10 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-our-principal-and-staff | s03 | h2 "School Staff for 2025" + 3 paras + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s04 | h2 "Senior Executive" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s05 | table: 6 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s06 | h2 "Our executive team" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s07 | table: 22 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s08 | h2 "Our Year Advisors" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s09 | table: 21 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s10 | h3 "Our teachers make the difference" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-our-principal-and-staff | s11 | 4 list items, no images, 4 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — 4 image-less cards; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-our-principal-and-staff | s12 | h2 "Wellbeing and support staff" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s13 | table: 10 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s14 | h2 "Administrative and operations staff" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s15 | table: 26 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s16 | h2 "Have a question for our principal or tea" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-our-principal-and-staff | s17 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-our-principal-and-staff | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-our-principal-and-staff | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 17. Mapped: 12. New-module: 5. Carried-invisible: 0.
- **Mapped ratio: 70.6%** (bar ≥ 80%) — **BELOW BAR, needs owner sign-off**.
- New modules: s05 table, s07 table, s09 table, s13 table, s15 table.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. **Mapped ratio is 70.6%, below the 80% bar.** The cause is the 5 source tables (s05, s07, s09, s13, s15) under the granted table new-module. Owner sign-off is needed, as for hsc-results.
2. s01 is a lone h1, so it takes M5 h2, as school-life s01.
3. s02 is the principal's welcome (`columns`, dark band). It takes M3 split.
4. s11 has 4 image-less cards, which take M2 at 2 columns.
5. s16 is a source off-white band (short heading, body, "Contact us") and takes the light M4 banner.
