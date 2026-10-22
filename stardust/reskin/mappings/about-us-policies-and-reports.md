# Mapping brief — about-us-policies-and-reports

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-policies-and-reports/content-model.json`, 8 slots, 1 images, text 5742/6786 (0.846), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(2)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-policies-and-reports.mjs`, entries N-D1, N-D2, N2, N3, N5. Mapping: `reskin/mappings/about-us-policies-and-reports.json`, with chrome copied from `mapping.json`.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| about-us-policies-and-reports | s01 | h1 "Our policies and reports" + 2 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-policies-and-reports | s02 | h2 "Annual school report" + 2 paras + 4-item list | M5 (Block Content) | stack, h2 — report widget removed (N5); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s03 | h2 "School excellence plan" + 5 paras + 1 link | M5 (Block Content) | stack, h2 — plan widget removed (N5); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s04 | h2 "School behaviour support and management " + 2 paras + 1 link | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s05 | h2 "School policies" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s06 | accordion ×3 (3123 chars, 6 links) | M8 (Accordion) | stack; stacked disclosure rows: title + chevron, body (N3 all-open) — as wellbeing s06/s08/s10 | mapped |
| about-us-policies-and-reports | s07 | h2 "Have a question about a policy or a repo" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-policies-and-reports | s08 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-policies-and-reports | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-policies-and-reports | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

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
- **N5** — `main .planningreporting-wrapper` removed (×2): authored config only (`reporttype` report|plan, `schoolcode` 8504) rendered client-side as PDF links fetched from reports.sparo.schools.nsw.gov.au. The headings and paragraphs stay; the deploy re-renders the widget from the authored config.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s02/s03 keep their headings and paragraphs. The PDF report lists are removed under N5 (dynamic API widget).
2. s06 is 3 policy accordions and takes M8.
