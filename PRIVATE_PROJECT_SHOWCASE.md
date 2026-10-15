# Private Engineering Projects

Some of my strongest software projects are intentionally kept private to protect client/business information, proprietary implementation, reusable business logic, and—in products that may handle sensitive information—future user data. This page documents verified product scope and engineering outcomes without publishing private source code, credentials, databases, invoices, logs, customer records, health data, or private recommendation histories.

Vendiqo, Cineyra and Spenvera refreshed against repository snapshots on **15 October 2026**; other records retain their stated dates. Older verification is explicitly dated; readable summaries are available in [the case studies](case-studies.html). Implementation, recorded QA, and fresh portfolio checks are distinct evidence. The repository-only audit ledger at `docs/portfolio-audit-2026-10-01.md` records revisions, sources and limitations. Private-source code is not mirrored here.

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

The 5 October audit at 4110471 records 84 passing pytest cases on Python 3.14.7,
Ruff, strict mypy, executable/ZIP packaging and Inno compilation. Archive bounds,
schema-object validation and restore compensation were strengthened. Installer
execution, clean-machine acceptance and hosted CI remain unverified. There is no
application login or encryption, and no durable restore crash journal. Checksums
detect corruption rather than authenticating archive authorship. These are dated
repository records reviewed on 9 October, not a fresh test run for this portfolio.

### Portfolio value

Fixloom demonstrates structured application architecture, migration-managed persistence, workflow design, financial-record correctness, attachment management, recoverability, and disciplined release tooling.

**Source policy:** Private. Public material presents verified scope and architecture-level decisions without exposing reusable proprietary implementation.

---

## Vendiqo

### The problem

Keep offline retail purchases, stock, sales, customer dues and supplier payments traceable.

### Engineering decisions

An immutable inventory movement ledger supports atomic posting. Held invoices/reservations, weighted-average gross profit, supplier payments and statements now complement credit/collections, issuance balance snapshots and due-first returns. Recovery validates archives and WAL checkpoint completion, retaining a rollback copy before atomic database replacement.

### Verification

Reviewed at d71d9c9 on 15 October 2026. The 14 October record reports 252 tests across the full run and one authorized environment-related rerun; Ruff, strict mypy, frozen startup/resources/schema/backup checks and installer compilation passed. Latest hosted Windows quality CI also passed. These are inspected repository records, not application tests rerun for this portfolio.

### Release boundaries

Delivery remains unsigned; current clean-machine and physical-printer acceptance remain manual gates. No application authentication, live FBR transmission or regulatory certification is claimed. Private code, client customization and business records are not published.

[Read the case study](case-studies.html#vendiqo). Private source and user records are not published.

---

## Cineyra

### Problem and contribution

I built a film and TV discovery app that separates durable Taste DNA from temporary Tonight Context, producing three focused recommendations from TMDb candidates.

### Engineering decisions

Hard filters and deterministic ranking remain explicit alongside optional OpenRouter context parsing and reasoning. Server-side Edge Functions keep integration credentials out of the browser. PostgreSQL ownership policies, protected writes and transactional rating/note reconciliation preserve account and preference boundaries. Gemini was removed.

### Verification

Reviewed at 71248af on 15 October 2026. The 12 October record reports 64 tests, typecheck, lint, production build and Deno media checking passing; the latest hosted CI passed. Recorded QA covers private account-cache separation, simulated-owner database isolation, JSON export and disposable-account deletion. Synthetic DOM and SQL tests have narrower scope than real browser/JWT checks.

### Result and boundaries

Private learning MVP and reusable application foundation. Public frontend launch is unconfirmed. Broader browser automation, accessibility and production acceptance remain open. AI provider availability is variable, and note transfer requires explicit operator authorization. No private profiles, prompts, viewing histories or exports are published.

[Read the case study](case-studies.html#cineyra). Private source and user records are not published.

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

### The problem

Plan monthly money, essentials, savings and debts without an account or application server.

### Engineering decisions

Pure financial/date calculations sit behind separate native SQLite and browser-storage adapters. Reviewed cycle carry-forward separates opening money from income. Linked-payment corrections preserve parent relationships; backup imports reject invalid cumulative payment totals before replacement.

### Verification

Reviewed at 20effa3 on 15 October 2026. Repository records list 66 behavioral tests, including real migration/trigger SQL in Node SQLite; latest hosted quality CI passed. The owner reports successful physical Android testing. Recorded Galaxy A07 checks cover carry-forward, payment correction/removal, backup/restore and scheduled reminder delivery. The general phone report is not exhaustive device certification.

### Release boundaries

Private Android preview; Play Store publication is on hold. Full Expo adapter/concurrency and native restore-failure injection remain open. Backups are unencrypted, native/web formats differ, and web rollback is not a database transaction. Web and Android Expo Go reminders remain unavailable.

[Read the case study](case-studies.html#spenvera). Private source and user records are not published.

---

## Private-source policy

These projects follow a **show the engineering, protect the implementation** approach:

- Production and product source repositories remain private unless deliberately opened later.
- Customer databases, health records, credentials, API secrets, invoices, backups, logs, runtime data, recommendation histories, conversations, account exports, and private business information are never published as portfolio material.
- Proprietary implementation files are not mirrored into public showcase repositories.
- Public descriptions focus on verified outcomes, technology choices, architecture-level decisions, testing, data safety, and product scope.
- Private source access should only be granted deliberately to trusted reviewers when there is a genuine need.

For publicly inspectable shipped developer tooling, see [RepoLens](https://github.com/asadabbas717/RepoLens) and its [PyPI package](https://pypi.org/project/repolens-engineering/). For desktop tooling, see [PyNivo](https://github.com/asadabbas717/pynivo), which is available under Apache License 2.0 with a Windows preview release.

## Developer

**Asad Abbas — Software Engineer**  
GitHub: [asadabbas717](https://github.com/asadabbas717)  
Portfolio: [asadabbas717.github.io](https://asadabbas717.github.io)
