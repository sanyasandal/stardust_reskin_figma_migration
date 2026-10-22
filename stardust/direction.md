# Direction

## Active 2026-10-21T13:30:11Z

- Kind: **reskin** — the direction is the external donor, not an authored brief.
- Donor: `https://www.figma.com/design/rsZQmpVzuyn0KhCDA3WN60` captured 2026-10-21T12:15:01Z into `stardust/canon-source/`
- Tokens: `stardust/reskin/donor-tokens.json` (sha f140fb91de55)
- Mapping: `stardust/reskin/mapping.json` (sha 6dd2f2b5e8a1)
- Archetype: `home` approved 2026-10-21T13:30:05Z
- Content: verbatim from the source site (reskin content gate); no copy is authored.

## Deviations (run log)

- The preview branch is `fortstreet` (the session branch name is too long for an aem.page host label).
- `migrate render` ran with `--proto-dir stardust/reskin/pages --current stardust/prototypes`, because reskin `stream-render` asset paths and migrate's Bundler roots disagree (skill gap).
- `state.json` pages were added by direct JSON edit (`state.mjs` has no `add`).
- Header chrome renders unstyled on the deployed pages (no logo, no mobile menu). It was accepted at home deploy and is recorded as the top fidelity defect in `reports/benchmark.md`.
- All gate residuals are `accepted`. See `reskin/ledger.json` and `reports/migration-steps.md` § Named deviations.
