# Mapping brief — school-life-student-opportunities-and-activities-instrumental-music-program (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-instrumental-music-program/content-model.json` — 9 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-instrumental-music-program.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 9/9 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-instrumental-music-program | s01 | h1 "Instrumental Music Program" + photo + paras + h2 "Information for current members" + 4 links | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s02 | h2 "New members" + 3 h3 entries (Registration, Q&A session, New Members Night) + paras + link (source dark brand band) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s03 | h2 "Membership Fees and Individual Lessons" + 2 paras | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s04 | h2 "Choosing an instrument, and instrument hire" + 5 paras | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s05 | source `columns` (2 cols): instrument list paragraphs + photo | M3 (Teaser / Text+Image) | source `columns` block: text beside one image → text + image teaser; layout: split, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s06 | continuation of the instrument list (paragraphs) + link | M5 (Block Content) | continuation text of the previous block (no heading); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s07 | h2 "Ensembles for new IMP members" + paras + h2 "Parent Support" + paras | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s08 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | s09 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-instrumental-music-program | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-instrumental-music-program | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s02 sits on a dark brand band but is a long multi-heading text (1096 chars, 3 h3 + 1 link), not a CTA → M5 text band (the band tone is a source treatment the kit's M5 does not carry).
- s05 columns (text + image) → M3 split, home s03 settings.
- Source navigation is slow (networkidle never settles); capture used the archetype default domcontentloaded and succeeded.
