# Mapping brief — about-us-stories-and-highlights

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-stories-and-highlights/content-model.json`, 6 slots, 21 images, text 12120/13136 (0.923), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-stories-and-highlights.mjs`, entries N-D1, N-D2, N2, N3, N1, N6. Mapping: `reskin/mappings/about-us-stories-and-highlights.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-stories-and-highlights | s01 | h1 "Stories and highlights" + h2 "A year at our school" + 1 paras | M1 (Home Hero Branded) | stack, light, display, bleed — h2 "A year at our school" introduces the gallery; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-stories-and-highlights | s02 | 21 list items, 21 images (source `gallery`) | — (gallery) | stack, no module — source `gallery` (nsw-carousel, 21 slides); no gallery/carousel in the kit; new-module gallery composed from donor tokens (type.body caption, palette.bodyFg, layout.columnGap, layout.containerMaxWidth) — slides rendered statically in DOM order (N6) | new-module |
| about-us-stories-and-highlights | s03 | 4 paras | M5 (Block Content) | stack, h2 — source off-white band (testimonial quote, no heading → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-stories-and-highlights | s04 | h2 "Discover more highlights" + 1 paras | M5 (Block Content) | stack, h2 — Facebook feed removed (N1), as home s09; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-stories-and-highlights | s05 | h2 "Have a story to share?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-stories-and-highlights | s06 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-stories-and-highlights | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-stories-and-highlights | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 6. Mapped: 5. New-module: 1. Carried-invisible: 0.
- **Mapped ratio: 83.3%** (bar ≥ 80%).
- New modules: s02 gallery.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N1** — `main .facebook-feed`, `.facebook-feed-wrapper` removed: live third-party Facebook posts (dynamic surface, as home N1). The "Discover more highlights" heading and paragraph stay.
- **N6** — NSW gallery carousel (`.nsw-carousel`, not in the default N-D2 list) de-carouselled: every slide made visible and static, controls / dot navigation / aria-live removed. The carousel hides off-screen slides with `visibility:hidden` on a timer, so two captures of the same page gave 1500 and 3135 gallery chars.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 (h1, lede, h2 "A year at our school", no image) takes the M1 `stack` hero.
2. s02 is the gallery (21 slides, 11187 chars, de-carouselled by N6). It is a new-module (stack), as on facilities-and-resources.
3. s03 is an off-white testimonial with no heading and takes the M5 text band.
4. s04: the Facebook feed is removed by N1 and the heading and paragraph remain. It takes M5, as home s09.
