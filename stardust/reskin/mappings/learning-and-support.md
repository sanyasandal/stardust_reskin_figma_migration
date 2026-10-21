# Mapping brief — learning-and-support (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support (type `section`).
Content model: `reskin/content-model/learning-and-support/content-model.json` (scope `main`, 2 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `school-life`. Normalize ledger: `reskin/normalize/learning-and-support.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 2/2 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| learning-and-support | s01 | h1 "Learning and support" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support | s02 | 4 para(s) + 4 list item(s) + 4 image(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Hub: scope `main`. capture-content warns the 2-slot wrapper scope (96% in one slot) — false positive, same as school-life (title + one card grid).
- s02 → M2 2-up (source sidebar card grid, as school-life s02).
