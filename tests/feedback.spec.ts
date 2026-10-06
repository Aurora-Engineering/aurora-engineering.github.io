import { expect, test, type Locator, type Page } from "@playwright/test";

const leadershipIntro = "Decades of hands-on experience across NASA, the Department of Defense, and numerous flight missions, spanning spacecraft operations, advanced research, and mission-critical engineering.";
const navigation = [
  ["Capabilities", "/#capabilities"],
  ["Leadership", "/#leadership"],
  ["Services", "/#services"],
  ["Products", "/#products"],
  ["News", "/#news"],
] as const;

// These checks only exercise the local preview. Even accidental external links or
// contact requests cannot send data while the browser tests are running.
test.beforeEach(async ({ page }) => {
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    return ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname) || url.protocol === "data:"
      ? route.continue()
      : route.abort();
  });
  await page.route(/\/api\/contact\/?(?:\?.*)?$/, (route) => route.abort());
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});

async function loadedImage(image: Locator) {
  await image.scrollIntoViewIfNeeded();
  await expect.poll(() => image.evaluate((element) => {
    const img = element as HTMLImageElement;
    return img.complete && img.naturalWidth > 0;
  }), { message: "The displayed image must load successfully" }).toBe(true);
}

async function scrollSettled(locator: Locator) {
  await expect.poll(() => locator.evaluate(async (element) => {
    const start = element.scrollLeft;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    return Math.abs(element.scrollLeft - start) < 0.5;
  }), { message: "The horizontal gallery must finish scrolling" }).toBe(true);
}

async function checkGallery(page: Page, label: string) {
  const track = page.getByRole("region", { name: label, exact: true });
  const previous = page.getByRole("button", { name: `Previous ${label.toLowerCase()}`, exact: true });
  const next = page.getByRole("button", { name: `Next ${label.toLowerCase()}`, exact: true });
  await track.scrollIntoViewIfNeeded();
  await expect(previous).toBeDisabled();
  await expect(next).toBeEnabled();
  const layout = await track.evaluate((element) => {
    const children = Array.from(element.children).map((child) => child.getBoundingClientRect());
    return {
      overflow: getComputedStyle(element).overflowX,
      isScrollable: element.scrollWidth > element.clientWidth + 10,
      sameRow: children.every((box) => Math.abs(box.top - children[0].top) < 2),
    };
  });
  expect(layout.overflow).toMatch(/auto|scroll/);
  expect(layout.isScrollable).toBe(true);
  expect(layout.sameRow).toBe(true);
  const before = await track.evaluate((element) => element.scrollLeft);
  await next.click();
  await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeGreaterThan(before + 10);
  await scrollSettled(track);
  await expect(previous).toBeEnabled();
  await previous.click();
  await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeLessThanOrEqual(2);
  await expect(previous).toBeDisabled();
  // Keyboard access is part of the same visible horizontal interaction.
  await track.focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeGreaterThan(10);
  await scrollSettled(track);
}

test("hero uses the approved message and removes superseded homepage sections", async ({ page }) => {
  const hero = page.locator(".hero");
  await expect(hero.getByRole("heading", { level: 1 })).toHaveText(/^Detect the event\.\s*Respond onboard\.$/);
  await expect(hero.locator(".hero-content > p")).toHaveText("Aurora Engineering’s MEDOS software transforms spacecraft telemetry into explainable events and rational onboard responses. Flight-proven on NASA’s flagship MMS mission.");
  await expect(hero.getByRole("link", { name: /Explore MEDOS/ })).toHaveAttribute("href", "/products/medos/");
  await loadedImage(hero.getByRole("img", { name: /NASA diagram of MEDOS/ }));
  for (const removed of [
    "Flight Verified Autonomous Operations",
    "A smarter spacecraft. In real time.",
    "Research in the open.",
    "Engineering that closes the loop.",
    "Meet the Team",
  ]) {
    await expect(page.locator("body")).not.toContainText(removed);
  }
});

test("all three page types share sticky white navigation back to homepage anchors", async ({ page }) => {
  for (const path of ["/", "/scientists", "/products/medos"]) {
    await test.step(path, async () => {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const header = page.locator("header");
      await expect(header).toHaveCount(1);
      await expect(header).toHaveCSS("position", "sticky");
      await expect(header.getByRole("link", { name: "Aurora Engineering home" })).toHaveAttribute("href", "/#top");
      await page.evaluate(() => window.scrollTo(0, 900));
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(250);
      await expect.poll(async () => (await header.boundingBox())?.y ?? -1).toBeCloseTo(0, 0);
      const mobile = (page.viewportSize()?.width ?? 1440) <= 1100;
      if (mobile) await header.locator("summary").click();
      const nav = header.getByRole("navigation", { name: mobile ? "Mobile navigation" : "Primary navigation", exact: true });
      await expect(nav).toBeVisible();
      for (const [name, href] of navigation) {
        const link = nav.getByRole("link", { name, exact: true });
        await expect(link).toHaveAttribute("href", href);
        await expect(link).toHaveCSS("color", "rgb(255, 255, 255)");
        expect(await link.evaluate((element) => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(mobile ? 16 : 17);
      }
      const contact = mobile ? nav.getByRole("link", { name: "Contact", exact: true }) : header.getByRole("link", { name: /Contact us/ });
      await expect(contact).toHaveAttribute("href", "/#contact");
      await nav.getByRole("link", { name: "Leadership", exact: true }).click();
      await expect.poll(() => new URL(page.url()).pathname + new URL(page.url()).hash).toBe("/#leadership");
      await expect(page.locator("#leadership").getByRole("heading", { name: "Our Leadership Team" })).toBeVisible();
      if (mobile) await expect(header.locator("details")).not.toHaveAttribute("open", "");
    });
  }
});

test("homepage leadership follows capabilities with the approved introduction and roles", async ({ page }) => {
  const leadership = page.locator("#leadership");
  expect(await leadership.evaluate((element) => element.previousElementSibling?.id)).toBe("capabilities");
  await expect(leadership.getByRole("heading", { name: "Our Leadership Team", exact: true })).toBeVisible();
  await expect(leadership.locator(".section-intro > p")).toHaveText(leadershipIntro);
  const people = [
    ["Dr. Alex Barrie", "Founder & Chief Executive Officer"],
    ["Stephen Kreisler", "Chief Technology Officer, Chief Information Officer"],
    ["Dr. Conrad Schiff", "Chief Scientist, Business Development Lead"],
    ["Dr. Miles Bengtson", "Chief Technologist"],
  ];
  await expect(leadership.locator("article")).toHaveCount(people.length);
  for (const [name, role] of people) {
    const card = leadership.locator("article").filter({ has: page.getByRole("heading", { name, exact: true }) });
    await expect(card.locator("strong")).toHaveText(role);
    if (/Kreisler|Schiff/.test(name)) await expect(card.getByRole("link")).toHaveCount(0);
  }
  await expect(leadership).not.toContainText("Carrie Hill");
  await expect(leadership.locator("img, .portrait")).toHaveCount(0);
});

test("leadership profile page preserves titles without Steve or Conrad profile links", async ({ page }) => {
  await page.goto("/scientists");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/^Our Leadership\s*Team$/);
  await expect(page.locator(".scientists-hero-copy > p").last()).toHaveText(leadershipIntro);
  await expect(page.locator(".scientist-roster")).not.toContainText("Carrie Hill");
  await expect(page.locator(".scientist-roster img, .scientist-portrait")).toHaveCount(0);
  await expect(page.locator("#miles-bengtson h2")).toHaveText("Dr. Miles Bengtson");
  await expect(page.locator("#miles-bengtson .scientist-name-row")).toContainText("Chief Technologist");
  await expect(page.locator("#miles-bengtson .scientist-name-row strong")).toHaveText("Aurora Engineering");
  for (const [name, role] of [
    [/Stephen.*Kreisler/, "Chief Technology Officer, Chief Information Officer"],
    [/Dr\. Conrad Schiff/, "Chief Scientist, Business Development Lead"],
  ] as const) {
    const profile = page.locator("article").filter({ has: page.getByRole("heading", { name }) });
    await expect(profile.locator(".scientist-name-row")).toContainText(role);
    await expect(profile.locator(".scientist-name-row").getByRole("link")).toHaveCount(0);
    // Published research links are intentionally retained and never opened here.
    await expect(profile.locator(".scientist-work a").first()).toBeAttached();
  }
});

test("homepage, leadership and product footers show both office locations", async ({ page }) => {
  for (const path of ["/", "/scientists/", "/products/medos/"]) {
    await page.goto(path);
    const offices = page.locator("footer .office-locations");
    await expect(offices).toHaveCount(1);
    await expect(offices.locator("address")).toHaveCount(2);
    await expect(offices).toContainText("15 Main St. Unit B");
    await expect(offices).toContainText("Wilton, NH 03086");
    await expect(offices).toContainText("Rockville, Maryland");
    await expect(offices.locator("address").filter({ hasText: "Rockville" }).locator("span")).toHaveText("Rockville, Maryland");
  }
});

test("three service groups start closed and reveal their own content when toggled", async ({ page }) => {
  const groups = page.locator("#services details");
  await expect(groups).toHaveCount(3);
  await expect(page.locator("#services summary h3")).toHaveText([
    "Data science, modeling & simulation",
    "Spacecraft & mission operations systems",
    "Hardware, laboratories & facilities",
  ]);
  for (const group of await groups.all()) {
    await expect(group).not.toHaveAttribute("open", "");
    await expect(group.locator(".service-columns")).toBeHidden();
  }
  for (const group of await groups.all()) {
    await group.locator("summary").click();
    await expect(group).toHaveAttribute("open", "");
    await expect(group.locator(".service-columns")).toBeVisible();
    await expect(group.locator("li").first()).toBeVisible();
    await group.locator("summary").click();
    await expect(group.locator(".service-columns")).toBeHidden();
  }
});

test("products prioritize autonomy and scroll horizontally with working controls", async ({ page }) => {
  const products = page.getByRole("region", { name: "Products and capabilities", exact: true });
  const cards = products.locator("article");
  await expect(cards).toHaveCount(7);
  expect((await cards.locator("h3").allTextContents()).slice(0, 4).map((text) => text.trim())).toEqual(["MEDOS", "ReCAP", "SURFAS", "Mission Assistant AI"]);
  await expect(page.locator("#products .section-intro > p")).toContainText("Explainable AI and autonomous systems");
  await expect(products.getByText("Module for the Event Driven Operation of Spacecraft", { exact: true })).toBeVisible();
  await loadedImage(cards.first().getByRole("img", { name: /MEDOS.*(?:logo|mark)|(?:logo|mark).*MEDOS/i }));
  for (const [index, slug] of ["medos", "recap", "surfas", "mission-assistant-ai"].entries()) {
    await expect(cards.nth(index).locator("h3 a")).toHaveAttribute("href", `/products/${slug}/`);
  }
  await checkGallery(page, "Products and capabilities");
});

test("news uses a horizontal gallery and includes the real CAPSTONE award photograph", async ({ page }) => {
  const news = page.getByRole("region", { name: "Aurora news", exact: true });
  await expect(news.locator(".news-card")).toHaveCount(4);
  const capstone = news.getByRole("link").filter({ has: page.getByRole("heading", { name: "CAPSTONE team receives NASA Space Flight Awareness Award", exact: true }) });
  await expect(capstone).toHaveAttribute("href", "https://www.linkedin.com/feed/update/urn:li:activity:7484667525700653056/");
  const photo = capstone.getByRole("img", { name: /CAPSTONE team award photograph/ });
  await expect(photo).toHaveAttribute("src", "/news/capstone-award.jpg");
  await loadedImage(photo);
  await expect(capstone).toContainText("Liam Greenlee, Joseph Patton");
  // Loading an offscreen image can move its enclosing track; start the control
  // interaction at the same position a visitor sees when opening the page.
  await news.evaluate((element) => element.scrollTo({ left: 0, behavior: "instant" }));
  await expect.poll(() => news.evaluate((element) => element.scrollLeft)).toBeLessThanOrEqual(2);
  await checkGallery(page, "Aurora news");
});

test("source figures load and enlarge accessibly with Escape and focus return", async ({ page }) => {
  for (const [title, source, caption] of [
    ["MEDOS", "/product-medos-02.png", "MMS flight detection · MEDOS technical brief, Figure 2"],
    ["ReCAP", "/product-recap-02.png", "Planning and task allocation · ReCAP technical brief, Figure 2"],
    ["SURFAS", "/product-surfas-01.png", "Scene-layer fusion · SURFAS technical brief"],
    ["Telem Dashboard", "/product-telemetry-dashboard-02.png", "MMS FPI dashboard · Aurora technical brief, Figure 2"],
  ]) {
    const card = page.locator("#products article").filter({ has: page.getByRole("heading", { name: title, exact: true }) });
    const opener = card.getByRole("button", { name: `Enlarge ${caption}`, exact: true });
    const original = opener.getByRole("img");
    await expect(original).toHaveAttribute("src", source);
    await expect(original).toHaveAttribute("alt", /\S.{10,}/);
    await loadedImage(original);
    await expect(card.locator("figcaption")).toHaveText(caption);
    await opener.click();
    const dialog = page.getByRole("dialog", { name: caption, exact: true });
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(dialog.getByRole("img")).toHaveAttribute("src", source);
    await loadedImage(dialog.getByRole("img"));
    await expect(dialog.getByRole("button", { name: "Close enlarged figure" })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(opener).toBeFocused();
  }
  const opener = page.locator("#products .publication-figure-open").first();
  await opener.click();
  await page.getByRole("dialog").getByRole("button", { name: "Close enlarged figure" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(opener).toBeFocused();
  await opener.click();
  // The dialog is centered and limited to 94vw, leaving a real backdrop target.
  await page.mouse.click(1, 1);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(opener).toBeFocused();
});

test("partner band stays white with readable logos and the requested desktop scale", async ({ page }) => {
  const band = page.locator("#partnerships");
  await expect(band).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(band.locator(".partner-logo")).toHaveCount(9);
  for (const image of await band.getByRole("img").all()) await loadedImage(image);
  const nasa = band.getByRole("img", { name: "NASA", exact: true });
  await expect(nasa).toHaveAttribute("src", "/partners/nasa-meatball.png");
  const hdrlName = "Heliophysics Digital Resource Library (HDRL)";
  await expect(band.getByText(hdrlName, { exact: true })).toBeVisible();
  await expect(page.locator("#products").getByText(/Heliophysics Digital Resource Library|\bHDRL\b/)).toHaveCount(0);
  for (const name of ["Air Force Research Laboratory", "KBR"]) {
    const logo = band.getByRole("img", { name, exact: true });
    await expect(logo).toHaveCSS("filter", "brightness(0)");
    await expect(logo).toHaveCSS("mix-blend-mode", "normal");
    await expect(logo.locator("..")).toHaveCSS("background-color", "rgb(255, 255, 255)");
  }
  if ((page.viewportSize()?.width ?? 0) >= 1101) {
    // Baseline displayed widths before the requested 25% enlargement.
    for (const [name, baseline] of [
      ["NASA", 76], ["Air Force Research Laboratory", 140], ["CU LASP", 130],
      ["Cal Poly Pomona", 155], ["UC Santa Cruz", 150], ["Aerojet Rocketdyne", 158],
      ["KBR", 112], [hdrlName, 130],
    ] as const) {
      const box = await band.getByRole("img", { name, exact: true }).boundingBox();
      expect(box, `${name} must have a displayed image box`).not.toBeNull();
      expect(box!.width, `${name}: baseline × 1.25`).toBeCloseTo(baseline * 1.25, 0);
    }
    // SwRI's SVG has a 792 × 612 viewBox with internal whitespace. Object-fit
    // contains it by height, so the visible artwork scales with 62 × 1.25 × 1.2.
    const swri = band.getByRole("img", { name: "Southwest Research Institute", exact: true });
    const box = await swri.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.height).toBeCloseTo(62 * 1.25 * 1.2, 0);
    const effectiveScale = Math.min(box!.width / 792, box!.height / 612) / Math.min(148 / 792, 62 / 612);
    expect(effectiveScale).toBeCloseTo(1.25 * 1.2, 2);
    await expect(swri).toHaveCSS("object-fit", "contain");
  }
});

test("product and contact descriptions remain legible on both viewport sizes", async ({ page }) => {
  for (const [path, selector] of [
    ["/", "#contact .contact-main > p:not(.section-kicker)"],
    ["/products/medos", ".template-article p:not(.template-section-label)"],
  ]) {
    await page.goto(path);
    const descriptions = page.locator(selector);
    expect(await descriptions.count()).toBeGreaterThan(0);
    for (const description of await descriptions.all()) {
      const fontSize = await description.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
      expect(fontSize, (await description.textContent())?.slice(0, 80)).toBeGreaterThanOrEqual(18);
    }
  }
});

test("contact is email-only with readable existing addresses and no submission endpoint", async ({ page, request }) => {
  const contact = page.locator("#contact");
  await contact.scrollIntoViewIfNeeded();
  await expect(contact.locator("form, input, textarea, select, button[type='submit'], input[type='submit'], [role='textbox']")).toHaveCount(0);
  await expect(contact.getByRole("button", { name: /send|submit/i })).toHaveCount(0);
  const emailLinks = contact.locator("a[href^='mailto:']");
  await expect(emailLinks).toHaveCount(2);
  for (const email of ["info@aurora.engineering", "careers@auroraengineering.com"]) {
    const link = contact.locator(`a[href="mailto:${email}"]`);
    await expect(link).toHaveCount(1);
    await expect(link).toBeVisible();
    // The address itself must be visible, rather than hidden behind generic CTA
    // text. An optional decorative arrow is not part of the email address.
    expect((await link.innerText()).replace(/\s*↗\s*$/, "").trim()).toBe(email);
    expect(await link.evaluate((element) => parseFloat(getComputedStyle(element).fontSize)), email).toBeGreaterThanOrEqual(18);
    const box = await link.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x, `${email} stays within the viewport`).toBeGreaterThanOrEqual(-1);
    expect(box!.x + box!.width, `${email} stays within the viewport`).toBeLessThanOrEqual((page.viewportSize()?.width ?? 0) + 1);
  }
  await expect(contact).toContainText("15 Main St. Unit B");
  await expect(contact).toContainText("Wilton, NH 03086");
  await expect(contact.locator("a[href='https://www.linkedin.com/company/auroraengineeringllc']")).toBeVisible();
  // Read-only GET verifies the retired endpoint. Never click a mailto link,
  // invoke an email client, or issue a POST/send request in this suite.
  const response = await request.get("/api/contact/", { maxRedirects: 0 });
  expect(response.status()).toBe(404);
});

test("hero response display is consistent and capabilities use the approved imagery", async ({ page }) => {
  const hero = page.locator(".hero-medos-figure");
  const readouts = hero.locator(".hero-response-readout > div");
  await expect(readouts).toHaveCount(3);
  await expect(readouts.locator("span")).toHaveText(["01 / EVENT", "02 / DECISION", "03 / RESPONSE"]);
  await expect(readouts.locator("strong")).toHaveText([
    "Penetrating radiation detected", "Instrument risk identified onboard", "Command instrument to safe mode",
  ]);
  const labelColors = await readouts.locator("span").evaluateAll((elements) => elements.map((element) => getComputedStyle(element).color));
  const bodyColors = await readouts.locator("strong").evaluateAll((elements) => elements.map((element) => getComputedStyle(element).color));
  expect(new Set(labelColors).size, "Event, decision and response labels use the same color").toBe(1);
  expect(new Set(bodyColors).size, "All three response descriptions use the same color").toBe(1);
  await loadedImage(hero.getByRole("img"));
  const caption = await hero.locator("figcaption").boundingBox();
  const image = await hero.getByRole("img").boundingBox();
  expect(caption).not.toBeNull();
  expect(image).not.toBeNull();
  expect(caption!.y + caption!.height, "NASA source caption appears above the image").toBeLessThanOrEqual(image!.y + 1);

  const capabilities = page.locator("#capabilities");
  await expect(capabilities.getByRole("heading", { level: 2 })).toHaveText(/^Research and engineering\s*for the future of spaceflight\.$/);
  const cards = capabilities.locator("article");
  await expect(cards).toHaveCount(4);
  await expect(cards.locator("h3")).toHaveText([
    "Autonomy & flight software", "Spacecraft operations", "Modeling & simulation", "Data systems & analytics",
  ]);
  for (const card of await cards.all()) {
    await expect(card.getByRole("img")).toHaveCount(1);
    await loadedImage(card.getByRole("img"));
    // Each card presents an image, title and description. Extra tag/chip text
    // would reintroduce the keyword clutter removed in the feedback.
    const visibleCopy = await card.evaluate((element) => {
      const normalize = (text: string | null) => (text ?? "").replace(/\s+/g, " ").trim();
      return {
        actual: normalize((element as HTMLElement).innerText),
        expected: normalize(`${element.querySelector("h3")?.textContent} ${element.querySelector("p")?.textContent}`),
      };
    });
    expect(visibleCopy.actual).toBe(visibleCopy.expected);
  }
});

test("homepage section introductions sit below their headings and retain readable type", async ({ page }) => {
  await page.evaluate(() => document.fonts.ready);
  const sections = page.locator(".section-intro");
  await expect(sections).toHaveCount(5);
  for (const intro of await sections.all()) {
    await intro.scrollIntoViewIfNeeded();
    const heading = intro.getByRole("heading", { level: 2 });
    const paragraph = intro.locator(":scope > p, :scope > .news-intro-side > p");
    await expect(paragraph).toHaveCount(1);
    const headingBox = await heading.boundingBox();
    const paragraphBox = await paragraph.boundingBox();
    expect(headingBox).not.toBeNull();
    expect(paragraphBox).not.toBeNull();
    expect(paragraphBox!.y, (await heading.textContent()) ?? "Section introduction").toBeGreaterThanOrEqual(headingBox!.y + headingBox!.height - 1);
    expect(await paragraph.evaluate((element) => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(18);
  }
  const minimumKickerSize = (page.viewportSize()?.width ?? 1440) <= 760 ? 13 : 15;
  for (const kicker of await page.locator(".section-kicker").all()) {
    expect(await kicker.evaluate((element) => parseFloat(getComputedStyle(element).fontSize)), (await kicker.textContent()) ?? "Section label").toBeGreaterThanOrEqual(minimumKickerSize);
  }
});

test("home, leadership, and product pages do not overflow the viewport", async ({ page }) => {
  for (const path of ["/", "/scientists", "/products/medos"]) {
    await test.step(path, async () => {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      // Visit the bottom to trigger lazy assets before measuring page bounds.
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await expect.poll(() => page.evaluate(() => ({
        documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
        bodyOverflow: document.body.scrollWidth - window.innerWidth,
      }))).toEqual({ documentOverflow: 0, bodyOverflow: 0 });
      const header = await page.locator("header").boundingBox();
      expect(header).not.toBeNull();
      expect(header!.x).toBeGreaterThanOrEqual(-1);
      expect(header!.x + header!.width).toBeLessThanOrEqual((page.viewportSize()?.width ?? 0) + 1);
    });
  }
});
