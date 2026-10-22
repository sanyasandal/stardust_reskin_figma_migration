# Mapping brief — learning-and-support-careers (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/careers (type `content`).
Content model: `reskin/content-model/learning-and-support-careers/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 5 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-careers.mjs` — DEFAULT + N2 (back-to-top) + N4 (NSW carousel de-carousel: nav + pagination + aria-live removed, list un-transformed + wrapped, all items visible).
Mapped ratio: 4/5 (80%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| learning-and-support-careers | s01 | h1 "Careers" + 1 more heading(s) + 8 para(s) + 13 list item(s) + 1 image(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; the source h1 is followed by an empty h1 wrapping a picture — the image is carried in-flow | mapped |
| learning-and-support-careers | s02 | h2 "Careers Expo" + 2 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-careers | s03 | 8 para(s) + 8 list item(s) + 8 image(s) — source `gallery` | — (gallery) | no gallery/carousel in the kit; de-carouselled by N4 and rendered as an in-flow stack of figures on donor tokens | new-module |
| learning-and-support-careers | s04 | h2 "For more information" + 1 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-careers | s05 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-careers | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-careers | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- s01 has sub-headings → M5 (not M1).
- s01 source garbage: an empty `<h1>` whose only child is a picture. Carried as authored; stream-render's heading case emits text only, so the image is dropped (dom-equality images 8/9, slot-coverage 37/38) — renderer residual, needs-owner.
- s03 NSW carousel gallery → no kit module; N4 makes all 8 figures + captions visible, rendered as a stack.
