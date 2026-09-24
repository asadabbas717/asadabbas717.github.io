# Private Engineering Projects

Some of my strongest software projects are intentionally kept private to protect client/business information, proprietary implementation, reusable business logic, and—in products that may handle sensitive information—future user data. This page documents verified product scope and engineering outcomes without publishing private source code, credentials, databases, invoices, logs, customer records, or health data.

## Qashoryx POS

**Offline-first wholesale point-of-sale and business operations application for Windows**

**Status:** Version 2.1.3 · real-world business software / advanced production-oriented build  
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, ReportLab, PyInstaller, Inno Setup

### Current engineering evidence

- 141-test suite plus 26 parameterized subtests across database initialization, migrations, authentication, transactions, customer balances, invoice editing/returns, reporting, restore, runtime paths, packaging, UI interaction regressions, customer previous-due accounting, and release protection
- Eight ordered schema migrations, now including explicit customer-account transaction purposes, with backup-first upgrade behavior, integrity verification, atomic publication, and restore rehearsal
- Cross-module business regression covering owner setup, authentication, catalog/stock creation, salesman/customer creation, sale/payment/edit/return flows, reports, PDF output, backup, mutation, restore, reopen, and state recovery
- Read-only financial and inventory reconciliation with zero findings across a verified backup containing 568 invoices, 463 active customers, and 255 products
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

**Status:** Feature-complete first-release implementation  
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, SQLAlchemy 2.x, Alembic, ReportLab, pytest, Ruff, mypy, PyInstaller

### Engineering scope

- Customer, device, technician, and guided repair-intake management
- Controlled repair-state transitions with immutable status history
- Exact monetary handling for charges, payments, and outstanding balances
- Repair photographs and managed attachment workflows
- Branded repair job sheets and customer receipt PDFs
- Alembic schema migrations and compatibility handling
- Checksummed backup/restore workflows with SQLite integrity verification
- Automated tests, linting, static typing, dependency checks, and repeatable Windows packaging

### Portfolio value

Fixloom demonstrates structured application architecture, migration-managed persistence, workflow design, financial-record correctness, attachment management, recoverability, and disciplined release tooling.

**Source policy:** Private. Public material presents verified scope and architecture-level decisions without exposing reusable proprietary implementation.

---

## Vendiqo

**Offline-first Windows point-of-sale application for Pakistani small retailers, wholesalers, and trading businesses**

**Status:** Completed release-candidate product (0.1.0)  
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

### Deliberate boundaries

The current release candidate does **not** claim features that are not implemented. Tax calculation, customer credit/receivables, damaged-return disposition, live FBR transmission, and automatic compliance-queue processing remain outside the completed 0.1.0 release-candidate scope. Code signing and final physical-printer acceptance remain deployment gates.

The Compliance workspace represents an integration foundation, not a claim of FBR compliance.

### Portfolio value

Vendiqo demonstrates financial and inventory transaction design, immutable records, recovery engineering, release automation, keyboard-driven retail workflows, provider-neutral integration boundaries, Windows installer delivery, and careful separation between implemented behavior and future regulatory integration.

**Source policy:** Private. The completed product is presented through verified capabilities and engineering evidence while unfinished or regulatory-dependent work is stated explicitly.

---

## Nourentra

**Responsive nutrition and fitness journey platform designed around professional review**

**Status:** Private beta-development foundation  
**Role:** Software Engineer  
**Technology:** React, TypeScript, Vite, Tailwind CSS, React Router, React Hook Form, Zod, Recharts, Vitest, Supabase

### Current engineering scope

- Eight-step client assessment with validation, consent, and safety-conscious language
- Client dashboard, journey timeline, nutrition plan, daily engagement, progress tracking, and weekly check-ins
- Nutritionist client-detail workspace with assessment review, planning, check-ins, notes, and revision history
- Shared/private food library and meal-by-meal planning workflow
- Atomic assessment, check-in, and meal-plan persistence
- Supabase-backed ownership boundaries and Row Level Security-oriented schema
- Database-guarded plan approval that blocks publication while unresolved safety flags remain
- Typed health-calculation and centralized safety-screening modules
- Responsive layouts, keyboard focus, reduced-motion support, and PWA metadata
- Type checking, linting, domain tests, production build, and critical desktop/mobile browser journey commands in the development quality gate

### Deliberate boundaries

Nourentra is not presented as a medically or legally complete production health service. Professional credentials, legal/privacy terms, clinical thresholds, production authorization flows, RLS integration coverage, and operational deletion procedures require review before real-client launch. Demo mode uses fictional data and must not be used for real health information.

### Portfolio value

Nourentra demonstrates typed frontend architecture, structured multi-step forms, database authorization boundaries, workflow persistence, safety-aware product design, professional-review gates, and responsive cross-device experience design.

**Source policy:** Private. No real client health records, credentials, privileged Supabase keys, or private implementation are published.

---

## Private-source policy

These projects follow a **show the engineering, protect the implementation** approach:

- Production and product source repositories remain private unless deliberately opened later.
- Customer databases, health records, credentials, API secrets, invoices, backups, logs, runtime data, and private business information are never published as portfolio material.
- Proprietary implementation files are not mirrored into public showcase repositories.
- Public descriptions focus on verified outcomes, technology choices, architecture-level decisions, testing, data safety, and product scope.
- Private source access should only be granted deliberately to trusted reviewers when there is a genuine need.

For publicly inspectable developer tooling, see [PyNivo](https://github.com/asadabbas717/pynivo), which is now available under Apache License 2.0 with a Windows preview release.

## Developer

**Asad Abbas — Software Engineer**  
GitHub: [asadabbas717](https://github.com/asadabbas717)  
Portfolio: [asadabbas717.github.io](https://asadabbas717.github.io)
