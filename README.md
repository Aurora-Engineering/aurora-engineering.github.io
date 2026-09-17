# Aurora Engineering website

A minimal, responsive hello-world page. All styling is inside `index.html`; there are no dependencies, JavaScript, or build steps.

The website uses GitHub Pages, with a public repository owned by the Aurora Engineering organization.

- Website: <https://aurora-engineering.github.io/>
- Repository: <https://github.com/Aurora-Engineering/aurora-engineering.github.io>

## Preview

Open `index.html` in a browser, or run this from the project directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:4173/>.

## GitHub Pages

Publish from the `main` branch and `/(root)` directory. GitHub automatically publishes changes pushed to this branch. The `.nojekyll` file keeps this as a plain static website.

To inspect or change the publishing configuration, open repository **Settings → Pages → Build and deployment**. The source is **Deploy from a branch**, branch `main`, folder `/(root)`.

GitHub Pages hosting is free for public repositories on GitHub Free for organizations. The site and its source code are public. See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Connect the existing domain

The existing Squarespace domain has not been connected yet. It can remain registered at Squarespace, with its DNS pointing to GitHub Pages.

1. Verify ownership of the domain in the organization's GitHub Pages settings.
2. Add the actual domain in repository **Settings → Pages → Custom domain**. For branch-based publishing, GitHub saves it in a `CNAME` file; retain that file in future updates.
3. In Squarespace DNS settings, point the `www` CNAME to `aurora-engineering.github.io` without a scheme or path. For the bare domain, use GitHub's documented A/AAAA records. Preserve existing email records.
4. When DNS validation and certificate provisioning finish, enable **Enforce HTTPS** in GitHub Pages settings.

Follow [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), and [Squarespace domain pointing](https://support.squarespace.com/hc/en-us/articles/215744668-Pointing-a-Squarespace-domain).

The custom domain still has its separate [renewal fee](https://support.squarespace.com/hc/en-us/articles/218193418-Squarespace-domain-renewals).

## Replace the placeholder

Copy the finished HTML, CSS, JavaScript, and assets from the other device into this repository, preserving their relative paths. Commit and push to the deployment branch to publish updates. Keep `index.html` at the site's root. This setup serves static files; features requiring a server need an additional service.
