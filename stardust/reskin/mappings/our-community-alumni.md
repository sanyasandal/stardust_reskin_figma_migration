# Mapping brief — our-community-alumni (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/alumni (type `content`).
Content model: `reskin/content-model/our-community-alumni/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 3 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-alumni.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 3/3 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| our-community-alumni | s01 | h1 "Alumni" + 3 more heading(s) + 9 para(s) + 20 list item(s) + 1 image(s) + 2 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; long body with sub-headings and an in-flow photo | mapped |
| our-community-alumni | s02 | h2 "Share your story" + 2 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community-alumni | s03 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-alumni | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-alumni | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 has sub-headings → M5 (not M1).
