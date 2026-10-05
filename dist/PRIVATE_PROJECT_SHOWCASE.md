# Private Engineering Projects

Some of my strongest software projects are intentionally kept private to protect client/business information, proprietary implementation, reusable business logic, and—in products that may handle sensitive information—future user data. This page documents verified product scope and engineering outcomes without publishing private source code, credentials, databases, invoices, logs, customer records, health data, or private recommendation histories.

Refreshed against repository snapshots on **5 October 2026**. Older verification is explicitly dated; readable summaries are available in [the case studies](case-studies.html). Implementation, recorded QA, and fresh portfolio checks are distinct evidence. The repository-only audit ledger at `docs/portfolio-audit-2026-10-01.md` records revisions, sources and limitations. Private-source code is not mirrored here.

## Qashoryx POS

**Offline-first wholesale point-of-sale and business operations application for Windows**

**Status:** Version 2.1.4 · active internal release; production acceptance pending\
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, ReportLab, PyInstaller, Inno Setup

### Current engineering evidence

- Windows CI on 5 October 2026: 162 tests plus 54 subtests; isolated executable build and self-verification succeeded. Version 2.1.4 restricts customer management to the owner and allows staff to invoice saved customers, with service/controller checks and transaction-time customer validation.

- 144 tests plus 26 subtests reported passing in the 1 October 2026 repository validation across database initialization, migrations, authentication, transactions, customer balances, invoice editing/returns, reporting, restore, runtime paths, packaging, UI interaction regressions, customer previous-due accounting, and release protection
- Eight ordered schema migrations, now including explicit customer-account transaction purposes, with backup-first upgrade behavior, integrity verification, atomic publication, and restore rehearsal
- Cross-module business regression covering owner setup, authentication, catalog/stock creation, salesman/customer creation, sale/payment/edit/return flows, reports, PDF output, backup, mutation, restore, reopen, and state recovery
- Historical read-only financial and inventory reconciliation with zero findings across a verified backup containing 568 invoices, 463 active customers, and 255 products
- Database startup checks for integrity, foreign keys, schema/migration revision, indexes, writability, WAL, and busy-timeout behavior
- Transaction-safe invoice, customer, payment, and stock operations with rollback protection
- Previous/opening debt is audited separately from product sales: invoice collections, previous-due recovery, and Total Cash Received are reported distinctly so legacy debt activity does not inflate sales or gross profit
- Guarded **Move Payment to Invoice** correction can reclassify all or part of a payment accidentally recorded against Previous Due to one outstanding invoice without changing Total Cash Received, Total Due, products, or stock; the reason and responsible user remain auditable
- Invoice creation, editing, reprinting, A4 output, and thermal output derive Previous Balance and Total Due from the same current account snapshot, avoiding stale or double-counted balances
- PBKDF2-HMAC-SHA256 authentication with 600,000 iterations for current hashes, first-run private owner setup, supported legacy-hash upgrade, and persistent failed-login delay
- Explicit Decimal half-up cent rounding at current invoice calculation boundaries while preserving compatible historical storage
- Release tooling with exact dependency locking, clean-build enforcement, packaged `--verify-installation`, release manifests, source/dependency evidence, and SHA-256 artifact hashes
- Controlled one-page 80 mm hardware test successfully rendered and spooled to a connected BC-80POS thermal printer
- Privacy-safe structured operational logging with automatic redaction of secret-like fields
- Measured performance baseline with removal of table/theme reflow bottlenecks and protected lazy/debounced operator workflows

### Product scope

- Product, inventory, customer, invoice, payment, expense, warranty, salesman, and reporting workflows
- Transaction-safe sales, invoice editing, returns, payment replacement, and stock reconciliation
- Reusable customer profiles with searchable invoice histories, balances, duplicate review/merge, opening/previous dues, previous-debt payments, and audited balance corrections
- Owner/staff roles and permission-controlled actions
- Quick and Detailed Invoice workflows with payment/balance handling
- A4 and thermal invoice generation and printing
- Sales, inventory, profitability, Sales by City/Town, previous-due recovery, total-cash, and best-selling-product reports
- Verified local backups, in-app restore validation, emergency pre-restore backup, and migration safety
- Windows executable and installer packaging
- Persistent Light, Dark, Ocean Blue, and Emerald Green themes with responsive operator workflows

### Version 2.1.3 accounting correction

Version 2.1.3 adds a narrowly guarded correction for a real operator mistake: cash intended for an outstanding invoice may have been recorded in the Previous Due ledger instead. Rather than deleting and recreating financial history, Qashoryx can move all or part of that existing payment to one outstanding invoice while preserving overall cash received and the customer's combined Total Due. The correction is permission-controlled and retains responsible-user/reason evidence in the audit history.

The release also removes the unused Daily Drive reporting integration and redundant dashboard status cards, while preserving existing local report files during upgrade.

### Engineering approach

Qashoryx is modernized without replacing its working persistence architecture or rewriting historical business data speculatively. The current process uses tests, reconciliation, profiling, backups, and reversible release evidence to decide what should change and what should remain compatible.

The verified pre-modernization production-data backup reconciled with zero findings, so risky historical-money or inventory-authority rewrites remain deliberately deferred until there is evidence that such a migration is necessary.

### Remaining production gates

The repository explicitly separates automated engineering evidence from acceptance work that still requires people, hardware, policy, or external systems. Remaining gates include full Windows UI/scaling/theme review, keyboard-only and destructive-confirmation acceptance across operator screens, clean-machine installer/upgrade acceptance using a verified data copy, antivirus/SmartScreen review, commercial code signing, independent security review, and optional encrypted off-device backup design.

### Portfolio value

Qashoryx demonstrates the ability to evolve substantial business software while protecting financial correctness, inventory integrity, historical compatibility, recoverability, operator usability, release reproducibility, and real business data. The 2.1.2/2.1.3 accounting work also demonstrates a preference for correcting classification and workflow errors without fabricating sales, rewriting history, or altering cash totals merely to make the interface simpler.

**Source policy:** Private. Architecture, workflows, verification strategy, engineering decisions, and sanitized demonstrations can be discussed without distributing unrestricted source code.

---

## Fixloom

**Offline-first repair workflow manager for Windows repair shops**

**Status:** Version 0.1.0 · implemented first-release/demo build; clean-machine acceptance pending\
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, SQLAlchemy 2.x, Alembic, ReportLab, pytest, Ruff, mypy, PyInstaller

### Engineering scope

- Customer, device, technician, and guided repair-intake management
- Seven validated repair statuses with service-appended chronological history; no directed transition policy or database immutability guarantee
- Exact monetary handling for charges, payments, and outstanding balances
- Repair photographs and managed attachment workflows
- Branded repair job-sheet PDFs containing customer receipt content in the same document
- Alembic schema migrations and compatibility handling
- Checksummed backup/restore workflows with SQLite integrity verification
- Automated tests, linting, static typing, dependency checks, and repeatable Windows packaging

### Verification and limits

The 1 October repository review reports 48 passing tests, Ruff, strict mypy and dependency checks. Windows installer acceptance was not rerun. There is no application login or encryption. Checksums detect corruption, not archive authorship; schema compatibility and restore resource limits need further review.

### Portfolio value

Fixloom demonstrates structured application architecture, migration-managed persistence, workflow design, financial-record correctness, attachment management, recoverability, and disciplined release tooling.

**Source policy:** Private. Public material presents verified scope and architecture-level decisions without exposing reusable proprietary implementation.

---

## Vendiqo

**Offline-first Windows point-of-sale application for Pakistani small retailers, wholesalers, and trading businesses**

**Status:** Version 0.1.0 · implemented release candidate; owner and target-machine acceptance pending\
**Role:** Software Engineer  
**Technology:** Python, Qt/PySide desktop stack, SQLite, migration-managed persistence, Ruff, mypy, pytest, PyInstaller, Inno Setup

### Completed release-candidate scope

- Professional Windows navigation shell with persistent light/dark mode
- Products, categories, units, SKUs, and keyboard-wedge barcode support
- Immutable inventory movement ledger with calculated stock balances
- Supplier directory and atomic purchase posting
- Exact fully paid local sales, customer linkage, payments, and stock issue
- Receipt preview, printing, PDF export, duplicate/reprint, and referenced sale returns
- Customer contact directory, operational reporting, and document search
- Checksummed backups, verification, atomic restore, and rollback protection
- Versioned FBR contract boundary with a provider-neutral durable compliance queue
- Reproducible Windows portable PyInstaller build with smoke-tested first-launch migration and backup checks
- Per-user Inno Setup installer produced by the Windows release workflow
- SHA-256 release artifacts for the portable distribution and installer outputs
- Automated quality gate covering formatting, linting, static typing, tests, and packaged self-checks

### Recorded verification

Windows CI on 5 October 2026 reports 130 passing tests; Python 3.13/3.14 jobs succeeded, including portable build and frozen self-verification. Recovery now validates archive metadata before mutation, checks WAL checkpoint completion and keeps a rollback copy before atomic replacement. The earlier 1 October review recorded 116 tests, Ruff and strict mypy. Those checks do not prove physical printing or a live FBR integration. Startup composes the queue service without a transmission gateway or worker.

### Deliberate boundaries

The current release candidate does **not** claim features that are not implemented. Tax calculation, customer credit/receivables, damaged-return disposition, live FBR transmission, and automatic compliance-queue processing remain outside the completed 0.1.0 release-candidate scope. Code signing and final physical-printer acceptance remain deployment gates.

The Compliance workspace represents an integration foundation, not a claim of FBR compliance.

### Portfolio value

Vendiqo demonstrates financial and inventory transaction design, immutable records, recovery engineering, release automation, keyboard-driven retail workflows, provider-neutral integration boundaries, Windows installer delivery, and careful separation between implemented behavior and future regulatory integration.

**Source policy:** Private. The completed product is presented through verified capabilities and engineering evidence while unfinished or regulatory-dependent work is stated explicitly.

---

## Cineyra

**Personal film and television discovery system built around durable taste and temporary viewing context**

**Status:** Private pre-launch active build  
**Role:** Software Engineer  
**Technology:** React 19, TypeScript, Vite, Supabase Auth/PostgreSQL, Supabase Edge Functions, TanStack Query, Zod, TMDb, optional Gemini reasoning, Vitest

### Current engineering scope

- Durable **Taste DNA** is kept separate from a temporary **Tonight Context**, so long-term preferences are not overwritten by one evening's mood, runtime, genre, language, or theme constraints
- TMDb search, detail, discovery, genres, languages, ratings, paging, watch-provider metadata, and candidate retrieval are kept behind a server-side media Edge Function
- Recommendation flow parses Tonight Context, obtains TMDb candidates, excludes watched/rejected titles, applies hard constraints, assigns a deterministic match score, and returns three titles
- Gemini reasoning is optional and explicitly gated; ordinary deterministic matching remains available without AI; explicit tone/theme exclusions fail closed when verification is unavailable
- Supabase Auth-backed sessions with private profiles, interactions, conversations, recommendations, feedback, preference evidence, and Taste DNA under row-level-security boundaries
- Recommendation sessions, scored results, feedback, and AI-usage records are server-controlled rather than trusted to direct browser writes
- Recommendation feedback is applied through an authenticated PostgreSQL function that validates ownership and writes interaction, feedback, and preference evidence atomically
- Rating edits use an atomic database function to reconcile preference evidence instead of repeatedly overweighting the same title
- Recommendation requests use a best-effort count-before-processing quota; it is not an atomic abuse-control guarantee
- Watchlist, watched/rating/note workflows, recommendation history, Discover filters, detail navigation, and Ask Yra conversation persistence
- Account-data export to JSON has been downloaded and manually verified on a live account; large-export QA remains
- Password-confirmed account-deletion UI and server endpoint are implemented; successful disposable-account deletion still requires end-to-end QA
- Privacy and Terms routes have operator-approved text; independent legal review remains a pre-launch check
- Light-theme and narrow-screen navigation checks are recorded, while keyboard and screen-reader acceptance remain open
- Standard project gate includes TypeScript checking, ESLint, Vitest, and production build

### Current validation and limits

The 1 October repository review reports 21 unit tests, typecheck, lint and build passing; this portfolio session did not rerun that application suite. The deterministic scorer currently uses genre signals and request metadata, not every stored Taste DNA dimension. Gemini is recorded as disabled behind an explicit paid-service confirmation gate. Account-cache isolation and edited-note evidence reconciliation remain documented pre-launch concerns.

### Deliberate boundaries

Cineyra is not presented as publicly launched. Independent legal review, full two-account RLS/integration testing, successful disposable-account deletion, large-export testing, automated browser coverage for critical discovery/recommendation journeys, production redirect/origin checks, password-reset/email-confirmation acceptance, keyboard operation, and screen-reader labels remain release gates.

Gemini is not treated as the authority for recommendation correctness. Hard constraints and deterministic ranking remain explicit system behavior; AI usage is optional and gated behind reviewed billing/data terms.

### Portfolio value

Cineyra demonstrates recommendation-system design, deterministic-plus-AI fallback architecture, user-preference modeling, privacy-aware data ownership, RLS and Edge Function boundaries, server-controlled writes, transactional feedback learning, third-party media integration, account data portability, deletion design, and disciplined pre-launch quality mapping.

**Source policy:** Private during pre-launch development. No API secrets, private user profiles, recommendation histories, conversations, or account exports are published.

---

## Nourentra

**Responsive nutrition and fitness journey platform designed around professional review**

**Status:** Private beta-development foundation  
**Role:** Software Engineer  
**Technology:** React, TypeScript, Vite, Tailwind CSS, React Router, React Hook Form, Zod, Recharts, Vitest, Supabase

### Current engineering scope

- Eight-step client assessment with validation, consent, and safety-conscious language
- Client routes for dashboard, journey, plans, engagement, check-ins, measurements and activity completion; dashboard/journey summaries still contain sample data
- Demo nutritionist workspace with assessment/safety review, trends, plan editing, check-ins, notes and revisions; live roster/detail pages explicitly remain unavailable
- Shared/private food library and meal-by-meal nutrition-plan editing
- Professionally reviewed activity plans with adaptable sessions, safety-gated publication, and client completion tracking
- Atomic assessment and weekly-check-in persistence with synchronized weight records
- Atomic meal-plan draft saving with bounded payload validation and revision snapshots
- Optional client measurement logging with owner-scoped access policies
- Daily habit completion, activity logging, and client-controlled notification preferences
- Database-guarded nutrition-plan approval that blocks publication while unresolved safety flags remain
- Typed health-calculation and safety-screening modules; assessment-to-safety-flag integration is incomplete
- Supabase migration with ownership boundaries and Row Level Security policies
- Clearly labelled fictional demo mode when Supabase credentials are not configured; live client access remains behind an unavailable state until real client records are wired in
- Responsive layouts, keyboard focus states, reduced-motion support, PWA metadata, and static security/privacy headers
- Type checking, linting, domain tests, production build, and critical desktop/mobile browser journey commands in the development quality gate

### Recorded verification

The 1 October repository review reports typecheck, lint, 9 unit tests, build and 26 demo desktop/mobile E2E tests passing. No live Supabase database was verified. Assessment safety-flag generation, direct-write policy review, imperial input conversion and remaining sample summaries require work before real-client use.

### Deliberate boundaries

Nourentra is not presented as a medically or legally complete production health service. Professional credentials, contact information, legal/privacy language, clinical thresholds, server-controlled role assignment, production authentication flows, RLS integration coverage, audit history, accessibility/security review, and operational data-deletion procedures require review before accepting real client data. Fictional demo mode must not be used for real health information.

### Portfolio value

Nourentra demonstrates typed frontend architecture, structured multi-step forms, database authorization boundaries, workflow persistence, nutrition and activity planning, safety-aware product design, professional-review gates, responsive cross-device experience design, and disciplined separation between demo functionality and real-client readiness.

**Source policy:** Private. No real client health records, credentials, privileged Supabase keys, or private implementation are published.

---

## Spenvera

**Offline personal budgeting across monthly cycles, native devices and web**

**Status:** Private local budgeting MVP in active development; release/device acceptance pending\
**Role:** Software Engineer\
**Technology:** Expo Router, React Native, TypeScript, expo-sqlite, localStorage, Expo notifications/file sharing, React Native SVG, Node domain tests

### Implemented scope

- Resumable setup for currency, cycle start, planned income, essentials, savings and flexible budget
- Actual income/expenses with history, search, ordinary-entry edits and confirmed removal
- Essential payments, savings contributions and debt repayments linked to transactions
- Actual-data charts, spending pace, deterministic insights and conditional forecast scenarios
- Cycle reports/comparisons, financial calendar and versioned closed-cycle snapshots
- Opt-in local native bill reminders; web scheduling explicitly disabled
- Versioned local backup export, confirmation, integrity checks and guarded restore
- Native SQLite migrations through schema version 7; web JSON adapters use versioned localStorage keys

### Recorded validation and boundaries

The 3 October repository record reports 45 tests across 19 files, including backup-envelope validation, nested web payload validation and web restore failure/rollback tests. Restore revalidates before replacement; failed rollback is explicitly reported. Android file-picker access was reported verified on the owner’s phone. Wider device and release acceptance remain open. Backups are unencrypted; checksums do not establish trusted authorship. Native/web formats are incompatible and web restore is not transactional. System/light/dark themes are implemented; optional Drive backup is not. Web reminders are disabled and Expo Go Android reminders require a development build. No store publication or live web deployment is claimed.

### Portfolio value

Spenvera demonstrates pure financial calculations, integer-money accounting, platform-specific local persistence, linked records, stable reporting snapshots, device integrations and explicit recovery limits.

**Source policy:** Private. No personal financial records, backups or private implementation are published.

---

## Private-source policy

These projects follow a **show the engineering, protect the implementation** approach:

- Production and product source repositories remain private unless deliberately opened later.
- Customer databases, health records, credentials, API secrets, invoices, backups, logs, runtime data, recommendation histories, conversations, account exports, and private business information are never published as portfolio material.
- Proprietary implementation files are not mirrored into public showcase repositories.
- Public descriptions focus on verified outcomes, technology choices, architecture-level decisions, testing, data safety, and product scope.
- Private source access should only be granted deliberately to trusted reviewers when there is a genuine need.

For publicly inspectable developer tooling, see [PyNivo](https://github.com/asadabbas717/pynivo), which is available under Apache License 2.0 with a Windows preview release.

## Developer

**Asad Abbas — Software Engineer**  
GitHub: [asadabbas717](https://github.com/asadabbas717)  
Portfolio: [asadabbas717.github.io](https://asadabbas717.github.io)
