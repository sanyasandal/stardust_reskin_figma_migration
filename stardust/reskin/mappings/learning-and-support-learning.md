# Mapping brief — learning-and-support-learning (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/learning (type `content`).
Content model: `reskin/content-model/learning-and-support-learning/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-learning.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open).
Mapped ratio: 9/9 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| learning-and-support-learning | s01 | h1 "Learning" + 4 para(s) + 1 image(s) + 1 link(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-learning | s02 | h2 "Why choose us for your child’s learning?" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s03 | 4 para(s) + 4 list item(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-learning | s04 | h2 "What students learn" + 3 para(s) + 2 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s05 | h2 "Stage 4: Years 7 and 8" + 28 more heading(s) + 65 para(s) + 83 list item(s) + 12 link(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-learning | s06 | h2 "Our learning approach" + 3 para(s) + 4 list item(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s07 | h2 "Helping students progress" + 2 para(s) + 8 list item(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s08 | 2 para(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); two-paragraph quote on the dark band | mapped |
| learning-and-support-learning | s09 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-learning | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-learning | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s03 4 link cards (no images) → M2 2-up.
- s05 large accordion (Stage 4–6 subject panels, 29 headings) → M8, all panels open via N3.
- s08 testimonial on brand-dark → M4 light.
