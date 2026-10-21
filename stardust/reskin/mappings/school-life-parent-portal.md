# Mapping brief — school-life-parent-portal (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-parent-portal/content-model.json` — 8 atomic slots. Mapping: `stardust/reskin/mappings/school-life-parent-portal.json` (template `learning-and-support-wellbeing`). Mapped 8/8 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-parent-portal | s01 | h1 "Parent portal" + 1 para + 4 list item(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-parent-portal | s02 | h2 "Our parent portal apps" + 1 more heading(s) + 3 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s03 | h3 "Sentral" + 4 para + 1 image(s) + 2 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-parent-portal | s04 | h2 "School Bytes" + 1 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s05 | h3 "School Bytes" + 4 para + 1 image(s) + 2 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-parent-portal | s06 | h2 "Other communications" + 5 more heading(s) + 5 para + 3 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s07 | h2 "Need help with our parent portal apps?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-parent-portal | s08 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-parent-portal | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-parent-portal | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N4 added (unwrap image-only empty headings): s03/s05 app logos are authored as `<h3><picture>…</picture></h3>` with no text; stream-render emits heading text only, so without N4 both images were dropped (dom-equality images 2 vs 0, slot-coverage 34/36). N4 changes 0 text chars; after it: PASS.
- s03/s05 columns-wrapper (text + app logo) → M3 split.
