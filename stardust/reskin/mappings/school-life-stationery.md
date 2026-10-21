# Mapping brief — school-life-stationery (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-stationery/content-model.json` — 3 atomic slots. Mapping: `stardust/reskin/mappings/school-life-stationery.json` (template `learning-and-support-wellbeing`). Mapped 3/3 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-stationery | s01 | h1 "Stationery" + 3 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-stationery | s02 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-stationery | s03 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-stationery | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-stationery | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N4 added (unwrap image-only empty headings): s02 is authored as `<h2 id=""><picture>…</picture></h2>` (verified in `.plain.html`); without N4 the image was dropped. After N4: s02 is an image-only slot → M5 in-flow figure.
- Coverage ratio 0.412 is low because the page is short (724 chars of content vs ~1030 chars of header/footer chrome).
