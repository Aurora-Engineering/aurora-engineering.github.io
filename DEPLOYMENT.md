# GitHub Pages deployment

Production: https://aurora-engineering.github.io/

Repository: https://github.com/Aurora-Engineering/aurora-engineering.github.io

The user explicitly authorized updating the company repository and deploying the reviewed website on September 17, 2026. Future releases still require explicit approval. Domain and DNS changes are separate from this release.

## Hosting architecture

Next.js exports all pages at build time using `output: "export"`. Directory URLs with trailing slashes allow direct requests to the seven product briefs and the leadership page. Metadata uses the production GitHub Pages origin. The older `/projects/template/` URL redirects visitors to the homepage product section.

Only files in the generated `out/` directory are uploaded to Pages. The site does not run a Next.js server, database, server actions, or form API. Raw source documents and unused copied Cloudflare/Vinext scaffold stay local and are ignored by Git.

## Checks and release

1. `npm ci` installs the locked dependencies with Node.js 24.
2. `npm run build` creates the static export.
3. `npm run check:static` runs the feedback checks on desktop and mobile against `http://127.0.0.1:4174`, verifies all exported product pages and referenced assets, and checks missing-page behavior.
4. Visually review the local export with `npm run preview:static`.
5. After approval, commit and push to `main`.

The `.github/workflows/pages.yml` workflow repeats the build and static checks on GitHub, uploads `out/`, and deploys only after successful checks. Repository Settings → Pages → Source must be **GitHub Actions**. GitHub's built-in workflow token provides deployment access; no personal token or third-party hosting account is stored in the repository.

Local browser tests use installed Google Chrome. CI installs Playwright Chromium. Failed check artifacts remain under ignored `.local-review/` locally.

To roll back an approved release, revert its commit and push the revert after obtaining approval. The same workflow rebuilds and deploys the previous source.

## Email contact

- General and mission inquiries: `info@aurora.engineering`
- Careers: `careers@auroraengineering.com`

Selecting an address opens the visitor's configured email application. The addresses can also be copied into webmail. The visitor sends the message from their own account. The website does not submit, store, or deliver inquiries and requires no form-service subscription. Mailbox delivery has not been tested by sending messages.
