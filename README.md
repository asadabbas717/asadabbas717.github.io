# Asad Abbas - Software Engineer

A static portfolio presenting product engineering, modernization, desktop tooling,
backend work and current mobile/web builds through inspectable engineering evidence.

## Overview and features

The site serves hiring teams and prospective business clients. It contains:

- Five featured systems: Qashoryx, PhishGuard, PyNivo, Vendiqo and Fixloom.
- Three current builds: Cineyra, Nourentra and Spenvera, with explicit maturity limits.
- Four public-lab repositories, engineering principles and contact actions.
- Light/dark preference, mobile navigation, keyboard-operable project tabs,
  older hash aliases and reduced-motion styling.
- Context-specific WhatsApp messages prepared for the visitor to review/send.
- Search/social metadata and Person structured data; JavaScript adds contact details.

Private project summaries are in [the showcase](PRIVATE_PROJECT_SHOWCASE.md).
The [1 October 2026 audit](docs/portfolio-audit-2026-10-01.md) records sources,
snapshot revisions and verification limits. Source code availability, feature
implementation and production readiness are separate claims.

## Technology and structure

Plain HTML, CSS and browser JavaScript. No framework, backend, database, account
system, dependency installation or compilation is needed. Google Fonts is an
external resource; the artwork is local.

```text
index.html
folio.css
portfolio-2026.css
exhibition.js
assets/sculpture.png
PRIVATE_PROJECT_SHOWCASE.md
dist/                       # tracked copies for static hosting
.openai/hosting.json         # selects dist/
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

There is no build command. Edit the root static files, then copy each changed
deployment asset to its matching path under `dist/`. For this refresh in PowerShell:

```powershell
Copy-Item index.html dist/index.html
Copy-Item PRIVATE_PROJECT_SHOWCASE.md dist/PRIVATE_PROJECT_SHOWCASE.md
```

Copy CSS, JavaScript or artwork too when they change. Repository documentation
stays at the root/`docs/`. Do not wipe `dist/` or treat it as disposable build output.
`.openai/hosting.json` configures Sites to serve `dist/`. Canonical/social URLs
point to `https://asadabbas717.github.io/`, but the repository contains no Pages
workflow, CNAME or evidence of current hosting settings. Verify platform/domain
state separately before publishing. The user authorized publication on 1 October 2026.
The existing public Sites destination is
https://asad-abbas-software-exhibition.asadabbasbusiness.chatgpt.site.
Push the exact reviewed commit to GitHub and the existing Sites source; use the
Sites workflow to package `dist/`, save that commit as a version, and deploy it.
Check terminal Sites deployment status and GitHub Pages build status separately.

## Validation

No automated test framework, linter or formatter is configured. Optional Node and
Git checks from the root are:

```bash
node --check exhibition.js
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

Latest validation results and remaining gaps are in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

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
