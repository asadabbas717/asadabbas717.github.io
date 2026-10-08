# Asad Abbas - Software Engineer

A static portfolio presenting product engineering, modernization, desktop tooling,
backend work and current mobile/web builds through inspectable engineering evidence.

## Overview and features

The site serves hiring teams and prospective business clients. It contains:

- Five featured projects: RepoLens (flagship), Qashoryx, PhishGuard, PyNivo and Vendiqo.
- Grouped evidence-based skills, a six-week Android internship and UMT education.
- Additional product records in `case-studies.html`, with explicit maturity limits.
- A real RepoLens 0.1.1 HTML/JSON assessment from a controlled inert fixture.
- Static contact content and a no-script navigation/project fallback.
- Concise project previews, visible maturity labels and expandable engineering details.
- Light/dark preference, mobile navigation, keyboard-operable project tabs,
  older hash aliases and reduced-motion styling.
- Context-specific WhatsApp messages prepared for the visitor to review/send.
- Search/social metadata and static Person structured data.

Private project summaries are in [the showcase](PRIVATE_PROJECT_SHOWCASE.md).
The [1 October 2026 audit](docs/portfolio-audit-2026-10-01.md) records sources,
snapshot revisions and verification limits. Source code availability, feature
implementation and production readiness are separate claims.

## Technology and structure

Plain HTML, CSS and browser JavaScript. No framework, backend, database, account
system, dependency installation or compilation is needed. Google Fonts is an
external resource. Decorative artwork and pointer motion are no longer loaded.

```text
index.html
folio.css
portfolio-2026.css
exhibition.js
assets/favicon.svg
assets/repolens-report.html
assets/repolens-report.json
PRIVATE_PROJECT_SHOWCASE.md
dist/                       # tracked copies for static hosting
scripts/                    # public-asset sync and repository checks
tests/                      # interaction regression tests
.github/workflows/          # read-only quality gate
AGENTS.md
PROJECT_CONTEXT.md
docs/                       # architecture, decisions, roadmap, dated audit
```

## Getting started

Clone/download the repository. Open `index.html` in a modern browser, or with
Python 3 installed run this optional local server from the repository root:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000/`. Preview `http://127.0.0.1:8000/dist/` to check
the deployment copy. Stop the server with Ctrl+C. No environment variables,
credentials, package manager or environment file are required.

## Build and deployment

There is no build command. Edit the root static files, then synchronize the explicit public asset list:

```bash
python scripts/sync_dist.py
python scripts/check_site.py
```

The sync command includes CSS, JavaScript and artwork. Repository documentation
stays at the root/`docs/`. Do not wipe `dist/` or treat it as disposable build output.
GitHub Pages is the portfolio's active hosting destination:
https://asadabbas717.github.io/. Push reviewed changes to GitHub and verify the
live page after publication. The homepage ownership notice and `usage.html`
were verified live on 5 October 2026. Platform settings and billing are managed
separately from this repository.

The unused Sites hosting manifest was removed on 5 October 2026 at the user's
request. Do not recreate that hosting integration. Removing configuration does
not delete an existing remote site or cancel charges; deletion of the old copy
remains unverified because its owning account is inaccessible.

## Validation

Dependency-free tests use the Node test runner and Python unittest. CI uses Node 22
and Python 3.13; the page itself needs only a modern browser. Run from the root:

```bash
node --check exhibition.js
node --test tests/interactions.test.cjs
python scripts/check_site.py
git diff --check
```

Compare root/dist files byte-for-byte; validate local asset/link targets, section
hashes, unique IDs, tab relationships and structured JSON. In a browser check:

1. Desktop/mobile widths, content wrapping, both themes and reduced motion.
2. Five tabs by click, arrows, Home and End; mobile menu and Escape.
3. Three current-build cards and their case-study links.
4. Email, phone, LinkedIn/GitHub and decoded prefilled WhatsApp targets without
   sending messages or opening external applications.
5. Root and `dist/` previews for matching content and console/resource errors.

See [testing](docs/testing.md), [security](docs/security.md),
[deployment](docs/deployment.md) and [engineering audit](ENGINEERING_AUDIT.md)
for current checks, scorecards and limits. No linter, formatter, compilation or
committed browser E2E suite is configured. Google Fonts is an external dependency;
full accessibility acceptance and live-host security headers remain unverified.

## Architecture and development

Read [architecture](docs/architecture.md), [technical decisions](docs/decisions.md)
and [roadmap](docs/roadmap.md). Future agents should start with [AGENTS.md](AGENTS.md)
and [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md), inspect Git status and preserve local work.
Keep public claims current, attributed and traceable; never publish private data.
## Ownership and reuse

This is Asad Abbas's personal portfolio, not a reusable website template.
See [LICENSE](LICENSE) and the public [usage notice](usage.html) for permission
requests and restrictions on original portfolio material. Third-party rights and
linked project licenses remain separate. Public GitHub repositories can still be
viewed, downloaded and forked; these notices do not technically prevent copying.
Keep `usage.html` synchronized with `dist/usage.html` alongside the existing assets.

## Current portfolio upgrade — 9 October 2026

RepoLens is the default featured project, linked to GitHub, PyPI, its latest release
and architecture. Its test/coverage claims describe dated release evidence, not
target-repository coverage. See [the upgrade audit](docs/portfolio-audit-2026-10-09.md).
No current CV file was supplied or found in the reviewed portfolio/profile source;
the hero offers an explicitly labeled email request instead of a broken download.
Replace that with one reviewed general Software Engineer CV when provided, adding
it to the public asset allowlist and synchronizing the deployment copy.


## October 5 redesign and content refresh

The owner authorized a project-led editorial redesign after GitHub review. The compact split hero, project entry links, smaller section typography, rounded project diagrams and readable `case-studies.html` replace the previous oversized name-led presentation. Six sections, five accessible tabs, theme/menu/contact behavior and no-script content remain. Loopnest replaces the outdated Social Connect lab entry and is explicitly paused. Qashoryx 2.1.4, Vendiqo recovery/build evidence, PyNivo current CI versus older preview, and Spenvera backup tests are refreshed. See `docs/portfolio-audit-2026-10-05.md` for revision evidence and limitations. Eight public assets now have exact root/dist parity. No packages or runtime GitHub calls were added. The owner authorized committing, pushing and deploying this redesign on 5 October 2026. GitHub Pages publishes from the main branch; verify its deployment separately from local checks.
