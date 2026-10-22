# Mapping brief — school-life-forms (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-forms/content-model.json` — 4 atomic slots. Mapping: `stardust/reskin/mappings/school-life-forms.json` (template `learning-and-support-wellbeing`). Mapped 3/4 = 75%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-forms | s01 | h1 "Forms" + 3 para — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-forms | s02 | 10 para + 4 link(s) — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-forms | s03 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-forms | s04 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-forms | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-forms | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- Mapped ratio 3/4 = 75% (< 80% bar): the only unmapped slot (s02) is the forms table (form link + description per row). Kept the archetype rule (table → token-composed new-module). Alternative for owner: map s02 to M7 (Links list) — each row is a link + one-line description. Verdict: needs-owner.
