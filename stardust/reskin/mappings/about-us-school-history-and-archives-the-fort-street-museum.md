# Mapping brief — about-us-school-history-and-archives-the-fort-street-museum

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives-the-fort-street-museum/content-model.json`, 3 slots, 2 images, text 2419/3528 (0.686), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives-the-fort-street-museum.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives-the-fort-street-museum.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-school-history-and-archives-the-fort-street-museum | s01 | h1 "The Fort Street Museum" + h2 "The Ron Horan Museum" + h3 "Who is Ron Horan and why is there a muse" + 7 paras + 2 images | M5 (Block Content) | stack, h2 — long article under the h1 (2072 chars, h2/h3, 2 in-flow photos) → text column, not a hero; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | s02 | h2 "For more information" + 1 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | s03 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives-the-fort-street-museum | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 3. Mapped: 3. New-module: 0. Carried-invisible: 0.
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

1. s01 is the h1 plus a 2072-char article. It takes M5, as the archives page does.
2. s02 is a dark band with a single contact link and takes M4.
