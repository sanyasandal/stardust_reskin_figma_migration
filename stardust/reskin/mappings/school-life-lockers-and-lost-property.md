# Mapping brief — school-life-lockers-and-lost-property (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-lockers-and-lost-property/content-model.json` — 5 atomic slots. Mapping: `stardust/reskin/mappings/school-life-lockers-and-lost-property.json` (template `learning-and-support-wellbeing`). Mapped 4/5 = 80%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-lockers-and-lost-property | s01 | h1 "Lockers and lost property" + 3 more heading(s) + 5 para + 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-lockers-and-lost-property | s02 | 10 para — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-lockers-and-lost-property | s03 | h2 "Lost Property" + 1 more heading(s) + 5 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-lockers-and-lost-property | s04 | h2 "Have a question for us?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-lockers-and-lost-property | s05 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-lockers-and-lost-property | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-lockers-and-lost-property | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s01 holds h1 + image + h2/h3 body (sub-headings) → M5, not M1 hero (as school-life s01 / archetype s09).
- s02 table → new-module (token-composed, renders as stack).
