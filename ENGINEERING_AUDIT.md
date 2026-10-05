# Engineering Audit

## Executive Summary

Audited 5 October 2026 (Asia/Karachi), starting from a clean `main` at `5e13ca0`.
Scope: the entire tracked static portfolio, its deployment mirrors, public case
studies, continuity documentation, ignore/license files and recent Git history.
The adjacent `portfolio-site/` directory was empty. Applications mentioned in
the portfolio are separate repositories and were not audited or retested here.

The original site had an appropriate simple architecture, careful attribution,
responsive styling and keyboard interactions, but depended on JavaScript for
contact content and had no repeatable regression or deployment quality gate.
Improvements preserve the design and hosting layout while making content static,
handling preference failures correctly and adding dependency-free checks and CI.
Overall judgment: **6.5/10 originally; 8.0/10 after improvements**, relative to
a small public static portfolio. These are reviewer judgments, not certifications
or claims of measured coverage. Classification: **portfolio quality**, with a
maintainable static implementation; production acceptance still has documented gaps.

## Original Score

| Category | Score | Evidence / limitation |
|---|---:|---|
| Architecture | 7 | Suitable static layers; content mixed into interaction script |
| Code Quality | 7 | Small readable script; authored templates and silent catches |
| SOLID / Design | 7 | No needless layers; duplicated contact representation |
| Domain Modeling | N/A | No business transactions; case studies are content |
| Security | 7 | No user input/API/secrets observed; host/history unverified |
| Reliability | 5 | Contact script dependency, storage preference edge cases |
| Testing | 3 | Recorded manual checks, no committed regression suite |
| Database/Persistence | N/A | Only non-sensitive theme preference; assessed in reliability |
| Performance | 7 | Deferred small script; external fonts/image not benchmarked |
| Configuration | 8 | No credentials/config needed; publication settings external |
| Dependencies | 8 | No packages; fonts and hosting remain external |
| Logging/Observability | 6 | Browser diagnostics; no monitoring or automated resource gate |
| UI/UX Robustness | 6 | Working controls; essential content depended on enhancement |
| Accessibility | 6 | Semantics/focus/keyboard/reduced motion; no full acceptance |
| Documentation | 6 | Useful evidence; stale license/status and tooling statements |
| Developer Experience | 6 | Easy preview, manual checks/copy procedures |
| CI/CD | 2 | No repository quality workflow |
| Deployment/Release | 6 | Versioned mirrors; no automated drift gate |
| Repository Hygiene | 8 | Clean baseline, protective ignores, intentional assets |
| Overall | 6.5 | Scope-weighted engineering judgment |

## Major Problems Found

No confirmed P0 security vulnerability, data-loss path or exposed credential was
found in this local review. There is no authenticated server or transactional data
boundary to assess. Absence of a finding does not prove absence of vulnerabilities.

| Priority | Finding | Resolution |
|---|---|---|
| P1 | No repeatable protection for contact paths, theme/menu/tabs and seven deployment copies | Added behavioral tests, repository contracts and CI |
| P2 | Script created essential contacts, availability cards/dock and JSON-LD enrichment; initial main contact targeted GitHub | Moved unchanged content into HTML with direct email target |
| P2 | Storage failure forced startup dark theme and system changes could override an explicit unsaved choice | Allowlisted stored values, system fallback, in-memory explicit choice |
| P2 | Invalid stored theme blocked later system updates | Only valid light/dark values count as a preference |
| P2 | Enabling reduced motion during hover retained pointer offset state | Reset offsets on motion preference changes |
| P2 | Disabled scripting hid mobile navigation and four projects | CSS fallback and enhancement completion marker |
| P2 | Manual copies and documentation drift could mislead contributors | Allowlisted sync, contract checks and updated operating documentation |

### Engineering-control / generated-code signals

The script held large static HTML templates, rewrote authored content/metadata at
startup and hid substantive contacts behind scripting. Documentation contained
many overlapping dated status claims, including a no-license statement after a
license was added. These are maintainability/drift signals, not proof of how code
was produced. Templates were useful content and moved rather than discarded.
Root/dist duplication is intentional compatibility, now protected by parity checks.
Compact CSS and repeated content links are established presentation conventions;
no speculative framework, service layer, factory or style rewrite was justified.

## Changes Implemented

- `index.html`: static availability, recruiter/business cards, directory/dock,
  complete Person schema and working email target; validated initial preference.
- `exhibition.js`: removed runtime templates/HTML injection/schema mutation,
  retained interaction IIFE; in-memory theme choice, motion reset and completion marker.
- `portfolio-2026.css`: no-script fallback for projects/mobile navigation and
  hidden inactive controls. Browser verification caught the existing important
  `[hidden]` rule overriding the initial fallback; the corrected rule was rechecked.
- `scripts/check_site.py`: four repository contract tests, including exactly
  seven allowed deployment files, byte parity and decoded contact messages.
- `scripts/sync_dist.py`: explicit non-destructive asset synchronization.
- `tests/interactions.test.cjs`: seven tests running shipped scripts with event/DOM fakes.
- `.github/workflows/quality.yml`: read-only Node/Python quality job; no deployment.
- Updated README, agent guide, current context, architecture, decisions and roadmap;
  added testing/security/deployment guidance and this report. Mirrored public changes.

## Architecture

```text
Static host -> authored HTML -> two CSS layers / local artwork / optional Google Fonts
                    |
                    +-> public links, static contacts, static Person JSON-LD
                    +-> deferred JS enhances theme / menu / tabs / hashes / artwork

Development: root public assets -> allowlisted sync -> tracked dist copies
Validation: shipped JS -> Node behavioral tests; repository -> Python contracts -> CI
```

HTML owns content and metadata; CSS owns responsive/theme/fallback presentation;
JS owns interaction. No data/network layer or router is needed. DOM IDs and ARIA
relationships are an explicit authored contract tested before release. The marker
is applied only after script initialization, retaining content fallback on failure.
No framework, module indirection, database or build system was introduced.

## Critical Workflows

| Workflow | Protection and verification |
|---|---|
| First load / preference recovery | Real bootstrap tests for valid, corrupt and blocked storage |
| Theme choice / system preference | Script tests protect explicit choice and system following; browser toggle sampled |
| Featured projects | Five click selections, keyboard wrap/Home/End and selection/focus invariants in tests; native click/End sampled |
| Hash navigation | Initial project hash, aliases and unknown/untrusted-looking hash tested; dist PyNivo selected in browser |
| Mobile navigation | Open/close, link close and Escape focus tests; browser open/Escape sampled |
| Visitor contact actions | Static targets, three decoded messages and new-window protection checked; nothing sent |
| Script unavailable | Native browser disabled-script inspection, all panels/navigation/contact accessible after CSS fix |
| Artwork / reduced motion | Mouse-only handling and live preference reset tested; CSS reduced-motion rules retained |
| Deployment preparation | Seven byte-identical pairs plus exact dist allowlist; intentional sync then verification |
| Usage / case-study navigation | Local targets verified; permissions/attribution preserved; live Markdown behavior remains unknown |

## Testing Strategy

Actual local execution: **7 Node behavioral tests and 4 Python contract tests
passed**, JavaScript syntax and Git whitespace checks passed. No dependency
installation, compilation, package audit, migration or backend tests apply.

A temporary baseline characterization ran the same seven interaction tests against
the original inline bootstrap and interaction prefix (excluding the original content
injection beyond the DOM fake's scope): four passed and three failed for preference
recovery, explicit choice with blocked storage and live reduced-motion reset. The
current shipped scripts pass all seven. The temporary probe was removed.
Local runtimes were Node 26.7.0 and Python 3.13.15. CI selects Node 22 and Python
3.13; the Node 22 run remains pending remote execution, although only standard
Node APIs available in that version are used.

Browser sampled: 1280px desktop, 390px mobile and 360px narrow mobile without page
overflow; light/dark themes; click and End tab selection; mobile menu/Escape;
dist `#pynivo`; static contact target; disabled-JS fallback. Sampled warning/error
log was empty. Full browser E2E, exhaustive tab-key traversal, screen-reader and
contrast checks, old browsers, network-failure simulation and performance metrics
were not completed. Native rendering is not established by DOM fakes.

The automated fallback check guards the selected CSS contract, not computed
browser styles; the browser check caught a cascade issue that static parsing
could not. Keep manual fallback acceptance until real-browser CI is justified.
The workflow was added and its check commands executed locally; no remote Actions
run was triggered or claimed. Product test totals in content remain historical.

## Security Review

No runtime untrusted HTML ingestion, executable hash interpretation, backend,
account/session boundary or credential requirement exists. Removing HTML injection
reduces future unsafe interpolation opportunities; the former authored templates
were not identified as an exploitable XSS path. Tests protect link schemes,
external new-window protection and deployment allowlisting. CI is read-only and
does not retain checkout credentials. Theme values are constrained.

Current-tree inspection and filename checks found no obvious exposed credential;
no full-history scanner was run. Ignore patterns cannot protect existing tracked
secrets. External Google Fonts, mutable CI action version tags, live host headers
and owning-account security remain outside complete verification. No guessed CSP,
rate limiting, CSRF or authentication machinery was added to a static site.

## Data Integrity

The portfolio stores no business/user records and has no transactions, migrations,
backup engine or offline sync. Preference failure is non-fatal and does not require
a data-format change. Public content remains versioned. Dist byte parity, explicit
asset allowlisting, reciprocal tab relationships, contact-message tests and static
JSON validation protect publication correctness. Private product source/data was
not copied, and product claims/PhishGuard attribution were preserved.

## Remaining Technical Debt

- Tracked source/dist duplication remains; deliberate sync is required.
- Native browser behavior is manually sampled rather than covered in CI.
- Compact established CSS and long content lines remain; unrelated reformatting
  would add review noise without proving correctness.
- Historical continuity records remain labeled as superseded evidence; dated
  product claims require owner review after upstream releases.
- Action version tags are mutable; no immutable action pins or full-history scanner.

## Remaining Risks

- Screen-reader, contrast and comprehensive accessibility acceptance incomplete.
- Google Fonts introduces availability/privacy requests; performance not measured.
- Actual live headers, Pages source settings, link availability and this revision's
  publication status unverified. Raw Markdown display may vary by hosting behavior.
- Old remote Sites copy/billing remains the earlier account-access issue; this
  audit neither recreated the integration nor attempted account changes.
- Unexpected authored DOM changes can interrupt interaction initialization;
  contracts and content fallback reduce impact but do not mask programming errors.

## Final Score

| Category | Score | Remaining limit |
|---|---:|---|
| Architecture | 9 | Suitable static separation |
| Code Quality | 8 | Established compact CSS retained |
| SOLID / Design | 9 | Simple focused boundaries |
| Domain Modeling | N/A | No transaction domain |
| Security | 8 | Headers/history/action pins unverified |
| Reliability | 8 | No-script content and preference recovery; incomplete browser matrix |
| Testing | 7 | Meaningful behavior/contracts; no browser CI |
| Database/Persistence | N/A | Preference only |
| Performance | 7 | No measurements or font/image tuning |
| Configuration | 8 | Host settings external |
| Dependencies | 8 | No packages; external font/actions risks |
| Logging/Observability | 6 | Browser diagnostics only |
| UI/UX Robustness | 8 | Fallbacks and tested interactions |
| Accessibility | 7 | Acceptance still incomplete |
| Documentation | 8 | Accurate current entry; historical records retained |
| Developer Experience | 9 | Explicit sync and repeatable checks |
| CI/CD | 8 | Local commands verified; remote run pending |
| Deployment/Release | 8 | Drift gate and rollback guidance; live acceptance pending |
| Repository Hygiene | 9 | Clean bounded changes and deployment allowlist |
| Overall | 8.0 | Scope-weighted judgment; no 10/10 claim |

## Recommended Next Steps

1. Run the workflow remotely after an authorized push and verify the actual Pages
   source/settings and live revision, resources and showcase handling.
2. Complete keyboard/screen-reader/contrast acceptance; prioritize concrete failures.
3. Review actual response headers, immutable action pins and full-history secret scanning.
4. Measure font/artwork loading before optimizing; add browser CI if interactions grow.

Intentionally unchanged: technology stack, visual design, product maturity claims,
public contact messages, artwork, historical evidence, license/attribution, hosting
integration retirement and tracked deployment layout. No commit, push or deployment
was performed. These choices preserve intended behavior and avoid unsupported scope.

## Follow-up — publication and UI polish, 5 October 2026

The user subsequently authorized commit/push of the completed audit, then UI
polishing. `5b7cd7a` was pushed. Its remote Node 22/Python checks passed; GitHub
Pages deployment succeeded. The overall quality job failed at whitespace checking
because the default depth-one checkout lacked the parent and scanned unchanged
Markdown hard breaks. `c3c9160` fetches two revisions and was pushed as a separate
CI correction. The earlier no-publication statements describe the audit snapshot.
The correction's [quality run](https://github.com/asadabbas717/asadabbas717.github.io/actions/runs/37244116856)
and [Pages deployment](https://github.com/asadabbas717/asadabbas717.github.io/actions/runs/37244115917)
both completed successfully. The pipeline now has verified remote execution.

UI changes remain a separate local review: shorter project/hero copy, eight native
disclosures preserving engineering scope, consistent status labels and visible
release caveats, smaller mobile hero/artwork/spacing, email-first contact hierarchy,
smaller contextual cards and removal of the competing dock. PhishGuard attribution
and the three exact WhatsApp messages remain. Focus outlines now stay legible on
the blue contact background and selected tabs; disclosures have explicit focus styling.

Seven Node tests and four Python contract tests passed again. Browser checks
sampled both themes, desktop/mobile/narrow widths, native keyboard disclosure
toggle, mobile link-close, dist PyNivo hash selection and no-script disclosure/all
panel access. Key light-theme text contrast samples were 5.25:1 or better; these
samples exclude comprehensive contrast, gradients and full screen-reader acceptance.
No page overflow was observed at 390px or 360px; sampled console errors were empty.
A full redesign is an option for a future content/layout direction, not implemented.


## October 5 redesign and content refresh

The owner authorized a project-led editorial redesign after GitHub review. The compact split hero, project entry links, smaller section typography, rounded project diagrams and readable `case-studies.html` replace the previous oversized name-led presentation. Six sections, five accessible tabs, theme/menu/contact behavior and no-script content remain. Loopnest replaces the outdated Social Connect lab entry and is explicitly paused. Qashoryx 2.1.4, Vendiqo recovery/build evidence, PyNivo current CI versus older preview, and Spenvera backup tests are refreshed. See `docs/portfolio-audit-2026-10-05.md` for revision evidence and limitations. Eight public assets now have exact root/dist parity. No packages or runtime GitHub calls were added. The owner authorized committing, pushing and deploying this redesign on 5 October 2026. GitHub Pages publishes from the main branch; verify its deployment separately from local checks.
