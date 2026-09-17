# Local website review

Preview: http://127.0.0.1:4173/

From this folder, run `npm run dev:local` to start the preview. Keep its terminal running. Stop it with Ctrl+C. `npm run build:local` creates the static production export in `out/`; it does not publish the site. `npm run preview:static` serves that export at `http://127.0.0.1:4174`, and `npm run check:static` checks the actual exported pages.

Run `npm run check:feedback` after website changes. The acceptance requirements and remaining exceptions are in [FEEDBACK-CHECKLIST.md](FEEDBACK-CHECKLIST.md); future agents must follow [AGENTS.md](AGENTS.md). These checks run against the local server in desktop and mobile Chrome. Review the affected layout visually as well.

The current review applies the feedback in `website_edits.pptx`, with the follow-up decisions to keep a scrolling homepage, use horizontal galleries for product showcases and news, identify HDRL as a collaborator, and use the existing email addresses for contact without adding services or recurring costs.

## Changes available for review

- Shared sticky navigation on the homepage, leadership page, and product briefs, linking to homepage sections.
- Updated hero copy and response labels, larger text, capability illustrations, partner logos, and leadership roles.
- Leadership immediately after capabilities; collapsed service categories; removed duplicate MEDOS and publications sections.
- Horizontal product and news galleries with arrow controls, keyboard navigation, touch scrolling, and reduced-motion support.
- MEDOS logo and expanded name, plus CAPSTONE and MEDOS news photographs.
- Product gallery uses original figures from the supplied MEDOS, ReCAP, SURFAS, and telemetry dashboard technical briefs, with source captions and an accessible enlarge dialog. These image files match the embedded DOCX media byte-for-byte. Mission Assistant AI appears before the wider engineering services; cards without source figures use typography rather than generic illustrations.
- Email-only contact: `info@aurora.engineering` for general and mission inquiries and `careers@auroraengineering.com` for careers, alongside the existing office address and LinkedIn link. The submission form and `/api/contact` endpoint are removed. Email links open the visitor's own email app; the website does not send messages or require an email-delivery service.

## Items still needing source material or a decision

- Stephen Kreisler, Conrad Schiff, and Carrie Hill still use initials because verified headshots were not supplied. Alex Barrie's existing photograph remains.
- The hero's HTML response label now says “Command instrument to safe mode.” The original NASA diagram is preserved and still contains “Disable High Voltage” within its source image.
- The SmallSat post is text-only, so its gallery card uses a typographic cover.

## Validation and publishing boundary

The local production build and TypeScript checks pass. Desktop and mobile browser checks covered navigation, gallery controls, service expansion, and product-page layout. Local image references, homepage section anchors, and all seven product gallery mappings were checked. Contact checks inspect addresses and layout without activating email links or sending messages; the retired endpoint is checked with a read-only GET request.

The user approved updating the repository and deploying this reviewed site on September 17, 2026. Static export replaces the original hello-world landing page. Future updates still require explicit confirmation; domain settings are outside this release.

## Added image sources

- Four capability illustrations, the MEDOS logo, and the HDRL logo: supplied PowerPoint feedback deck.
- NASA meatball: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png
- AFRL logo: https://afresearchlab.com/wp-content/uploads/2025/01/AFRL-Logo-Letters-white@4x.png
- CU LASP logo: https://lasp.colorado.edu/media/projects/lasp/images/logo/2025/color/cu-lasp.png
- CAPSTONE award photograph: https://www.linkedin.com/feed/update/urn:li:activity:7484667525700653056/
- MEDOS news image: https://www.linkedin.com/feed/update/urn:li:activity:7457834845172514816/

The supplied Windows-specific native dependency and unused Cloudflare/Vinext dependencies were removed. The active build and deployment workflow is Next.js static export to GitHub Pages.
