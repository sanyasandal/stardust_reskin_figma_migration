# Mapping brief — about-us-enrol

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-enrol/content-model.json`, 8 slots, 1 images, text 5887/6886 (0.855), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-enrol.mjs`, entries N-D1, N-D2, N2, N3, N4. Mapping: `reskin/mappings/about-us-enrol.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-enrol | s01 | h1 "Application and enrolment information" + 4 paras | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-enrol | s02 | accordion ×3 (3102 chars, 6 links) | M8 (Accordion) | stack; stacked disclosure rows: title + chevron, body (N3 all-open) — as wellbeing s06/s08/s10 | mapped |
| about-us-enrol | s03 | h2 "Visit us before you enrol" + 1 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-enrol | s04 | h2 "Open Days" + h4 "Monday March 2, 2026 - 4pm - 6pm" + h4 "Wednesday May 27 – School tours – 9.30am" + +1 headings + 9 paras + 1 link | M5 (Block Content) | stack, h2 — source dark brand band (long: 4 h4 dates + 1054 chars → text band, not a CTA banner); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s05 | h2 "Orientation Days" + 2 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s06 | 1 paras | M5 (Block Content) | stack, h2 — intro line of the removed video embed (N4); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s07 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-enrol | s08 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-enrol | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-enrol | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 8. Mapped: 8. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N4** — `main .embed-wrapper` removed: the embed block consumes an authored Brightcove link (`https://bcove.video/…`) and lazily injects a third-party player iframe; 0 text chars and 0 images at capture. The intro text stays; the deploy re-embeds the video from the authored link.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 has no image: it takes M1 with the media column dropped (`stack`), as the page hero. This is a judgment call, because the archetype hero has a photo.
2. The s04 source dark band holds 1054 chars (Open Days, 3 h4 dates). That is too long for the M4 anatomy (short heading, body, single action), so it takes the M5 text band.
3. s06 is the intro line of the video embed removed by N4. It is carried as an M5 text band.
4. The s07 source dark band takes the light M4 CTA banner, as wellbeing s11.
