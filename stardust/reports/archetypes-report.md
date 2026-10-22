# Reskin archetypes — school-life (section) + learning-and-support-wellbeing (content)

Reskin skill, Phases 2–5 (a)–(d), for fortstreet-h.schools.nsw.gov.au → oneAZ v3.2 (Figma rsZQmpVzuyn0KhCDA3WN60 v2408265627482005963). Both pages are `prototyped` in state.json and recorded in `reskin/ledger.json` (`--stage prototype`). They are **not approved**, and canon-from-reskin, preflight, migrate and deploy were **not run**.

## Page types

| Slug | Source | Type (state.json) | Siblings |
|---|---|---|---|
| `home` | / | `landing` (pre-existing) | — |
| `school-life` | /school-life | **`section`** | /about-us, /learning-and-support, /our-community |
| `learning-and-support-wellbeing` | /learning-and-support/wellbeing | **`content`** | the other ~46 `page-template` pages |

Home was already typed `landing`, and `handoff.<type>` keys one archetype per type. So the section-index type is named `section`, not `landing`. The coordinator should confirm or rename this before approval.

## school-life

**Content capture:** scope `main`, 2 slots, 14 images, text 1501/2578 (0.582), h1 in scope.
- Normalize ledger: N-D1, N-D2 and N2 (back-to-top).
- The capturer's wrapper-scope warning is a false positive: the page really is a title plus one card grid.
- Outside `main`, as chrome deltas: D3 section sidebar and D4 breadcrumb.

| Slot | Content | Module | Layout |
|---|---|---|---|
| s01 | h1 "School life" | M5 Block Content | stack, heading h2 |
| s02 | 14 image link cards (source `card-container dark`) | M2 Teaser/Card | cards, 2 columns, heading h3 |
| c01/c02 | header / footer | M9 / M10 | shared `_chrome` |

Mapped ratio is 100%.

**Gates**

| Gate | Result |
|---|---|
| (a) dom-equality | **PASS**: text 1501/1501, images 14/14 |
| (a) slot-coverage | **PASS**: 57/57 |
| (b) donor-probe | **PASS**: 10/10, 5 button probes SKIP (no button in content) |
| (c) overflow | 0px at 1440 and at 360 |
| (d) figma join | PASS (s01→M5, s02→M2) |
| (d) figma geometry | FAIL, 1 of 1: s01 `.panel` 1132 vs 1180 (24px container inset, same as home s09) |
| (d) figma ramp | PASS 41/41 |
| (d) figma pixel | advisory: s01, s02 n/a (frame content differs); Lexia/Inter not served |
| (d) coverage | 1/7 text styles, 3 waived |

s02 is skipped in (d): the kit has no page-width card-grid frame.

**Residuals (all accepted):**
- `figma-geometry` (renderer): the panel inset described above.
- `figma-type` (font): Lexia and Inter are not served by the page.
- `design` (renderer): R1. The 14 single-item cards pair into 7 grey tiles of 2 bulleted items with icon-size thumbnails. No content is lost.

**Eyeball: pass.** Weakest point: the s02 card grid (R1). The header is raw, as on home.

**Renderer warnings:** none.

## learning-and-support-wellbeing

**Content capture:** 12 atomic `!` scopes (listed in `.work/reskin/wellbeing-scope.txt`), 2 images, text 14312/15260 (0.938), h1 in scope.
- Normalize ledger: N-D1, N-D2, N2, and **N3**, which opens every accordion. Without N3, collapsed panels hide 72% of the page text (4033 vs 14312 chars).

| Slot | Content | Module | Layout |
|---|---|---|---|
| s01 | h1 + lede + photo | M1 Home Hero Branded | split, light, display, bleed |
| s02 | h2/h3, paragraphs, list | M5 Block Content | stack, h2 |
| s03 | staff table | **— (new-module table)** | stack |
| s04 | h2 "Our Year Advisors" | M5 | stack, h2 |
| s05 | year-adviser table | **— (new-module table)** | stack |
| s06 | accordion ×2 (33 resource buttons) | M8 Accordion | stack |
| s07 | h2, paragraphs, list, framework image | M5 | stack, h2 |
| s08 | accordion ×4 | M8 | stack |
| s09 | h1 "Student Health" (second h1, carried) + paragraphs | M5 | stack, h2 |
| s10 | accordion ×2 | M8 | stack |
| s11 | dark band: h2 + paragraph + "Contact us" link | M4 CTA Banner | stack, light, h3, bleed |
| s12 | 2 image-less link cards | M2 | cards, 2 columns |
| c01/c02 | header / footer | M9 / M10 | shared `_chrome` |

Mapped ratio is 10/12 = 83%.

**Gates**

| Gate | Result |
|---|---|
| (a) dom-equality | **PASS**: text 14312/14312, images 2/2 |
| (a) slot-coverage | **PASS**: 83/83 |
| (b) donor-probe | **PASS**: 15/15 |
| (c) overflow | 0px at 1440 and at 360 |
| (d) figma join | PASS: 12 sections (10 modules, 2 new-module) |
| (d) figma geometry | FAIL, 5 of 11 (see below) |
| (d) figma ramp | FAIL, 29 of 143 (see below) |
| (d) figma pixel | advisory: n/a on all 10 joined sections (frame content differs; fonts not served) |
| (d) coverage | 18/33 text styles, 20 waived |
| (d) register | out-of-kit 2, conflict 7 |

Geometry failures:
- s02, s04, s07 and s09 panels measure 1132 vs 1180.
- s01 `.split-img` is unmeasurable. The hero image sits inside a `<p>`, so it renders as an inline icon.

Ramp failures:
- 15 come from the M8 accordion titles. They render as donor `.btn` (Inter 700 16/24, white) instead of Lexia 36/40 #830051.
- 14 come from body text at 18/28 against the kit's 16/24, a donor conflict as on home.

**Residuals (all accepted, no content loss):**
- `figma-geometry` (renderer): the panel inset and the hero image inside a paragraph.
- `figma-ramp` (renderer + donor conflict): the accordion titles and the 16/24 vs 18/28 body.
- `figma-type` (font).
- `design` (renderer): the tables render as paragraph stacks, and s12 falls back to a stack (R1).
- `figma-coverage` (source): the two tables are out of kit.

**Eyeball: pass.** Weakest point: the accordion titles and the `keyboard_arrow_down` ligature render as magenta buttons, the hero photo shows as an inline icon, and the tables are paragraph stacks. The M5 text bands and the CTA banner read as oneAZ.

**Renderer warning:** `s12: layout "cards" but no repeating run in the stream — rendered as a stack`.

**Fix iterations:**
- Content and design families: none needed (all PASS).
- Figma family: one iteration. The checks file had floor problems on the first run: the new-module s03 and s05 were not joined sections, and the closed-variant waiver sat outside the root. After fixing those, s08 t2 was replaced by a waiver, because the s08 panels hold only h3s and the kit's Block Element title has no h3 counterpart. Ramp went from 31 to 29 failures.

## Source blocks with no Figma module

The deploy must build these from donor tokens:
- **table**: 17 content pages, 2 tables on the archetype. Compose from type.body, palette.bodyFg/lightBandBg/headingFg, layout.columnGap and containerMaxWidth.
- **gallery**: 6 pages.
- **embed**: 4 pages.
- **facebook-feed**: 3 pages. Home removed it under N1.
- **planningreporting**: 1 page.
- **columns**: partly M3 (text + image only).
- **section sidebar nav and breadcrumb**: chrome outside `main`, deltas D3 and D4.

The **accordion** (15 pages) does have a kit module (M8), but stream-render has no disclosure layout. The deploy must build the M8 block: Lexia 36/40 plum title, chevron, 1px rule, Block Element panel.

These two archetypes contain no gallery, embed or facebook-feed blocks. Those blocks still need a rule or archetype before `migrate` reaches their pages.

## Shared files

- **curation-rules.json and donor-tokens.json: unchanged.** Home's donor-probe was re-run to a scratch report (`.work/reskin/home-donor-probe-recheck.md`) and still passes 15/15. Home's figma join still passes with 9 sections.
- **mapping.md**: `figma-gate` reads only the first slot table, and a multi-page brief must be one table with a `Page` column (mapping-brief.md § Entry schema). Home's table therefore gained a leading `Page` column (home's rows are otherwise unchanged), and the two pages' rows were appended to it. Their per-page briefs (stats, deltas, casing, judgment calls) follow below the table.
- **mapping.json**: `pages.school-life` and `pages.learning-and-support-wellbeing` were appended.
- **status.jsonl**: my 12:55–13:04 phase lines were lost to a concurrent rewrite of the file. They were re-logged at 13:17 with a detail note, and a stray unmatched `programmatic-render end` at 13:17:02 remains.
- **`flags[]`**: `coverage.absent` (radii.card, shadows.cardResting) is not in either page's `flags[]`. reskin-ledger has no command to set it, and home's `flags[]` is also empty.

## Skill findings for the owner

1. stream-render renders an image wrapped in `<p>` as a 1.6em inline icon. EDS default content always wraps images this way, so every content-page hero and figure is affected. Split layouts never pick such an image up.
2. stream-render has no accordion or table node or layout. Accordion titles become buttons and table cells become a paragraph stack.
3. reskin-ledger `residual` keys on the gate name: a second residual with the same `--gate` replaces the first.
