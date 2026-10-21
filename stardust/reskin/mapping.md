# Mapping brief — home (fortstreet-h.schools.nsw.gov.au → oneAZ v3.2)

Content model: `reskin/content-model/home/content-model.json` (scope `main`, 9 slots).
Chrome model: `reskin/content-model/_chrome/content-model.json` (scope `header!,footer!`).
Vocabulary: `reskin/donor-modules.md` (M1–M10, Figma file rsZQmpVzuyn0KhCDA3WN60 v2408265627482005963).

| # | Content | Donor module | Rationale | Status |
|---|---|---|---|---|
| s01 | h4 title + lede + "Why Choose Us?" link + photo | M1 (Home Hero Branded) | grey band, display heading, lede, one CTA, media right — same anatomy | mapped |
| s02 | h2 + 3 list items (image, h3, body, link) | M2 (Teaser / Card) | repeating image+title+body+link run → 3-up card grid | mapped |
| s03 | h2 + 2 paras + CTA + portrait | M3 (Teaser / Text + Image) | text column + image column with one CTA | mapped |
| s04 | image + h2 + para + link | M3 (Teaser / Text + Image) | image precedes heading → image-left variant | mapped |
| s05 | empty h3 + h2 + para + link (dark band in source) | M4 (CTA Banner) | short heading + body + single action on a contained band | mapped |
| s06 | h2 + 6 list items (icon image, h3 link, body, arrow glyph) | M2 (Teaser / Card) | 6 repeating cards → 3-up grid, two rows | mapped |
| s07 | h2 + 2 paras + "How to apply" + image | M4 (CTA Banner) | conversion band with thumbnail, heading, body, primary button | mapped |
| s08 | image + h2 + para + link | M3 (Teaser / Text + Image) | image + text split, image-left | mapped |
| s09 | h2 only (Facebook feed removed by N1) | M5 (Block Content) | lone heading in the text column | mapped |
| c01 | header: skip links, NSW logo, 4 nav items + Contact us | M9 (Header) | donor header carries source labels and hrefs | chrome |
| c02 | footer: email, feedback/policy/information links, logo | M10 (Footer) | donor footer carries source links | chrome |

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
