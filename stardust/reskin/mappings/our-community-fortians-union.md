# Mapping brief — our-community-fortians-union (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/fortians-union (type `content`).
Content model: `reskin/content-model/our-community-fortians-union/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 4 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-fortians-union.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 4/4 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| our-community-fortians-union | s01 | h1 "The Fortians Union" + 5 para(s) + 3 list item(s) + 1 link(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| our-community-fortians-union | s02 | h2 "Faber Est" + 2 more heading(s) + 5 para(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-fortians-union | s03 | h2 "Keep in Touch" + 2 list item(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); two contact links as a list on the dark band | mapped |
| our-community-fortians-union | s04 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-fortians-union | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-fortians-union | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 → M1 (h1 + paragraphs + list, no sub-headings).
- s03 `Keep in Touch` list on brand-dark → M4 light.
