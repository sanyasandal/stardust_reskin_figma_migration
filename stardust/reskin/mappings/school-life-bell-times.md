# Mapping brief — school-life-bell-times (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-bell-times/content-model.json` — 5 atomic slots. Mapping: `stardust/reskin/mappings/school-life-bell-times.json` (template `learning-and-support-wellbeing`). Mapped 5/5 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-bell-times | s01 | h1 "Bell times" + 2 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-bell-times | s02 | h2 "Our bell times" + 1 para + 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bell-times | s03 | h1 "Attendance" + 3 more heading(s) + 15 para + 5 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bell-times | s04 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-bell-times | s05 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-bell-times | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-bell-times | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s02 h2 + para + bell-times table graphic (alt "tables - dept of education calendar") → M5 in-flow figure (as archetype s07), not a split: the image is the content, not a media side.
- s03 carries a second h1 ("Attendance") at h1 → M5, as archetype s09.
