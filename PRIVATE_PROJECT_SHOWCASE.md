# Private Engineering Projects

Some of my strongest software projects are intentionally kept private to protect client/business information, proprietary implementation, and reusable business logic. This page documents verified product scope and engineering outcomes without publishing private source code, credentials, databases, invoices, logs, or customer data.

## Qashoryx POS

**Offline-first wholesale point-of-sale and business operations application for Windows**

**Status:** Version 2.1.1 · real-world business software / advanced production-oriented build  
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, ReportLab, PyInstaller, Inno Setup

### Current engineering evidence

- 133-test suite plus 26 parameterized subtests across database initialization, migrations, authentication, transactions, customer balances, invoice editing/returns, reporting, restore, runtime paths, packaging, UI interaction regressions, and release protection
- Seven ordered schema migrations with backup-first upgrade behavior, integrity verification, atomic publication, and restore rehearsal
- Cross-module business regression covering owner setup, authentication, catalog/stock creation, salesman/customer creation, sale/payment/edit/return flows, reports, PDF output, backup, mutation, restore, reopen, and state recovery
- Read-only financial and inventory reconciliation with zero findings across a verified backup containing 568 invoices, 463 active customers, and 255 products
- Database startup checks for integrity, foreign keys, schema/migration revision, indexes, writability, WAL, and busy-timeout behavior
- Transaction-safe invoice, customer, payment, and stock operations with rollback protection
- PBKDF2-HMAC-SHA256 authentication with 600,000 iterations for current hashes, first-run private owner setup, supported legacy-hash upgrade, and persistent failed-login delay
- Explicit Decimal half-up cent rounding at current invoice calculation boundaries while preserving compatible historical storage
- Release tooling with exact dependency locking, clean-build enforcement, packaged `--verify-installation`, release manifests, source/dependency evidence, and SHA-256 artifact hashes
- Controlled one-page 80 mm hardware test successfully rendered and spooled to a connected BC-80POS thermal printer
- Privacy-safe structured operational logging with automatic redaction of secret-like fields
- Non-blocking Google Drive authorization/upload architecture so integration work does not freeze the Qt GUI thread
- Measured performance baseline with removal of table/theme reflow bottlenecks and protected lazy/debounced operator workflows

### Product scope

- Product, inventory, customer, invoice, payment, expense, warranty, salesman, and reporting workflows
- Transaction-safe sales, invoice editing, returns, payment replacement, and stock reconciliation
- Reusable customer profiles, searchable invoice histories, balances, duplicate review/merge, account sales, and customer payments
- Owner/staff roles and permission-controlled actions
- Quick and Detailed Invoice workflows with payment/balance handling
- A4 and thermal invoice generation and printing
- Sales, inventory, profitability, Sales by City/Town, and best-selling-product reports
- Verified local backups, in-app restore validation, emergency pre-restore backup, and migration safety
- Windows executable and installer packaging
- Persistent Light, Dark, Ocean Blue, and Emerald Green themes with responsive operator workflows

### Engineering approach

Qashoryx was modernized without replacing its working persistence architecture or rewriting historical business data speculatively. The current process uses tests, reconciliation, profiling, backups, and reversible release evidence to decide what should change and what should remain compatible.

The verified pre-modernization production-data backup reconciled with zero findings, so risky historical-money or inventory-authority rewrites remain deliberately deferred until there is evidence that such a migration is necessary.

### Remaining production gates

The repository explicitly separates automated engineering evidence from acceptance work that still requires people, hardware, policy, or external systems. Remaining gates include full Windows UI/scaling review, clean-machine installer/upgrade acceptance, broader live Google Drive failure-mode testing, commercial code signing, independent security review, and optional encrypted off-device backup design.

### Portfolio value

Qashoryx demonstrates the ability to evolve substantial business software while protecting financial correctness, inventory integrity, historical compatibility, recoverability, operator usability, release reproducibility, and real business data.

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

## Private-source policy

These projects follow a **show the engineering, protect the implementation** approach:

- Production and product source repositories remain private.
- Customer databases, credentials, API secrets, invoices, backups, logs, runtime data, and private business information are never published as portfolio material.
- Proprietary implementation files are not mirrored into public showcase repositories.
- Public descriptions focus on verified outcomes, technology choices, architecture-level decisions, testing, data safety, and product scope.
- Private source access should only be granted deliberately to trusted reviewers when there is a genuine need.

## Developer

**Asad Abbas — Software Engineer**  
GitHub: [asadabbas717](https://github.com/asadabbas717)  
Portfolio: [asadabbas717.github.io](https://asadabbas717.github.io)
