# Content gate — DOM equality report (reskin profile)

- Source: https://fortstreet-h.schools.nsw.gov.au/our-community/foundation (scopes: `main > div:nth-child(1) > div:nth-child(1)!,main > div:nth-child(2) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(1)!,main > div:nth-child(3) > div:nth-child(2)!,main > div:nth-child(4) > div:nth-child(1)!,main > div:nth-child(5) > div:nth-child(1)!`, normalize: `/Users/ssandal/repos/EDS customer repos/copilot-worktrees/stardust_reskin_figma_migration/ssandal-adobe-redesigned-potato/stardust/reskin/normalize/our-community-foundation.mjs`)
- Rendered: stardust/reskin/pages/our-community-foundation.html (scope: `main`)
- Generated: 2026-10-21T13:48:39.995Z

## Primary checks (gating)

| Check | Source | Rendered | Status |
|---|---|---|---|
| Visible text (normalized chars) | 5427 | 5427 | PASS |
| Visible image srcs (ordered) | 5 | 4 | FAIL |

**Overall: FAIL**

### Image divergences

- count: source=5 rendered=4
- [1] source=`error` rendered=`fortstreet-h.schools.nsw.gov.au/our-community/media_1d2e9d9d11fd54e4a94f2f9ae56bbae85f3c1b02c.png`
- [2] source=`fortstreet-h.schools.nsw.gov.au/our-community/media_1d2e9d9d11fd54e4a94f2f9ae56bbae85f3c1b02c.png` rendered=`fortstreet-h.schools.nsw.gov.au/our-community/media_12aeeb890750ea14b0b78dadab07dacad4e41e4c5.png`
- [3] source=`fortstreet-h.schools.nsw.gov.au/our-community/media_12aeeb890750ea14b0b78dadab07dacad4e41e4c5.png` rendered=`fortstreet-h.schools.nsw.gov.au/our-community/media_1ad593501f4b5a0c864032550623888cff9b2510c.jpg`

## Informational (non-gating — a reskin re-structures markup by design)

- Element count: source=175 rendered=109 (delta -66)
- Tag+class sequence: diverges at position 0 of 109
