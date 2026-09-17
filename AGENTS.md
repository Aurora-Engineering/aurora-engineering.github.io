# Aurora website working agreement

## Design source of truth

Read `FEEDBACK-CHECKLIST.md` before changing this website. It records the boss's PowerPoint feedback and the user's later clarifications. Preserve these requirements across changes. A new, explicit user instruction may amend them; update the checklist with that decision instead of silently departing from the agreed design.

Do not invent mission results, ownership, partnerships, qualifications, headshots, or product screenshots. Favor original technical figures with accurate source captions. Keep AI and autonomy claims grounded in the supplied material. HDRL is a collaborator, not an Aurora product.

## Required review for website changes

1. Identify the affected checklist items before editing. Preserve unrelated accepted choices.
2. After each coherent batch of website changes, run `npm run check:feedback`. Inspect any failures and fix regressions; do not weaken a check merely to make it pass. If a test no longer matches an explicit user decision, update it and the checklist together.
3. Visually inspect the affected section on the local preview at desktop and mobile widths. Automated checks do not replace judging artwork, spacing, readability, or factual credibility.
4. For application logic, components, routing, or dependency changes, also run `npm run build:local`. For isolated copy or CSS changes, the feedback checks and relevant visual review are sufficient unless they expose another concern.
5. Report material gaps honestly. The three missing headshots and embedded text in the original NASA artwork are tracked open items, not completed checks. Keep status in `FEEDBACK-CHECKLIST.md` current.

Do not add or run recurring background jobs just to satisfy this workflow. Run checks as part of the website work.

## User's publishing restriction

All previews must use a local loopback server. Local working-file edits and checks are authorized. Do not stage, commit, push, create a pull request, change company GitHub settings, deploy, publish, or change domain settings without first asking and receiving the user's explicit confirmation for the proposed update. Preparing a local preview does not authorize updating the company repository.

Use `npm run dev:local` for development previews. `npm run build` (also available as `build:local`) produces the GitHub Pages static export in `out/`; `npm run preview:static` previews it at loopback port 4174. Before an approved release, run `npm run check:static` and visually inspect that local export. The GitHub Actions workflow builds and tests approved pushes to `main` before deploying.

The user explicitly authorized updating the repository and deploying the reviewed site on September 17, 2026. That authorization applies to this release; future repository updates still require explicit confirmation. Do not change domain/DNS settings as part of this release.

Contact is email-only: no submission form, email API, or additional form service. Preserve the visible general-inquiry and careers addresses. Never trigger email applications or send real inquiries as part of testing; inspect `mailto:` link destinations without activating them.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
