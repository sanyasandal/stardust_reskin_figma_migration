# Mapping brief — our-community-foundation-tertiary-bursaries (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/foundation-tertiary-bursaries (type `content`).
Content model: `reskin/content-model/our-community-foundation-tertiary-bursaries/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 3 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-foundation-tertiary-bursaries.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 3/3 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| our-community-foundation-tertiary-bursaries | s01 | h1 "Fort Street Foundation Tertiary Bursary Application" + 1 more heading(s) + 3 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-foundation-tertiary-bursaries | s02 | h3 "How to Apply" + 4 more heading(s) + 8 para(s) + 7 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links (leading heading is h3 → heading role h3) | mapped |
| our-community-foundation-tertiary-bursaries | s03 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-foundation-tertiary-bursaries | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-foundation-tertiary-bursaries | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 has an h2 → M5 (not M1).
- s02 leading h3 → M5 heading role h3.
