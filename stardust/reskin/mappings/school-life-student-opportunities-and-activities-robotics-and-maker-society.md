# Mapping brief — school-life-student-opportunities-and-activities-robotics-and-maker-society (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-robotics-and-maker-society/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-robotics-and-maker-society.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s01 | h1 "Robotics and Maker Society" + paras + photo + h2 "Maker Society" + paras + 4-item list | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 is h1 + all body text in one source wrapper → M5 text band (not M1).
- No dynamic surface; archetype ledger only.
