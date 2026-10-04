# Roadmap

Status reviewed 1 October 2026. Open items are engineering recommendations, not
promised product features or evidence of an assigned developer/schedule.

## Completed

- [x] 5 October 2026: original-material reuse restrictions and visible permission notice.

- [x] Static six-section portfolio, five featured tabs, four public-lab entries.
- [x] Responsive themes, keyboard tab/menu controls and reduced-motion styling.
- [x] Recruiter/business contact actions and prefilled WhatsApp messages.
- [x] Public-safe private-project case studies and collaborator attribution.
- [x] Current GitHub audit and claim corrections; Spenvera added as a third current build.
- [x] Context-preservation docs and lightweight current-tree security review.
- [x] Affected root/dist copies synchronized locally.

## Current / in progress

- [ ] Publish the validated portfolio and verify both hosting destinations.
      The user explicitly authorized commit/push/deployment on 1 October 2026.

## Next

- [x] User authorized commit/push/publication after the local review.
- [ ] Verify actual Sites/Pages deployment and canonical URL routing before publishing.
- [ ] Record live case-study Markdown behavior and hosting response headers.
- [ ] Refresh evidence after meaningful upstream releases or acceptance checks.

## Later

- [ ] Consider a small deterministic asset-sync/verification command if manual drift recurs.
- [ ] Consider making contact essentials available without JavaScript, preserving design.
- [ ] Measure font/image loading before making performance changes.

## Technical debt

- [ ] Root/dist duplicate assets require manual maintenance.
- [ ] JavaScript DOM bindings assume the authored structure; changing IDs can break initialization.
- [ ] Historical numbers/release gates require dated reviews rather than automated popularity data.

## Testing improvements

- [ ] Consider repeatable browser checks for keyboard tabs, mobile menu, themes and hash aliases.
- [ ] Record screen-reader and keyboard-only acceptance; existing ARIA is not certification.
- [ ] Verify no-script content and case-study navigation on the chosen production host.

## Security improvements

Recommendations from this repository's architecture, with no exploit claimed:

- [ ] Consider host-level CSP/security headers after accounting for inline scripts,
      Google Fonts and the data-URL favicon; verify against actual hosting capability.
- [ ] Consider full-history secret scanning and automated checks before publication.
- [ ] Continue excluding private-project code, records and credentials from public content.

## Documentation improvements

- [ ] Record actual publish procedure, host/domain ownership and live verification after inspection.
- [ ] Update the dated audit/context when claim evidence or upstream state changes.
- [ ] Keep future decisions evidence-backed and label unknown historical rationale.
