# Mapping brief — school-life-student-opportunities-and-activities-duke-of-edinburgh-award (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-duke-of-edinburgh-award/content-model.json` — 13 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-duke-of-edinburgh-award.mjs` (+ N5 NSW gallery carousel de-carousel). Mapped 11/13 = 85%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s01 | h1 "The Duke of Edinburgh International Award" + para + logo/photo + h2 "About the The Duke of Ed Award" + paras | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s02 | h2 "Requirements of the Award" + paras + 6-item list | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s03 | h2 "Adventurous Journey" + paras + 2-item list | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s04 | h2 "Suggestions of activities and Assessors that are available at school" | M5 (Block Content) | lone section title of the next block; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s05 | accordion ×3 (Skills, Service, Physical Recreation), each panel a Skill/Contact table | M8 (Accordion) | stacked disclosure rows: title + chevron, body (N3 opens every panel), as wellbeing s06; layout: stack, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s06 | 3 image + label tiles (Skills, Service, Physical Recreation) — source `content-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 3, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s07 | h2 "Adventurous Journey" + paras + 2 images + source link | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s08 | h2 "Why should I get involved…" + 4-item list + link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s09 | gallery: 6 photos, no captions (source NSW carousel, de-carouselled by N5) | — (gallery) | no gallery in the kit (archetypes-report § Source blocks with no Figma module); slides rendered statically in DOM order (N5); layout: stack, width: wide | new-module |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s10 | h2 "2026 Duke of Ed Staff Team" (table caption) | M5 (Block Content) | lone section title of the next block; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s11 | table: 5 role / name rows (staff team) | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s12 | h2 "Want to know more?" + contact paragraph + email link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | s13 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-duke-of-edinburgh-award | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N5: the NSW carousel (gallery s09) is rendered as a static run of all 6 slides; its dot numbers and arrows are dropped as carousel chrome.

## Judgment calls

- s05 accordion panels contain tables; M8 is kept (the disclosure is the unit), and the panel tables flow as paragraphs inside it (renderer limit R2, as wellbeing).
- s06 is three image + one-word label tiles → M2 3-up cards (repeating run); if the renderer finds no run it falls back to a stack (R1).
- s08 is a dark band with a heading, a 4-item list and one link: kept as M4 CTA banner (band + single action) rather than M5.
- s09 gallery has no kit module → new-module stack, like the archetype's tables.
