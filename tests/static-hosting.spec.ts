import { expect, test } from "@playwright/test";
import { products } from "../app/products/product-data";

test("exported routes and assets work without a Next.js server", async ({ page, request }) => {
  test.setTimeout(60_000);
  const failures: string[] = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
  });
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  for (const path of ["/", "/scientists/", ...products.map(({ slug }) => `/products/${slug}/`)]) {
    await test.step(path, async () => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      const sources = await page.locator("img").evaluateAll((images) => [...new Set(images.map((image) => image.getAttribute("src")))]);
      for (const source of sources) {
        expect(source).toBeTruthy();
        expect((await request.get(source!)).status(), source!).toBe(200);
      }
      for (const image of await page.locator("img:visible").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      }
      const assets = await page.locator('link[rel="stylesheet"], script[src]').evaluateAll((elements) => elements.map((element) => element.getAttribute("href") ?? element.getAttribute("src")));
      for (const asset of assets) {
        expect(asset).toBeTruthy();
        expect((await request.get(asset!)).status(), asset!).toBe(200);
      }
    });
  }
  expect(failures).toEqual([]);
  expect((await request.get("/products/not-a-real-product/")).status()).toBe(404);
  await page.goto("/projects/template/");
  await expect(page).toHaveURL(/\/#products$/);
});
