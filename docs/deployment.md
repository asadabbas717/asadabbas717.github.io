# Static release procedure

Root public files are authoritative. `dist/` is a tracked deployment mirror;
there is no compiler, package installation, database migration or server setup.

1. Review content, attribution and the dated evidence behind project claims.
2. Run `python scripts/sync_dist.py` to copy the explicit seven public assets.
   It does not delete files or copy repository docs, tests, workflows or private data.
3. Run all commands in [testing](testing.md). The allowlist test rejects unexpected
   files in `dist/`; investigate additions rather than silently deleting them.
4. Inspect both local previews and the Git diff, including new filenames/content.
5. Commit/push only when authorized. GitHub Pages is the established destination;
   this quality workflow does not configure or deploy Pages. Verify the configured
   publication branch/folder in repository settings before changing it.
6. After publication check the live homepage, usage page, CSS/JS/image resources,
   project controls, mobile contact links and showcase response/display behavior.
   Record revision, date and limits. A local pass does not prove publication.

No environment variables or credentials belong in assets. Host settings, domain
ownership, response headers and billing are not represented by source files.
The removed Sites integration must not be recreated.

Rollback: revert the specific faulty source change in Git, resynchronize `dist/`,
run the quality checks and publish the reviewed corrective commit through the
existing Pages process. Do not rewrite public history or discard unrelated changes.
All application content is versioned; the sole browser preference needs no migration.
