# Mapping brief — school-life-bring-your-own-device (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-bring-your-own-device/content-model.json` — 6 atomic slots. Mapping: `stardust/reskin/mappings/school-life-bring-your-own-device.json` (template `learning-and-support-wellbeing`). Mapped 6/6 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-bring-your-own-device | s01 | h1 "Bring your own device" + 2 para + 1 image(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-bring-your-own-device | s02 | h2 "Introduction" + 1 more heading(s) + 3 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s03 | h2 "What things should you look for in a dev…" + 4 para + 12 list item(s) + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s04 | h2 "Access to the department’s Wi-Fi network…" + 1 more heading(s) + 4 para + 6 list item(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s05 | h2 "Need help with your device?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-bring-your-own-device | s06 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-bring-your-own-device | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-bring-your-own-device | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
