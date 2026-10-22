# Mapping brief — about-us-why-choose-us

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-why-choose-us/content-model.json`, 10 slots, 6 images, text 4329/4356 (0.994), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(8) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(1)!,main > div:nth-child(10) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-why-choose-us.mjs`, entries N-D1, N-D2, N2, N3, N4. Mapping: `reskin/mappings/about-us-why-choose-us.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-why-choose-us | s01 | h1 "Why choose us?" + 3 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-why-choose-us | s02 | h2 "Our vision" + 3 paras + 5-item list | M5 (Block Content) | stack, h2 — source dark brand band (922 chars + list → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s03 | h2 "Take a virtual tour with our Student Lea" | M5 (Block Content) | stack, h2 — lone h2; its video embed removed (N4); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s04 | 3 paras + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s05 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-why-choose-us | s06 | h2 "What families value about Fort Street" | M5 (Block Content) | stack, h2 — lone h2 introducing the cards; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s07 | 4 list items, 4 images, 4 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — 4 image cards; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-why-choose-us | s08 | 3 paras | M5 (Block Content) | stack, h2 — source off-white band (testimonial quote → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s09 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-why-choose-us | s10 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-why-choose-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-why-choose-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 10. Mapped: 10. New-module: 0. Carried-invisible: 0.
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

1. s02 is the "Our vision" dark band (922 chars plus a list) and takes the M5 text band.
2. s03 is a lone h2. Its video embed is removed by N4 and the h2 takes M5.
3. s07 has 4 image cards and takes M2 at 2 columns.
4. s08 is an off-white testimonial and takes the M5 text band.
5. s05/s09 are "Ready to apply?" bands (off-white and dark) and both take M4. The repeated text is source content, carried verbatim.
