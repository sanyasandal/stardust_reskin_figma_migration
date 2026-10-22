# Mapping brief — our-community-foundation (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/foundation (type `content`).
Content model: `reskin/content-model/our-community-foundation/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 6 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-foundation.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 5/6 (83%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| our-community-foundation | s01 | h1 "The Fort Street Foundation" + 4 more heading(s) + 18 para(s) + 14 list item(s) + 4 image(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; long body with sub-headings and in-flow photos (one source `<img src="about:error">` is authored garbage) | mapped |
| our-community-foundation | s02 | 1 para(s) + 1 image(s) — source `columns` (source off-white band) | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| our-community-foundation | s03 | 19 para(s) — source `table` | — (table) | no table in the kit; composed from donor tokens (type.body, palette.bodyFg, palette.lightBandBg row rules, layout.columnGap) as wellbeing s03/s05 | new-module |
| our-community-foundation | s04 | h2 "Minutes" + 1 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-foundation | s05 | h2 "Reunions" + 2 para(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community-foundation | s06 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-foundation | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-foundation | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 has sub-headings → M5 (not M1).
- s01 source defect: `<img src="about:error" title="Library_donation_1" loading="lazy">` is authored in the document (visible in .plain.html). Carried as authored; the source counts it visible (lazy), the render emits a non-lazy inline `img.icon` that does not paint → dom-equality images 4/5, slot-coverage 36/37. Flag, not fixed — needs-owner (author fix or recorded gate delta).
- s03 table → token-composed (as wellbeing).
