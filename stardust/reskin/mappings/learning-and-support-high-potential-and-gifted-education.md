# Mapping brief — learning-and-support-high-potential-and-gifted-education (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/high-potential-and-gifted-education (type `content`).
Content model: `reskin/content-model/learning-and-support-high-potential-and-gifted-education/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 8 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-high-potential-and-gifted-education.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open) + N4 (NSW carousel de-carousel).
Mapped ratio: 7/8 (88%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| learning-and-support-high-potential-and-gifted-education | s01 | h1 "Inspire – High potential and gifted education" + 2 para(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-high-potential-and-gifted-education | s02 | h2 "Why choose us for your high potential or gifted child?" + 1 image(s) | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split; lone h2 + image → split (heading column + media) | mapped |
| learning-and-support-high-potential-and-gifted-education | s03 | 3 para(s) + 11 list item(s) (source off-white band) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; off-white band of paragraphs + two lists — long body text, so the text column rather than a CTA banner | mapped |
| learning-and-support-high-potential-and-gifted-education | s04 | h2 "What is high potential and gifted education?" + 1 more heading(s) + 3 para(s) + 3 list item(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-high-potential-and-gifted-education | s05 | 10 list item(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-high-potential-and-gifted-education | s06 | 4 para(s) + 4 list item(s) + 4 image(s) — source `gallery` | — (gallery) | no gallery/carousel in the kit; de-carouselled by N4 and rendered as an in-flow stack of figures on donor tokens | new-module |
| learning-and-support-high-potential-and-gifted-education | s07 | h2 "Help for your high potential child" + 2 para(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-high-potential-and-gifted-education | s08 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-high-potential-and-gifted-education | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-high-potential-and-gifted-education | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s02 lone h2 + image → M3 split.
- s03 off-white band holds long list text — M5, not M4 (no banner anatomy).
- s06 carousel gallery → stack via N4, no module.
