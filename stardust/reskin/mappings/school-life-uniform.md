# Mapping brief — school-life-uniform (page type `content`, archetype `learning-and-support-wellbeing`)

Content model: `reskin/content-model/school-life-uniform/content-model.json` — 6 atomic slots from a multi-scope (one `!` scope per source wrapper `main > div:nth-child(k) > div:nth-child(j)!`, as the archetype). Normalize ledger: `reskin/normalize/school-life-uniform.mjs` (+ N5 NSW gallery carousel de-carousel). Mapped 5/6 = 83%.

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
| school-life-uniform | s01 | h1 "Uniform" + photo + paras + 4-item list + 2 links | M5 (Block Content) | page title + free text column (headings, paragraphs, lists, in-flow figure); the source puts h1 and body in ONE default-content wrapper, so this is a text band, not a hero (carried at h1); layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform | s02 | h2 "Uniform gallery" | M5 (Block Content) | lone section title of the next block; layout: stack, heading: h2, width: wide | mapped |
| school-life-uniform | s03 | gallery: 10 captioned uniform photos (source NSW carousel, de-carouselled by N5) | — (gallery) | no gallery in the kit (archetypes-report § Source blocks with no Figma module); slides rendered statically in DOM order (N5); layout: stack, width: wide | new-module |
| school-life-uniform | s04 | accordion ×2 (Helpful uniform hints, Uniform Exemptions; panel holds h3 "Out of Uniform Process" + 15 list items) | M8 (Accordion) | stacked disclosure rows: title + chevron, body (N3 opens every panel), as wellbeing s06; layout: stack, width: wide | mapped |
| school-life-uniform | s05 | h2 "Want to donate your old school uniforms?" + para + "Contact us" link (source dark brand band) | M4 (CTA Banner) | short heading + body (+ action) on the source dark brand band — light CTA banner, as wellbeing s11 / home s05; layout: stack, tone: light, heading: h3, bleed: true, width: wide | mapped |
| school-life-uniform | s06 | 2 list items (title link, body, `east` glyph), no images — source `card-container` | M2 (Teaser / Card) | repeating title + body + link → cards (image-less), as wellbeing s12; layout: cards, columns: 2, heading: h3, width: wide | mapped |
| school-life-uniform | c01 | header | M9 (Header) | shared `_chrome` s01 (D1) | chrome |
| school-life-uniform | c02 | footer | M10 (Footer) | shared `_chrome` s02 (D2) | chrome |

## Deltas

- D1/D2 header and footer swap to donor chrome (shared `_chrome`), D3 section sidebar and D4 breadcrumb sit outside `main` — same as the archetype.
- N5: the NSW carousel (gallery s03) renders all 10 slides (image + caption) statically; dot numbers / arrows dropped as carousel chrome.

## Judgment calls

- Source load is slow and the default domcontentloaded + 2 s settle captured an un-appeared page (body 268 chars, sections hidden). Captured and gated with the documented `--wait-until load` instead (provenance nav.waitUntil = load).
- s03 gallery has no kit module → new-module stack.
