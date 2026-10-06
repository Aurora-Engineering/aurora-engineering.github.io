# Website feedback checklist

Source: the boss's 18-slide `website_edits.pptx`, supplied by the user on September 17, 2026. The original presentation is retained locally and is not part of the public repository.

This is the acceptance checklist for subsequent edits. The user's explicit later decisions below take precedence where they refine the PowerPoint. A passing automated check does not resolve missing source material or replace visual review.

## Boss's requirements

- [x] **B01 — Header:** larger white menu text, centered or comfortably spaced links, and a header that stays visible while scrolling. (Slide 1)
- [x] **B02 — Shared header:** consistent navigation across the homepage, leadership page, and product briefs. (Slide 2)
- [x] **B03 — Leadership naming:** use “Leadership” and “Our Leadership Team”; do not present four leaders as the whole company. (Slides 1, 11)
- [x] **B04 — Hero cleanup:** remove “Flight Verified Autonomous Operations” and the keyword/proof strip. (Slide 3)
- [x] **B05 — Exact hero copy:** “Aurora Engineering’s MEDOS software transforms spacecraft telemetry into explainable events and rational onboard responses. Flight-proven on NASA’s flagship MMS mission.” (Slide 3)
- [ ] **B06 — Response display:** Event, Decision, and Response use the same respective label/body colors. The HTML response reads “Command instrument to safe mode.” **Open exception:** the original NASA image still contains “Disable High Voltage.” Do not claim the entire graphic has been revised. (Slide 4)
- [x] **B07 — Diagram caption:** place the MEDOS autonomous-response title above the graphic. (Slide 4)
- [x] **B08 — Partner artwork:** NASA meatball, correct AFRL and LASP marks. Preserve proportions and readability. (Slide 5)
- [x] **B09 — Section introductions:** larger explanatory paragraphs beneath section headings, consistently across the homepage. (Slides 6, 9)
- [x] **B10 — Capabilities heading:** selected suggested wording is “Research and engineering for the future of spaceflight.” (Slide 6)
- [x] **B11 — Capability cards:** replace crosshair icons with relevant imagery and remove keyword tags. (Slides 7–8)
- [x] **B12 — Leadership placement:** immediately after “What we do.” (Slide 9)
- [x] **B13 — Exact leadership introduction:** “Decades of hands-on experience across NASA, the Department of Defense, and numerous flight missions, spanning spacecraft operations, advanced research, and mission-critical engineering.” (Slide 9)
- [x] **B14 — Headshots and profiles:** the original headshot request is temporarily superseded by U11. Leadership is text-only, with no photos or portrait placeholders. Steve's and Conrad's unhelpful profile links remain removed. Biography popups remain deferred. (Slide 10; U11)
- [x] **B15 — Titles:** Steve: Chief Technology Officer, Chief Information Officer. Conrad: Chief Scientist, Business Development Lead. Carrie's former Research Director entry is superseded by Miles Bengtson, Chief Technologist, under U11; do not transfer her title or biography to him. (Slide 10; U11)
- [x] **B16 — Remove repetition:** no duplicate “A smarter spacecraft. In real time.” section and no homepage “Research in the open.” publications section. Relevant sources may remain in detailed briefs. (Slide 12)
- [x] **B17 — Product presentation:** visible MEDOS expansion, “Module for the Event Driven Operation of Spacecraft,” and supplied MEDOS mark. Visible HDRL expansion, “Heliophysics Digital Resource Library,” and logo under collaborators. Keep technical figures primary in the product gallery. (Slide 13, with U02/U06 below)
- [x] **B18 — News imagery:** use actual LinkedIn-post images where available, especially CAPSTONE. The text-only SmallSat post has a text cover; do not invent a post photograph. (Slide 14)
- [x] **B19 — Service portfolio:** categories initially collapsed; clicking a heading reveals its service list. Enlarge headings and list text. (Slide 15)
- [x] **B20 — Navigation structure:** primary navigation consistently scrolls to homepage sections; detailed product briefs are separate pages. (Slide 16, resolved by U01)
- [x] **B21 — Overall readability:** larger gray body text and blue uppercase labels, relevant colorful imagery, and enough visual variety to avoid a wall of text. Review actual desktop and mobile rendering. (Slides 17–18)

## User's later decisions

- **U01 — Homepage length:** keep a scrolling homepage, with a horizontal product showcase. News also uses a horizontal gallery. Retain the useful detailed product pages.
- **U02 — HDRL:** Aurora Engineering works with HDRL. HDRL belongs under collaborators, never in Aurora's product list.
- **U03 — Partner background:** the whole partners section is white, not merely separate logo tiles. Headings must have adequate contrast.
- **U04 — Logo scale and color:** enlarge original desktop logo artwork by 25%. AFRL and KBR must be dark on white. Fit logos without clipping on mobile.
- **U05 — SwRI:** an additional 20% increase after U04. Its SVG contains whitespace, so review actual artwork size; element width alone is not the drawn artwork size.
- **U06 — Credibility and AI/autonomy:** prioritize unchanged original technical figures from the supplied publications/briefs, with accurate source captions and a way to inspect them. Keep AI/autonomy prominent. Do not call supplied technical briefs peer-reviewed publications without evidence. Use text treatments where no source graphic exists.
- **U07 — Local-only review:** no company repository updates, commits, pushes, deployments, or domain changes without explicit confirmation. Preview only on a local server.
- **U08 — Ongoing checks:** use this checklist and the browser checks with every coherent batch of website changes. Never silently weaken the requirements.
- **U09 — Email-only contact:** remove the submission form and its email API. Use the existing `info@aurora.engineering` address for general and mission inquiries and `careers@auroraengineering.com` for careers, displayed prominently as readable email links. Retain the office address and LinkedIn link. Add no services, accounts, or recurring costs. The website does not send messages; a visitor may open their own email app and choose to send there.
- **U10 — Approved release:** on September 17, 2026, the user explicitly requested updating the company repository and deploying this reviewed site to GitHub Pages. Static-export adaptation and the Pages build workflow implement that release. U07 remains in effect for future updates; local previews remain the review method.

- **U11 — Leadership update, October 6, 2026:** replace Carrie Hill with Dr. Miles Bengtson on the homepage and leadership page. The user confirmed his Aurora Engineering title as **Chief Technologist**. Temporarily remove all leadership headshots and portrait placeholders. Preserve original image files locally. Do not inherit Carrie's biography or research links; Miles's biography remains omitted until suitable source material is supplied.
- **U12 — Office locations:** show both New Hampshire and Rockville, Maryland in the homepage, leadership, and product-page footers. Keep the existing full Wilton address. The user explicitly approved **Rockville, Maryland** only for now; a street address, suite, and ZIP are not required for this update.
- **U13 — Custom domain planning:** prepare the plan for using `auroraengineering.com` with GitHub Pages. Do not change Squarespace yet. No GitHub settings, DNS, publishing, or repository updates are authorized by this local-edit and planning request.
- **U14 — Approved October release:** on October 6, 2026, after reviewing the local preview, the user explicitly requested pushing the reviewed U11–U12 changes to GitHub Pages. This authorizes committing, pushing, and deploying that update to the existing GitHub Pages URL. U13's custom-domain plan remains unapplied; future releases still require explicit confirmation.

## Repeatable checks

Run `npm run check:feedback`. The browser suite exercises the local site in desktop and mobile Chrome, including approved wording, navigation, structure, logo presentation, gallery interactions, source-figure enlargement, service expansion, email-only contact, and horizontal overflow. Contact checks verify both displayed email addresses, the absence of form controls, and a read-only 404 response from the retired `/api/contact` endpoint. Tests never click email links, send messages, or navigate external destinations; accidental browser requests to the former contact endpoint remain blocked.

The check command starts the local preview if necessary or reuses the one already running at `http://127.0.0.1:4173`. It uses installed Google Chrome and stores failed-run artifacts in ignored `.local-review/feedback-results/`. For a fresh development machine, install project dependencies and Google Chrome before running it.

Before a release, `npm run build` and `npm run check:static` verify the exported site on local port 4174. This includes the same 30 feedback checks plus two desktop/mobile route-and-asset checks across all seven product briefs. Product links use trailing-slash directory URLs for GitHub Pages. GitHub Actions repeats these checks before deploying.

For visual review, inspect the affected section at desktop and mobile widths: sticky-header clearance, readable text, original artwork colors and proportions, figure labels, and unclipped content. When changing an image, verify it against the source document and check the full-size view. Automated checks cannot certify factual claims or image provenance by appearance alone.

## Current release review — October 6, 2026

Applied U11–U13 locally: replaced Carrie with Miles on both leadership views; removed headshots and portrait placeholders; preserved Alex's original image outside the public asset directory; added a shared footer location component across the homepage, leadership page, and product briefs. The user subsequently confirmed Miles's title as Chief Technologist at Aurora Engineering and explicitly approved city/state-only Rockville, Maryland. Miles's biography remains omitted, with no inherited Carrie details.

Validation after the title/location clarification: all 30 development feedback checks passed. Miles's confirmed title was visually reviewed on both leadership views at desktop and mobile widths. After the user approved this release under U14, a fresh `npm run build:local` and all 32 static-export checks passed. The exported homepage leadership and office footer were visually rechecked at desktop and mobile widths; the earlier detailed leadership and product-footer visual reviews remain applicable. Alex's original headshot is preserved locally and absent from the public export. The custom-domain plan is recorded in `DEPLOYMENT.md` and has not been applied.

## Previous release audit — September 17, 2026

The audit caught and corrected three small regressions: the MEDOS logo disappeared when the gallery switched to technical figures, HDRL's expansion was only in image metadata, and older CSS rules kept two body-text areas too small. The original figures remain the primary gallery imagery.

Validation: `npm run check:feedback` passed all 28 checks (14 groups at desktop and mobile widths), including the email-only contact update. The local production build also passed. The contact section was visually reviewed at both sizes; on mobile, the email addresses appear before the office details and LinkedIn link. The corrected branding and product prose were previously reviewed at both sizes. These results do not mark the outstanding source-material items below complete.

Release validation: the Next.js 16.3.5 static export passed all 30 checks, covering the feedback requirements, every product page, image and script assets, the legacy product redirect, and 404 behavior. Desktop and mobile visual review of the local export passed. The dependency audit reported zero known vulnerabilities after updates.

**Outstanding after October 6 update:** B06's embedded NASA-image wording. Miles's title is confirmed; city/state-only Rockville is explicitly approved. Headshots are intentionally paused under U11, and Miles's biography is omitted until source material is available. Biography popups remain intentionally deferred. A SmallSat photograph is not pending: that source post is text-only.
