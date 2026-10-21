# Mapping brief — school-life-student-opportunities-and-activities (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-student-opportunities-and-activities/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-student-opportunities-and-activities.json` (template `learning-and-support-wellbeing`). Mapped 6/7 = 86%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities | s01 | h1 "Student opportunities and activities" + 7 para + 9 list item(s) + 3 image(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s02 | h2 "Schedule of Weekly activities 2025" — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s03 | 51 para — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-student-opportunities-and-activities | s04 | h3 "Language Cultural Tours" + 1 more heading(s) + 7 para + 1 image(s) — source `accordions-wrapper` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (accordions normalized all-open, N3) (layout=stack, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s05 | 2 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s06 | h2 "Need to make a payment?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-student-opportunities-and-activities | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- Captured with `--wait-until load`: at `domcontentloaded` the lazily-shown EDS sections were still hidden (body ratio 1.9/2.98, s04–s07 unverified). At `load`: 7 slots, scope 4428 / body 5704, all verified.
- s01 h1 + paras + 9-item list + 3 images (clubs posters) with no sub-headings → M1 hero by the archetype s01 rule; the posters are authored inside `<p>` and render as inline `.icon` images (archetype residual: images in `<p>` → inline icons). Owner may prefer M5 for so long a hero.
- s03 table → new-module (token-composed, renders as stack).
- s04 image authored `<img src="about:error">` in source (broken DA reference): slot-coverage run with `--paint warn`; dom-equality still PASS (alt text gives the img a box on both sides). Source defect → needs-owner.
- s05 quote → M5 (no quote module in the kit).
