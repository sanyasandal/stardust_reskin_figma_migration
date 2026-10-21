# Mapping brief — school-life-events (type `content`, batch school-life-a)

Content model: `stardust/reskin/content-model/school-life-events/content-model.json` — 9 atomic slots. Mapping: `stardust/reskin/mappings/school-life-events.json` (template `learning-and-support-wellbeing`). Mapped 8/9 = 89%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-events | s01 | h1 "Events" + 3 para + 9 list item(s) + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-events | s02 | h2 "Important Calendar Dates to start 2027" — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-events | s03 | 22 para — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-events | s04 | h2 "Featured events" + 1 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-events | s05 | h3 "HSC Examinations" + 13 more heading(s) + 23 para + 14 image(s) — source `content-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=3, heading=h3, width=wide) | mapped |
| school-life-events | s06 | h2 "Need to make a payment?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-events | s07 | h2 "Key dates" + 2 para + 1 image(s) + 1 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-events | s08 | h2 "Discover more events" + 1 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-events | s09 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-events | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-events | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s01 h1 + paras + 9-item list (no sub-headings) → M1 hero by the archetype s01 rule.
- N1 (home's Facebook-feed removal) added: s08 keeps its h2 + "Follow us on Facebook." para; the live feed is a dynamic surface.
- s05 events `content-container` (authored content, verified in `.plain.html`) → M2 cards ×3 columns. Renderer: the first 5 events form a repeating run and render as 3-up cards; item 5 carries extra paragraphs that break the findRepeat period, so the remainder renders as a stack (renderer residual, all text/images present).
- s03 table → new-module (token-composed table, renders as stack).
- Captured with `--wait-until load`: at `domcontentloaded` the source card-container/default-content decoration races (material `east` glyphs + inter-block separators vary between loads → dom-equality text 3985/3986 vs 3996). Recaptured + gated at `load`: deterministic PASS.
