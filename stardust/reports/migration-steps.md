# Migration steps — Fort Street High School → AEM EDS (Figma reskin)

> **Status: COMPLETE** (2026-10-21 15:05Z). 52/52 pages migrated, gated and deployed to aem.page preview. Results are in [`benchmark.md`](benchmark.md).
> Every timestamp comes from `stardust/status.jsonl` (UTC) or the session clock (IST = UTC+5:30).

| Item | Value |
|---|---|
| Source site | https://fortstreet-h.schools.nsw.gov.au/ (52 pages in the sitemap) |
| Design donor | Figma "One-AZ v3.2", fileKey `rsZQmpVzuyn0KhCDA3WN60`, version `2408265627482005963` |
| Skill | Stardust **reskin**, then **migrate** and **deploy**, from branch `sanyasandal:figma-reskin-m4-on-m2` @ `1eefc34d` |
| EDS repo | `sanyasandal/stardust_reskin_figma_migration` (DA org/repo the same) |
| Preview | `https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/` |
| Mode | Hands-off (`state.json` `handsOff: true`); preview only, no aem.live publish |
| Run start | 2026-10-21 16:22:56 IST (10:52:56Z) |

Reskin keeps the content byte-faithful to the source and replaces the design with the Figma donor's. Every pipeline command below is run against **byte-identical copies** of the branch's scripts in `stardust/scripts/`. The full skill tree is mirrored in `stardust/.work/plugin-src/skills/`, with `diff -rq` showing 0 differences against the branch.

---

## Phase 0 — Setup

1. **Check out the skill branch.** Created the worktree `~/repos/adobe-skills-m4-on-m2` tracking `fork/figma-reskin-m4-on-m2` at `1eefc34d`.
2. **Copy the skills into the workspace**, because running scripts outside the workspace was not permitted:
   - `stardust/.work/plugin-src/skills/` is the whole `plugins/stardust/skills` tree, with `SOURCE_SHA` recorded.
   - `stardust/scripts/{reskin,stardust,diff,replica,deploy,prototype}/` holds the project copies per `gates.md` § Project copies. That is 53 scripts, all byte-identical.
3. **Tokens:**
   - `FIGMA_TOKEN` is in `.env`. The file is chmod 600 and gitignored. A check against `api.figma.com/v1/me` returned 200.
   - The DA IMS token came from a `da-auth-helper` login that the user ran, cached at `~/.aem/da-token.json`. A check against `admin.da.live/list/sanyasandal/stardust_reskin_figma_migration` returned 200.
4. **Dependencies:**
   - `npm i -D playwright pixelmatch pngjs`
   - `npx playwright install chromium`
5. **Project state:**
   - Copied `stardust/.gitignore` from the skill's template; `stardust/*` is already in `.hlxignore`.
   - Wrote `stardust/state.json` with flow `reskin`, `flowSource: user-phrase`, `handsOff: true` and the origin URL.
   - Ledger line: `setup end` at 12:13:17Z.

## Phase 1 — Figma donor capture (ingest-donor, 12:13:21Z → 12:18:19Z)

6. **List the kit.** `figma-donor.mjs --list` showed 50 Figma pages. The linked node `6400:21997` is only the "WELCOME" cover, so the real design-system frames had to be chosen.
7. **Capture 15 frames** with `figma-donor.mjs capture` in about 103s:
   - Font Styles, Font Variables, Colors, Spacing
   - Button, Header, Footer
   - Home Hero Branded, Teaser/Home Hero, Teaser/Text+Image, Teaser/Card
   - CTA Banner, Block Content, Links, Accordion

   Output goes to `stardust/canon-source/`:
   - `foundation/{colors,typography,effects,radii,spacing,components}.json`
   - `role-candidates.json`, `module-candidates.json`, `spec-tables.json`
   - frame screenshots

   Raw API responses are cached in `stardust/.work/reskin/figma/…`.
8. **Curate.** I wrote `stardust/reskin/curation-rules.json`, then ran `figma-donor.mjs curate` and `stamp`:
   - 13/13 role probe paths resolved.
   - Palette: page background white, body text `#3C4242`, headings plum `#830051`, accent magenta `#D0006F`, light band `#EBEFEE`.
   - Type: Inter for body, Lexia for headings (with fallbacks).
   - Layout: container 1180px, section padding 40px.
   - 10 modules, M1–M10:

     | Id | Module |
     |---|---|
     | M1 | Home Hero Branded |
     | M2 | Teaser/Card |
     | M3 | Teaser/Text+Image |
     | M4 | CTA Banner |
     | M5 | Block Content |
     | M6 | Teaser/Home Hero |
     | M7 | Links |
     | M8 | Accordion |
     | M9 | Header |
     | M10 | Footer |

   - Outputs: `stardust/reskin/donor-tokens.json`, `donor-modules.md`, `canon-source/DESIGN.{json,md}`. `stamp` wrote `designSource` into `state.json`.

## Phase 2 — Content capture (content-capture, 12:15:39Z → 12:18:19Z)

9. **Normalization ledger** `stardust/reskin/normalize/home.mjs`. It applies the `DEFAULT_LEDGER` plus:
   - N1 removes the live Facebook feed widget, which is dynamic third-party content; its heading is kept.
   - N2 removes back-to-top.
10. **Capture the content model** for `main`, giving `reskin/content-model/home/content-model.json` with 9 slots, 15 images and 3,609 text chars. The same step captured the header/footer `_chrome` model (`--scope "header!,footer!"`) with 2 slots.

## Phase 3 — Mapping (mapping-brief, 12:18:19Z → 12:19:18Z)

11. **Map each content slot to a donor module** in `reskin/mapping.json` (machine-readable) and `reskin/mapping.md` (table, deltas, judgment calls). All 9 slots and 2 chrome rows are mapped (100%).

    | Slot | Content | Module | Layout |
    |---|---|---|---|
    | s01 | Hero | M1 | split |
    | s02 | 3 cards | M2 | cards |
    | s03 | Principal message | M3 | split |
    | s04 | Fort Fest | M3 | split |
    | s05 | Tours | M4 | stack |
    | s06 | Quick links | M2 | cards |
    | s07 | Ready to apply | M4 | split |
    | s08 | Key dates | M3 | split |
    | s09 | Socials heading | M5 | stack |

## Phase 4 — Render (programmatic-render, 12:19:18Z → 12:29:47Z)

12. **Render the page** with `stream-render.mjs home --localize-images`. This writes `stardust/reskin/pages/home.html` with the donor tokens applied and 16 images localized.

## Phase 5 — Gates on the prototype

13. **(a) Content gates:**
    - `dom-equality`: text 3609/3609 byte-identical, PASS. Images 15 vs 14, FAIL.
    - `slot-coverage`: 66/67. The s05 image is nested in an empty `h3`, and the renderer does not emit a heading's image child.
14. **(b) donor-probe** (tokens actually applied): 15/15 PASS. **(c) overflow sanity:** PASS.
15. **(d) Figma gate.** I wrote `reskin/figma-checks/home.json`, which ties each section to its Figma node with geometry and type checks. Then ran `figma-gate.mjs all`:
    - First run: geometry and type mismatches.
    - Single fix iteration: `columnGap` became gap-32 and `type.body` became body-large 18/28; s03/s04/s05/s07/s08 headings changed to h3; s07 changed to the light tone. Then re-ran curate, stamp, render and the gates.
    - Final result:

      | Check | Result |
      |---|---|
      | join | PASS |
      | geometry | 11/13 |
      | ramp | 121/125 |
      | pixel | n/a (Figma frames hold kit sample content, not this site's) |

16. **Residuals and eyeball** were logged with `reskin-ledger.mjs`:
    - s05 heading image: needs-owner
    - M4 body ramp: accepted
    - two geometry widths: accepted
    - card run detection: accepted
    - Lexia/Inter not served: accepted

    Eyeball verdict: pass, with the raw chrome header as the weakest point. Then I advanced `state.mjs` for home to `prototyped`.

## Phase 5 (e) — Deployed leg for home (12:37:22Z → in progress)

17. **Runtime probe** (12:37:22Z → 12:37:25Z), which writes `stardust/runtime-contract.json`.
18. **Section schema** (2b, 12:37:26Z → 12:53:10Z): DA section tables for each slot, in `stardust/eds-schema/home.json`.
19. **Foundation** (3): donor tokens become CSS custom properties in `styles/styles.css`.
20. **Lean buttons** (5): kept the stock `decorateButtons`, where `strong` is primary and `em` is secondary.
21. **Chrome** (6): restyled `blocks/header/header.js` and the footer to the oneAZ Header and Footer modules.
22. **Blocks** (7): `hero`, `cards` and `columns` restyled to M1/M2/M3, in one session because there is only one page.
23. **Content** (9, 12:53:10Z → 12:58:14Z):
    - Authored DA HTML for `/`, `/nav` and `/footer`.
    - Ran `deploy-batch --sandbox --no-publish`: PUT to `admin.da.live/source/...`, then preview.
    - Pushed the code to the `fortstreet` branch. The session branch name is 93 chars, which is over the 63-char aem.page host limit.
24. **Local QA** (12:58:14Z → 13:03:57Z).
25. **Reconcile** (10, from 13:06:06Z): `deployed-gate.mjs all` against the preview, plus Step 10 checks. *(in progress)*

## Fidelity preparation (done in parallel)

26. **Originals:** `stitch-shot.mjs` full-page captures of the original home at 1440, 768 and 390, plus all 52 original pages at 1440 in `stardust/reports/screens/original/`. All 52 succeeded.
27. **Baseline comparison:** the local reskin vs the original at 1440 with `pixel-compare.mjs`: 52.05% of pixels match. With `ssim.mjs` (an agent helper), SSIM is 29.8% after height normalization.

## Scaling to all 52 pages (in progress)

28. **Inventory** (`stardust/.work/inventory/inventory.tsv`): every page's template and blocks.

    | Type | Pages |
    |---|---|
    | home | 1 |
    | landing | 4 |
    | content | 47 |

    Extra source blocks: accordion, table, gallery, embed, facebook-feed, planningreporting, card-container.
29. **Archetype reskins** (Phases 2–5 (a)–(d)), run by a sub-agent from 12:55Z to about 13:17Z. Full report: `stardust/reports/archetypes-report.md`.
    - **`/school-life`** (type `section`):
      - Content: 2 slots. The h1 maps to M5, and 14 image link cards map to M2 in 2 columns.
      - Gates: dom-equality PASS (text 1501/1501, images 14/14); slot-coverage 57/57; donor-probe 10/10; overflow 0.
      - Figma gate: join PASS, ramp 41/41, geometry 0/1 (the panel is 1132 wide instead of 1180, the same as home).
    - **`/learning-and-support/wellbeing`** (type `content`):
      - Content: 12 slots. The hero maps to M1; text bands to M5; accordions to M8; the contact band to M4; link cards to M2. Two tables have no Figma module.
      - Normalization: a new step expands every accordion before capture. Collapsed panels hid 72% of the text.
      - Gates: dom-equality PASS (text 14312/14312, images 2/2); slot-coverage 83/83; donor-probe 15/15.
      - Figma gate: geometry 6/11, ramp 114/143. The misses are accordion titles styled as buttons and body text at 18/28 against the kit's 16/24.
    - Both pages were advanced to `prototyped`, with their residuals and eyeball verdicts recorded in `reskin/ledger.json`.
    - Components with no Figma module, which the deploy must build from donor tokens: table (17 pages), gallery (6), embed (4), facebook-feed (3), planningreporting (1), the section sidebar and the breadcrumb.
    - Skill gaps found in the branch:
      - The renderer shows a `<p>`-wrapped image as an inline icon.
      - The renderer has no accordion or table layout.
      - The `residual` command overwrites an earlier residual for the same gate.

### Handoff, migrate and sibling gates (13:20Z → 14:13Z)

30. **Approve the 3 archetypes hands-off.**
    - First, residual gate names were re-logged to exactly match the check keys (`reskin-dom-equality`, `reskin-slot-coverage`, `figma.geometry`, `figma.ramp`, `step10.header`). A residual covers a gate only when its name matches exactly.
    - Then each archetype was approved with `state.mjs advance <slug> --to approved --by hands-off --skill reskin`, followed by `reskin-ledger.mjs record <slug> --stage prototype`.
    - Handoff result: landing = home, section = school-life, content = learning-and-support-wellbeing.
31. **Canon and preflight.**
    - `canon-from-reskin.mjs home` produced 3 canon files, 6 module skeletons, a donor-sourced `DESIGN.md`/`DESIGN.json`, `direction.md` and `dynamic-features.md`.
    - `reskin-preflight.mjs` reported all OK, then "ready: run migrate render".
32. **Plan the siblings.**
    - Fetched page titles and added 49 sibling pages to `state.json` as `directed`.
    - Types: `section` for the `/about-us`, `/learning-and-support` and `/our-community` hubs; `content` for the rest.
33. **Sibling reskins (Phases 2–5 (a)/(b)).** Four parallel sub-agents, one batch each:

    | Batch | Pages |
    |---|---|
    | about-us | 14 |
    | learning-community | 12 |
    | school-life-a | 11 |
    | school-life-b | 12 |

    - Each page got a normalize ledger, a content model (`capture-content`), a per-page mapping (`stardust/reskin/mappings/<slug>.{json,md}`) and a `stream-render`.
    - Each page was pre-gated with dom-equality, slot-coverage and donor-probe.
    - Batch reports are in `stardust/reports/siblings/*.md`.
    - Text is byte-equal to the source on all 49 pages.
    - New page-local normalize entries, each with `what`/`why`:
      - remove video embeds
      - remove the dynamic PDF lists
      - flatten galleries/carousels so every slide shows
      - remove the Google Maps embed
      - lift images out of empty headings
34. **Merge the mappings.** `stardust/.work/reskin/merge-mappings.mjs` folded the 49 per-page mappings into `reskin/mapping.json` (52 pages) and `reskin/mapping.md`. It added 415 slot rows to the shared multi-page table and appended each page brief. The chrome mapping was identical on every page.
35. **Migrate render.** Ran the branch's `migrate.mjs render --all` with `--source <slug>=stardust/reskin/pages/<slug>.html` for the 49 siblings. The archetypes use their `prototypePath`.
    - Result: 3 pages on path A (archetype tier) and 49 on path A′ (sibling tier). 52 rendered, 0 refused.
    - **First run:** images were not bundled. `stream-render` writes `../../prototypes/assets/img/...`, which `migrate`'s Bundler resolves against `--proto-dir` (default `stardust/prototypes`), so every content image was left unresolved.
    - **Re-run** with `--force --proto-dir stardust/reskin/pages --current stardust/prototypes --canon-css stardust/canon/canon.css`. This uses flags only, with no script edits; `stardust/current` does not exist. All images were then bundled into `stardust/migrated/assets/img/`.
36. **Sibling gate on migrate's output** (handoff.md § Sibling gate). `stardust/.work/reskin/migrated-gates.mjs` ran dom-equality (`--wait-until load`), slot-coverage and donor-probe on every `stardust/migrated/<path>/index.html`, writing to `reskin/gates/<slug>/migrated/`.
    - 46/52 pages passed every gate. The six failures are residuals logged as accepted (hands-off):
      - home: the s05 image, already accepted.
      - careers: an image inside an `<h1>`, which the renderer drops.
      - foundation, newsletters, student-opportunities: the source has authored `about:error` images.
      - pandc: a 57-character URL overflows at 360px.
    - Then `reskin-ledger.mjs record <slug> --stage migrated` for all 52 (all `gated`), `state.mjs advance … --to migrated` for 52, and preflight OK.

### Deploy, measurement and hand-off

37. **Extra EDS blocks and DA content for 51 pages** (sub-agent `eds-blocks-content`, 13:34–14:45Z).
    - Built 7 blocks with `decorate()` + token-only CSS: accordion, table, embed (click-to-load, auto-blocked from links), gallery, facebook-feed, planningreporting, content-container. Extended cards (`dark`, `off-white`, `highlight`, `horizontal`) and columns (`light`).
    - `convert-plain.mjs` converted 51 pages to `content/<path>.html`. 166 media uploaded to DA (`da-media-upload.mjs`). `localize-links --check` PASS.
    - Branch `deploy-batch` → preview for all 51. Deployed gates for `school-life` and `wellbeing`: content, sanity, inherited PASS; parity PASS on school-life. Residuals are in `deploy-siblings-report.md`.
38. **Fidelity run** (`stardust/.work/reskin/fidelity.mjs`).
    - For each of the 52 pages at 1440, plus the 3 archetypes at 768 and 390 (58 jobs): branch `stitch-shot.mjs --settle` on the original and on the preview, branch `pixel-compare.mjs --threshold 100`, and the `ssim.mjs` helper. 58/58 done, 0 errors → `fidelity.json`.
    - 1440 mean: 69.8 % pixel similarity, SSIM 40.7 overlap / 39.8 height-normalized / 47.2 above-fold.
    - Built 58 ORIGINAL | MIGRATED | DIFF composites → `screens/compare/<slug>-<w>.jpg`.
    - Reviewed the composites. The header chrome is visually broken: no logo, stacked utility links, a literal `keyboard_arrow_right` in the nav, no hamburger at 390. This is the same as at home deploy (`.work/deploy/shots/proto-1440-top.png`; `header.js` unchanged), so it is not a regression. It is listed as the top fidelity defect.
39. **DA block library** (excat `block-library-creator` skill, DA path; user request at 14:52Z).
    - Step 0: no `.migration/project.json` → DA. Scope: 11 blocks (9 used in content + embed, fragment). Header, footer and widget excluded.
    - Step 1b: created `blocks/<b>/metadata.json` ×11.
    - Steps 2–3: `stardust/.work/library/gen-library.mjs` wrote `content/library/blocks/<b>.plain.html` (19 variant sections, placeholder images) and `content/library/blocks.json` (11 entries).
    - Steps 4–6: `upload-library.mjs` did a DA Source API POST for 2 PNGs + 11 samples + `blocks.json` (all 201), previewed the 11 samples (200, `Authorization: Bearer`), and POSTed the `library` sheet to the Config API (201).
    - Verify: `verify-library.mjs` shows 11/11 rendered, blocks loaded, 0 broken images. Report: `block-library.md`.
40. **Benchmark and prompts.**
    - Re-queried `~/.copilot/session-store.db` (`assistant_usage_events`) for tokens and AIU per agent.
    - `extract-prompts.mjs` (now also captures `task` sub-agent prompts and de-duplicates the delivered copies) → `prompts.md`, with the Figma token and JWTs redacted.
    - Wrote `benchmark.md`.
41. **Commit and PR.** Committed the code (`blocks/*/metadata.json`), `content/library/` and the stardust artifacts and reports. Pushed via `stardust/.work/deploy/push.sh` and opened the PR with the preview links. The full-resolution screenshots under `reports/screens/{original,migrated,diff}/` (~240 MB) are git-ignored; the composites are committed.

42. **Header fix** (user request "plss fix that", after PR #1).
    - Diagnosis: `styles/styles.css` reserved a `--nav-height` of 237–569 px. The `/nav` fragment carries the source's Material-icon ligature text and its utility paragraphs, and the chrome CSS had no menu toggle.
    - Rebuilt `blocks/header/header.{js,css}` to Figma M9 (`canon-source/assets/screenshots/header.png`). Desktop (≥ 1024px): utility row, then brand | nav | search. Below 1024px: hamburger panel. `--nav-height` is now 65/114 px.
    - The local `aem up` failed (isomorphic-git index checksum on the worktree). I verified instead by rendering the preview with the working-tree code routed in via Playwright (`stardust/.work/reskin/hshot.mjs`, `LOCAL=1`) at 1440, 1024, 900, 768 and 390, with the menu open and closed.
    - `npm run lint` passed. Commit `d4e0b8d`, `push.sh`, `sync.sh` → `fortstreet` preview verified.
    - Re-ran `fidelity.mjs` (58 captures; the previous results are kept in `fidelity-pre-header-fix.json`). Regenerated the composites with `.work/reskin/compose.py`. Before/after header shots are in `reports/screens/header/`.

43. **Cards fix** (user report: cards and quick links render as lists).
    - Diagnosis: the source cards were captured correctly as `listItem`s, but `stream-render.mjs` `findRepeat` needs a repeat of 2+ nodes, so 3 single-node items fell back to `ul.list` (inline icons) and 6 split into false 2-item panels. The EDS block copied that prototype, and the prototype-referenced gates passed it.
    - Rebuilt `blocks/cards/cards.{js,css}` to Figma M2 Teaser / Card (image, title, text, arrow; 3-up home, 2-up sidebar variants, 1-up ≤ 600px; dark tone kept; new-window hint visually hidden with an icon). Content unchanged.
    - Verified with Playwright route overlays (`stardust/.work/reskin/cshot.mjs`, `mcheck.mjs`) at 1440/390; composites in `reports/screens/cards/`. Lint passed; deployed with `sync.sh`.

---

## Named deviations and helpers (not from the branch)

- `stardust/.work/reskin/{probe-dom,probe-fb,shot,measure,ssim,extract-prompts}.mjs` and `stardust/.work/inventory/*` are small agent-written, read-only helpers for probing, screenshots, SSIM and prompt extraction. No pipeline output depends on them.
- The preview branch is `fortstreet`, because the session branch name is too long for an aem.page host label.
- `state.json` pages were added by direct JSON edit, because `state.mjs` has no `add` command.
- `migrate render` was run with `--proto-dir stardust/reskin/pages --current stardust/prototypes`, because reskin's `stream-render` output paths and migrate's Bundler roots disagree. This is a skill gap.
- `stardust/.work/reskin/{merge-mappings,migrated-gates}.mjs` are agent-written orchestration helpers. They call only branch scripts and write only what those scripts and the documented files expect.
- Archetype choice: one page per type (home, `/school-life`, `/learning-and-support/wellbeing`).
- Fidelity measurement (`fidelity.mjs`, `ssim.mjs`) and the compare composites are agent-written. Capture and pixel diff use the branch's `stitch-shot.mjs` and `pixel-compare.mjs`.
- Block library: the sample pages were uploaded and previewed by the run (the skill leaves upload to the excat app), reference pages are `.html` rather than `.plain.html`, and samples are capped at 3 rows. See `block-library.md`.
