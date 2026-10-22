# Mapping brief — school-life-canteen (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-canteen/content-model.json` — 6 atomic slots. Mapping: `stardust/reskin/mappings/school-life-canteen.json` (template `learning-and-support-wellbeing`). Mapped 6/6 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-canteen | s01 | h1 "Canteen" + 5 para + 1 image(s) + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-canteen | s02 | h2 "How to setup your Flexischools account" + 3 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s03 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s04 | h2 "Cancelling your order" + 1 more heading(s) + 6 para + 2 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s05 | h2 "Contact the Canteen" + 1 para — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-canteen | s06 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-canteen | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-canteen | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s03 image-only slot (Flexischools QR code) → M5 in-flow figure.
- s05 "Contact the Canteen" brand band has no CTA in source; still M4 (light CTA banner, no action) — the band treatment is the signal, as archetype s11.
