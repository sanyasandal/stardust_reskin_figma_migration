# Mapping brief — our-community-pandc (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Source: https://fortstreet-h.schools.nsw.gov.au/our-community/pandc (type `content`).
Content model: `reskin/content-model/our-community-pandc/content-model.json` (scope `atomic per-wrapper, see _provenance.scope`, 11 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (shared, unchanged).
Template: `learning-and-support-wellbeing`. Normalize ledger: `reskin/normalize/our-community-pandc.mjs` — DEFAULT + N2 (back-to-top) + N3 (accordions all-open).
Mapped ratio: 9/11 (82%) slots on a donor module (tables/galleries are token-composed, as wellbeing).

| Page | # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|---|
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

## Judgment calls

- s02 brand-light band → M4 light.
- s04/s06 tables → token-composed (as wellbeing).
- s02 link text is a bare URL (`https://subscribe.entertainment.com.au/fundraiser/…`): unbreakable at 360px → donor-probe overflow 154px. No mapping layout changes it (the renderer CSS has no `overflow-wrap` on `.site-main` body text; only `.heading` wraps) and content may not be rewritten → renderer residual, needs-owner.
