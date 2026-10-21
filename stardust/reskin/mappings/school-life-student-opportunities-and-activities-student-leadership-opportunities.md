# Mapping brief — school-life-student-opportunities-and-activities-student-leadership-opportunities (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-student-leadership-opportunities/content-model.json` — 6 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-student-leadership-opportunities.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 6/6 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s01 | h1 "Student Leadership Opportunities" + photo + h2 "Student Representative Council" + paras | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s02 | accordion ×2 (SRC Pledge, Fundraising activities) | M8 (Accordion) | stacked disclosure rows: title + chevron, body (N3 opens every panel), as wellbeing s06; layout: stack, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s03 | h2 "Peer Support" + 2 paras (source dark brand band, no action) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s04 | h2 "Duke of Edinburgh Leadership" + 2 paras | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s05 | h2 "University Programs" + 3 paras (source off-white band) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s06 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s03 is on a dark brand band but has no action → M5 text band, not M4 CTA banner.
- N3 opens the 2 accordion panels (1823 chars, otherwise hidden).
