# Mapping brief — school-life-student-opportunities-and-activities-debating-and-public-speaking (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-student-opportunities-and-activities-debating-and-public-speaking/content-model.json` — 3 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-student-opportunities-and-activities-debating-and-public-speaking.mjs` (archetype N-D1, N-D2, N2, N3 only). Mapped 3/3 = 100%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s01 | h1 "Debating and Public Speaking" + 5 paragraphs + photo | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s02 | h2 "Need to make a payment?" + para + "Parent portal" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | s03 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-student-opportunities-and-activities-debating-and-public-speaking | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.


## Judgment calls

- s01 is short (994 chars) but is body copy (5 paragraphs), not a title + lede hero; kept as M5 for consistency with the batch and because stream-render does not pick a `<p>`-wrapped image into a split (archetypes-report skill finding 1).
- No dynamic surface; archetype ledger only.
