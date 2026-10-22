# Sibling batch — school-life-a (11 pages)

Donor: oneAZ v3.2 (Figma). The pipeline for each page:
1. normalize ledger
2. capture-content
3. per-page mapping (`reskin/mappings/<slug>.{json,md}`, template `learning-and-support-wellbeing`)
4. stream-render
5. pre-gates: dom-equality, slot-coverage, donor-probe `--model`

No shared files were written and git was not used. Helpers are in `stardust/.work/reskin/siblings/school-life-a/`.

Normalize keys:
- **D**: DEFAULT (N-D1, N-D2).
- **N2**: back-to-top removed.
- **N3**: accordions all-open (wellbeing code verbatim).
- **N1**: live `.facebook-feed` removed (home N1 verbatim); the section heading stays.
- **N4 (new)**: empty headings whose only content is an image are unwrapped. Example: `<h2 id=""><picture>…</picture></h2>` becomes a bare picture. This changes 0 text chars.

| slug | type | slots | mapped % | normalize added | dom-eq text (a/b) | dom-eq images (a/b) | slot-coverage | donor-probe | renderer warnings | residual cause → suggested verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| school-life-bell-times | content | 5 | 100% (5/5) | D, N2, N3 | 4535/4535 | 1/1 | 30/30 PASS | 10/10 PASS (5 skip) | s05 cards: no repeating run (2 items) | — |
| school-life-bring-your-own-device | content | 6 | 100% (6/6) | D, N2, N3 | 4536/4536 | 1/1 | 26/26 PASS | 10/10 PASS (5 skip) | s06 cards: no repeating run | — |
| school-life-canteen | content | 6 | 100% (6/6) | D, N2, N3 | 2330/2330 | 2/2 | 30/30 PASS | 10/10 PASS (5 skip) | s06 cards: no repeating run | — |
| school-life-events | content | 9 | 89% (8/9; s03 table) | D, N2, N3, **N1** | 3996/3996 | 15/15 | 58/58 PASS | 10/10 PASS (5 skip) | s09 cards: no repeating run; s05 (14 events, M2 ×3) is a partial run: the first events are 3-up cards and the rest are a stack, because one event has extra paragraphs | s05 partial card run is a renderer findRepeat limit; all text and images are present → **accepted** |
| school-life-forms | content | 4 | **75% (3/4; s02 table)** | D, N2, N3 | 1220/1220 | 0/0 | 24/24 PASS | 10/10 PASS (5 skip) | s04 cards: no repeating run | Below the 80% mapped bar. The only unmapped slot is the forms table (form link + description per row), which is a token-composed table under the archetype rule → **needs-owner** (accept it, or remap s02 to M7 Links) |
| school-life-house-and-merit-system | content | 7 | 100% (7/7) | D, N2, N3 | 4663/4663 | 6/6 | 35/35 PASS | 10/10 PASS (5 skip) | s07 cards: no repeating run | — |
| school-life-lockers-and-lost-property | content | 5 | 80% (4/5; s02 table) | D, N2, N3 | 2543/2543 | 1/1 | 24/24 PASS | 10/10 PASS (5 skip) | s05 cards: no repeating run | — |
| school-life-newsletters | content | 7 | 100% (7/7) | D, N2, N3, **N1** | 2465/2465 | **1/0 FAIL** | 46/46 PASS (`--paint warn`: s02 image never paints) | 15/15 PASS | s07 cards: no repeating run; 2/3 images localized (the 3rd is `about:error`) | Source defect in s02: authored `<img src="about:error" alt="">` is present in `.plain.html`. The source theme gives the broken image a box, so it counts as visible. The render's inline `img.icon` has no alt, so it collapses to 0×0. Flag, don't fix (same case as our-community-foundation) → **needs-owner** (author fixes the image in DA, or owner records a gate delta) |
| school-life-parent-portal | content | 8 | 100% (8/8) | D, N2, N3, **N4** | 2657/2657 | 2/2 | 38/38 PASS | 10/10 PASS (5 skip) | s08 cards: no repeating run | Fixed by N4 in one iteration (before N4: images 2/0, slot-coverage 34/36). → **accepted**, owner to confirm N4 (see notes) |
| school-life-stationery | content | 3 | 100% (3/3) | D, N2, N3, **N4** | 724/724 | 1/1 | 21/21 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | Fixed by N4 (before N4: images 1/0, slot-coverage 19/20) → **accepted**, owner to confirm N4. Capture ratio 0.412 is low because the page is short, not because content is missing. |
| school-life-student-opportunities-and-activities | content | 7 | 86% (6/7; s03 table) | D, N2, N3 | 4428/4428 | 4/4 | 31/31 PASS (`--paint warn`: s04 image never paints) | 15/15 PASS | s07 cards: no repeating run; 5/6 images localized (the 6th is `about:error`) | Source defect in s04: authored `<img src="about:error" alt="students sitting outside a historical building">`. It is visible on both sides (the alt gives it a box) but never paints → **needs-owner** (fix the image in DA) |

Totals:
- 11/11 rendered.
- dom-equality 10/11 PASS. Text parity is 100% on all 11.
- slot-coverage 11/11 PASS (2 with `--paint warn` for source `about:error` images).
- donor-probe 11/11 PASS.

Notes
- **N4 differs from the learning-community verdict.** learning-community left the careers case (an empty `<h1>` holding a picture) as needs-owner. This batch applied a normalize-ledger fix instead.
  - Why it is safe: the heading has 0 text, so unwrapping it changes no visible text and drops no image. Before N4, stream-render's `heading` case emitted only text, so the image was silently lost.
  - Confirmed in `.plain.html`: stationery has `<h2 id=""><picture>`, and parent-portal s03/s05 have the app logos inside empty `h3`s.
  - The owner should confirm N4 as a shared rule, or revert it to a renderer fix (emit a heading's child media).
- Events was recaptured and gated with `--wait-until load`. At `domcontentloaded`, the source's card/default-content decoration raced: the `east` glyphs and block separators varied between loads, giving source text 3985/3986 against 3996 rendered. At `load`, text matched 3996/3996 deterministically.
- student-opportunities-and-activities was also captured and gated at `load`. At `domcontentloaded`, the lazy EDS sections were still hidden (body ratio 1.9 and 2.98, s04–s07 not verified).
- The button probes (`main .btn`) SKIP where the model has no buttons, because donor-probe runs with `--model`.
- "no repeating run" is the expected stack fallback for a 2-item image-less card container (R1, as wellbeing s12). It is not a residual.
- Tables are token-composed stacks with no kit module, as wellbeing's tables: events s03, forms s02, lockers s02, SOA s03.
- Judgment calls on heroes:
  - s01 maps to the M1 hero when it has no sub-headings.
  - lockers s01 has sub-headings, so it maps to M5.
  - SOA s01 (with 9 list items and 3 posters inside `<p>`) and events s01 (with a 9-item list) are long M1 heroes; the owner may prefer M5.
- Fix iterations used:
  - dom-equality/slot-coverage: one (events `load` recapture; N4 on parent-portal and stationery).
  - donor-probe: one (re-run with `--model`).
