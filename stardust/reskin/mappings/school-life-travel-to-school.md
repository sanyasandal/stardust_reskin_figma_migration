# Mapping brief — school-life-travel-to-school (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-travel-to-school/content-model.json` — 15 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-travel-to-school.mjs` (+ N4 Google Maps embed removed). Mapped 13/15 = 87%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-travel-to-school | s01 | h1 "Travel to school" + 3 paras (no image) | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-travel-to-school | s02 | h2 "Location map" + address paragraph (the map embed after it is N4) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-travel-to-school | s03 | 1 paragraph with "School Finder" link (after the map) | M5 (Block Content) | continuation text of the previous block (no heading); layout: stack, heading: h2, width: wide | mapped |
| school-life-travel-to-school | s04 | 4 h2 entries (Getting to and from school safely, For independent travellers, Subsidised school travel, School Student Travel) + paras + 14 links + 4-item list (source off-white band) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-travel-to-school | s05 | h3 "What will my free school travel pass look like?" + para | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s06 | source `columns` (2 cols): paragraph + pass image | M3 (Teaser / Text+Image) | source `columns` block: text beside one image → text + image teaser; layout: split, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s07 | source `columns` (2 cols): Opal card image + paragraph | M3 (Teaser / Text+Image) | source `columns` block: text beside one image → text + image teaser; layout: split, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s08 | eligibility paras + list + 4 h3 entries (Apply online…, School Endorsement, Processing…, Using Your School Travel Pass) + links | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s09 | table: Bus routes / Board or Alight (route + stop rows) | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-travel-to-school | s10 | table: School Special Bus routes / Board or Alight, 2 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-travel-to-school | s11 | h3 "School Excursions on the Opal network…" + h3 "Further Information" + paras + 2 links | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s12 | source `columns` on dark band: image + h3 "Apply for a travel pass" + para + link | M3 (Teaser / Text+Image) | source `columns` block: text beside one image → text + image teaser; layout: split, heading: h3, width: wide | mapped |
| school-life-travel-to-school | s13 | h2 "Driving and parking" + paras + 3-item list + h3 "Parking on school grounds" | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-travel-to-school | s14 | h2 "Need help getting to school?" + 2 paras with 2 links (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-travel-to-school | s15 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-travel-to-school | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-travel-to-school | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N4: the Google Maps embed (iframe + skip link) is a dynamic surface — carried as an embed/defer disposition, not static content. The "Location map" heading and both surrounding paragraphs stay.

## Judgment calls

- s12 is a dark-band `columns` (image + h3 + para + link): M3 text + image chosen over M4 because the image is half the block; the dark tone is not carried.
- s05/s08/s11 lead with h3 → heading role h3.
- s02 + s03 are the paragraphs either side of the removed map; kept as two slots (source wrappers) rather than merged.
