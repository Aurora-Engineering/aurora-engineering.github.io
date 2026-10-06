# GitHub Pages deployment

Production: https://aurora-engineering.github.io/

Repository: https://github.com/Aurora-Engineering/aurora-engineering.github.io

The user explicitly authorized the initial reviewed website release on September 17, 2026, and the reviewed leadership and office-location update on October 6, 2026. Future releases still require explicit approval. Squarespace, domain/DNS, and GitHub custom-domain changes are separate from these releases.

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

## Proposed custom-domain connection — not applied

The October 6, 2026 custom-domain request authorizes planning only; do not change Squarespace, domain/DNS, or GitHub custom-domain settings without separate approval. The user subsequently approved publishing the reviewed leadership and office-location edits to the existing GitHub Pages URL. The intended future canonical URL is `https://auroraengineering.com`. Squarespace can remain the registrar while GitHub Pages serves the site.

Read-only findings: the apex currently has A record `198.185.159.145`, and `www` is a CNAME to `ext-sq.squarespace.com`. Both currently redirect to `http://www.aurora.engineering/`. That existing forwarding must be reviewed during cutover; forwarding the domain to a github.io URL would not provide the requested custom-domain experience. Existing email uses Microsoft 365. Preserve MX, SPF, DKIM, DMARC, other verification records, and nameservers.

After explicit approval:

1. An organization owner adds `auroraengineering.com` under the Aurora-Engineering organization's Pages domain verification. GitHub supplies a TXT host and token. Add exactly that TXT record in Squarespace, verify ownership in GitHub, and retain it. [GitHub verification instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
2. Set the repository's Pages custom domain to `auroraengineering.com` before changing website DNS. This Actions-based deployment does not require a repository `CNAME` file. Update `app/layout.tsx`'s production metadata origin as part of the approved cutover release.
3. Review/remove only the existing website forwarding rule and replace conflicting website DNS records with the following. Do not reset all DNS or transfer the domain.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `aurora-engineering.github.io` |

GitHub also supports optional apex IPv6 records (`2606:50c0:8000::153` through `2606:50c0:8003::153`). None currently exist. See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Squarespace's DNS pointing guide](https://support.squarespace.com/hc/en-us/articles/215744668-Pointing-a-Squarespace-domain), and [Squarespace's forwarding guide](https://support.squarespace.com/hc/en-us/articles/214767107-Forwarding-a-domain).

4. After DNS propagates and GitHub provisions a certificate, enable Enforce HTTPS. Verify apex and www behavior, all product routes, assets, and unchanged email records. [GitHub HTTPS instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

No domain, DNS, GitHub setting, or metadata-origin change has been made for this plan.
