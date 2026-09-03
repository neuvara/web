import { expect, test } from "@playwright/test";

test("homepage loads and navigates without console errors", async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /measurement problem/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "Approach" }).first().click();
  await expect(page.locator("#approach")).toBeInViewport();

  await page.getByRole("link", { name: "Contact" }).first().click();
  await expect(page.locator("#contact")).toBeInViewport();

  expect(consoleErrors).toEqual([]);
});

test("contact email is reachable from the page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator('a[href="mailto:contact@neuvara.org"]').first()
  ).toBeVisible();
});
