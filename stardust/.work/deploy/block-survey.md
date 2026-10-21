# Block survey: the 51 non-home source pages

Source: `https://fortstreet-h.schools.nsw.gov.au/<path>.plain.html` (captured in `source/`).
Survey script: `survey.mjs`, which writes `survey.json`. The counts below are over the 51 pages in `pages51.txt`.

## Blocks

| Source block (variant) | Instances | Shape (rows × cells) | Notes |
|---|---|---|---|
| `card-container dark` | 6 | 4–14 rows of `picture \| h2>a + p` | Teaser grids on hub and landing pages: about-us 7r, school-life 14r, our-community 4r, why-choose-us 4r. learning 4r and our-principal 4r have no images and use h3 titles |
| `card-container horizontal` | 41 | 2 rows × 2 cells | Cell 1 is an empty image cell; cell 2 is `h2/h3>a + p`. 9 instances have `p, p` and no heading |
| `card-container` (plain) | 6 | 2 rows × 2 cells | Same as horizontal |
| `card-container off-white` | 1 | 4 rows, with pictures | /learning-and-support |
| `card-container highlight` | 1 | 2 rows × 2 cells | |
| `accordions` | 15 on 13 pages | n rows of `title \| panel` | The title is bare text or `strong`. The panel is rich: p, ul, ol, h3/h4, links and pictures. Panels on 3 pages hold a nested native `<table>` (additional-learning-support 1, learning 2, duke-of-edinburgh 3); its first row is a full-colspan "block name" row, either empty or reading "table". learning has h1s inside its panels |
| `table no-header` | 14 | 2–6 columns | |
| `table bordered` | 15 | 2–6 columns | sport is 8×4; student-opportunities is 4×6. When the first row is `strong, strong`, it is a header row |
| `table` (plain) | 2 | travel-to-school | |
| `columns` | 18 | Mostly 1 row × 2 cells, text \| picture or picture \| text | Edge shapes: r2c2 whose second row has a single cell (our-principal); r5c2 (house-and-merit); bare-text cells; `<h2><picture>` (parent-portal); a bare `<img>` (newsletters); an h1 inside columns (facilities-and-resources, "Hiring our facilities") |
| `gallery` | 6 | 4–21 rows of `picture \| caption` | The caption is bare text, `strong + br + text`, `p`s, or empty |
| `content-container` | 2 | events 14r: `picture \| h3 + p…`; duke-of-edinburgh 3r: `picture \| text` | Event and teaser rows |
| `embed` | 4 | 1 cell holding a single link | enrol and why-choose-us use `bcove.video/48Vdzel` (Brightcove). contact-us and travel-to-school use a Google Maps `/maps/embed/v1/place` URL, whose link text has spaces in place of `%20` |
| `facebook-feed` | 3 | 1 empty cell | about-us/stories-and-highlights, school-life/events, school-life/newsletters. Preceded by authored h2 + p ("Discover more highlights", "Follow us on Facebook.") |
| `planningreporting` | 2 | rows of `key \| value`: `reporttype` (report \| plan), `schoolcode` 8504, `recentreports` | about-us/policies-and-reports. The live block fetches the NSW school-plan-report API (`schoolPlanReportApi` in `da-global` global-config) and renders a `ul > li > a` of PDFs |

## section-metadata

| `background` | Sections |
|---|---|
| dark | 51 |
| off white | 23 |
| white | 2 |
| light | 1 |

Decision: map dark, off white and light to the donor light band (`Style \| light`, `--palette-light-band-bg`). White gets no style, which is the default canvas. The donor has no dark band for content sections.

## Default content

- h1, followed by intro `p`s and often a picture in section 0. This becomes the M1-style hero (`hero` block) on content pages; hubs keep it as default content.
- h2, h3 and h4 throughout, plus one h6.
- 5 blockquotes (stories-and-highlights and others).
- `ul` / `ol` lists, and links. `p > strong > a` becomes a primary button.
- A bare picture in section 1 of house-and-merit.
- Each plain page ends with an empty `<div></div>` (a trailing empty section).

Extra h1s (one h1 per page is required; the extras are demoted to h2):

| Page | Extra h1 |
|---|---|
| facilities-and-resources | inside columns |
| careers | `<h1 id="">` wrapping only a picture; the picture becomes the hero image |
| learning | 4, inside the accordion |
| wellbeing | "Student Health" |
| bell-times | "Attendance" |

## Images

Image `src`s are relative (`./media_<hash>.<ext>?width=750&format=…`), resolved against the page URL. Media hash names are unique across the site, so they are uploaded under `media/fortstreet/<media_hash>.<ext>`, as home did.
