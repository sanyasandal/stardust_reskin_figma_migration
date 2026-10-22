# Mapping brief — about-us-policies-and-reports-nsw-public-school-information

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-policies-and-reports-nsw-public-school-information/content-model.json`, 4 slots, 0 images, text 967/2040 (0.474), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-policies-and-reports-nsw-public-school-information.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-policies-and-reports-nsw-public-school-information.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-policies-and-reports-nsw-public-school-information | s01 | h1 "NSW public school information" + 1 paras + 1 link | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s02 | h2 "Understanding school policies" + 4 paras + 1 link | M5 (Block Content) | stack, h2 — source dark brand band (4 paragraphs → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s03 | h2 "Have a question?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s04 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-policies-and-reports-nsw-public-school-information | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 4. Mapped: 4. New-module: 0. Carried-invisible: 0.
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

1. s01 has no image: M1 `stack` hero.
2. The s02 dark band holds 4 paragraphs (442 chars), so it takes the M5 text band, not M4.
3. s03 is a short off-white band with a link and takes M4.
