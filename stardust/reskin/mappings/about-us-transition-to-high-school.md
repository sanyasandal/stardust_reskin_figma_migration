# Mapping brief — about-us-transition-to-high-school

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-transition-to-high-school/content-model.json`, 5 slots, 2 images, text 3011/4030 (0.747), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-transition-to-high-school.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-transition-to-high-school.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-transition-to-high-school | s01 | h1 "Transition to high school" + 3 paras + 1 image + 1 link | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-transition-to-high-school | s02 | h2 "What to expect in high school" + h2 "Before your child starts at Fort Street " + h3 "Getting ready at home" + +2 headings + 8 paras + 24-item list + 10 links | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-transition-to-high-school | s03 | h2 "Year 7 orientation" + 4 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-transition-to-high-school | s04 | h2 "Have a question for us?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-transition-to-high-school | s05 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-transition-to-high-school | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-transition-to-high-school | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 5. Mapped: 5. New-module: 0. Carried-invisible: 0.
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

1. s03 is Year 7 orientation (`columns`, dark band) and takes M3 split.
2. s04 is a short off-white band and takes M4.
