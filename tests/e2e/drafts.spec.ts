import { expect, test } from "@playwright/test";

test("a draft research post is not in the production build", async ({ page }) => {
  const response = await page.goto("/research/formatting-reference");
  expect(response?.status()).toBe(404);
});
