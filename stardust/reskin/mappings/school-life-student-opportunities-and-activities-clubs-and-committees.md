# Mapping brief — school-life-student-opportunities-and-activities-clubs-and-committees (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-clubs-and-committees/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-clubs-and-committees.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-clubs-and-committees | s01 | h1 "Clubs and Committees" + photo + h2 + 10 h3 club entries with paragraphs | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-clubs-and-committees | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 (94% of scope text) is the whole authored body in one default-content wrapper → one M5 text band, not an M1 hero (see academic-competitions).
- No dynamic surface; archetype ledger only.
