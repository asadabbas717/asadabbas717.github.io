# Testing

Run from the repository root with Python 3.13 and Node 22 (the CI versions):

```bash
node --check exhibition.js
node --test tests/interactions.test.cjs
python scripts/check_site.py
git diff --check
```

No dependency installation is required. Earlier compatible runtimes may work,
but are not the CI contract. The Python check can also run from another directory.

Six Node tests execute the actual inline bootstrap and interaction script in a
small DOM/event fake: valid/corrupt theme preferences, unavailable storage,
system changes, tab selection/wrap/focus, mobile menu/Escape/link close, project
hashes/legacy aliases/unknown input. Decorative pointer motion was removed. This fake
cannot verify native browser focus, accessibility trees, layout or rendering.

Four Python contract tests verify all ten deployment pairs and the exact public
allowlist, HTML IDs/local references/ARIA tab relationships, image alt attributes,
new-window protection, static contact targets and decoded WhatsApp messages,
Person JSON-LD, fallback CSS, and local CSS/Markdown file references. This is not
a full HTML validator, Markdown fragment validator, accessibility scanner or secret scanner.

CI runs these checks on pushes and pull requests with read-only repository
permissions, including committed-change whitespace checking. It does not repair
copies or publish. Changes to assets must fail
parity checks until `python scripts/sync_dist.py` is deliberately run.

## Browser acceptance

Serve with `python -m http.server 8000 --bind 127.0.0.1`. Check `/` and `/dist/`:

1. Desktop, 390px and 360px widths: wrapping, release/report cards, footer and no page overflow.
2. Both themes, reload persistence, system changes and unavailable storage.
3. All five tab clicks, ArrowLeft/Right wrapping, Home/End, focus and panel visibility.
4. Mobile menu open/close, link close and Escape restoring focus to the menu.
5. Project hashes and products/atlas/principles aliases; unknown hashes are harmless.
6. Contact, permission and showcase targets without sending messages or starting calls.
7. Disable JavaScript: navigation, all project content and contact links remain available;
   inactive theme/menu/tab controls are hidden. Block fonts: fallback text remains readable.
8. Reduced motion, actual report links and browser resource/console errors.

See ENGINEERING_AUDIT.md for checks actually performed on 5 October 2026. No
committed browser E2E suite, screen-reader acceptance or automated contrast audit
exists. Product test counts in portfolio copy belong to other repositories and
were not rerun by this suite.


## Redesign acceptance — 5 October 2026

Desktop 1280 px: both themes, hero rendering and no horizontal overflow. Mobile 390 px: no overflow; menu Escape closes and restores focus. Mobile 360 px: case-study headings and content render without overflow. Project rail selects PyNivo; keyboard End selects Fixloom. Static checks cover all three HTML pages and cross-page case-study fragments. All seven interaction tests and four static contracts pass. Browser checks are a focused manual review, not accessibility certification. Private-project results are repository/CI evidence, not local reruns.
