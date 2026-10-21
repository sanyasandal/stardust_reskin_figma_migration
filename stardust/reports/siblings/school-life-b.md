# Sibling batch — school-life-b (12 pages)

Donor: oneAZ v3.2 (Figma). The pipeline for each page:
1. normalize ledger
2. capture-content (atomic `!` scope per section wrapper, as wellbeing)
3. per-page mapping (`reskin/mappings/<slug>.{json,md}`, template `learning-and-support-wellbeing`)
4. stream-render `--localize-images`
5. pre-gates: dom-equality (using the waitUntil recorded in the model's provenance), slot-coverage, donor-probe `--model`

No shared files were written and git was not used. Helpers are in `stardust/.work/reskin/siblings/school-life-b/`.

Normalize keys:
- **D**: DEFAULT (N-D1, N-D2).
- **N2**: back-to-top removed.
- **N3**: accordions all-open (wellbeing code verbatim).
- **N4 (new, travel-to-school)**: the embed wrapper is emptied. It holds the client-side Google Maps iframe plus the JS-injected "Skip Google Map" link and `#after-map` anchor. The authored cell is only a maps URL. The wrapper is emptied rather than removed so the nth-child scopes stay stable. The "Location map" heading and address stay.
- **N5 (new, uniform + duke-of-edinburgh-award)**: the NSW `.nsw-carousel` is de-carouselled. Every slide is forced visible and static, because the carousel sets `visibility:hidden` on the contents of off-page slides. The numbered dot/prev/next nav buttons are removed; they are chrome text ("1 2 3…"). The default N-D2 doesn't cover this carousel.

| slug | type | slots | mapped % | normalize added | dom-eq text (a/b) | dom-eq images (a/b) | slot-coverage | donor-probe | renderer warnings | residual cause → suggested verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-academic-competitions | content | 3 | 100% (3/3) | D, N2, N3 | 7371/7371 | 1/1 | 22/22 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-clubs-and-committees | content | 3 | 100% (3/3) | D, N2, N3 | 4334/4334 | 1/1 | 22/22 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | content | 3 | 100% (3/3) | D, N2, N3 | 2646/2646 | 1/1 | 22/22 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | content | 3 | 100% (3/3) | D, N2, N3 | 1270/1270 | 1/1 | 22/22 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | content | 13 | 85% (11/13; s09 gallery, s11 table) | D, N2, N3, **N5** | 5346/5346 | 13/13 | 57/57 PASS | 15/15 PASS | s13 cards: no repeating run | Captured with `--wait-until load` because the slow source isn't "appeared" at domcontentloaded. N5 is a new ledger entry → **accepted**, owner to confirm N5 |
| school-life-student-opportunities-and-activities-instrumental-music-program | content | 9 | 100% (9/9) | D, N2, N3 | 7941/7941 | 2/2 | 36/36 PASS | 10/10 PASS (5 skip) | s09 cards: no repeating run | Fixed in one iteration: re-captured with `--wait-until load`. Before that, the gate's source pass landed before the hero picture appeared (text 7884/7941, images 1/2) → **accepted** |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | content | 3 | 100% (3/3) | D, N2, N3 | 1318/1318 | 1/1 | 22/22 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-sport | content | 5 | 80% (4/5; s02 table) | D, N2, N3 | 2282/2282 | 1/1 | 24/24 PASS | 10/10 PASS (5 skip) | s05 cards: no repeating run | — |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | content | 6 | 100% (6/6) | D, N2, N3 | 4509/4509 | 1/1 | 24/24 PASS | 15/15 PASS | s06 cards: no repeating run | — |
| school-life-travel-to-school | content | 15 | 87% (13/15; s09, s10 tables) | D, N2, N3, **N4** | 7732/7732 | 3/3 | 60/60 PASS | 10/10 PASS (5 skip) | s15 cards: no repeating run | The Google Map is not carried over; the map URL is the only authored content in the embed. The address and School Finder link remain → **accepted**, owner to confirm N4 (an embed/map module would be a canon decision) |
| school-life-uniform | content | 6 | 83% (5/6; s03 gallery) | D, N2, N3, **N5** | 6469/6469 | 11/11 | 47/47 PASS | 15/15 PASS | s06 cards: no repeating run | Captured with `--wait-until load` (first capture had a 268-char body because the page wasn't "appeared" yet) → **accepted**, owner to confirm N5 |
| school-life-uniform-uniform-shop | content | 9 | **33% (3/9; s02–s07 price tables)** | D, N2, N3 | 5285/5285 | 1/1 | 27/27 PASS | 10/10 PASS (5 skip) | s09 cards: no repeating run | Far below the 80% mapped bar. Six of the nine slots are Girls/Boys/… price tables, and the kit has no table module, so they are token-composed stacks like wellbeing s03/s05. Dom-equality was fixed in one iteration by re-capturing with `--wait-until load` (before: text 5193/5285, images 0/1 for the same appearance race) → **needs-owner**: either accept the token-composed tables or add a table module in canon |

Totals:
- 12/12 rendered.
- dom-equality 12/12 PASS. Text and image parity is 100% on all 12.
- slot-coverage 12/12 PASS.
- donor-probe 12/12 PASS. On the 9 pages with no accordion or button in content, the 5 button probes are SKIP via `--model` (same as school-life/school-life-a).
- Mapped % ≥80% on 11/12; uniform-shop is at 33% (needs-owner).

Notes
- **Renderer limit R1 on every page.** The M2 card-container slot (link list: title, body and `east` glyph, with no images) finds no repeating run and renders as a stack. This is the same as wellbeing s12 and the archetypes-report R1. Duke s06 (3 image tiles, M2 ×3) did find a run.
- **The source is slow.** At `domcontentloaded` plus a 2s settle, some pages are captured before the body "appears" (hero picture or main sections still hidden). The documented fix, `--wait-until load`, was used on duke, uniform, instrumental and uniform-shop. Dom-equality reads the waitUntil from each model's provenance, so the source and model passes are consistent. Uniform-shop passed on the first gate run and failed on the second with an identical model, so the race is intermittent. The 8 pages still at `domcontentloaded` passed twice; re-capturing them with `load` would make them robust.
- **First-run donor-probe fails.** The first gate run omitted `--model`, so 9 pages failed on 3 `main .btn` assertions. The fix was to add `--model` (documented in the donor-probe header); no mapping change was needed.
- **Judgment calls** (details are in each `mappings/<slug>.md`):
  - The first slot (h1 plus the whole body in one wrapper) is M5 with an h2 heading rather than an M1 hero, because these pages have no hero imagery.
  - Long dark bands with no CTA (instrumental s02, leadership s03) are M5; dark bands with a CTA are M4 light/bleed.
