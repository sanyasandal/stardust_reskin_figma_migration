# Mapping brief — learning-and-support-additional-learning-support (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/additional-learning-support (type `content`).
Content model: `reskin/content-model/learning-and-support-additional-learning-support/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-additional-learning-support.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open, wellbeing code verbatim).
Mapped ratio: 9/9 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| learning-and-support-additional-learning-support | s01 | h1 "Additional learning support" + 1 para(s) + 1 image(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-additional-learning-support | s02 | h2 "Learning Support at Fort Street" + 1 more heading(s) + 6 para(s) + 16 list item(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-additional-learning-support | s03 | h2 "Contact" + 5 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-additional-learning-support | s04 | h2 "Homework and the Study Centre" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-additional-learning-support | s05 | 2 para(s) + 1 image(s) + 1 link(s) — source `columns` | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| learning-and-support-additional-learning-support | s06 | h2 "What is the Study Centre?" + 3 more heading(s) + 34 para(s) + 23 list item(s) + 1 link(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-additional-learning-support | s07 | 2 para(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); a two-paragraph quote on the dark band, no heading/action — carried as a light band | mapped |
| learning-and-support-additional-learning-support | s08 | h2 "Have a question about learning support?" + 2 para(s) + 1 link(s) (source off-white band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-additional-learning-support | s09 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-additional-learning-support | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-additional-learning-support | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s04 lone h2 is the title of the s05 columns block — kept as its own M5 slot (source order).
- s07 testimonial quote on brand-dark → M4 light per the dark-band rule, though it has no CTA.
- s08 off-white band → M4 light.
