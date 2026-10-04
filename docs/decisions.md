# Technical decisions

## Retire the unused Sites integration — 5 October 2026

At the user's request, remove `.openai/hosting.json` and active instructions to
publish to Sites. Keep GitHub Pages as the active portfolio host and preserve all
public assets. The connected Sites account lists no sites and the old project
returns project-not-found. Remote deletion and billing cannot be verified with
that account; configuration removal is not cancellation or remote deletion.
Earlier Sites decisions below are historical and superseded by this entry.

## Ownership notice — 5 October 2026

Added an all-rights-reserved notice for original portfolio material, a public
permission page, author/copyright metadata and a footer notice visible on mobile
and desktop. Third-party rights and project licenses are explicitly excluded.
No right-click, selection, keyboard or developer-tools blocking is introduced:
client-side blocking cannot stop copying and would impair normal use. Public
repository visibility still permits downloads/forks. Visibility and hosting
settings have not been changed.

These entries document observed current choices. The original rationale is not
recorded unless a cited commit explicitly supplies it; consequences are analysis,
not invented historical intent.

## Decision 001 — Static HTML/CSS/browser JavaScript

**Status:** Current

**Context:** A public showcase presents reviewed content and navigation/contact actions.
The original rationale is not recorded. The current implementation indicates a
static client-side design.

**Decision:** Use `index.html`, two stylesheets and deferred `exhibition.js`; no package
manager, build pipeline, application backend or dynamic GitHub content.

**Evidence:** Root files, 13-file pre-session tracked tree, absence of package/CI/server files.

**Consequences:** Local preview requires no installation; claims require manual updates.
Future documentation must not invent npm/test/server commands.

## Decision 002 — Root editing files plus tracked dist mirrors

**Status:** Current

**Context:** Existing commits pair source changes with deployment copies.

**Decision:** Keep public assets synchronized at root and `dist/`. Keep continuity
docs in the repository only. The former Sites integration is retired.

**Evidence:** Former `.openai/hosting.json`; source/deploy pairs `34dcf73`/`f1467ef`,
`aa626af`/`cc76e87`, `29f4ba2`/`84f8c74`.

**Consequences:** Either static path can be previewed; copying/checking parity is required.
Neither file copies nor commit titles alone prove live hosting.

## Decision 003 — Evidence-based showcase and private-source boundary

**Status:** Current

**Context:** Several substantial projects are private and have incomplete release gates.

**Decision:** Publish sanitized scope, dated verification and explicit limits; link public
projects to source, private projects to `PRIVATE_PROJECT_SHOWCASE.md`. Preserve collaborator
attribution. Add Spenvera using current repository evidence in this session.

**Evidence:** Showcase source policy, PhishGuard role note, Cineyra/Nourentra refresh
`34dcf73`/`aa626af`, and [audit ledger](portfolio-audit-2026-10-01.md).

**Consequences:** Readers can assess engineering without private code/data disclosure.
Recorded test results and historical audits must not be advertised as fresh acceptance.

## Decision 004 — Shared responsive design and accessible controls

**Status:** Current

**Context:** The existing presentation supports desktop/mobile and two themes.
The original design rationale is not recorded.

**Decision:** Preserve the CSS layers and semantic tab/menu controls. Third current-build
card reuses the existing grid/card rules; no redesign or interaction change is needed.

**Evidence:** Both CSS files, HTML roles/IDs, theme/menu/tab handlers and reduced-motion rules.

**Consequences:** Small content updates fit existing design. Long copy still needs mobile
wrapping checks; authored DOM relationships must remain intact.

## Decision 005 — Prefilled, visitor-controlled contact actions

**Status:** Current

**Context:** Git history adds WhatsApp alongside existing contact channels.

**Decision:** Use encoded context-specific click-to-chat messages, plus email/phone/social
links. No sending service or portfolio contact-data collection is implemented.

**Evidence:** `092ad71`/`e30122e` contact additions, `9337aa4`/`b287b50` prefilled messages;
`exhibition.js` WhatsApp URLs and contact templates.

**Consequences:** Visitors send through their selected service. External destinations
have their own behavior/privacy; link inspection does not prove message delivery.

## Decision 006 — Context preservation without functionality changes

**Status:** Accepted for this session

**Context:** The recovered user specification requires continuity, source-grounded
documentation and a lightweight security review; it forbids unsolicited commits/pushes.

**Decision:** Add agent/context/README/architecture/decisions/roadmap and a dated audit,
plus protective ignore rules. Refresh public copy and synchronize only affected
deployment files. Do not add frameworks, fake directories or speculative features.

**Evidence:** User-provided specification; session diff and context handoff.

**Consequences:** Future sessions have an accurate starting point. Publishing remains
a separate explicitly authorized operation; application behavior and CSS stay unchanged.
