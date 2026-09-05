# Private Engineering Projects

Some of my strongest software projects are intentionally kept private to protect client/business information, proprietary implementation, and reusable business logic. This page documents verified product scope and engineering outcomes without publishing private source code, credentials, databases, invoices, logs, or customer data.

## Qashoryx POS

**Offline-first wholesale point-of-sale and business operations application for Windows**

**Status:** Real-world business software / advanced production-oriented build  
**Role:** Software Engineer  
**Technology:** Python, PySide6, SQLite, ReportLab, PyInstaller, Inno Setup

### Engineering scope

- Product, inventory, customer, invoice, payment, expense, warranty, salesman, and reporting workflows
- Transaction-safe sales, invoice editing, returns, payment replacement, and stock reconciliation
- Customer balances and audited customer-account transactions
- Owner/staff permissions and protected administrative actions
- A4 and thermal invoice generation and printing
- Sales, inventory, profitability, city, and best-selling-product reports
- Verified database migrations, backup creation, restore validation, and rollback-oriented safeguards
- Windows executable and installer packaging
- Automated regression suite covering database, authentication, transactions, balances, reports, restore, runtime paths, and packaging behavior

### Portfolio value

Qashoryx demonstrates the ability to turn real operational requirements into a substantial desktop product while protecting financial correctness, inventory integrity, recoverability, and operator usability.

**Source policy:** Private. Architecture, workflows, engineering decisions, and sanitized demonstrations can be discussed without distributing unrestricted source code.

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
**Technology:** Python, Qt/PySide desktop stack, SQLite, migration-managed persistence, Ruff, mypy, pytest, PyInstaller

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
- Automated quality gate covering formatting, linting, static typing, tests, and packaged self-checks

### Deliberate boundaries

The current release candidate does **not** claim features that are not implemented. Tax calculation, customer credit/receivables, damaged-return disposition, live FBR transmission, automatic compliance-queue processing, code signing, a traditional installer, and final physical-printer acceptance remain outside the completed 0.1.0 release-candidate scope.

The Compliance workspace represents an integration foundation, not a claim of FBR compliance.

### Portfolio value

Vendiqo demonstrates financial and inventory transaction design, immutable records, recovery engineering, release automation, keyboard-driven retail workflows, provider-neutral integration boundaries, and careful separation between implemented behavior and future regulatory integration.

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
