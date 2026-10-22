# Deploy report: the 51 sibling pages (Fort Street High → Figma One-AZ v3.2)

The preview is at `https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/`, on the branch `fortstreet`. The session branch's host label is longer than 63 characters, which is why the preview runs on that branch.

- DA: `sanyasandal/stardust-reskin-figma-migration`.
- **Preview only.** Nothing was published to aem.live.
- Home and its precedent are covered in `stardust/reports/deploy-report.md`.

## Summary

| Step | Result |
|---|---|
| Survey | `stardust/.work/deploy/block-survey.md` and `survey.json` cover the 51 `.plain.html` files |
| Blocks | New blocks: accordion, table, embed, gallery, content-container, facebook-feed, planningreporting.<br>Hardened: cards, columns, hero.<br>Added `scripts/external-links.js` and `icons/{email,phone,map}.svg` |
| Content | `convert-plain.mjs` converted 51 pages to `content/<path>.html`.<br>166 media uploaded to DA (`da-media-upload.mjs`, `media-manifest-siblings.json`).<br>`localize-links --check` PASS |
| Lint | `npm run lint` is clean apart from the known `sanitise.js` warning.<br>`davids-model-lint`: PASS (0 🔴, 76 🟡) |
| Round-trip `--ew` | 0 🔴 for every block (see the Verification section below) |
| Deploy | `deploy-batch --no-publish --ledger stardust/.work/reskin/deploy-ledger.json` on 51 paths + `/index` + `/nav`: 54 ledger entries, all previewed |
| Verify | `verify-pages.mjs`: **53/53 pass**.<br>All pages return 200 and 319 of 319 blocks are `loaded`.<br>0 `about:error` images, 0 JS errors.<br>The `.plain.html` image count matches the source on all 51 pages |
| Gates | school-life: content, parity, sanity and inherited PASS.<br>wellbeing: content and sanity PASS.<br>Residuals are listed under Gate results |

## Blocks

| Block | Source shape | DA table shape | What decorate() builds | Donor module / tokens |
|---|---|---|---|---|
| accordion | `accordions`: n rows of `title \| panel`. The panel can be rich, including a nested `<table>` | `accordion`: one row per item, `title \| panel` | `.accordion-item > .accordion-head` (`.accordion-title` + chevron `button.accordion-toggle`) + `.accordion-panel`. Starts collapsed (`hidden="until-found"`; was open until step 48). Panel links stay plain links | M8: Lexia plum title, chevron, 1px rule, Block Element panel |
| table | `table` / `no-header` / `bordered`, 2–6 columns | `table (no-header\|bordered)`: one row per table row | `.table-scroll > table > thead/tbody > tr > th/td`. The first row is the header unless the block is `no-header` | No module. Uses the type ramp, `--palette-*` rules and spacing tokens |
| embed | `embed`: 1 cell holding a single link (Brightcove, Google Maps) | Plain link paragraph. scripts.js auto-blocks a link to a known embed host | `.embed-frame` (16:9 placeholder + load button) + `.embed-source` (link fallback). The iframe is created only on click | No module. Light band and button tokens |
| gallery | `gallery`: 4–21 rows of `picture \| caption` | `gallery`: `picture \| caption` | `ul.gallery-grid > li.gallery-item > .gallery-media + .gallery-caption` | No module. M2 card spacing and radius tokens |
| content-container | Events 14 rows of `picture \| h3 + p…`; DoE 3 rows | `content-container`: `picture \| text` | `ul.content-container-grid > li.content-container-item > .content-container-media + .content-container-body` | M2 teaser card anatomy |
| facebook-feed | 1 empty cell (live third-party timeline) | `facebook-feed`: one cell holding a link to the Facebook page | `.facebook-feed-panel` (light band) + action link | No module. Light band and link tokens |
| planningreporting | `key \| value` rows: `reporttype`, `schoolcode` 8504, `recentreports` | Same key/value rows (hidden config, `@ew-exempt`) | `ul.planningreporting-list > li > a` from the NSW school-plan-report API. On failure, a link to the department's school plans and reports page | No module. List and link tokens |
| cards | `card-container` in five forms: `dark`, `off-white`, `horizontal`, plain, `highlight`. The image cell is often empty; the title can be h2/h3 or a bare p | `cards (variant)`: `icon/picture \| title + text` | `dark` and `off-white`: 2-up `.cards-card` panels (school-life s02). The others: `ul.cards-list`. The title takes `--palette-heading-fg` | M2 |
| columns | 1–5 rows of `text \| picture` (either order), text-only rows, `<h2><picture>`, bare `<img>` | `columns` / `columns light` | `.columns-panel` split. Text-only rows span the full width. The source's dark CTA sections become `columns light` | M3 teaser, M4 CTA banner |
| hero | Page intro (h1 + intro + first picture) | `hero`: row 1 picture, row 2 h1 + text | `.hero-panel > .hero-text + picture` | M1, mirroring the learning-and-support-wellbeing prototype |
| section-metadata | `background`: dark 51, off-white 23, white 2, light 1 | `section-metadata` / `style` | Tones are collapsed onto donor `light` and default (white) | Donor tone tokens |
| metadata | Source `<head>` title and description | `metadata`: Title, Description | Standard | n/a |

## Per-page results

| Path | Preview | HTTP | Blocks loaded | Images src/DA | Notes |
|---|---|---|---|---|---|
| /about-us | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us) | 200 | 3/3 (cards) | 7/7 |  |
| /about-us/enrol | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/enrol) | 200 | 8/8 (hero, accordion, columns, embed, cards) | 1/1 | dark CTA→columns light |
| /about-us/facilities-and-resources | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/facilities-and-resources) | 200 | 6/6 (hero, gallery, columns, cards) | 14/14 | h1→h2 ×1 |
| /about-us/hsc-results | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/hsc-results) | 200 | 11/11 (hero, table, cards) | 1/1 |  |
| /about-us/our-principal-and-staff | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/our-principal-and-staff) | 200 | 10/10 (columns, table, cards) | 2/2 | no hero (h1 alone) |
| /about-us/policies-and-reports | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/policies-and-reports) | 200 | 8/8 (hero, planningreporting, accordion, columns, cards) | 1/1 | dark CTA→columns light |
| /about-us/policies-and-reports/nsw-public-school-information | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/policies-and-reports/nsw-public-school-information) | 200 | 4/4 (hero, cards) | 0/0 |  |
| /about-us/school-history-and-archives | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/school-history-and-archives) | 200 | 5/5 (columns, cards) | 6/6 | no hero (h1 alone) |
| /about-us/school-history-and-archives/fort-street-archives | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/school-history-and-archives/fort-street-archives) | 200 | 4/4 (hero, cards) | 3/3 |  |
| /about-us/school-history-and-archives/the-fort-street-museum | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/school-history-and-archives/the-fort-street-museum) | 200 | 3/3 (cards) | 2/2 | no hero (h1 alone) |
| /about-us/school-history-and-archives/the-fortian-digitised | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/school-history-and-archives/the-fortian-digitised) | 200 | 6/6 (hero, accordion, columns, cards) | 1/1 | dark CTA→columns light |
| /about-us/stories-and-highlights | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/stories-and-highlights) | 200 | 7/7 (hero, gallery, facebook-feed, columns, cards) | 21/21 | dark CTA→columns light |
| /about-us/transition-to-high-school | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/transition-to-high-school) | 200 | 5/5 (hero, columns, cards) | 2/2 |  |
| /about-us/why-choose-us | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/about-us/why-choose-us) | 200 | 7/7 (hero, embed, cards, columns) | 6/6 | dark CTA→columns light |
| /contact-us | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/contact-us) | 200 | 7/7 (hero, columns, embed, cards) | 1/1 | dark CTA→columns light |
| /learning-and-support | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support) | 200 | 3/3 (cards) | 4/4 |  |
| /learning-and-support/additional-learning-support | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support/additional-learning-support) | 200 | 6/6 (hero, columns, accordion, cards) | 2/2 |  |
| /learning-and-support/careers | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support/careers) | 200 | 5/5 (hero, gallery, cards) | 9/9 | h1→h2 ×1 |
| /learning-and-support/high-potential-and-gifted-education | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support/high-potential-and-gifted-education) | 200 | 7/7 (hero, accordion, gallery, columns, cards) | 5/5 | dark CTA→columns light |
| /learning-and-support/learning | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support/learning) | 200 | 6/6 (hero, cards, accordion) | 1/1 | h1→h2 ×4 |
| /learning-and-support/wellbeing | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/learning-and-support/wellbeing) | 200 | 10/10 (hero, table, accordion, columns, cards) | 2/2 | h1→h2 ×1; dark CTA→columns light |
| /our-community | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community) | 200 | 4/4 (cards) | 4/4 |  |
| /our-community/alumni | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community/alumni) | 200 | 4/4 (hero, cards) | 1/1 |  |
| /our-community/fortians-union | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community/fortians-union) | 200 | 4/4 (hero, cards) | 0/0 |  |
| /our-community/foundation | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community/foundation) | 200 | 6/6 (hero, columns, table, cards) | 5/4 | 1 source about:error img dropped |
| /our-community/foundation-tertiary-bursaries | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community/foundation-tertiary-bursaries) | 200 | 4/4 (hero, cards) | 0/0 |  |
| /our-community/pandc | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/our-community/pandc) | 200 | 7/7 (hero, table, accordion, cards) | 1/1 |  |
| /school-life | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life) | 200 | 3/3 (cards) | 14/14 |  |
| /school-life/bell-times | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/bell-times) | 200 | 5/5 (hero, columns, cards) | 1/1 | h1→h2 ×1; dark CTA→columns light |
| /school-life/bring-your-own-device | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/bring-your-own-device) | 200 | 5/5 (hero, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/canteen | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/canteen) | 200 | 4/4 (hero, cards) | 2/2 |  |
| /school-life/events | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/events) | 200 | 9/9 (hero, table, content-container, columns, facebook-feed, cards) | 15/15 | dark CTA→columns light |
| /school-life/forms | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/forms) | 200 | 6/6 (hero, table, columns, cards) | 0/0 | dark CTA→columns light |
| /school-life/house-and-merit-system | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/house-and-merit-system) | 200 | 6/6 (hero, columns, cards) | 6/6 | dark CTA→columns light |
| /school-life/lockers-and-lost-property | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/lockers-and-lost-property) | 200 | 6/6 (hero, table, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/newsletters | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/newsletters) | 200 | 8/8 (hero, columns, accordion, facebook-feed, cards) | 1/0 | 1 source about:error img dropped; dark CTA→columns light |
| /school-life/parent-portal | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/parent-portal) | 200 | 7/7 (hero, columns, cards) | 2/2 | dark CTA→columns light |
| /school-life/stationery | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/stationery) | 200 | 4/4 (hero, cards) | 1/1 |  |
| /school-life/student-opportunities-and-activities | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities) | 200 | 7/7 (hero, table, accordion, columns, cards) | 4/3 | 1 source about:error img dropped; dark CTA→columns light |
| /school-life/student-opportunities-and-activities/academic-competitions | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/academic-competitions) | 200 | 5/5 (hero, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/clubs-and-committees | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/clubs-and-committees) | 200 | 4/4 (columns, cards) | 1/1 | dark CTA→columns light; no hero (h1 alone) |
| /school-life/student-opportunities-and-activities/creative-and-performing-arts | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/creative-and-performing-arts) | 200 | 5/5 (hero, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/debating-and-public-speaking | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/debating-and-public-speaking) | 200 | 5/5 (hero, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/duke-of-edinburgh-award | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/duke-of-edinburgh-award) | 200 | 8/8 (hero, accordion, content-container, gallery, table, cards) | 13/13 |  |
| /school-life/student-opportunities-and-activities/instrumental-music-program | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/instrumental-music-program) | 200 | 6/6 (hero, columns, cards) | 2/2 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/robotics-and-maker-society | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/robotics-and-maker-society) | 200 | 5/5 (hero, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/sport | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/sport) | 200 | 6/6 (hero, table, columns, cards) | 1/1 | dark CTA→columns light |
| /school-life/student-opportunities-and-activities/student-leadership-opportunities | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/student-opportunities-and-activities/student-leadership-opportunities) | 200 | 5/5 (hero, accordion, cards) | 1/1 |  |
| /school-life/travel-to-school | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/travel-to-school) | 200 | 11/11 (hero, embed, columns, table, cards) | 3/3 | dark CTA→columns light |
| /school-life/uniform | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/uniform) | 200 | 7/7 (hero, gallery, accordion, columns, cards) | 11/11 | dark CTA→columns light |
| /school-life/uniform/uniform-shop | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/school-life/uniform/uniform-shop) | 200 | 10/10 (hero, table, cards) | 1/1 |  |
| / | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/) | 200 | 10/10 (hero, cards, columns) | —/15 |  |
| /nav | [preview](https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page/nav) | 200 | 2/2 (—) | —/1 |  |

## Gate results (archetypes)

Each archetype was run with `node stardust/scripts/reskin/deployed-gate.mjs all --page <slug> --reskin stardust/.work/reskin/parity-ref/<slug>.html`. Before the run, `preview … --sandbox` passed for both pages.

Inputs:
- deltas: `stardust/reskin/deltas/<slug>.json`
- `previewSelector`s: `stardust/reskin/figma-checks/<slug>.json`
- schemas: `stardust/eds-schema/<slug>.json`

Evidence:
- `stardust/.work/reskin/gates/<slug>/deployed/summary.json`
- raw outputs: `stardust/.work/deploy/gate-<slug>-r{1,2,3}.txt`

| Gate | school-life r1 | school-life r2 (final) | wellbeing r1 | wellbeing r2 / r3 (final) |
|---|---|---|---|---|
| content | PASS (delta t1 `" east"`) | PASS | PASS (deltas t1, t2) | **PASS** (delta t3 for the hint whitespace) |
| tokens | FAIL 6/48 (card h2 grey; no `a.button.primary`) | FAIL 5/48: the `a.button.primary` checks only. **N/A: the page has no primary button** | 48/48 (button came from the accordion's bold lone links) | FAIL 5/48: `a.button.primary` absent. **N/A: the accordion links are plain links, as in the source and prototype** |
| parity | PASS | PASS (pixel 3.09% @1440, Δh +10px) | FAIL (10.17% @1440, 13.04% @360) | FAIL @360 only: 11.79% (1440 9.62% PASS; heights PASS) |
| sanity | PASS | PASS | FAIL (33 MISSING LINK: hint text was sr-only, prototype shows it) | **PASS** |
| inherited | PASS | PASS | FAIL | FAIL: ai-readability 95 < 98; qa-gate units 3 fail |
| figma | FAIL (join) | FAIL (join: section drift) | FAIL (join) | FAIL (join: section drift) |

**Fix round (one per gate family; commit `67e1e2c`):**
- **sanity / content:** the external-link hint is now a visible `span.link-hint`, matching the prototype. It is skipped when the link text already says "(opens in new window)".
- **tokens:** card titles now take `--palette-heading-fg`.
- **parity:**
  - Accordion panel links lose their `button` decoration, so they render as plain links, as in the prototype.
  - This cut wellbeing's 1440 pixel diff from 10.17% to 9.62% and its 360 diff from 13.04% to 11.79%.

**Residuals (skill findings, not doctored):**
- **figma join:** it anchors on a slot's first heading.
  - The heading-less card slots (school-life s02, wellbeing s12) carry the prototype renderer's flattened Material Symbols ligature text (" east").
  - The join reports section drift, so geometry, ramp, pixel and coverage did not run.
  - The join ignores `deltas.text.allow`.
- **tokens:** the probe requires a `main a.button.primary`. Neither archetype authors one.
- **wellbeing ai-readability 95:**
  - 93 of the accordion's words are the runtime "(opens in new window)" hints; the header and footer fragments account for 48 more.
  - Without the hints the score would be about 98.3.
- **wellbeing qa-gate units:**
  - The schema's repeat detection counts the panel paragraphs (P.aux×34) as accordion units.
  - The same happens for columns ×4.
- **wellbeing parity @360 (11.79%):** the remaining cause is the long accordion's height and wrap differences against the prototype renderer.
- **Chrome parity:** advisory only (header button→a, footer Δy). This is inherited from home.

## Verification

**Round-trip.**
- Run with `block-roundtrip --ew` against the reskin prototypes, using `stardust/.work/deploy/rt/`.
- Blocks with no prototype counterpart were checked against `rt/ref-stubs.html` and `rt/content-autoblocks.html`.

| Block | Result |
|---|---|
| accordion (wellbeing) | 0 🔴, EW 95/95 |
| content-container (events) | 0 🔴, EW 37/37, after unwrapping `<strong>`-wrapped headings |
| gallery (facilities, stories) | PASS |
| embed | 2/2 PASS |
| facebook-feed | PASS |
| planningreporting | 0 🔴, EW 4/4. The 🟡/🟠 EXTRA findings are the config keys and the API-rendered list |
| table, cards, columns, hero (wellbeing, school-life) | PASS |

**Page verify** (`stardust/.work/deploy/verify-pages.mjs` → `verify-results.json`): 53/53 pass.
- That is the 51 pages, plus `/` and `/nav`, which skip the image-count match.
- Totals: 319 blocks, all `loaded`; 0 `about:error`; 0 broken images; 0 JS errors.

## Deviations

**Blocks**
1. **facebook-feed:** the live Facebook timeline (dynamic third-party content) is not rendered.
   - The block shows the authored h2 and paragraph, plus a link to the school's Facebook page.
   - The link text "Fort Street High School on Facebook" was added because the source cell is empty.
2. **planningreporting:** the dynamic NSW plan/report widget is rebuilt as follows.
   - The authored key/value config drives a live call to the department API (`school-plan-report`, schoolcode 8504).
   - If that call fails, a link to the education.nsw.gov.au school plans and reports page is shown.
   - The list itself is not authorable content.
3. **embed:** authored as a plain link, which scripts.js auto-blocks, and loaded on click to protect privacy. Nothing third-party loads at page view.
4. **accordion:**
   - Items start collapsed with `hidden="until-found"`, so find-in-page and text-fragment links still open them. (They started open until step 48: N3 is a capture-only rule, and EW7 allows collapsed panels.)
   - Uses the literal M8 sizes.
   - Strips the h/p wrapper from the title cell.
   - Hides the name row of nested source tables.
   - Panel links lose their button decoration.
5. **External-link hint:** a visible `span.link-hint` "(opens in new window)" mirrors the source runtime and the prototype.
   - The source hides it as sr-only.
   - accordion carries an inlined copy because panels are moved after the global pass.
6. **Card titles** take the heading colour.

**Content and conversion**
7. **Headings:**
   - A `<strong>` that wraps a whole heading is unwrapped: enrol 6, learning 4, events 4.
   - Extra h1s are demoted to h2.
   - careers' picture-only h1 becomes the hero picture.
8. **Section tones:**
   - Source `dark`, `off white`, `white` and `light` are collapsed onto donor `light` and default.
   - Dark CTA runs become `columns light` on 26 pages.
   - Sections are split per wrapper.
9. **Pages with no hero:** these pages have no intro image, so the h1 stays in default content.
   - our-principal-and-staff
   - school-history-and-archives
   - the-fort-street-museum
   - clubs-and-committees
10. **Source images that are `about:error` on the live source are dropped:** foundation, newsletters, student-opportunities.
11. **Contact icons:** `icons/{email,phone,map}.svg` were added because they 404 on the source too.
12. **Links left absolute:** their targets are outside the migration set.
    - `/enrol` ×2
    - `/learning-and-support/www.primaryethics.com.au` (a source authoring error)
    - `/search`
    - `/about-our-school/exit-profile`
    - `/about-our-school/uniform/uniform`
13. **davids-model-lint:** 76 🟡 advisories, and no 🔴.

**Deploy and gates**
14. **deploy-batch:**
    - It has no `--sandbox` flag, so the run used `--no-publish` only.
    - It addresses home as `/index`. A `/` entry in a paths file is silently dropped, so home was re-run via `deploy-paths-home.txt`.
    - Home and `/nav` were re-previewed after localize-links.
15. **Round-trip references for blocks with no prototype counterpart** are stubs (`rt/ref-stubs.html`).
16. **Gate deltas:**
    - Only the prototype renderer's flattened ligature text and whitespace are allow-listed (`stardust/reskin/deltas/*.json`).
    - The reference pages were not edited.

## Commits

On `ssandal-adobe-fortstreet-figma-reskin-migration`, pushed to `fortstreet` (forced) and to the session branch:

| Commit | Contents |
|---|---|
| `78eb923` | New blocks, cards/columns/hero hardening, and 51 converted pages |
| `2f186ee` | Contact icons |
| `67e1e2c` | Gate fix round |
| final commit | Deploy work files, ledger, deltas, figma-checks, eds-schema and this report |

`reskin-ledger.mjs` was not run.
