# Mapping brief — home (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Content model: `reskin/content-model/home/content-model.json` (scope `main`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (scope `header!,footer!`).
Vocabulary: `reskin/donor-modules.md` (M1–M10, Figma file rsZQmpVzuyn0KhCDA3WN60 v2408265627482005963).

Slot table — multi-page brief (one table for every page, `Page` = slug; `figma-gate --page <slug>` reads that page's rows). Home's rows are unchanged; school-life and learning-and-support-wellbeing rows were appended (their briefs follow below).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| home | s01 | h4 title + lede + "Why Choose Us?" link + photo | M1 (Home Hero Branded) | grey band, display heading, lede, one CTA, media right — same anatomy | mapped |
| home | s02 | h2 + 3 list items (image, h3, body, link) | M2 (Teaser / Card) | repeating image+title+body+link run → 3-up card grid | mapped |
| home | s03 | h2 + 2 paras + CTA + portrait | M3 (Teaser / Text + Image) | text column + image column with one CTA | mapped |
| home | s04 | image + h2 + para + link | M3 (Teaser / Text + Image) | image precedes heading → image-left variant | mapped |
| home | s05 | empty h3 + h2 + para + link (dark band in source) | M4 (CTA Banner) | short heading + body + single action on a contained band | mapped |
| home | s06 | h2 + 6 list items (icon image, h3 link, body, arrow glyph) | M2 (Teaser / Card) | 6 repeating cards → 3-up grid, two rows | mapped |
| home | s07 | h2 + 2 paras + "How to apply" + image | M4 (CTA Banner) | conversion band with thumbnail, heading, body, primary button | mapped |
| home | s08 | image + h2 + para + link | M3 (Teaser / Text + Image) | image + text split, image-left | mapped |
| home | s09 | h2 only (Facebook feed removed by N1) | M5 (Block Content) | lone heading in the text column | mapped |
| home | c01 | header: skip links, NSW logo, 4 nav items + Contact us | M9 (Header) | donor header carries source labels and hrefs | chrome |
| home | c02 | footer: email, feedback/policy/information links, logo | M10 (Footer) | donor footer carries source links | chrome |
| school-life | s01 | h1 "School life" only | M5 (Block Content) | lone page title in the text column — the kit's Title + Text element (title role 46/50 Lexia) | mapped |
| school-life | s02 | 14 list items (image, h2 link title, body, `east` arrow glyph) — source `card-container dark` | M2 (Teaser / Card) | repeating image + title + body + link run → card grid, 2-up as in the source's sidebar layout | mapped |
| school-life | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support-wellbeing | s01 | h1 "Wellbeing" + lede + photo | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero; no CTA in source | mapped |
| learning-and-support-wellbeing | s02 | h2 + paras + h3 + 5-item list + paras + h2 "Wellbeing and support staff" | M5 (Block Content) | free text column: headings, paragraphs, list | mapped |
| learning-and-support-wellbeing | s03 | table: 5 role / name rows (staff) | — (table) | no table in the kit; composed from donor tokens: type.body (Inter 18/28), palette.bodyFg, palette.lightBandBg (row rule / header band), palette.headingFg for emphasis, layout.columnGap, layout.containerMaxWidth | new-module |
| learning-and-support-wellbeing | s04 | h2 "Our Year Advisors" (table caption) | M5 (Block Content) | lone title of the next table | mapped |
| learning-and-support-wellbeing | s05 | table: header row (Year Group / Adviser / Assistant Adviser) + 6 rows | — (table) | as s03 (same token composition) | new-module |
| learning-and-support-wellbeing | s06 | accordion ×2 (Student Support Officers, Counselling Service) with long panels (h2/h3, paras, 33 resource links as `a.button`) | M8 (Accordion) | stacked disclosure rows: title + chevron, body | mapped |
| learning-and-support-wellbeing | s07 | h2 "Wellbeing Framework" + paras + 5-item list + framework diagram image | M5 (Block Content) | text column; the diagram is an in-flow figure, not a split media | mapped |
| learning-and-support-wellbeing | s08 | accordion ×4 (Aboriginal student support, Multicultural education, Anti-bullying, Student leadership) | M8 (Accordion) | as s06 | mapped |
| learning-and-support-wellbeing | s09 | h1 "Student Health" + 3 paras | M5 (Block Content) | text column (second h1 on the page, carried at h1) | mapped |
| learning-and-support-wellbeing | s10 | accordion ×2 (First Aid and Sick Bay, Medication) | M8 (Accordion) | as s06 | mapped |
| learning-and-support-wellbeing | s11 | h2 + para + "Contact us" link (source dark brand band) | M4 (CTA Banner) | short heading + body + single action on a band — light CTA banner, as home s05 | mapped |
| learning-and-support-wellbeing | s12 | 2 list items (title link, body, `east` glyph), no images — source `card-container horizontal` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less) | mapped |
| learning-and-support-wellbeing | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-wellbeing | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us | s01 | h1 "About us" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us | s02 | 7 list items, 7 images, 7 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — source `card-container` (image cards); repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-enrol | s01 | h1 "Application and enrolment information" + 4 paras | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-enrol | s02 | accordion ×3 (3102 chars, 6 links) | M8 (Accordion) | stack; stacked disclosure rows: title + chevron, body (N3 all-open) — as wellbeing s06/s08/s10 | mapped |
| about-us-enrol | s03 | h2 "Visit us before you enrol" + 1 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-enrol | s04 | h2 "Open Days" + h4 "Monday March 2, 2026 - 4pm - 6pm" + h4 "Wednesday May 27 – School tours – 9.30am" + +1 headings + 9 paras + 1 link | M5 (Block Content) | stack, h2 — source dark brand band (long: 4 h4 dates + 1054 chars → text band, not a CTA banner); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s05 | h2 "Orientation Days" + 2 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s06 | 1 paras | M5 (Block Content) | stack, h2 — intro line of the removed video embed (N4); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-enrol | s07 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-enrol | s08 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-enrol | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-enrol | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-facilities-and-resources | s01 | h1 "Facilities and resources" + 1 paras | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-facilities-and-resources | s02 | h2 "Our school facilities" + h2 "Resources and technology" + 2 paras + 10-item list | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-facilities-and-resources | s03 | 13 list items, 13 images (source `gallery`) | — (gallery) | stack, no module — source `gallery` (nsw-carousel, 13 slides); no gallery/carousel in the kit; new-module gallery composed from donor tokens (type.body caption, palette.bodyFg, layout.columnGap, layout.containerMaxWidth) — slides rendered statically in DOM order (N6) | new-module |
| about-us-facilities-and-resources | s04 | h1 "Hiring our facilities" + 3 paras + 1 image + 2 links | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; second h1 on the page carried; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-facilities-and-resources | s05 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-facilities-and-resources | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-facilities-and-resources | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-hsc-results | s01 | h1 "HSC results" + h2 "Dux of Fort Street 2025" + h2 "2025 Top All Rounders" + 6 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-hsc-results | s02 | table: 18 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s03 | h2 "Top Achievers (State Ranking)" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s04 | table: 10 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s05 | h2 "HSC Showcases" + h3 "Encore - Music" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s06 | table: 12 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s07 | h3 "Artexpress - Visual Art" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s08 | table: 2 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s09 | h3 "OnStage - Drama" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s10 | table: 20 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s11 | h3 "SHAPE - Design and Technology" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s12 | table: 3 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s13 | h3 "Science Extension" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-hsc-results | s14 | table: 3 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-hsc-results | s15 | h2 "HSC Distinguished Achievers" + h3 "129 students achieved a mark of 90 or ab" + 137 paras | M5 (Block Content) | stack, h2 — source dark brand band (8947 chars of names → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-hsc-results | s16 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-hsc-results | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-hsc-results | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-our-principal-and-staff | s01 | h1 "Our principal and staff" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us-our-principal-and-staff | s02 | h2 "Welcome from our principal" + 10 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-our-principal-and-staff | s03 | h2 "School Staff for 2025" + 3 paras + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s04 | h2 "Senior Executive" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s05 | table: 6 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s06 | h2 "Our executive team" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s07 | table: 22 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s08 | h2 "Our Year Advisors" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s09 | table: 21 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s10 | h3 "Our teachers make the difference" | M5 (Block Content) | stack, h3; lone sub-heading (table caption) in the text column — carried at its level, h3 role | mapped |
| about-us-our-principal-and-staff | s11 | 4 list items, no images, 4 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — 4 image-less cards; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-our-principal-and-staff | s12 | h2 "Wellbeing and support staff" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s13 | table: 10 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s14 | h2 "Administrative and operations staff" + 1 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-our-principal-and-staff | s15 | table: 26 cells | — (table) | stack, no module; no table in the kit; the content archetype's granted table new-module (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth) — as wellbeing s03/s05 | new-module |
| about-us-our-principal-and-staff | s16 | h2 "Have a question for our principal or tea" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-our-principal-and-staff | s17 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-our-principal-and-staff | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-our-principal-and-staff | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-policies-and-reports | s01 | h1 "Our policies and reports" + 2 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-policies-and-reports | s02 | h2 "Annual school report" + 2 paras + 4-item list | M5 (Block Content) | stack, h2 — report widget removed (N5); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s03 | h2 "School excellence plan" + 5 paras + 1 link | M5 (Block Content) | stack, h2 — plan widget removed (N5); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s04 | h2 "School behaviour support and management " + 2 paras + 1 link | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s05 | h2 "School policies" | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports | s06 | accordion ×3 (3123 chars, 6 links) | M8 (Accordion) | stack; stacked disclosure rows: title + chevron, body (N3 all-open) — as wellbeing s06/s08/s10 | mapped |
| about-us-policies-and-reports | s07 | h2 "Have a question about a policy or a repo" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-policies-and-reports | s08 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-policies-and-reports | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-policies-and-reports | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-policies-and-reports-nsw-public-school-information | s01 | h1 "NSW public school information" + 1 paras + 1 link | M1 (Home Hero Branded) | stack, light, display, bleed; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s02 | h2 "Understanding school policies" + 4 paras + 1 link | M5 (Block Content) | stack, h2 — source dark brand band (4 paragraphs → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s03 | h2 "Have a question?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | s04 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-policies-and-reports-nsw-public-school-information | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-policies-and-reports-nsw-public-school-information | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-school-history-and-archives | s01 | h1 "School history and archives" | M5 (Block Content) | stack, h2; lone page title in the text column — as school-life s01 | mapped |
| about-us-school-history-and-archives | s02 | 1 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns` (text, image); source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-school-history-and-archives | s03 | 4 paras | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s04 | 4 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source `columns` (image first); source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-school-history-and-archives | s05 | 5 paras + 2 images | M5 (Block Content) | stack, h2 — 2 in-flow photos inside <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s06 | h2 "Fort Street Archives and Museum" + 4 paras + 9-item list + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives | s07 | h6 "Fort Street Cricket Team 1896" + 1 paras + 1 image | M5 (Block Content) | stack, h4 — photo + h6 caption; in-flow figure with its caption heading — smallest heading role (h4) | mapped |
| about-us-school-history-and-archives | s08 | h2 "For more information" + 1 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives | s09 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-school-history-and-archives-fort-street-archives | s01 | h1 "Fort Street Archives" + h2 "Donations" + h2 "Financial Donations" + +4 headings + 18 paras + 8-item list + 3 images + 15 links | M5 (Block Content) | stack, h2 — long article under the h1 (3896 chars, 6 h2s, 3 in-flow photos) → text column, not a hero; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives-fort-street-archives | s02 | h2 "For more information" + 1 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives-fort-street-archives | s03 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives-fort-street-archives | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives-fort-street-archives | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-school-history-and-archives-the-fort-street-museum | s01 | h1 "The Fort Street Museum" + h2 "The Ron Horan Museum" + h3 "Who is Ron Horan and why is there a muse" + 7 paras + 2 images | M5 (Block Content) | stack, h2 — long article under the h1 (2072 chars, h2/h3, 2 in-flow photos) → text column, not a hero; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | s02 | h2 "For more information" + 1 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | s03 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives-the-fort-street-museum | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives-the-fort-street-museum | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-school-history-and-archives-the-fortian-digitised | s01 | h1 "The Fortian Digitised" + 3 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-school-history-and-archives-the-fortian-digitised | s02 | accordion ×13 (6840 chars, 213 links) | M8 (Accordion) | stack — 13 decade accordions, 213 issue links; stacked disclosure rows: title + chevron, body (N3 all-open) — as wellbeing s06/s08/s10 | mapped |
| about-us-school-history-and-archives-the-fortian-digitised | s03 | h2 "Interested in visiting our school?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-school-history-and-archives-the-fortian-digitised | s04 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-school-history-and-archives-the-fortian-digitised | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-school-history-and-archives-the-fortian-digitised | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-stories-and-highlights | s01 | h1 "Stories and highlights" + h2 "A year at our school" + 1 paras | M1 (Home Hero Branded) | stack, light, display, bleed — h2 "A year at our school" introduces the gallery; page hero without media: grey band, display title, lede — M1 with the media column dropped (stack) | mapped |
| about-us-stories-and-highlights | s02 | 21 list items, 21 images (source `gallery`) | — (gallery) | stack, no module — source `gallery` (nsw-carousel, 21 slides); no gallery/carousel in the kit; new-module gallery composed from donor tokens (type.body caption, palette.bodyFg, layout.columnGap, layout.containerMaxWidth) — slides rendered statically in DOM order (N6) | new-module |
| about-us-stories-and-highlights | s03 | 4 paras | M5 (Block Content) | stack, h2 — source off-white band (testimonial quote, no heading → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-stories-and-highlights | s04 | h2 "Discover more highlights" + 1 paras | M5 (Block Content) | stack, h2 — Facebook feed removed (N1), as home s09; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-stories-and-highlights | s05 | h2 "Have a story to share?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-stories-and-highlights | s06 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-stories-and-highlights | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-stories-and-highlights | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-transition-to-high-school | s01 | h1 "Transition to high school" + 3 paras + 1 image + 1 link | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-transition-to-high-school | s02 | h2 "What to expect in high school" + h2 "Before your child starts at Fort Street " + h3 "Getting ready at home" + +2 headings + 8 paras + 24-item list + 10 links | M5 (Block Content) | stack, h2; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-transition-to-high-school | s03 | h2 "Year 7 orientation" + 4 paras + 1 image | M3 (Teaser / Text + Image) | split, h3 — source dark brand band, source `columns`; source columns block: text column + image column — split row, image side as authored (as home s03/s04/s08) | mapped |
| about-us-transition-to-high-school | s04 | h2 "Have a question for us?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-transition-to-high-school | s05 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-transition-to-high-school | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-transition-to-high-school | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| about-us-why-choose-us | s01 | h1 "Why choose us?" + 3 paras + 1 image | M1 (Home Hero Branded) | split, light, display, bleed — photo sits inside a <p>; page hero: grey band, display title, lede, media right — as wellbeing s01 | mapped |
| about-us-why-choose-us | s02 | h2 "Our vision" + 3 paras + 5-item list | M5 (Block Content) | stack, h2 — source dark brand band (922 chars + list → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s03 | h2 "Take a virtual tour with our Student Lea" | M5 (Block Content) | stack, h2 — lone h2; its video embed removed (N4); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s04 | 3 paras + 1 image | M5 (Block Content) | stack, h2 — in-flow photo inside a <p>; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s05 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source off-white band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-why-choose-us | s06 | h2 "What families value about Fort Street" | M5 (Block Content) | stack, h2 — lone h2 introducing the cards; free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s07 | 4 list items, 4 images, 4 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3 — 4 image cards; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-why-choose-us | s08 | 3 paras | M5 (Block Content) | stack, h2 — source off-white band (testimonial quote → text band); free text column: headings, paragraphs, lists, in-flow figures — as wellbeing s02/s07 | mapped |
| about-us-why-choose-us | s09 | h2 "Ready to apply?" + 2 paras + 1 link | M4 (CTA Banner) | stack, light, h3, bleed — source dark brand band; short heading + body + single action on a band — light CTA banner, as wellbeing s11 / home s05 | mapped |
| about-us-why-choose-us | s10 | 2 list items, no images, 2 links (source `card-container`) | M2 (Teaser / Card) | cards, 2 columns, h3; repeating title + body + link run → card grid, 2-up — as school-life s02 / wellbeing s12 | mapped |
| about-us-why-choose-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| about-us-why-choose-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| contact-us | s01 | h1 "Contact us" + 2 para(s) + 5 list item(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| contact-us | s02 | h2 "Call, email or visit us" + 4 para(s) + 1 image(s) + 2 link(s) — source `columns` | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| contact-us | s03 | h2 "Location map" + 1 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; the map iframe is removed by N5, the heading + street address carry the content | mapped |
| contact-us | s04 | h2 "Check if you're in our local intake area" + 1 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s05 | h2 "Book a tour" + 4 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s06 | h2 "Need an interpreter?" + 2 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| contact-us | s07 | h2 "Have a concern or feedback?" + 2 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| contact-us | s08 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| contact-us | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| contact-us | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support | s01 | h1 "Learning and support" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support | s02 | 4 para(s) + 4 list item(s) + 4 image(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support-additional-learning-support | s01 | h1 "Additional learning support" + 1 para(s) + 1 image(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-additional-learning-support | s02 | h2 "Learning Support at Fort Street" + 1 more heading(s) + 6 para(s) + 16 list item(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-additional-learning-support | s03 | h2 "Contact" + 5 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-additional-learning-support | s04 | h2 "Homework and the Study Centre" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-additional-learning-support | s05 | 2 para(s) + 1 image(s) + 1 link(s) — source `columns` | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| learning-and-support-additional-learning-support | s06 | h2 "What is the Study Centre?" + 3 more heading(s) + 34 para(s) + 23 list item(s) + 1 link(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-additional-learning-support | s07 | 2 para(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); a two-paragraph quote on the dark band, no heading/action — carried as a light band | mapped |
| learning-and-support-additional-learning-support | s08 | h2 "Have a question about learning support?" + 2 para(s) + 1 link(s) (source off-white band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-additional-learning-support | s09 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-additional-learning-support | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-additional-learning-support | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support-careers | s01 | h1 "Careers" + 1 more heading(s) + 8 para(s) + 13 list item(s) + 1 image(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; the source h1 is followed by an empty h1 wrapping a picture — the image is carried in-flow | mapped |
| learning-and-support-careers | s02 | h2 "Careers Expo" + 2 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-careers | s03 | 8 para(s) + 8 list item(s) + 8 image(s) — source `gallery` | — (gallery) | no gallery/carousel in the kit; de-carouselled by N4 and rendered as an in-flow stack of figures on donor tokens | new-module |
| learning-and-support-careers | s04 | h2 "For more information" + 1 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-careers | s05 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-careers | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-careers | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support-high-potential-and-gifted-education | s01 | h1 "Inspire – High potential and gifted education" + 2 para(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-high-potential-and-gifted-education | s02 | h2 "Why choose us for your high potential or gifted child?" + 1 image(s) | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split; lone h2 + image → split (heading column + media) | mapped |
| learning-and-support-high-potential-and-gifted-education | s03 | 3 para(s) + 11 list item(s) (source off-white band) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; off-white band of paragraphs + two lists — long body text, so the text column rather than a CTA banner | mapped |
| learning-and-support-high-potential-and-gifted-education | s04 | h2 "What is high potential and gifted education?" + 1 more heading(s) + 3 para(s) + 3 list item(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-high-potential-and-gifted-education | s05 | 10 list item(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-high-potential-and-gifted-education | s06 | 4 para(s) + 4 list item(s) + 4 image(s) — source `gallery` | — (gallery) | no gallery/carousel in the kit; de-carouselled by N4 and rendered as an in-flow stack of figures on donor tokens | new-module |
| learning-and-support-high-potential-and-gifted-education | s07 | h2 "Help for your high potential child" + 2 para(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| learning-and-support-high-potential-and-gifted-education | s08 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-high-potential-and-gifted-education | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-high-potential-and-gifted-education | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| learning-and-support-learning | s01 | h1 "Learning" + 4 para(s) + 1 image(s) + 1 link(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| learning-and-support-learning | s02 | h2 "Why choose us for your child’s learning?" | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s03 | 4 para(s) + 4 list item(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-learning | s04 | h2 "What students learn" + 3 para(s) + 2 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s05 | h2 "Stage 4: Years 7 and 8" + 28 more heading(s) + 65 para(s) + 83 list item(s) + 12 link(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06) | mapped |
| learning-and-support-learning | s06 | h2 "Our learning approach" + 3 para(s) + 4 list item(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s07 | h2 "Helping students progress" + 2 para(s) + 8 list item(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| learning-and-support-learning | s08 | 2 para(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); two-paragraph quote on the dark band | mapped |
| learning-and-support-learning | s09 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| learning-and-support-learning | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| learning-and-support-learning | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community | s01 | h1 "Our Community" + 1 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community | s02 | 4 para(s) + 4 list item(s) + 4 image(s) + 4 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community | s03 | h2 "Have a question for our principal or teachers?" + 2 para(s) + 1 link(s) (source off-white band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community | s04 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community-alumni | s01 | h1 "Alumni" + 3 more heading(s) + 9 para(s) + 20 list item(s) + 1 image(s) + 2 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; long body with sub-headings and an in-flow photo | mapped |
| our-community-alumni | s02 | h2 "Share your story" + 2 para(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community-alumni | s03 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-alumni | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-alumni | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community-fortians-union | s01 | h1 "The Fortians Union" + 5 para(s) + 3 list item(s) + 1 link(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| our-community-fortians-union | s02 | h2 "Faber Est" + 2 more heading(s) + 5 para(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-fortians-union | s03 | h2 "Keep in Touch" + 2 list item(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); two contact links as a list on the dark band | mapped |
| our-community-fortians-union | s04 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-fortians-union | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-fortians-union | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community-foundation | s01 | h1 "The Fort Street Foundation" + 4 more heading(s) + 18 para(s) + 14 list item(s) + 4 image(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links; long body with sub-headings and in-flow photos (one source `<img src="about:error">` is authored garbage) | mapped |
| our-community-foundation | s02 | 1 para(s) + 1 image(s) — source `columns` (source off-white band) | M3 (Teaser / Text + Image) | heading + text with an image column → text + image split | mapped |
| our-community-foundation | s03 | 19 para(s) — source `table` | — (table) | no table in the kit; composed from donor tokens (type.body, palette.bodyFg, palette.lightBandBg row rules, layout.columnGap) as wellbeing s03/s05 | new-module |
| our-community-foundation | s04 | h2 "Minutes" + 1 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-foundation | s05 | h2 "Reunions" + 2 para(s) + 2 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community-foundation | s06 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-foundation | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-foundation | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community-foundation-tertiary-bursaries | s01 | h1 "Fort Street Foundation Tertiary Bursary Application" + 1 more heading(s) + 3 para(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-foundation-tertiary-bursaries | s02 | h3 "How to Apply" + 4 more heading(s) + 8 para(s) + 7 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links (leading heading is h3 → heading role h3) | mapped |
| our-community-foundation-tertiary-bursaries | s03 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-foundation-tertiary-bursaries | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-foundation-tertiary-bursaries | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| our-community-pandc | s01 | h1 "Parents and Citizens Association (P&C)" + 4 para(s) + 4 list item(s) + 1 image(s) | M1 (Home Hero Branded) | page hero: display title + lede (+ list/photo), no sub-headings — light grey band, as wellbeing s01 | mapped |
| our-community-pandc | s02 | h2 "P&C FUNDRAISER" + 4 para(s) + 1 link(s) (source brand-light band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11); fundraiser band with a bare 57-character URL as link text (see residual) | mapped |
| our-community-pandc | s03 | h3 "P&C Contribution" + 2 more heading(s) + 2 para(s) + 1 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links (leading heading is h3 → heading role h3) | mapped |
| our-community-pandc | s04 | 15 para(s) — source `table` | — (table) | no table in the kit; composed from donor tokens (type.body, palette.bodyFg, palette.lightBandBg row rules, layout.columnGap) as wellbeing s03/s05 | new-module |
| our-community-pandc | s05 | h3 "P&C Representatives and Sub-committee Coordinators" | M5 (Block Content) | free text column: headings, paragraphs, lists, links (leading heading is h3 → heading role h3) | mapped |
| our-community-pandc | s06 | 12 para(s) — source `table` | — (table) | no table in the kit; composed from donor tokens (type.body, palette.bodyFg, palette.lightBandBg row rules, layout.columnGap) as wellbeing s03/s05 | new-module |
| our-community-pandc | s07 | h2 "Governance" + 4 more heading(s) + 14 para(s) + 3 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links | mapped |
| our-community-pandc | s08 | 14 para(s) + 14 link(s) — source `accordions` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (as wellbeing s06); 14 document-link rows | mapped |
| our-community-pandc | s09 | h3 "Membership" + 7 para(s) + 2 link(s) | M5 (Block Content) | free text column: headings, paragraphs, lists, links (leading heading is h3 → heading role h3) | mapped |
| our-community-pandc | s10 | h2 "Volunteer at our school" + 4 para(s) + 3 list item(s) + 1 link(s) (source brand-dark band) | M4 (CTA Banner) | short heading + body (+ action) on a source colour band — light CTA banner (home rule: dark bands take the light CTA band, as home s05 / wellbeing s11) | mapped |
| our-community-pandc | s11 | 2 para(s) + 2 list item(s) + 2 link(s) — source `card-container` | M2 (Teaser / Card) | repeating title + body + link run → card grid, 2-up as in the source | mapped |
| our-community-pandc | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| our-community-pandc | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-bell-times | s01 | h1 "Bell times" + 2 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-bell-times | s02 | h2 "Our bell times" + 1 para + 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bell-times | s03 | h1 "Attendance" + 3 more heading(s) + 15 para + 5 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bell-times | s04 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-bell-times | s05 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-bell-times | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-bell-times | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-bring-your-own-device | s01 | h1 "Bring your own device" + 2 para + 1 image(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-bring-your-own-device | s02 | h2 "Introduction" + 1 more heading(s) + 3 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s03 | h2 "What things should you look for in a dev…" + 4 para + 12 list item(s) + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s04 | h2 "Access to the department’s Wi-Fi network…" + 1 more heading(s) + 4 para + 6 list item(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-bring-your-own-device | s05 | h2 "Need help with your device?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-bring-your-own-device | s06 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-bring-your-own-device | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-bring-your-own-device | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-canteen | s01 | h1 "Canteen" + 5 para + 1 image(s) + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-canteen | s02 | h2 "How to setup your Flexischools account" + 3 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s03 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s04 | h2 "Cancelling your order" + 1 more heading(s) + 6 para + 2 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-canteen | s05 | h2 "Contact the Canteen" + 1 para — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-canteen | s06 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-canteen | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-canteen | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
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
| school-life-forms | s01 | h1 "Forms" + 3 para — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-forms | s02 | 10 para + 4 link(s) — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-forms | s03 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-forms | s04 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-forms | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-forms | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-house-and-merit-system | s01 | h1 "Merit System" + 5 para — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-house-and-merit-system | s02 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s03 | h2 "House System" + 1 more heading(s) + 10 list item(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s04 | h2 "Sport Houses" + 1 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-house-and-merit-system | s05 | h3 "Joshi (Ruby)" + 4 more heading(s) + 15 para + 5 image(s) — source `columns-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-house-and-merit-system | s06 | h2 "Need help with attendance?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-house-and-merit-system | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-house-and-merit-system | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-house-and-merit-system | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-lockers-and-lost-property | s01 | h1 "Lockers and lost property" + 3 more heading(s) + 5 para + 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-lockers-and-lost-property | s02 | 10 para — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-lockers-and-lost-property | s03 | h2 "Lost Property" + 1 more heading(s) + 5 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-lockers-and-lost-property | s04 | h2 "Have a question for us?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-lockers-and-lost-property | s05 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-lockers-and-lost-property | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-lockers-and-lost-property | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-newsletters | s01 | h1 "Newsletters" + 3 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-newsletters | s02 | h2 "Latest newsletter" + 3 para + 1 image(s) + 1 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-newsletters | s03 | h2 "Previous newsletters" — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-newsletters | s04 | 13 para + 19 link(s) — source `accordions-wrapper` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (accordions normalized all-open, N3) (layout=stack, width=wide) | mapped |
| school-life-newsletters | s05 | h2 "Have something to share?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-newsletters | s06 | h2 "Stay connected on our socials" + 1 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-newsletters | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-newsletters | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-newsletters | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-parent-portal | s01 | h1 "Parent portal" + 1 para + 4 list item(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-parent-portal | s02 | h2 "Our parent portal apps" + 1 more heading(s) + 3 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s03 | h3 "Sentral" + 4 para + 1 image(s) + 2 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-parent-portal | s04 | h2 "School Bytes" + 1 para + 1 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s05 | h3 "School Bytes" + 4 para + 1 image(s) + 2 link(s) — source `columns-wrapper` | M3 (Text + Media split) | source columns-wrapper (text beside image) → split, heading h3 (layout=split, heading=h3, width=wide) | mapped |
| school-life-parent-portal | s06 | h2 "Other communications" + 5 more heading(s) + 5 para + 3 link(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-parent-portal | s07 | h2 "Need help with our parent portal apps?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-parent-portal | s08 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-parent-portal | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-parent-portal | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-stationery | s01 | h1 "Stationery" + 3 para + 1 link(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-stationery | s02 | 1 image(s) — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-stationery | s03 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-stationery | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-stationery | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities | s01 | h1 "Student opportunities and activities" + 7 para + 9 list item(s) + 3 image(s) — source `default-content-wrapper` | M1 (Home Hero Branded) | grey band, display title, lede, media right — the page hero (archetype s01 rule: h1 + lede, no sub-headings) (layout=split, tone=light, heading=display, bleed=true, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s02 | h2 "Schedule of Weekly activities 2025" — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s03 | 51 para — source `table-wrapper` | — (table) | no table in the kit; composed from donor tokens as archetype s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); rendered as a stack (renderer residual: tables → paragraph stack) (layout=stack, width=wide) | new-module |
| school-life-student-opportunities-and-activities | s04 | h3 "Language Cultural Tours" + 1 more heading(s) + 7 para + 1 image(s) — source `accordions-wrapper` | M8 (Accordion) | stacked disclosure rows: title + chevron, body (accordions normalized all-open, N3) (layout=stack, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s05 | 2 para — source `default-content-wrapper` | M5 (Block Content) | free text column: headings, paragraphs, lists, in-flow figures (layout=stack, heading=h2, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s06 | h2 "Need to make a payment?" + 2 para + 1 link(s) — source `default-content-wrapper` | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band → light CTA banner (archetype s11) (layout=stack, tone=light, heading=h3, bleed=true, width=wide) | mapped |
| school-life-student-opportunities-and-activities | s07 | 2 list item(s) + 2 link(s) — source `card-container-wrapper` | M2 (Teaser / Card) | repeating title + body + link → cards (layout=cards, columns=2, heading=h3, width=wide) | mapped |
| school-life-student-opportunities-and-activities | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-academic-competitions | s01 | h1 "Academic Competitions" + photo + h2/h3/h4 competition entries (Mathematics …), paragraphs, 3-item list | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-academic-competitions | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-academic-competitions | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-academic-competitions | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-academic-competitions | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-clubs-and-committees | s01 | h1 "Clubs and Committees" + photo + h2 + 10 h3 club entries with paragraphs | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-clubs-and-committees | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-clubs-and-committees | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | s01 | h1 "Creative and Performing Arts" + photo + 4 h2 entries (Art Studio, Drama Club, Theatre Sports, Senior Drama Production) with paragraphs | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-creative-and-performing-arts | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s01 | h1 "Debating and Public Speaking" + 5 paragraphs + photo | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
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
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s01 | h1 "Robotics and Maker Society" + paras + photo + h2 "Maker Society" + paras + 4-item list | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-robotics-and-maker-society | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-sport | s01 | h1 "Sport" + photo + 4 h2 entries (Knock Out Sport, Fitness Club, Running Club, Before and After School …) + paras + 11-item lists | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s02 | table: header row (Sport / When / Where / With who, as h3) + 7 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-student-opportunities-and-activities-sport | s03 | 2 paragraphs after the table (no heading) | M5 (Block Content) | continuation text of the previous block (no heading); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s04 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | s05 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-sport | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-sport | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s01 | h1 "Student Leadership Opportunities" + photo + h2 "Student Representative Council" + paras | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s02 | accordion ×2 (SRC Pledge, Fundraising activities) | M8 (Accordion) | stacked disclosure rows: title + chevron, body (N3 opens every panel), as wellbeing s06; layout: stack, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s03 | h2 "Peer Support" + 2 paras (source dark brand band, no action) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s04 | h2 "Duke of Edinburgh Leadership" + 2 paras | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s05 | h2 "University Programs" + 3 paras (source off-white band) | M5 (Block Content) | free text column: headings, paragraphs, lists; layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | s06 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-student-leadership-opportunities | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
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
| school-life-uniform | s01 | h1 "Uniform" + photo + paras + 4-item list + 2 links | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform | s02 | h2 "Uniform gallery" | M5 (Block Content) | lone section title of the next block; layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform | s03 | gallery: 10 captioned uniform photos (source NSW carousel, de-carouselled by N5) | — (gallery) | no gallery in the kit (archetypes-report § Source blocks with no Figma module); slides rendered statically in DOM order (N5); layout: stack, width: wide | new-module |
| school-life-uniform | s04 | accordion ×2 (Helpful uniform hints, Uniform Exemptions; panel holds h3 "Out of Uniform Process" + 15 list items) | M8 (Accordion) | stacked disclosure rows: title + chevron, body (N3 opens every panel), as wellbeing s06; layout: stack, width: wide | mapped |
| school-life-uniform | s05 | h2 "Want to donate your old school uniforms?" + para + "Contact us" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-uniform | s06 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-uniform | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-uniform | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |
| school-life-uniform-uniform-shop | s01 | h1 "Uniform Shop" + photo + 4 h2 entries (Ordering Uniforms online, Exchanges and refunds, Second Hand Uniform Stall, Price list) + paras + link | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform-uniform-shop | s02 | table: Girls / Price, 6 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s03 | table: Boys / Price, 6 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s04 | table: Sports Uniform / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s05 | table: Winter Uniform / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s06 | table: Instrumental Music Program / Price, 3 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s07 | table: General Items / Price, 5 rows | — (table) | no table in the kit; composed from donor tokens as wellbeing s03/s05 (type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth); layout: stack, width: wide | new-module |
| school-life-uniform-uniform-shop | s08 | h2 "Want to donate your old school uniforms?" + para (source dark brand band, no action) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-uniform-uniform-shop | s09 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-uniform-uniform-shop | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-uniform-uniform-shop | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Stats

- Content slots: 9 · mapped 9 · new-module 0 · carried-invisible 0 → **mapped ratio 100%** (bar ≥ 80%).
- New modules: none.
- Chrome: 2 (D1, D2).

## Deltas

- **D1 header** — source NSW header replaced by the M9 composition; every link label and href from `_chrome` s01 carried (skip links, NSW Government, About us, School life, Learning and support, Our community, Contact us). Out of content-gate scope.
- **D2 footer** — source footer replaced by the M10 composition carrying the email and the three education.nsw.gov.au links. Out of content-gate scope.
- **N-D1** — default consent-chrome entry from `DEFAULT_LEDGER`.
- **N1** — `main .facebook-feed`, `.facebook-feed-wrapper` removed: a live third-party Facebook embed (dynamic, not authorable content). The "Stay connected on our socials" heading stays.
- **N2** — `main .back-to-top` removed: a page utility, re-provided by the donor's own back-to-top pattern if needed.

## Casing policy

Captured text is rendered-case. No `text-transform` is added; the donor uses sentence case and so does the source.

## Icon ligatures

Material Icons ligature names (`east` after quick-link cards, `keyboard_arrow_right` in nav) — **carry as text** (byte fidelity default). Judgment call: `east` will render as a literal word in the gated prototype; the EDS blocks hide it visually with an arrow glyph (decoration, same bytes).

## Judgment calls

1. s01's title is an `h4` in the source (no h1 in `main`): carried at h4, rendered in the display role (`heading: display`). Flag: the source page has no h1.
2. s05 has an empty `h3` in the source — carried verbatim (flag, don't fix).
3. Source dark bands (s05, s07) — donor has no dark text band; both take the light CTA band — the kit CTA Banner is light (plum heading on white); s07 was first mapped dark and moved to light in the gate (d) fix iteration.
4. Card titles take the donor h3 role (26px Lexia) per contract.
5. Lexia is licensed and not served; `Lexia, Georgia, serif` keeps the token string with a system serif fallback.

---

# Mapping brief — school-life (archetype for page type `section`)

Content model: `reskin/content-model/school-life/content-model.json` (scope `main`, 2 slots, 14 images).
Page type: `section` — the section-index template (`/about-us`, `/school-life`, `/learning-and-support`, `/our-community`: h1 + card-container of child-page links). Named `section`, not `landing`, because `state.json` already types `home` as `landing` and `handoff.<type>` keys one archetype per type.
Chrome model: shared `_chrome` (header s01 / footer s02, as home).

Slot rows: the slot table at the top of this file (multi-page brief, `Page` = `school-life`; reference/mapping-brief.md § Entry schema).

## Stats

- Content slots: 2 · mapped 2 · new-module 0 · carried-invisible 0 → **mapped ratio 100%** (bar ≥ 80%).
- New modules: none.
- Chrome: 2 (D1, D2) + D3 (section sidebar), D4 (breadcrumb).

## Deltas

- **D1 / D2** — header and footer, as home.
- **D3 section sidebar** — `aside.nsw-layout__sidebar` ("Section navigation" + the section's child-page links) sits outside `main`, is generated by the source's `sidebar` block from the nav (absent from the authored `.plain.html`) → navigation chrome, out of the content-gate scope. Not rendered in the prototype (the renderer's chrome is header + footer only); the deploy must provide a section nav from the site nav if it is kept.
- **D4 breadcrumb** — `nav.nsw-breadcrumbs` (Home › School life) outside `main`, generated → chrome, out of scope, not rendered.
- **N-D1 / N-D2** — default consent-chrome and de-carousel entries (no-ops here). **N2** — `main .back-to-top` removed.

## Casing policy

Rendered-case carried verbatim; no `text-transform` added (source and donor both sentence/title case as authored).

## Icon ligatures

Material Icons `east` after each card is carried as text (byte fidelity), as on home.

## Judgment calls

1. Scope `main` yields 2 slots and the capturer warns "wrapper-scope smell" (one slot carries 99%). Not a wrapper: the page really is two sections (title band + one card-container), confirmed against `source-full.png` — no deeper scope exists that splits real sections.
2. Card titles are `h2` links in the source; they keep their level and take the donor card-title role (type.h3) per the renderer contract.
3. Source cards are dark plum tiles (`card-container dark`); the donor M2 card is a light card (image, magenta title, body) — the donor surface wins (reskin).
4. 14 cards is not a multiple of 3 → `columns: 2` (the source's own 2-up grid inside the sidebar layout).

---

# Mapping brief — learning-and-support-wellbeing (archetype for page type `content`)

Content model: `reskin/content-model/learning-and-support-wellbeing/content-model.json` — 12 atomic slots from a multi-scope (one `!` scope per wrapper: `main > div:nth-child(k) > div:nth-child(j)!`, list in `.work/reskin/wellbeing-scope.txt`); same 14312 chars as scope `main`, which gave 7 composite sections (s02 held text + 2 tables + an accordion).
Page type: `content` — `page-template` pages (47): default content + accordions / tables / columns / gallery / embed / card-container.
Chrome model: shared `_chrome`.

Slot rows: the slot table at the top of this file (multi-page brief, `Page` = `learning-and-support-wellbeing`; reference/mapping-brief.md § Entry schema).

## Stats

- Content slots: 12 · mapped 10 · new-module 2 · carried-invisible 0 → **mapped ratio 83%** (bar ≥ 80%).
- New modules: **table** (s03, s05) — composed from donor tokens type.body, palette.bodyFg, palette.lightBandBg, palette.headingFg, layout.columnGap, layout.containerMaxWidth; no Figma frame, so no (d) root (skipped with a why).
- Chrome: 2 (D1, D2) + D3 (section sidebar), D4 (breadcrumb).

## Deltas

- **D1 / D2** — header and footer, as home. **D3 / D4** — section sidebar and breadcrumb, as school-life.
- **N-D1 / N-D2** — defaults. **N2** — `main .back-to-top` removed.
- **N3** — accordions normalized all-open (`hidden="until-found"` dropped from every `.nsw-accordion__content`): collapsed panels are authored content absent from `innerText`; scope `main` without N3 captured 4033 chars, with N3 14312 — the closed accordions hid 72% of the page. The prototype renders every item open (title, then panel) in DOM order.

## Casing policy

Rendered-case carried verbatim; no `text-transform` added.

## Icon ligatures

`keyboard_arrow_down` (accordion chevrons) and `east` (card arrows) carried as text (byte fidelity). The deploy hides them behind real glyphs (same bytes).

## Judgment calls

1. Two `h1`s in the source (`Wellbeing`, `Student Health`) — carried verbatim (flag, don't fix).
2. Tables (s03, s05) have no donor module → `new-module`. The renderer has no table node: cells are captured as paragraphs (`td` → `paragraph`) and render as a paragraph stack — text and order are byte-exact, the grid is lost in the prototype (renderer residual; the deploy builds a table block from the token composition above).
3. Accordions (s06, s08, s10) map to M8, but stream-render has no disclosure layout: an accordion title is bare text inside a `<button>` and renders as a donor `.btn` (the first of each slot primary, the rest secondary), its chevron ligature as a second button. Renderer residual — the deploy builds the M8 accordion block (Lexia 36/40 plum title, chevron, 1px rule, Block Element panel).
4. The 33 resource links in s06 are `a.button.primary` in the source → they render as donor buttons (`.btn` / `.btn-secondary`), faithful to the source's intent.
5. Source dark brand band (s11) takes the light M4 CTA banner, as home s05/s07 (the kit's CTA banner is light).
6. s12 has two image-less link cards: one item each, so `findRepeat` finds no run (period ≥ 2) → stack fallback (renderer residual R1, as home s02).

# Mapping brief — about-us (sibling; slot rows are in the multi-page table above)

Template (archetype): `school-life`. Content model: `reskin/content-model/about-us/content-model.json`, 2 slots, 7 images, text 878/1157 (0.759), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!`.
Normalize: `reskin/normalize/about-us.mjs`, entries N-D1, N-D2, N2. Mapping: `reskin/mappings/about-us.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 2. Mapped: 2. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. Scope `main` gave 1 mega-slot (the h1 and the card grid share one source section), and the capturer warned of a wrapper-scope smell. Re-scoped to the section's two wrappers (`1>1!`, `1>2!`), which gives the archetype's anatomy: title, then card grid.
2. The 7 source image cards (`card-container`) take M2 at 2 columns, as school-life (7 is not a multiple of 3).


# Mapping brief — about-us-enrol (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-enrol/content-model.json`, 8 slots, 1 images, text 5887/6886 (0.855), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-enrol.mjs`, entries N-D1, N-D2, N2, N3, N4. Mapping: `reskin/mappings/about-us-enrol.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 8. Mapped: 8. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N4** — `main .embed-wrapper` removed: the embed block consumes an authored Brightcove link (`https://bcove.video/…`) and lazily injects a third-party player iframe; 0 text chars and 0 images at capture. The intro text stays; the deploy re-embeds the video from the authored link.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 has no image: it takes M1 with the media column dropped (`stack`), as the page hero. This is a judgment call, because the archetype hero has a photo.
2. The s04 source dark band holds 1054 chars (Open Days, 3 h4 dates). That is too long for the M4 anatomy (short heading, body, single action), so it takes the M5 text band.
3. s06 is the intro line of the video embed removed by N4. It is carried as an M5 text band.
4. The s07 source dark band takes the light M4 CTA banner, as wellbeing s11.


# Mapping brief — about-us-facilities-and-resources (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-facilities-and-resources/content-model.json`, 5 slots, 14 images, text 2298/3316 (0.693), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(2)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-facilities-and-resources.mjs`, entries N-D1, N-D2, N2, N3, N6. Mapping: `reskin/mappings/about-us-facilities-and-resources.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 5. Mapped: 4. New-module: 1. Carried-invisible: 0.
- **Mapped ratio: 80.0%** (bar ≥ 80%).
- New modules: s03 gallery.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N6** — NSW gallery carousel (`.nsw-carousel`, not in the default N-D2 list) de-carouselled: every slide made visible and static, controls / dot navigation / aria-live removed. The carousel hides off-screen slides with `visibility:hidden` on a timer, so two captures of the same page gave 1500 and 3135 gallery chars.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 has no image: M1 `stack` hero.
2. s03 is the gallery (13 slides, de-carouselled by N6). The kit has no gallery or carousel, so it is a new-module (stack). The archetypes report lists gallery as pending a rule.
3. s04 is a source `columns` block in a dark band, with a second h1 "Hiring our facilities". The h1 is carried verbatim (flag, don't fix). It takes M3 split; the donor surface wins over the dark band.


# Mapping brief — about-us-hsc-results (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-hsc-results/content-model.json`, 16 slots, 1 images, text 11578/12583 (0.92), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(1) > div:nth-child(3)!,main > div:nth-child(1) > div:nth-child(4)!,main > div:nth-child(1) > div:nth-child(5)!,main > div:nth-child(1) > div:nth-child(6)!,main > div:nth-child(1) > div:nth-child(7)!,main > div:nth-child(1) > div:nth-child(8)!,main > div:nth-child(1) > div:nth-child(9)!,main > div:nth-child(1) > div:nth-child(10)!,main > div:nth-child(1) > div:nth-child(11)!,main > div:nth-child(1) > div:nth-child(12)!,main > div:nth-child(1) > div:nth-child(13)!,main > div:nth-child(1) > div:nth-child(14)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-hsc-results.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-hsc-results.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 16. Mapped: 9. New-module: 7. Carried-invisible: 0.
- **Mapped ratio: 56.2%** (bar ≥ 80%) — **BELOW BAR, needs owner sign-off**.
- New modules: s02 table, s04 table, s06 table, s08 table, s10 table, s12 table, s14 table.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. **Mapped ratio is 56%, below the 80% bar.** The cause is the 7 source tables (s02–s14, even slots), each an atomic table-wrapper. They use the content archetype's granted table new-module. Coarser scopes would hide them inside a mega-slot (section 1 holds 14 wrappers), which content-model.md § 3b rules out. Owner sign-off on the larger table share is needed.
2. In s01, the photo sits inside a `<p>` (renderer limit 1: it renders as an inline icon).
3. The lone h3 captions (s07/s09/s11/s13) take the M5 h3 role.
4. s15 is a source dark band of 8947 chars (the distinguished achievers name list). It takes the M5 text band.


# Mapping brief — about-us-our-principal-and-staff (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-our-principal-and-staff/content-model.json`, 17 slots, 2 images, text 6083/7100 (0.857), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(2)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(2)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(2)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(2)!,main > div:nth-child(8) > div:nth-child(1)!,main > div:nth-child(8) > div:nth-child(2)!,main > div:nth-child(9) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(2)!,main > div:nth-child(10) > div:nth-child(1)!,main > div:nth-child(11) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-our-principal-and-staff.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-our-principal-and-staff.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 17. Mapped: 12. New-module: 5. Carried-invisible: 0.
- **Mapped ratio: 70.6%** (bar ≥ 80%) — **BELOW BAR, needs owner sign-off**.
- New modules: s05 table, s07 table, s09 table, s13 table, s15 table.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. **Mapped ratio is 70.6%, below the 80% bar.** The cause is the 5 source tables (s05, s07, s09, s13, s15) under the granted table new-module. Owner sign-off is needed, as for hsc-results.
2. s01 is a lone h1, so it takes M5 h2, as school-life s01.
3. s02 is the principal's welcome (`columns`, dark band). It takes M3 split.
4. s11 has 4 image-less cards, which take M2 at 2 columns.
5. s16 is a source off-white band (short heading, body, "Contact us") and takes the light M4 banner.


# Mapping brief — about-us-policies-and-reports (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-policies-and-reports/content-model.json`, 8 slots, 1 images, text 5742/6786 (0.846), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(2)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-policies-and-reports.mjs`, entries N-D1, N-D2, N2, N3, N5. Mapping: `reskin/mappings/about-us-policies-and-reports.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 8. Mapped: 8. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N5** — `main .planningreporting-wrapper` removed (×2): authored config only (`reporttype` report|plan, `schoolcode` 8504) rendered client-side as PDF links fetched from reports.sparo.schools.nsw.gov.au. The headings and paragraphs stay; the deploy re-renders the widget from the authored config.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s02/s03 keep their headings and paragraphs. The PDF report lists are removed under N5 (dynamic API widget).
2. s06 is 3 policy accordions and takes M8.


# Mapping brief — about-us-policies-and-reports-nsw-public-school-information (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-policies-and-reports-nsw-public-school-information/content-model.json`, 4 slots, 0 images, text 967/2040 (0.474), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-policies-and-reports-nsw-public-school-information.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-policies-and-reports-nsw-public-school-information.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 4. Mapped: 4. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 has no image: M1 `stack` hero.
2. The s02 dark band holds 4 paragraphs (442 chars), so it takes the M5 text band, not M4.
3. s03 is a short off-white band with a link and takes M4.


# Mapping brief — about-us-school-history-and-archives (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives/content-model.json`, 9 slots, 6 images, text 4964/6051 (0.82), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(1) > div:nth-child(3)!,main > div:nth-child(1) > div:nth-child(4)!,main > div:nth-child(1) > div:nth-child(5)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 9. Mapped: 9. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 is a lone h1, so it takes M5 h2.
2. s02/s04 are source `columns` (text plus photo) and take M3 split. In s04 the image comes first, so it renders media-first.
3. s07 is a photo plus an `h6` caption ("Fort Street Cricket Team 1896"). The h6 is carried verbatim and takes the M5 h4 role, the smallest heading role.


# Mapping brief — about-us-school-history-and-archives-fort-street-archives (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives-fort-street-archives/content-model.json`, 3 slots, 3 images, text 4287/5394 (0.795), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives-fort-street-archives.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives-fort-street-archives.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 3. Mapped: 3. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 is a single default-content wrapper: h1 plus a 3896-char article with 6 h2s and 3 photos. It cannot be split by scope, so it takes the M5 text column rather than an M1 hero.


# Mapping brief — about-us-school-history-and-archives-the-fort-street-museum (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives-the-fort-street-museum/content-model.json`, 3 slots, 2 images, text 2419/3528 (0.686), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives-the-fort-street-museum.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives-the-fort-street-museum.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 3. Mapped: 3. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 is the h1 plus a 2072-char article. It takes M5, as the archives page does.
2. s02 is a dark band with a single contact link and takes M4.


# Mapping brief — about-us-school-history-and-archives-the-fortian-digitised (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-school-history-and-archives-the-fortian-digitised/content-model.json`, 4 slots, 1 images, text 7667/8775 (0.874), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-school-history-and-archives-the-fortian-digitised.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-school-history-and-archives-the-fortian-digitised.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 4. Mapped: 4. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s02 is 13 decade accordions with 213 issue links. N3 opens them all and they take M8.


# Mapping brief — about-us-stories-and-highlights (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-stories-and-highlights/content-model.json`, 6 slots, 21 images, text 12120/13136 (0.923), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(1) > div:nth-child(2)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-stories-and-highlights.mjs`, entries N-D1, N-D2, N2, N3, N1, N6. Mapping: `reskin/mappings/about-us-stories-and-highlights.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 6. Mapped: 5. New-module: 1. Carried-invisible: 0.
- **Mapped ratio: 83.3%** (bar ≥ 80%).
- New modules: s02 gallery.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N1** — `main .facebook-feed`, `.facebook-feed-wrapper` removed: live third-party Facebook posts (dynamic surface, as home N1). The "Discover more highlights" heading and paragraph stay.
- **N6** — NSW gallery carousel (`.nsw-carousel`, not in the default N-D2 list) de-carouselled: every slide made visible and static, controls / dot navigation / aria-live removed. The carousel hides off-screen slides with `visibility:hidden` on a timer, so two captures of the same page gave 1500 and 3135 gallery chars.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s01 (h1, lede, h2 "A year at our school", no image) takes the M1 `stack` hero.
2. s02 is the gallery (21 slides, 11187 chars, de-carouselled by N6). It is a new-module (stack), as on facilities-and-resources.
3. s03 is an off-white testimonial with no heading and takes the M5 text band.
4. s04: the Facebook feed is removed by N1 and the heading and paragraph remain. It takes M5, as home s09.


# Mapping brief — about-us-transition-to-high-school (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-transition-to-high-school/content-model.json`, 5 slots, 2 images, text 3011/4030 (0.747), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-transition-to-high-school.mjs`, entries N-D1, N-D2, N2, N3. Mapping: `reskin/mappings/about-us-transition-to-high-school.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 5. Mapped: 5. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s03 is Year 7 orientation (`columns`, dark band) and takes M3 split.
2. s04 is a short off-white band and takes M4.


# Mapping brief — about-us-why-choose-us (sibling; slot rows are in the multi-page table above)

Template (archetype): `learning-and-support-wellbeing`. Content model: `reskin/content-model/about-us-why-choose-us/content-model.json`, 10 slots, 6 images, text 4329/4356 (0.994), h1 in scope: true.
Scope: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!,main > div:nth-child(6) > div:nth-child(1)!,main > div:nth-child(7) > div:nth-child(1)!,main > div:nth-child(8) > div:nth-child(1)!,main > div:nth-child(9) > div:nth-child(1)!,main > div:nth-child(10) > div:nth-child(1)!`.
Normalize: `reskin/normalize/about-us-why-choose-us.mjs`, entries N-D1, N-D2, N2, N3, N4. Mapping: `reskin/mappings/about-us-why-choose-us.json`, with chrome copied from `mapping.json`.

|---|---|---|---|---|---|

## Stats

- Content slots: 10. Mapped: 10. New-module: 0. Carried-invisible: 0.
- **Mapped ratio: 100.0%** (bar ≥ 80%).
- New modules: none.
- Chrome: D1 header and D2 footer (shared `_chrome`). D3 section sidebar and D4 breadcrumb are outside `main` and not rendered, as on the archetypes.

## Deltas

- **D1 / D2 / D3 / D4**: as the archetypes.
- **N-D1 / N-D2**: defaults.
- **N2** — `main .back-to-top` removed (page utility).
- **N3** — accordions normalized all-open (no-op on pages without accordions; kept from the content archetype).
- **N4** — `main .embed-wrapper` removed: the embed block consumes an authored Brightcove link (`https://bcove.video/…`) and lazily injects a third-party player iframe; 0 text chars and 0 images at capture. The intro text stays; the deploy re-embeds the video from the authored link.

## Casing and ligatures

Rendered case is carried verbatim, with no `text-transform` added. The Material Icons ligatures (`east`, `keyboard_arrow_down`) are carried as text.

## Judgment calls

1. s02 is the "Our vision" dark band (922 chars plus a list) and takes the M5 text band.
2. s03 is a lone h2. Its video embed is removed by N4 and the h2 takes M5.
3. s07 has 4 image cards and takes M2 at 2 columns.
4. s08 is an off-white testimonial and takes the M5 text band.
5. s05/s09 are "Ready to apply?" bands (off-white and dark) and both take M4. The repeated text is source content, carried verbatim.


# Mapping brief — contact-us (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/contact-us (type `content`).
Content model: `reskin/content-model/contact-us/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 8 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/contact-us.mjs` — DEFAULT + N2 (back-to-top) + N5 (Google Maps `.embed-wrapper` removed — third-party iframe; the Location map heading + address stay).
Mapped ratio: 8/8 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 → M1 (h1 + lede + contact list, no sub-headings).
- s03 Maps embed: dynamic third-party iframe, removed by normalize N5 on both sides (not content loss — address text kept).
- s08 2-item imageless cards: renderer warns `no repeating run` and renders a stack (as wellbeing s12).


# Mapping brief — learning-and-support (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support (type `section`).
Content model: `reskin/content-model/learning-and-support/content-model.json` (scope `main`, 2 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `school-life`. Normalize ledger: `reskin/normalize/learning-and-support.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 2/2 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- Hub: scope `main`. capture-content warns the 2-slot wrapper scope (96% in one slot) — false positive, same as school-life (title + one card grid).
- s02 → M2 2-up (source sidebar card grid, as school-life s02).


# Mapping brief — learning-and-support-additional-learning-support (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/additional-learning-support (type `content`).
Content model: `reskin/content-model/learning-and-support-additional-learning-support/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-additional-learning-support.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open, wellbeing code verbatim).
Mapped ratio: 9/9 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s04 lone h2 is the title of the s05 columns block — kept as its own M5 slot (source order).
- s07 testimonial quote on brand-dark → M4 light per the dark-band rule, though it has no CTA.
- s08 off-white band → M4 light.


# Mapping brief — learning-and-support-careers (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/careers (type `content`).
Content model: `reskin/content-model/learning-and-support-careers/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 5 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-careers.mjs` — DEFAULT + N2 (back-to-top) + N4 (NSW carousel de-carousel: nav + pagination + aria-live removed, list un-transformed + wrapped, all items visible).
Mapped ratio: 4/5 (80%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 has sub-headings → M5 (not M1).
- s01 source garbage: an empty `<h1>` whose only child is a picture. Carried as authored; stream-render's heading case emits text only, so the image is dropped (dom-equality images 8/9, slot-coverage 37/38) — renderer residual, needs-owner.
- s03 NSW carousel gallery → no kit module; N4 makes all 8 figures + captions visible, rendered as a stack.


# Mapping brief — learning-and-support-high-potential-and-gifted-education (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/high-potential-and-gifted-education (type `content`).
Content model: `reskin/content-model/learning-and-support-high-potential-and-gifted-education/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 8 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-high-potential-and-gifted-education.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open) + N4 (NSW carousel de-carousel).
Mapped ratio: 7/8 (88%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s02 lone h2 + image → M3 split.
- s03 off-white band holds long list text — M5, not M4 (no banner anatomy).
- s06 carousel gallery → stack via N4, no module.


# Mapping brief — learning-and-support-learning (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/learning-and-support/learning (type `content`).
Content model: `reskin/content-model/learning-and-support-learning/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/learning-and-support-learning.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open).
Mapped ratio: 9/9 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s03 4 link cards (no images) → M2 2-up.
- s05 large accordion (Stage 4–6 subject panels, 29 headings) → M8, all panels open via N3.
- s08 testimonial on brand-dark → M4 light.


# Mapping brief — our-community (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community (type `section`).
Content model: `reskin/content-model/our-community/content-model.json` (scope `main`, 4 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `school-life`. Normalize ledger: `reskin/normalize/our-community.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 4/4 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- Hub: scope `main`.
- s02 4 image cards → M2 2-up.
- s03 off-white question band → M4 light.


# Mapping brief — our-community-alumni (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/alumni (type `content`).
Content model: `reskin/content-model/our-community-alumni/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 3 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-alumni.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 3/3 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 has sub-headings → M5 (not M1).


# Mapping brief — our-community-fortians-union (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/fortians-union (type `content`).
Content model: `reskin/content-model/our-community-fortians-union/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 4 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-fortians-union.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 4/4 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 → M1 (h1 + paragraphs + list, no sub-headings).
- s03 `Keep in Touch` list on brand-dark → M4 light.


# Mapping brief — our-community-foundation (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/foundation (type `content`).
Content model: `reskin/content-model/our-community-foundation/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 6 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-foundation.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 5/6 (83%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 has sub-headings → M5 (not M1).
- s01 source defect: `<img src="about:error" title="Library_donation_1" loading="lazy">` is authored in the document (visible in .plain.html). Carried as authored; the source counts it visible (lazy), the render emits a non-lazy inline `img.icon` that does not paint → dom-equality images 4/5, slot-coverage 36/37. Flag, not fixed — needs-owner (author fix or recorded gate delta).
- s03 table → token-composed (as wellbeing).


# Mapping brief — our-community-foundation-tertiary-bursaries (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/foundation-tertiary-bursaries (type `content`).
Content model: `reskin/content-model/our-community-foundation-tertiary-bursaries/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 3 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-foundation-tertiary-bursaries.mjs` — DEFAULT + N2 (back-to-top removed).
Mapped ratio: 3/3 (100%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s01 has an h2 → M5 (not M1).
- s02 leading h3 → M5 heading role h3.


# Mapping brief — our-community-pandc (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2) (sibling; slot rows are in the multi-page table above)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/pandc (type `content`).
Content model: `reskin/content-model/our-community-pandc/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 11 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-pandc.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open).
Mapped ratio: 9/11 (82%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

|---|---|---|---|---|---|

## Judgment calls

- s02 brand-light band → M4 light.
- s04/s06 tables → token-composed (as wellbeing).
- s02 link text is a bare URL (`https://subscribe.entertainment.com.au/fundraiser/…`): unbreakable at 360px → donor-probe overflow 154px. No mapping layout changes it (the renderer CSS has no `overflow-wrap` on `.site-main` body text; only `.heading` wraps) and content may not be rewritten → renderer residual, needs-owner.


# Mapping brief — school-life-bell-times (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-bell-times/content-model.json` — 5 atomic slots. Mapping: `stardust/reskin/mappings/school-life-bell-times.json` (template `learning-and-support-wellbeing`). Mapped 5/5 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s02 h2 + para + bell-times table graphic (alt "tables - dept of education calendar") → M5 in-flow figure (as archetype s07), not a split: the image is the content, not a media side.
- s03 carries a second h1 ("Attendance") at h1 → M5, as archetype s09.


# Mapping brief — school-life-bring-your-own-device (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-bring-your-own-device/content-model.json` — 6 atomic slots. Mapping: `stardust/reskin/mappings/school-life-bring-your-own-device.json` (template `learning-and-support-wellbeing`). Mapped 6/6 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.


# Mapping brief — school-life-canteen (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-canteen/content-model.json` — 6 atomic slots. Mapping: `stardust/reskin/mappings/school-life-canteen.json` (template `learning-and-support-wellbeing`). Mapped 6/6 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s03 image-only slot (Flexischools QR code) → M5 in-flow figure.
- s05 "Contact the Canteen" brand band has no CTA in source; still M4 (light CTA banner, no action) — the band treatment is the signal, as archetype s11.


# Mapping brief — school-life-events (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-events/content-model.json` — 9 atomic slots. Mapping: `stardust/reskin/mappings/school-life-events.json` (template `learning-and-support-wellbeing`). Mapped 8/9 = 89%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s01 h1 + paras + 9-item list (no sub-headings) → M1 hero by the archetype s01 rule.
- N1 (home's Facebook-feed removal) added: s08 keeps its h2 + "Follow us on Facebook." para; the live feed is a dynamic surface.
- s05 events `content-container` (authored content, verified in `.plain.html`) → M2 cards ×3 columns. Renderer: the first 5 events form a repeating run and render as 3-up cards; item 5 carries extra paragraphs that break the findRepeat period, so the remainder renders as a stack (renderer residual, all text/images present).
- s03 table → new-module (token-composed table, renders as stack).
- Captured with `--wait-until load`: at `domcontentloaded` the source card-container/default-content decoration races (material `east` glyphs + inter-block separators vary between loads → dom-equality text 3985/3986 vs 3996). Recaptured + gated at `load`: deterministic PASS.


# Mapping brief — school-life-forms (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-forms/content-model.json` — 4 atomic slots. Mapping: `stardust/reskin/mappings/school-life-forms.json` (template `learning-and-support-wellbeing`). Mapped 3/4 = 75%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- Mapped ratio 3/4 = 75% (< 80% bar): the only unmapped slot (s02) is the forms table (form link + description per row). Kept the archetype rule (table → token-composed new-module). Alternative for owner: map s02 to M7 (Links list) — each row is a link + one-line description. Verdict: needs-owner.


# Mapping brief — school-life-house-and-merit-system (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-house-and-merit-system/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-house-and-merit-system.json` (template `learning-and-support-wellbeing`). Mapped 7/7 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s02 image-only slot → M5 in-flow figure.
- s05 five houses (image + name + text, repeating) → M2 cards ×2 columns (renders as a 2-col card grid).


# Mapping brief — school-life-lockers-and-lost-property (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-lockers-and-lost-property/content-model.json` — 5 atomic slots. Mapping: `stardust/reskin/mappings/school-life-lockers-and-lost-property.json` (template `learning-and-support-wellbeing`). Mapped 4/5 = 80%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- s01 holds h1 + image + h2/h3 body (sub-headings) → M5, not M1 hero (as school-life s01 / archetype s09).
- s02 table → new-module (token-composed, renders as stack).


# Mapping brief — school-life-newsletters (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-newsletters/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-newsletters.json` (template `learning-and-support-wellbeing`). Mapped 7/7 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N1 (Facebook-feed removal) added: s06 keeps its heading; the live feed is a dynamic surface.
- s02 columns-wrapper → M3 split. Its image is authored `<img src="about:error" alt="">` in the source `.plain.html` (broken DA image reference): it never paints on the source either; slot-coverage run with `--paint warn` (reason: source-authored broken src). dom-equality image count 1 vs 0: the source theme gives the broken img a box, the reskin `.icon` collapses an unsized alt-less broken img to 0×0. Source defect → needs-owner (fix the image in DA).
- s04 accordions → M8.


# Mapping brief — school-life-parent-portal (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-parent-portal/content-model.json` — 8 atomic slots. Mapping: `stardust/reskin/mappings/school-life-parent-portal.json` (template `learning-and-support-wellbeing`). Mapped 8/8 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N4 added (unwrap image-only empty headings): s03/s05 app logos are authored as `<h3><picture>…</picture></h3>` with no text; stream-render emits heading text only, so without N4 both images were dropped (dom-equality images 2 vs 0, slot-coverage 34/36). N4 changes 0 text chars; after it: PASS.
- s03/s05 columns-wrapper (text + app logo) → M3 split.


# Mapping brief — school-life-stationery (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-stationery/content-model.json` — 3 atomic slots. Mapping: `stardust/reskin/mappings/school-life-stationery.json` (template `learning-and-support-wellbeing`). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- N4 added (unwrap image-only empty headings): s02 is authored as `<h2 id=""><picture>…</picture></h2>` (verified in `.plain.html`); without N4 the image was dropped. After N4: s02 is an image-only slot → M5 in-flow figure.
- Coverage ratio 0.412 is low because the page is short (724 chars of content vs ~1030 chars of header/footer chrome).


# Mapping brief — school-life-student-opportunities-and-activities (type `content`, batch school-life-a) (sibling; slot rows are in the multi-page table above)

Content model: `stardust/reskin/content-model/school-life-student-opportunities-and-activities/content-model.json` — 7 atomic slots. Mapping: `stardust/reskin/mappings/school-life-student-opportunities-and-activities.json` (template `learning-and-support-wellbeing`). Mapped 6/7 = 86%.

|---|---|---|---|---|---|

## Judgment calls

- Template `learning-and-support-wellbeing` (archetype for type `content`); atomic `!` scope per wrapper (`main > div:nth-child(k) > div:nth-child(j)!`), back-to-top (N2) excluded.
- Last slot: 2-item `card-container` → M2 cards; renderer warns "no repeating run" and falls back to a stack (R1, as archetype s12) — residual accepted.
- Captured with `--wait-until load`: at `domcontentloaded` the lazily-shown EDS sections were still hidden (body ratio 1.9/2.98, s04–s07 unverified). At `load`: 7 slots, scope 4428 / body 5704, all verified.
- s01 h1 + paras + 9-item list + 3 images (clubs posters) with no sub-headings → M1 hero by the archetype s01 rule; the posters are authored inside `<p>` and render as inline `.icon` images (archetype residual: images in `<p>` → inline icons). Owner may prefer M5 for so long a hero.
- s03 table → new-module (token-composed, renders as stack).
- s04 image authored `<img src="about:error">` in source (broken DA reference): slot-coverage run with `--paint warn`; dom-equality still PASS (alt text gives the img a box on both sides). Source defect → needs-owner.
- s05 quote → M5 (no quote module in the kit).


# Mapping brief — school-life-student-opportunities-and-activities-academic-competitions (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-academic-competitions/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-academic-competitions.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 carries 96% of the scope text: the source authored the whole page as one default-content wrapper (h1 + photo + 7 h2 subsections), so there is no separate hero section to split off; mapped as one M5 text band (school-life s01 / wellbeing s09 precedent: h1 + text → M5). A finer scope (one slot per paragraph) would not give coherent units.
- No dynamic surface on the page; archetype ledger only (N3 is inert — no accordion).


# Mapping brief — school-life-student-opportunities-and-activities-clubs-and-committees (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-clubs-and-committees/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-clubs-and-committees.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 (94% of scope text) is the whole authored body in one default-content wrapper → one M5 text band, not an M1 hero (see academic-competitions).
- No dynamic surface; archetype ledger only.


# Mapping brief — school-life-student-opportunities-and-activities-creative-and-performing-arts (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-creative-and-performing-arts/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-creative-and-performing-arts.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 is h1 + photo + all body text in one source wrapper → M5 text band (not M1).
- No dynamic surface; archetype ledger only.


# Mapping brief — school-life-student-opportunities-and-activities-debating-and-public-speaking (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-debating-and-public-speaking/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-debating-and-public-speaking.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 is short (994 chars) but is body copy (5 paragraphs), not a title + lede hero; kept as M5 for consistency with the batch and because stream-render does not pick a `<p>`-wrapped image into a split (archetypes-report skill finding 1).
- No dynamic surface; archetype ledger only.


# Mapping brief — school-life-student-opportunities-and-activities-duke-of-edinburgh-award (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-duke-of-edinburgh-award/content-model.json` — 13 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-duke-of-edinburgh-award.mjs` (+ N5 NSW gallery carousel de-carousel). Mapped 11/13 = 85%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N5: the NSW carousel (gallery s09) is rendered as a static run of all 6 slides; its dot numbers and arrows are dropped as carousel chrome.

## Judgment calls

- s05 accordion panels contain tables; M8 is kept (the disclosure is the unit), and the panel tables flow as paragraphs inside it (renderer limit R2, as wellbeing).
- s06 is three image + one-word label tiles → M2 3-up cards (repeating run); if the renderer finds no run it falls back to a stack (R1).
- s08 is a dark band with a heading, a 4-item list and one link: kept as M4 CTA banner (band + single action) rather than M5.
- s09 gallery has no kit module → new-module stack, like the archetype's tables.


# Mapping brief — school-life-student-opportunities-and-activities-instrumental-music-program (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-instrumental-music-program/content-model.json` — 9 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-instrumental-music-program.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 9/9 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s02 sits on a dark brand band but is a long multi-heading text (1096 chars, 3 h3 + 1 link), not a CTA → M5 text band (the band tone is a source treatment the kit's M5 does not carry).
- s05 columns (text + image) → M3 split, home s03 settings.
- Source navigation is slow (networkidle never settles); capture used the archetype default domcontentloaded and succeeded.


# Mapping brief — school-life-student-opportunities-and-activities-robotics-and-maker-society (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-robotics-and-maker-society/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-robotics-and-maker-society.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 is h1 + all body text in one source wrapper → M5 text band (not M1).
- No dynamic surface; archetype ledger only.


# Mapping brief — school-life-student-opportunities-and-activities-sport (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-sport/content-model.json` — 5 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-sport.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 4/5 = 80%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s02 table header cells are authored h3s; they stay h3 in the stream (no table node, R2).
- No dynamic surface; archetype ledger only.


# Mapping brief — school-life-student-opportunities-and-activities-student-leadership-opportunities (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-student-leadership-opportunities/content-model.json` — 6 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-student-leadership-opportunities.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 6/6 = 100%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s03 is on a dark brand band but has no action → M5 text band, not M4 CTA banner.
- N3 opens the 2 accordion panels (1823 chars, otherwise hidden).


# Mapping brief — school-life-travel-to-school (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-travel-to-school/content-model.json` — 15 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-travel-to-school.mjs` (+ N4 Google Maps embed removed). Mapped 13/15 = 87%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N4: the Google Maps embed (iframe + skip link) is a dynamic surface — carried as an embed/defer disposition, not static content. The "Location map" heading and both surrounding paragraphs stay.

## Judgment calls

- s12 is a dark-band `columns` (image + h3 + para + link): M3 text + image chosen over M4 because the image is half the block; the dark tone is not carried.
- s05/s08/s11 lead with h3 → heading role h3.
- s02 + s03 are the paragraphs either side of the removed map; kept as two slots (source wrappers) rather than merged.


# Mapping brief — school-life-uniform (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-uniform/content-model.json` — 6 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-uniform.mjs` (+ N5 NSW gallery carousel de-carousel). Mapped 5/6 = 83%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N5: the NSW carousel (gallery s03) renders all 10 slides (image + caption) statically; dot numbers / arrows dropped as carousel chrome.

## Judgment calls

- Source load is slow and the default domcontentloaded + 2 s settle captured an un-appeared page (body 268 chars, sections hidden). Captured and gated with the documented `--wait-until load` instead (provenance nav.waitUntil = load).
- s03 gallery has no kit module → new-module stack.


# Mapping brief — school-life-uniform-uniform-shop (page type `content`, archetype `learning-and-support-wellbeing`) (sibling; slot rows are in the multi-page table above)

Content model: `reskin/content-model/school-life-uniform-uniform-shop/content-model.json` — 9 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-uniform-uniform-shop.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/9 = 33%.

|---|---|---|---|---|---|

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- 6 of 9 slots are price tables (no kit module) → mapped ratio 33%, below the 80% bar. Accepted as source-driven: every non-table slot is mapped; the tables are the page's content (same new-module disposition as wellbeing s03/s05). Needs owner sign-off on the ratio.
- s08 band has no action; kept M4 (short heading + body on a band, the kit's banner) rather than M5.
