# Sibling batch — about-us (14 pages)

Donor: oneAZ v3.2 (Figma). The pipeline for each page:
1. normalize ledger
2. capture-content
3. per-page mapping (`reskin/mappings/<slug>.{json,md}`)
4. stream-render `--localize-images`
5. pre-gates: dom-equality `--wait-until load`, slot-coverage, donor-probe `--model`

Templates: `about-us` (section) uses `school-life`; the 13 content pages use `learning-and-support-wellbeing`. No shared files were written and git was not used. Helpers are in `stardust/.work/reskin/siblings/about-us/` and logs in `stardust/.work/reskin/bg/au-gate-*.log`.

Normalize keys:
- **D**: DEFAULT (N-D1, N-D2).
- **N2**: back-to-top removed.
- **N3**: accordions all-open (wellbeing code verbatim).
- **N1**: live `.facebook-feed` removed (home N1 verbatim); the heading and paragraph stay.
- **N4 (new)**: `main .embed-wrapper` removed. The embed block turns an authored Brightcove link into a lazily injected third-party iframe, with 0 text and 0 images at capture. The intro text stays.
- **N5 (new)**: `main .planningreporting-wrapper` removed. This is authored config (`reporttype` plus `schoolcode` 8504); the PDF lists are fetched at runtime from reports.sparo.schools.nsw.gov.au. The headings and paragraphs stay.
- **N6 (new)**: the NSW gallery `.nsw-carousel` is made static. All slides become visible, and the controls, dots and aria-live are removed. Without N6 the timed `visibility:hidden` rotation made capture nondeterministic: the same page gave 1500 and then 3135 gallery chars.

| slug | type | slots | mapped % | normalize added | dom-eq text (a/b) | dom-eq images (a/b) | slot-coverage | donor-probe | renderer warnings | residual cause → suggested verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| about-us | section | 2 | 100% (2/2) | D, N2 | 878/878 | 7/7 | 37/37 PASS | 10/10 PASS (5 skip) | — | Scope `main` gave 1 mega-slot. I re-scoped it to `1>1!,1>2!` (title + 7-card M2 grid) to match the school-life anatomy → **accepted** |
| about-us-enrol | content | 8 | 100% (8/8) | D, N2, N3, **N4** | 5887/5887 | 1/1 | 33/33 PASS | 15/15 PASS | s08 cards: no repeating run | Video embed removed by N4. The s01 hero has no image (M1 stack) → **accepted** |
| about-us-facilities-and-resources | content | 5 | 80% (4/5; s03 gallery) | D, N2, N3, **N6** | 2298/2298 | 14/14 | 51/51 PASS | 10/10 PASS (5 skip) | s05 cards: no repeating run | s03 is a gallery new-module (the kit has no carousel; the archetype report lists gallery as pending a rule). s04 has a second h1, "Hiring our facilities", carried verbatim (flagged, not fixed) → **accepted**, owner to confirm the gallery rule |
| about-us-hsc-results | content | 16 | **56% (9/16; 7 tables)** | D, N2, N3 | 11578/11578 | 1/1 | 33/33 PASS | 10/10 PASS (5 skip) | s16 cards: no repeating run | Below the 80% bar only because of the 7 atomic table slots (the granted table new-module). The s01 image is inside a `<p>`, so it renders inline (known limit) → **needs-owner** (sign off on the table share) |
| about-us-our-principal-and-staff | content | 17 | **70.6% (12/17; 5 tables)** | D, N2, N3 | 6083/6083 | 2/2 | 42/42 PASS | 10/10 PASS (5 skip) | s17 cards: no repeating run | Below the 80% bar only because of the 5 table slots (granted table new-module) → **needs-owner** (sign off on the table share) |
| about-us-policies-and-reports | content | 8 | 100% (8/8) | D, N2, N3, **N5** | 5742/5742 | 1/1 | 34/34 PASS | 15/15 PASS | s08 cards: no repeating run | The annual report and plan PDF widgets were removed by N5; the deploy must re-render them from the authored config → **accepted**, owner to confirm N5 |
| about-us-policies-and-reports-nsw-public-school-information | content | 4 | 100% (4/4) | D, N2, N3 | 967/967 | 0/0 | 22/22 PASS | 10/10 PASS (5 skip) | s04 cards: no repeating run | — → **accepted** |
| about-us-school-history-and-archives | content | 9 | 100% (9/9) | D, N2, N3 | 4964/4964 | 6/6 | 38/38 PASS | 10/10 PASS (5 skip) | s09 cards: no repeating run | The s07 h6 caption is carried verbatim (M5 h4 role) → **accepted** |
| about-us-school-history-and-archives-fort-street-archives | content | 3 | 100% (3/3) | D, N2, N3 | 4287/4287 | 3/3 | 40/40 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | The h1 and the article (6 h2s, 3 photos) share one wrapper, so the page takes the M5 text column with no M1 hero → **accepted** |
| about-us-school-history-and-archives-the-fort-street-museum | content | 3 | 100% (3/3) | D, N2, N3 | 2419/2419 | 2/2 | 24/24 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | Same shape as the archives page (M5, no hero) → **accepted** |
| about-us-school-history-and-archives-the-fortian-digitised | content | 4 | 100% (4/4) | D, N2, N3 | 7667/7667 | 1/1 | 235/235 PASS | 15/15 PASS | s04 cards: no repeating run | 13 decade accordions with 213 links, opened by N3 (M8) → **accepted** |
| about-us-stories-and-highlights | content | 6 | 83% (5/6; s02 gallery) | D, N2, N3, **N1**, **N6** | 12120/12120 | 21/21 | 65/65 PASS | 10/10 PASS (5 skip) | s06 cards: no repeating run | s02 is a gallery new-module (21 slides). The Facebook feed was removed by N1 → **accepted**, owner to confirm the gallery rule |
| about-us-transition-to-high-school | content | 5 | 100% (5/5) | D, N2, N3 | 3011/3011 | 2/2 | 36/36 PASS | 10/10 PASS (5 skip) | s05 cards: no repeating run | — → **accepted** |
| about-us-why-choose-us | content | 10 | 100% (10/10) | D, N2, N3, **N4** | 4329/4329 | 6/6 | 43/43 PASS | 10/10 PASS (5 skip) | s10 cards: no repeating run | Video embed removed by N4 (s03 keeps its h2) → **accepted** |

Totals:
- 14/14 rendered.
- dom-equality 14/14 PASS, with 100% text and image parity.
- slot-coverage 14/14 PASS.
- donor-probe 14/14 PASS.

Notes
- **Card warning (R1).** The "no repeating run" warning on every content page is R1. It comes from the trailing image-less `card-container` (2 items, or 4 on principal s17), which renders as a stack. This is the same accepted residual as wellbeing s12.
- **Capture race.** The live site sometimes renders lazy sections after `domcontentloaded`. Symptoms were empty ordered streams and scope chars greater than body chars. I re-captured those pages with `--wait-until load`, and dom-equality ran with `--wait-until load` on all pages. That flag only affects navigation; the scope and normalize ledger are unchanged.
- **donor-probe needs `--model`.** The first donor-probe pass ran without `--model`, and 11 pages FAILED 10/15 because `main .btn` matched nothing. Re-run with `--model` (as the siblings do), the button probes SKIP on button-less pages and all pass.
- **Long dark bands.** Dark brand bands over about 400 chars or with lists take M5 (enrol s04, hsc s15, nsw-psi s02, why s02). Short ones with a single link take M4.
- **Second h1s.** facilities-and-resources s04 carries a second h1. It is carried verbatim, not fixed.
- **Proposed shared rules.** N4 (embed), N5 (planningreporting) and N6 (nsw-carousel) are candidates for promotion to shared rules, since other batches are likely to contain the same widgets.
