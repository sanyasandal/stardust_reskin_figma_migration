# Mapping brief — about-us-facilities-and-resources

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-facilities-and-resources/content-model.json`, 5 slots, 14 images, text 2298/3316 (0.693), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(2)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-facilities-and-resources.mjs`, entries N-D1, N-D2, N2, N3, N6. Mapping: `reskin/mappings/about-us-facilities-and-resources.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-facilities-and-resources | s01 | h1 "Facilities and resources" + 1 paras | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-facilities-and-resources | s02 | h2 "Our school facilities" + h2 "Resources and technology" + 2 paras + 10-item list | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-facilities-and-resources | s03 | 13 list items, 13 images (source `gallery`) | — (gallery) | stack, no module — source `gallery` (nsw-carousel, 13 slides); no gallery/carousel in the kit; new-module gallery composed from donor tokens (type.body caption, palette.bodyFg, layout.columnGap, layout.containerMaxWidth) — slides rendered statically in DOM order (N6) | new-module |
| about-us-facilities-and-resources | s04 | h1 "Hiring our facilities" + 3 paras + 1 image + 2 links | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; second h1 on the page carried; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-facilities-and-resources | s05 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-facilities-and-resources | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-facilities-and-resources | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 5. Mapped: 4. New-module: 1. Carried-invisible: 0.
- **Mapped ratio: 80.0%** (bar ≥ 80%).
- New modules: s03 gallery.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N6** — NSW gallery carousel (`.nsw-carousel`, not in the default N-D2 list) de-carouselled: every slide made visible and static, controls / dot navigation / aria-live removed. The carousel hides off-screen slides with `visibility:hidden` on a timer, so two captures of the same page gave 1500 and 3135 gallery chars.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 has no image: M1 `stack` hero.
2. s03 is the gallery (13 slides, de-carouselled by N6). The kit has no gallery or carousel, so it is a new-module (stack). The archetypes report lists gallery as pending a rule.
3. s04 is a source `columns` block in a dark band, with a second h1 "Hiring our facilities". The h1 is carried verbatim (flag, don't fix). It takes M3 split; the donor surface wins over the dark band.
