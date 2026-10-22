# Sibling batch — learning-community (12 pages)

Donor: oneAZ v3.2 (Figma). Pipeline per page: normalize ledger → capture-content → per-page mapping (`reskin/mappings/<slug>.{json,md}`) → stream-render → pre-gates (dom-equality, slot-coverage, donor-probe `--model`). No shared files written; no git.

Normalize keys: **D** = DEFAULT, **N2** back-to-top removed, **N3** accordions all-open (wellbeing code verbatim), **N4** NSW-carousel de-carousel (nav/pagination/aria-live removed, list un-transformed + wrapped, every item visible), **N5** Google Maps `.embed-wrapper` removed (heading + address kept).

| slug | type | slots | mapped % | normalize added | dom-eq text (a/b) | dom-eq images (a/b) | slot-coverage | donor-probe | renderer warnings | residual cause → suggested verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| contact-us | content | 8 | 100% (8/8) | D, N2, N5 | 1944/1944 | 1/1 | 31/31 PASS | 10/10 PASS (5 skip) | s08 cards: no repeating run (2 items) | — |
| learning-and-support | section | 2 | 100% (2/2) | D, N2 | 529/529 | 4/4 | 28/28 PASS | 10/10 PASS (5 skip) | — (capture wrapper-scope warning: false positive, as school-life) | — |
| learning-and-support-additional-learning-support | content | 9 | 100% (9/9) | D, N2, N3 | 11330/11330 | 2/2 | 32/32 PASS | 15/15 PASS | s09 cards: no repeating run | — |
| learning-and-support-careers | content | 5 | 80% (4/5; s03 gallery) | D, N2, N4 | 3878/3878 | **8/9 FAIL** | **37/38 FAIL** | 10/10 PASS (5 skip) | s05 cards: no repeating run | s01 source has an empty `<h1>` whose only child is a picture; stream-render's `heading` case emits text only and drops child images. No mapping/normalize fix (content, not dynamic). → **needs-owner** (renderer must emit heading child media, or owner accepts the authored-garbage h1 as a delta) |
| learning-and-support-high-potential-and-gifted-education | content | 8 | 88% (7/8; s06 gallery) | D, N2, N3, N4 | 4574/4574 | 5/5 | 38/38 PASS | 15/15 PASS | s08 cards: no repeating run | — |
| learning-and-support-learning | content | 9 | 100% (9/9) | D, N2, N3 | 21557/21557 | 1/1 | 46/46 PASS | 15/15 PASS | s09 cards: no repeating run | — |
| our-community | section | 4 | 100% (4/4) | D, N2 | 1192/1192 | 4/4 | 33/33 PASS | 10/10 PASS (5 skip) | s04 cards: no repeating run | — |
| our-community-alumni | content | 3 | 100% (3/3) | D, N2 | 5932/5932 | 1/1 | 24/24 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| our-community-fortians-union | content | 4 | 100% (4/4) | D, N2 | 1539/1539 | 0/0 | 25/25 PASS | 10/10 PASS (5 skip) | s04 cards: no repeating run | — |
| our-community-foundation | content | 6 | 83% (5/6; s03 table) | D, N2 | 5427/5427 | **4/5 FAIL** | **36/37 FAIL** (paint 4/5) | 10/10 PASS (5 skip) | s06 cards: no repeating run; 6/7 images localized (the 7th is `about:error`) | s01 source defect: authored `<img src="about:error" title="Library_donation_1" loading="lazy">` (present in `.plain.html`). Source counts it visible (lazy predicate); render emits a non-lazy inline `img.icon` that never paints. Flag-don't-fix. → **needs-owner** (author removes/fixes the image, or owner records a gate delta for a broken source asset) |
| our-community-foundation-tertiary-bursaries | content | 3 | 100% (3/3) | D, N2 | 2195/2195 | 0/0 | 25/25 PASS | 10/10 PASS (5 skip) | s03 cards: no repeating run | — |
| our-community-pandc | content | 11 | 82% (9/11; s04, s06 tables) | D, N2, N3 | 6512/6512 | 1/1 | 51/51 PASS | **14/15 FAIL** (overflow @360 = 154px) | s11 cards: no repeating run | s02 link text is a bare 57-char URL (`subscribe.entertainment.com.au/fundraiser/…`), unbreakable at 360px (`a.link` 470px wide). Renderer CSS wraps only `.heading` (`overflow-wrap: break-word`), not body links; every layout keeps the same text, so no mapping fix exists and content may not be rewritten. → **needs-owner** (renderer: `overflow-wrap: anywhere` on `.site-main` text/links) |

Totals: 12/12 rendered; dom-equality 10/12 PASS; slot-coverage 10/12 PASS; donor-probe 11/12 PASS. Text parity 100% on all 12.

Notes
- Button probes (`main .btn`) SKIP where the model has no buttons — donor-probe run with `--model`.
- "no repeating run" is the expected 2-item imageless card container fallback to stack (as wellbeing s12); not a residual.
- Careers capture was re-run once (first run caught sections still loading: ratio 1.324, orderedVerified false); the second capture is clean (orderedVerified true on every slot).
- Galleries (careers s03, HPGE s06) and tables (foundation s03, pandc s04/s06) are token-composed stacks with no kit module, as wellbeing's tables.
- Fix iterations used: none applied to gates (pandc overflow investigated, no mapping-level lever; careers/foundation causes are renderer/source, outside mapping/normalize scope).
