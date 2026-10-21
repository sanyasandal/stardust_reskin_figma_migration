# Mapping brief — school-life-student-opportunities-and-activities-sport (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-sport/content-model.json` — 5 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-sport.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 4/5 = 80%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-sport | s01 | h1 "Sport" + photo + 4 h2 entries (Knock Out Sport, Fitness Club, Running Club, Before and After School …) + paras + 11-item lists | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s02 | table: header row (Sport / When / Where / With who, as h3) + 7 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-student-opportunities-and-activities-sport | s03 | 2 paragraphs after the table (no heading) | M5 (Block Content) | continuation text of the previous block (no heading); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s04 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s05 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-sport | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s02 table header cells are authored h3s; they stay h3 in the stream (no table node, R2).
- No dynamic surface; archetype ledger only.
