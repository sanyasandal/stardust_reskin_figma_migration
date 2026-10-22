# Mapping brief — contact-us (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/contact-us (type `content`).
Content model: `reskin/content-model/contact-us/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 8 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/contact-us.mjs` — DEFAULT + N2 (back-to-top) + N5 (Google Maps `.embed-wrapper` removed — third-party iframe; the Location map heading + address stay).
Mapped ratio: 8/8 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| contact-us | s01 | h1 "Contact us" + 2 para(s) + 5 list item(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| contact-us | s02 | h2 "Call, email or visit us" + 4 para(s) + 1 image(s) + 2 link(s) — source `columns` | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| contact-us | s03 | h2 "Location map" + 1 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; the map iframe is removed by N5, the heading + street address carry the content | mapped |
| contact-us | s04 | h2 "Check if you're in our local intake area" + 1 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s05 | h2 "Book a tour" + 4 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s06 | h2 "Need an interpreter?" + 2 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s07 | h2 "Have a concern or feedback?" + 2 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| contact-us | s08 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| contact-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| contact-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 → M1 (h1 + lede + contact list, no sub-headings).
- s03 Maps embed: dynamic third-party iframe, removed by normalize N5 on both sides (not content loss — address text kept).
- s08 2-item imageless cards: renderer warns `no repeating run` and renders a stack (as wellbeing s12).
