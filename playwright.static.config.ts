import { defineConfig } from "@playwright/test";
import feedback from "./playwright.feedback.config";

export default defineConfig({
  ...feedback,
  testMatch: ["feedback.spec.ts", "static-hosting.spec.ts"],
  outputDir: ".local-review/static-results",
  use: {
    ...feedback.use,
    baseURL: "http://127.0.0.1:4174",
    channel: process.env.CI ? undefined : "chrome",
  },
  webServer: {
    command: "npm run preview:static",
    url: "http://127.0.0.1:4174",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
