# Project Context

## Recruiter portfolio upgrade — 9 October 2026

Baseline clean main: `238a11fc24ec6d11d8aa0db2791e121e8521d4f5`.
User requested applying the supplied professional-portfolio specification and
reviewing latest GitHub changes. RepoLens 0.1.1 is now the default flagship, followed
by Qashoryx, PhishGuard, PyNivo and Loopnest. Six sections remain, with skills and
experience replacing the less selective current-build/public-lab homepage sections.
Added the user-provided six-week Android internship and UMT degree; no dates,
commercial impact or seniority were invented. Existing project records remain in
case-studies.html; Vendiqo main evidence is refreshed through 6730820.

Installed the published RepoLens package in an isolated review environment and
generated genuine HTML/JSON from its inert poor-python fixture with Bandit 1.9.4:
score 92.50, eight findings, no target execution markers or local-path disclosure.
The report is static; no runtime API or private-source access is added. Removed
decorative artwork/pointer movement and the PyNivo terminal-style mockup. Added a
small SVG favicon. Ten public pairs are now allowlisted and synchronized.

CV file remains missing: the hero clearly offers Request CV through email.
No commit, push or live publication has been performed for this update.
See docs/portfolio-audit-2026-10-09.md for evidence, selection and validation.
Earlier session notes below are historical, superseded where this entry differs.

## UI polish and audit publication — 5 October 2026

The user requested committing/pushing the audit before UI polishing. Audit commit
`5b7cd7a` was pushed to main. Remote Node 22/Python checks passed, but the whitespace
step failed because a one-commit checkout treated old Markdown hard breaks as
new additions. Follow-up `c3c9160` fetches the parent revision and was also pushed.
The initial audit revision's GitHub Pages deployment completed successfully.
The follow-up revision's remote quality gate and Pages deployment both completed
successfully: Actions runs `37244116856` and `37244115917` respectively.

UI polishing is a separate local change: shorter summaries, eight native
engineering-detail disclosures, visible status labels/caveats, compact mobile
hero/spacing and a primary email action above smaller audience paths. Removed the
floating dock. All three WhatsApp messages and all directory channels remain.
Product scope details and PhishGuard attribution are preserved. A full redesign
has not been requested or implemented.

Local tests pass (7 interaction + 4 repository), including byte parity. Browser
checks sampled desktop/mobile/narrow layouts, themes, keyboard disclosure controls,
mobile navigation, dist hash selection and no-script panels/disclosures. Key light
theme text contrast samples measured at least 5.25:1; this is not full accessibility
acceptance. No page overflow was observed at 390px/360px. See the audit follow-up.

## Current engineering audit — 5 October 2026

Baseline: clean `main` at `5e13ca0`. The static portfolio was audited and improved
locally. See [ENGINEERING_AUDIT.md](ENGINEERING_AUDIT.md) for original/final scores,
findings, verification and remaining risks. No commit, push or publication was
performed in this audit. Existing historical publication authorizations below
are records of previous sessions, not a current publishing instruction.

Contact/availability/dock content and JSON-LD now reside in HTML. JavaScript only
enhances themes, menu, tabs, hash aliases and artwork. Explicit theme choices
survive blocked storage within the page. No-script CSS exposes all project panels
and mobile navigation. Design, contact messages and product claims are preserved.

Seven public asset pairs are protected by an allowlisted sync script and Python
contract tests. Seven Node interaction tests and four Python contract tests pass.
The read-only CI workflow runs them with syntax and whitespace checks. Node 22
and Python 3.13 are CI versions; no package installation or build is required.
No browser E2E suite, linter or formatter exists. See [testing](docs/testing.md),
[security](docs/security.md) and [deployment](docs/deployment.md).

The following older record is preserved as historical evidence. Statements about
missing tests/CI, injected content or current session status below describe the
earlier snapshot and are superseded by this entry.

---

# Historical project context

## Hosting cleanup — 5 October 2026

GitHub Pages is live at https://asadabbas717.github.io/; homepage ownership text
and `usage.html` were verified with HTTP 200 and expected content. User requested
removal of unnecessary hosting. Removed the unused Sites manifest and active
publishing instructions. Preserve GitHub Pages and all public assets.
Connected Sites account lists no sites and the old project returns not-found.
The remote copy has NOT been deleted and its billing is unknown; removal of
repository configuration does not cancel charges. Do not recreate the integration.

## Ownership update — 5 October 2026

Started from GitHub main `48873a447cacf69bd0e273979ec3dff8c02381b0` in a clean clone.
Added `LICENSE`, `usage.html`, footer ownership text and author/copyright metadata.
The new page and changed HTML/CSS are mirrored into `dist/`. Notices apply only
to original owned material; third-party rights and linked project licenses remain
separate. No navigation/contact JavaScript changed. Repository visibility and
hosting are unchanged; copying remains technically possible for a public site.

Reviewed **1 October 2026** (Asia/Karachi). Starting branch: `main`; HEAD and
`origin/main`: `84f8c744d979d6173eb263d2e1a8848dc6d0fbb4`. The fresh local clone
was clean. Recheck Git/code/upstream state before relying on this snapshot later.

## Project overview

Asad Abbas's portfolio presents engineering work to hiring teams and business
clients: offline business products, developer tooling, security modernization,
and current web/mobile products. It provides attributed case studies, public
source links, maturity boundaries, principles and contact actions. It does not
execute the products described or hold their users' data.

## Current project status

Established static portfolio in active content maintenance. The user explicitly
authorized commit, push and deployment on 1 October 2026 after the local review.
GitHub Pages is the active host. The old Sites integration is retired; see the
5 October hosting cleanup above for the remaining remote-account limitation.

## Technology stack

HTML5, CSS and plain browser JavaScript; modern DOM/media-query APIs; localStorage
for theme only. Google Fonts is external; PNG artwork is local. No framework,
backend/API, database/ORM/authentication, package manager, runtime pin, test suite,
build/lint/format script, CI, Docker or repository license is present. Optional
Python 3 serves local files; optional Node checks JS syntax.

## Architecture summary

`index.html` defines content/metadata. `folio.css` sets the base design;
`portfolio-2026.css` extends featured/current/contact styling. Deferred
`exhibition.js` controls theme, navigation, tabs/hash aliases, artwork movement
and contact/structured-data enhancements. Root public assets are manually mirrored
under `dist/`. See [architecture](docs/architecture.md).

## Implemented features

Confirmed in the portfolio code:

- Six sections, five featured tab panels and four public-lab links.
- Three current builds: Cineyra (pre-launch), Nourentra (beta foundation) and
  newly added Spenvera (local budgeting MVP).
- Light/dark preference/system handling; mobile menu/Escape, roving project tabs
  and arrow/Home/End controls; legacy hash aliases; reduced-motion CSS.
- Static private-project showcase with sanitized scope and recorded acceptance limits.
- Injected recruiter/business actions, public contact directory and desktop dock.
- Prefilled WhatsApp text, email/phone/social links and Person JSON-LD enrichment.

Partial limitation: much contact content needs JavaScript; the static main contact
link points to GitHub until enhanced to email. There is no separate experimental
portfolio feature established by the source.

## Current work / in progress

No starting uncommitted work or TODO/FIXME implementation backlog was found.
This session refreshes content and creates continuity documentation. Publication is authorized; no active refactor is inferred.
Upstream product work is described in the dated audit, not a portfolio feature backlog.

## Recent important changes

- 24 September: WhatsApp contacts and context-specific prefilled messages
  (`092ad71`/`e30122e`, `9337aa4`/`b287b50`); Qashoryx 2.1.3 case study.
- 28 September: Cineyra current-build card, refreshed Nourentra scope, styling,
  private showcase and recruiter/business positioning; final sync `84f8c74`.
- This session: owned GitHub default-branch change inventory since that sync;
  new Spenvera features, updated documented validation, narrower claims for
  Cineyra/Nourentra/Fixloom/PyNivo, continuity guides and protective `.gitignore`.
  Runtime JavaScript, CSS, artwork and hosting configuration are unchanged.

See [audit ledger](docs/portfolio-audit-2026-10-01.md) for all 21 owned heads,
PhishGuard attribution, pinned evidence and the distinction between fresh portfolio
checks and upstream recorded validation. No private implementation was copied.

## Known problems and constraints

- Root/dist duplication can drift; maintain six matching public asset pairs.
- Runtime script assumes authored DOM IDs/structure. No CI or automated regression
  suite guards navigation, contact injection or synchronization.
- External fonts add a third-party request; no tracked CSP/security-header policy
  exists. Actual response headers remain unknown.
- Markdown showcase rendering/download behavior depends on the chosen static host.
- Private source, credentials, operational records and exports must remain private.
  A configured product/demo or passing unit suite does not prove production readiness.
- Historical reconciliation/printer/coverage figures are dated evidence. Keep
  PhishGuard's originator and modernization contributor roles distinct.
- Retain existing visual design and contact messages unless requested to change them.

## Important development decisions

See [decisions](docs/decisions.md): static client, root/dist mirrors, sanitized
evidence, preserved design/controls, visitor-controlled contacts and docs-only continuity.
Unknown original rationale is explicitly labeled rather than invented.

## Environment variables

None are required or referenced by the portfolio application. No `.env` template
or service credential exists. The static hosting manifest's project identifier
is configuration, not an authentication secret; it is not reproduced in these docs.

## How to run

Open `index.html`, or from repository root with Python 3:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000/` and `/dist/`; Ctrl+C stops the server. There is
no dependency install or build. Commands were exercised with the available bundled
Python/Node runtimes; no project version pin is inferred. See [README](README.md).

## Testing status

No test framework/suite exists in this repository. Available checks:

```bash
node --check exhibition.js
git diff --check
```

Fresh validation on 1 October 2026 passed:

- Node JavaScript syntax and final Git whitespace checks.
- Six root/dist byte-parity pairs, two HTML documents, nine Markdown documents,
  local links/assets, unique IDs, tab/ARIA targets and structured JSON.
- Desktop (1440 px), mobile (390 px) and narrow mobile (360 px) browser checks:
  existing design, three cards, no horizontal page/text overflow, light/dark,
  five tab clicks, ArrowRight/Home/End, mobile open/close/Escape/link-close.
- Deployment preview initialized the PyNivo hash-selected panel, retained theme
  preference and showed three current builds; legacy section aliases were exercised.
- Decoded recruiter/business/general WhatsApp URLs matched their intended messages;
  email/phone/social targets were inspected without sending or launching services.
- Browser warning/error logs were empty in sampled root/dist previews.
- Current-tree heuristic review of 21 tracked/new files found no suspicious
  credential filename or secret-pattern match. New documentation paths were checked.

Initial whitespace findings were Markdown hard breaks in modified lines; those
were converted to backslash hard breaks. Initial static checks found the not-yet
written context file and a repository-only audit link in the deployed showcase;
the context was completed and the deployed link corrected. Final checks passed.
Git ownership differed between the download and sandbox accounts, so validation
used a command-scoped safe-directory setting, without changing global Git settings.
No build/lint/test suite applies to this portfolio. Full accessibility acceptance,
live hosting and exhaustive browser/secret-history testing were not performed.
Upstream products' tests were not rerun. Their dated context/CI records provide
evidence for public copy without claiming fresh application acceptance.

## Deployment status

Static files are already tracked under `dist/`. Root/dist HTML, CSS, JS,
showcase and sculpture must match
byte-for-byte. This session copies updated HTML/showcase only. Repository docs
stay outside dist. No hosted API, environment setup or compilation is needed.
The canonical URL is GitHub Pages. Ownership notices were verified live on
5 October 2026; platform settings, custom routing and headers remain unaudited.

## Security/documentation review

Current-tree filename/credential-pattern review found no obvious credential
exposure. Public contact details are intentional. No secrets were printed, copied,
rotated or deleted. `.gitignore` was missing and now covers common credential,
environment, database, dependency and work files without ignoring tracked dist.
Ignore rules do not protect previously tracked content. Fixed `innerHTML`
templates have no runtime untrusted input; hashes are lookup-only; external
new-window links use noreferrer. This is a lightweight current-tree review, not
a full history secret scan, live-host security audit or accessibility certification.
See the [dated review](docs/portfolio-audit-2026-10-01.md).

## Recommended next steps

Commit, push and publication were subsequently explicitly authorized by the user.
Verify actual hosting/domain/Markdown behavior and record live acceptance. Consider
repeatable parity/browser checks if drift recurs. Follow [roadmap](docs/roadmap.md).

# Session Handoff

## What the next developer/agent should read first

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `docs/architecture.md`
4. `docs/decisions.md`
5. `docs/roadmap.md`

Then read `docs/portfolio-audit-2026-10-01.md` before changing product claims.

## Before continuing development

```bash
git status
git log --oneline -10
node --check exhibition.js
git diff --check
```

Perform root/dist parity, local-reference and relevant browser checks from README.
There is no test/build/lint command to invent. Preserve uncommitted work and inspect
upstream changes since the dated evidence before refreshing claims.

## Current handoff summary

Static portfolio now has three current builds and more precise maturity/test claims.
The full uploaded continuity specification was recovered and applied locally.
Publication was subsequently authorized. Push reviewed source to GitHub and
verify GitHub Pages. The former Sites integration is retired.
Major warning: never copy private product source/data into this public repository,
and do not equate recorded upstream tests with fresh production verification.
The initial local review passed: four tracked files changed and eight repository
files were created. The later explicit publishing authorization supersedes the
uploaded specification's default prohibition on unsolicited commits/pushes.

Validation for this update: JavaScript syntax and whitespace checks passed; all
seven root/dist asset pairs match byte-for-byte. Browser preview confirmed the
permission link, email target, and usage-page layout at desktop and 390px mobile
widths; the mobile footer remains visible. Existing contact targets were inspected.
No live deployment or repository-visibility change was performed.


## October 5 redesign and content refresh

The owner authorized a project-led editorial redesign after GitHub review. The compact split hero, project entry links, smaller section typography, rounded project diagrams and readable `case-studies.html` replace the previous oversized name-led presentation. Six sections, five accessible tabs, theme/menu/contact behavior and no-script content remain. Loopnest replaces the outdated Social Connect lab entry and is explicitly paused. Qashoryx 2.1.4, Vendiqo recovery/build evidence, PyNivo current CI versus older preview, and Spenvera backup tests are refreshed. See `docs/portfolio-audit-2026-10-05.md` for revision evidence and limitations. Eight public assets now have exact root/dist parity. No packages or runtime GitHub calls were added. The owner authorized committing, pushing and deploying this redesign on 5 October 2026. GitHub Pages publishes from the main branch; verify its deployment separately from local checks.


## Featured selection revision — 9 October 2026

The owner requested Vendiqo instead of incomplete Loopnest in the five featured tabs. Vendiqo presents audited retail workflows and dated 183-test evidence with unsigned delivery and target-machine/printer acceptance gates visible. Loopnest remains in internship experience and the supporting case study; its old homepage anchor still resolves. Fixloom remains a secondary case study. The owner reviewed the local preview and explicitly authorized committing, pushing and deploying this revision on 9 October 2026. GitHub Pages deployment must be verified after the push.
