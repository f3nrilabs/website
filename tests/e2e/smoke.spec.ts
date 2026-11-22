import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

/** Every public route, plus one bogus route for the not-found page. */
const routes = [
  { path: "/", status: 200 },
  { path: "/products", status: 200 },
  { path: "/products/horus", status: 200 },
  { path: "/research", status: 200 },
  { path: "/about", status: 200 },
  { path: "/contact", status: 200 },
  { path: "/this-page-does-not-exist", status: 404 },
] as const;

const widths = [320, 375, 768, 1280, 1920] as const;
const axeWidths = new Set<number>([375, 1280]);

/** One `h1`, then headings without skipped levels (h2 then h3, no h2 then h4). */
async function expectHeadingOrder(page: Page): Promise<void> {
  const levels = await page
    .locator("h1, h2, h3, h4, h5, h6")
    .evaluateAll((headings) => headings.map((heading) => Number(heading.tagName.slice(1))));

  expect(levels.length).toBeGreaterThan(0);
  expect(levels[0], "the first heading must be the h1").toBe(1);
  expect(
    levels.filter((level) => level === 1),
    "there must be exactly one h1",
  ).toHaveLength(1);

  let previous = 1;
  for (const level of levels.slice(1)) {
    expect(level, `heading level ${level} skips a level after h${previous}`).toBeLessThanOrEqual(
      previous + 1,
    );
    previous = level;
  }
}

/** No serious or critical axe violations at the current viewport. */
async function expectNoBlockingAxeViolations(page: Page, width: number): Promise<void> {
  // The giant footer wordmark is decorative (aria-hidden) and deliberately low contrast:
  // --surface on --bg per docs/DESIGN.md, which axe reports as `color-contrast` (1.07:1).
  // Exclude exactly that one element instead of disabling the rule for the whole page.
  const results = await new AxeBuilder({ page }).exclude(".site-footer .wordmark--giant").analyze();
  const blocking = results.violations.filter(
    (violation) => violation.impact === "serious" || violation.impact === "critical",
  );
  const details = blocking
    .map(
      (violation) =>
        `${violation.id} (${violation.impact}): ${violation.help} — ${violation.nodes
          .map((node) => node.target.join(" "))
          .join("; ")}`,
    )
    .join("\n");

  expect(blocking, `axe found serious or critical violations at ${width}px:\n${details}`).toEqual(
    [],
  );
}

for (const route of routes) {
  test(`${route.path} renders cleanly`, async ({ page }) => {
    const consoleErrors: { text: string; url: string }[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push({ text: message.text(), url: message.location().url });
      }
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(route.path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(route.status);

    if (route.status === 404) {
      await expect(page.getByRole("heading", { level: 1 })).toHaveText("Nothing here.");
    }

    await expectHeadingOrder(page);

    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      const overflows = await page.evaluate(() => {
        const scrollingElement = document.scrollingElement;
        return scrollingElement
          ? scrollingElement.scrollWidth > scrollingElement.clientWidth
          : false;
      });
      expect(overflows, `horizontal scroll at ${width}px`).toBe(false);

      if (axeWidths.has(width)) {
        await expectNoBlockingAxeViolations(page, width);
      }
    }

    // Chromium itself logs the bogus route's expected 404 response as a console error.
    // Ignore exactly that message for the requested document, and nothing else.
    const unexpectedConsoleErrors = consoleErrors.filter(
      ({ text, url }) =>
        !(route.status === 404 && url === response?.url() && text.includes("status of 404")),
    );
    expect(
      unexpectedConsoleErrors.map(({ text, url }) => `${text} (${url})`),
      "console errors",
    ).toEqual([]);
    expect(pageErrors, "uncaught page errors").toEqual([]);
  });
}
