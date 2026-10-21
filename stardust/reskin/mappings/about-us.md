# Mapping brief — about-us

Template (archetype): `school-life`. Content model: `reskin/content-model/about-us/content-model.json`, 2 slots, 7 images, text 878/1157 (0.759), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!`.
Normalize: `reskin/normalize/about-us.mjs`, entries N-D1, N-D2, N2. Mapping: `reskin/mappings/about-us.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us | s01 | h1 "About us" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us | s02 | 7 list items, 7 images, 7 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — source `card-container` (image cards); repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 2. Mapped: 2. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. Scope `main` gave 1 mega-slot (the h1 and the card grid share one source section), and the capturer warned of a wrapper-scope smell. Re-scoped to the section's two wrappers (`1>1!`, `1>2!`), which gives the archetype's anatomy: title, then card grid.
2. The 7 source image cards (`card-container`) take M2 at 2 columns, as school-life (7 is not a multiple of 3).
