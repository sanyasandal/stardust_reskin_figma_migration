# Mapping brief — school-life-newsletters (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-newsletters/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-newsletters.json` (template `learning-and-support-wellbeing`). Mapped 7/7 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-newsletters | s01 | h1 "Newsletters" + 3 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-newsletters | s02 | h2 "Latest newsletter" + 3 para + 1 image(s) + 1 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-newsletters | s03 | h2 "Previous newsletters" — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-newsletters | s04 | 13 para + 19 link(s) — source `accordions-wrapper` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (accordions normalized all-open, N3) (layout=stack, width=wide) | mapped |
| school-life-newsletters | s05 | h2 "Have something to share?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-newsletters | s06 | h2 "Stay connected on our socials" + 1 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-newsletters | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-newsletters | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-newsletters | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N1 (Facebook-feed removal) added: s06 keeps its heading; the live feed is a dynamic surface.
- s02 columns-wrapper → M3 split. Its image is authored `<img src="about:error" alt="">` in the source `.plain.html` (broken DA image reference): it never paints on the source either; slot-coverage run with `--paint warn` (reason: source-authored broken src). dom-equality image count 1 vs 0: the source theme gives the broken img a box, the reskin `.icon` collapses an unsized alt-less broken img to 0×0. Source defect → needs-owner (fix the image in DA).
- s04 accordions → M8.
