# Security boundaries

The portfolio serves public authored content. It has no accounts, server-side
code, API, uploads, payments or business database. Product security claims in
case studies are dated evidence about separate applications.

`exhibition.js` reads hashes only to match authored project names or legacy
aliases; it never evaluates them or inserts them as HTML. Contact content and
JSON-LD now reside in HTML. Runtime HTML injection is absent. New-window links
use `noreferrer`; a contract test guards that protection. Contact links prepare
visitor-controlled actions and never send messages on the visitor's behalf.

The only persisted value is a light/dark theme preference. Valid values are
allowlisted. Storage may fail; the page still works and an explicit choice stays
effective for the current page. There is no sensitive persisted portfolio data.

Google Fonts is the only runtime third-party resource dependency. Fallback fonts
exist. Linked services receive visitor requests when links are followed. Public
business contact details are intentional. Never put private product source,
customer records, databases, exports, credentials or operational logs in the site.
Ignore rules help prevent accidental additions; they do not sanitize tracked files.

CI has read-only contents permission, disables checkout credential persistence,
and runs no deployment or external reporting step. Action tags are versioned but
not immutable commit pins: this remains a supply-chain hardening opportunity.

No new exploit or exposed credential was identified in the current-tree review.
This does not establish absence of secrets in history. No full-history scanner,
host penetration test or upstream dependency audit was performed. There is no
application package dependency manifest to audit.

GitHub Pages response headers and account security are outside the local source
review. A CSP must account for the inline theme bootstrap, JSON-LD, Google Fonts
and data-URL favicon. No unverified header configuration was added. Review actual
hosting capabilities and test a policy before enforcing it. Report suspected
issues privately to the portfolio owner using the published email; avoid including
credentials in public issues.
