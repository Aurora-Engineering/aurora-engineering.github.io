# Aurora Engineering website

Aurora Engineering's public website: capabilities, leadership, technical product briefs, news, partners, and email contact.

- Website: [aurora-engineering.github.io](https://aurora-engineering.github.io/)
- Repository: [Aurora-Engineering/aurora-engineering.github.io](https://github.com/Aurora-Engineering/aurora-engineering.github.io)

## Develop and review

Use Node.js 24 and npm. Run `npm ci`, then `npm run dev:local` to preview at `http://127.0.0.1:4173`.

Follow [AGENTS.md](AGENTS.md) and [FEEDBACK-CHECKLIST.md](FEEDBACK-CHECKLIST.md). `npm run check:feedback` runs desktop and mobile browser checks against the local development preview. Local tests use installed Google Chrome.

## Build and publish

`npm run build` exports the Next.js application to `out/`. The website requires no running Next.js server, database, or email API. `npm run preview:static` serves that exact export locally at `http://127.0.0.1:4174`; `npm run check:static` checks the export and every product route.

The GitHub Pages source is **GitHub Actions**. The [Pages workflow](.github/workflows/pages.yml) builds and tests approved pushes to `main`, then publishes only `out/`. Build output, raw source documents, and unused copied scaffold are excluded from the repository.

Updating `main` publishes the website. Obtain explicit user approval before future commits, pushes, deployments, or domain changes. The user authorized the initial full-site release on September 17, 2026.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release details and [LOCAL-PREVIEW.md](LOCAL-PREVIEW.md) for design notes and outstanding source material.

## Contact and domain

Contact uses visible email links to the existing general-inquiry and careers mailboxes. Visitors send from their own email app or webmail; no form service is involved.

The Squarespace domain is not connected by this release. A future custom-domain change requires approval, DNS configuration, and an update to the production metadata URL in `app/layout.tsx`. Preserve existing email DNS records.
