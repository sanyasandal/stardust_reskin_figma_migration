# Mapping brief — about-us-school-history-and-archives

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives/content-model.json`, 9 slots, 6 images, text 4964/6051 (0.82), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(1) > div:nth-child(3)!,main > div:nth-child(1) > div:nth-child(4)!,main > div:nth-child(1) > div:nth-child(5)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-school-history-and-archives | s01 | h1 "School history and archives" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us-school-history-and-archives | s02 | 1 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns` (text, image); source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-school-history-and-archives | s03 | 4 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s04 | 4 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns` (image first); source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-school-history-and-archives | s05 | 5 paras + 2 images | M5 (Block Content) | stack, h2 — 2 in-flow photos inside <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s06 | h2 "Fort Street Archives and Museum" + 4 paras + 9-item list + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s07 | h6 "Fort Street Cricket Team 1896" + 1 paras + 1 image | M5 (Block Content) | stack, h4 — photo + h6 caption; in-flow figure with its caption heading — smallest heading role (h4) | mapped |
| about-us-school-history-and-archives | s08 | h2 "For more information" + 1 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives | s09 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 9. Mapped: 9. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 is a lone h1, so it takes M5 h2.
2. s02/s04 are source `columns` (text plus photo) and take M3 split. In s04 the image comes first, so it renders media-first.
3. s07 is a photo plus an `h6` caption ("Fort Street Cricket Team 1896"). The h6 is carried verbatim and takes the M5 h4 role, the smallest heading role.
