# Agent guide

## Project identity

Asad Abbas's portfolio (`asadabbas717/asadabbas717.github.io`) is a public, static
engineering showcase for hiring teams and potential business clients. It uses
HTML, two CSS files and plain browser JavaScript. There is no framework, package
manifest, application server, database, authentication or build dependency.

## Before making changes

1. Read this file and `PROJECT_CONTEXT.md`.
2. Read relevant architecture, decisions, roadmap and the dated portfolio audit.
3. Run `git status` and inspect recent history. Preserve unrelated local changes.
4. Read the affected HTML, both stylesheets, JavaScript and showcase text before
   changing shared behavior. The implementation is authoritative.

## Agent operating rules

- Preserve the established visual design, six sections, five featured tabs,
  responsive breakpoints, keyboard navigation, theme preference and contact flows.
- Inspect callers and related files before shared changes. Prefer readable,
  maintainable changes; avoid rewrites, duplicated logic and unnecessary dependencies.
- Follow existing names and formatting: two-space HTML/JS indentation, JS single
  quotes/semicolons, compact existing CSS. Do not reformat unrelated styles.
- Preserve older project/section hash aliases and backward compatibility where practical.
- Maintain exact root/deployment byte parity for `index.html`, `folio.css`,
  `portfolio-2026.css`, `exhibition.js`, `PRIVATE_PROJECT_SHOWCASE.md` and sculpture.
  Root files are edited first; `dist/` is a tracked static copy, not generated output.
- Do not copy repository-only continuity docs or private source into `dist/`.
- Audit current repository code and dated verification records before refreshing
  claims. Record repository revisions and distinguish implementation, recorded QA,
  new checks and unknown deployment state. Test counts need a dated source.
- Preserve PhishGuard attribution: Fahad Hussain originated it; Asad Abbas is the
  credited modernization lead/co-maintainer. Do not infer ownership from activity.
- Keep private projects private. Publish only sanitized product/architecture summaries;
  never mirror source, databases, logs, user exports, health or financial records.
- Never commit secrets or hardcode credentials. No environment variables are currently
  required; preserve environment-based configuration if introduced later. Public contact
  information and the hosting project identifier are not credentials.
- Do not fetch GitHub or private services at page runtime; content is reviewed static copy.
- Run relevant checks after changes, review the diff, update continuity docs when
  architecture/status changes and explain significant architectural changes.
- Commit, push or deploy only when explicitly requested. A hosting manifest does not
  authorize publication and does not prove the site is currently live.

## Development environment

No install/package-manager command applies. Open `index.html` directly for a quick
view, or use Python 3's optional static server from the repository root:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Preview `http://127.0.0.1:8000/` and `/dist/`. Stop the server with Ctrl+C.
There is no build/test/lint/format script or automated suite. If Node is available,
`node --check exhibition.js` checks JavaScript syntax. `git diff --check` checks
tracked-change whitespace. Browser acceptance and parity/link checks are described
in `README.md`; do not invent npm commands or fake source/test directories.

## Repository navigation

- `index.html`: metadata, six main sections, five project panels, current builds/lab.
- `folio.css`: base visual language, themes, responsive and reduced-motion styling.
- `portfolio-2026.css`: featured extensions, current-build cards, contact enhancements.
- `exhibition.js`: theme, menu, tabs/hash aliases, pointer artwork, injected contact UI.
- `assets/sculpture.png`: decorative hero bitmap; empty alt text is intentional.
- `PRIVATE_PROJECT_SHOWCASE.md`: public-safe case studies of private projects.
- `dist/`: deployment copies of the preceding static files.
- `.openai/hosting.json`: existing Sites configuration selecting `dist/`.
- `docs/`: architecture, decisions, roadmap and dated audit/security evidence.

## After making changes

1. Run applicable syntax, static-reference, parity and whitespace checks.
2. Check desktop/mobile rendering, both themes, tab click/keyboard controls,
   menu/Escape and contact link targets when page content or interaction changes.
3. Inspect `git diff` and filenames/content for credentials; never print suspected values.
4. Update `PROJECT_CONTEXT.md` for status, `docs/decisions.md` for important decisions,
   and `docs/roadmap.md` for completed/new work. Refresh claim evidence when needed.
5. Report checks with their limits; do not call manual checks an automated suite.
