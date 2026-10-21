# Mapping brief — school-life-house-and-merit-system (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-house-and-merit-system/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-house-and-merit-system.json` (template `learning-and-support-wellbeing`). Mapped 7/7 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-house-and-merit-system | s01 | h1 "Merit System" + 5 para — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-house-and-merit-system | s02 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s03 | h2 "House System" + 1 more heading(s) + 10 list item(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s04 | h2 "Sport Houses" + 1 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s05 | h3 "Joshi (Ruby)" + 4 more heading(s) + 15 para + 5 image(s) — source `columns-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-house-and-merit-system | s06 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-house-and-merit-system | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-house-and-merit-system | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-house-and-merit-system | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s02 image-only slot → M5 in-flow figure.
- s05 five houses (image + name + text, repeating) → M2 cards ×2 columns (renders as a 2-col card grid).
