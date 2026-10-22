# Mapping brief — our-community (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community (type `section`).
Content model: `reskin/content-model/our-community/content-model.json` (scope `main`, 4 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `school-life`. Normalize ledger: `reskin/normalize/our-community.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 4/4 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| our-community | s01 | h1 "Our Community" + 1 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community | s02 | 4 para(s) + 4 list item(s) + 4 image(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community | s03 | h2 "Have a question for our principal or teachers?" + 2 para(s) + 1 link(s) (source off-white band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community | s04 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Hub: scope `main`.
- s02 4 image cards → M2 2-up.
- s03 off-white question band → M4 light.
