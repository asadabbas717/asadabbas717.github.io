# Technical decisions

## Decision 010 — RepoLens flagship and recruiter evidence — 9 October 2026

The supplied upgrade brief prioritizes RepoLens and accurate junior positioning.
Keep the established static site, six sections and five keyboard-operable tabs.
Select RepoLens, Qashoryx, PhishGuard, PyNivo and Loopnest for complementary CLI,
transaction, backend, desktop and Android evidence; move additional products into
case-study records. Replace decorative imagery and pointer behavior with shipped
release evidence and real controlled-fixture reports. Add grouped skills,
user-provided internship/education and preserve attribution/limitations.
No CV is fabricated: Request CV is explicit until the owner supplies a general
downloadable version. No private source, new dependency or runtime fetch is added.

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

## Decision 007 — Static content with progressive enhancement — 5 October 2026

**Status:** Current engineering decision; supersedes runtime injection details above.

**Context:** Contact paths, public metadata and non-selected project content must
remain usable if scripting/storage fails. The existing script combined authored
content with interaction handlers without a need for dynamic data.

**Decision:** Move unchanged authored content and JSON-LD into HTML. Keep a single
small interaction script and activate enhanced styling after successful binding.
Validate theme values and remember an explicit choice even without persistence.

**Alternatives:** Retain templates plus a duplicate no-script contact block, or add
a framework/build pipeline. Both add unnecessary content duplication or tooling.

**Consequences:** Static content has one authoring location; disabled scripting
shows all projects. Tests verify authored DOM contracts rather than making every
DOM access silently optional. A broken contract falls back to usable content.

## Decision 008 — Dependency-free quality gate and explicit sync — 5 October 2026

**Status:** Current engineering decision.

**Context:** Seven tracked deployment copies and interactive behavior had no
repeatable checks. Replacing the deployment layout could disrupt hosting.

**Decision:** Retain copies, provide an allowlisted non-destructive sync command,
and run Python repository contracts plus Node interaction tests in read-only CI.

**Alternatives:** Remove dist, introduce a bundler, or rely on manual checks alone.
The chosen approach protects compatibility with no package dependencies.

**Trade-offs:** Python and Node are development tools only. DOM fakes cannot replace
browser acceptance; mutable action version tags and lack of browser CI remain debt.

## Decision 009 — Scan-first project and contact hierarchy — 5 October 2026

**Status:** Current, requested by the user after audit publication.

**Context:** Dense project copy, tall mobile hero and repeated contact actions
made scanning difficult despite a distinctive established visual identity.

**Decision:** Keep the visual direction and six sections. Lead with short project
summaries and status labels; retain detailed evidence in native disclosures, with
release caveats visible. Make email the primary contact action, reduce audience
cards and remove the floating dock. Preserve all directory channels and messages.

**Alternatives:** Redesign the whole site, delete engineering detail, or add a
JavaScript accordion. These increase scope, lose evidence or add avoidable behavior.

**Consequences:** Less visible text and shorter mobile presentation; evidence
requires expanding a disclosure or visiting the case study. Native keyboard and
no-script behavior remain available. No product maturity upgrade is implied.


## October 5 redesign and content refresh

The owner authorized a project-led editorial redesign after GitHub review. The compact split hero, project entry links, smaller section typography, rounded project diagrams and readable `case-studies.html` replace the previous oversized name-led presentation. Six sections, five accessible tabs, theme/menu/contact behavior and no-script content remain. Loopnest replaces the outdated Social Connect lab entry and is explicitly paused. Qashoryx 2.1.4, Vendiqo recovery/build evidence, PyNivo current CI versus older preview, and Spenvera backup tests are refreshed. See `docs/portfolio-audit-2026-10-05.md` for revision evidence and limitations. Eight public assets now have exact root/dist parity. No packages or runtime GitHub calls were added. The owner authorized committing, pushing and deploying this redesign on 5 October 2026. GitHub Pages publishes from the main branch; verify its deployment separately from local checks.


## Featured selection revision — 9 October 2026

The owner requested Vendiqo instead of incomplete Loopnest in the five featured tabs. Vendiqo presents audited retail workflows and dated 183-test evidence with unsigned delivery and target-machine/printer acceptance gates visible. Loopnest remains in internship experience and the supporting case study; its old homepage anchor still resolves. Fixloom remains a secondary case study. The owner reviewed the local preview and explicitly authorized committing, pushing and deploying this revision on 9 October 2026. GitHub Pages deployment must be verified after the push.
