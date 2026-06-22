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
    page.getByRole("heading", { name: /AI for rare disease/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "Technology" }).first().click();
  await expect(page.locator("#technology")).toBeInViewport();

  await page.getByRole("link", { name: "Contact" }).first().click();
  await expect(page.locator("#contact")).toBeInViewport();

  expect(consoleErrors).toEqual([]);
});

test("contact form validates required fields and email format", async ({ page }) => {
  await page.goto("/#contact");

  await page.getByRole("button", { name: "Contact Neuvara" }).click();
  await expect(
    page.getByText("Please complete the required fields before preparing the enquiry.")
  ).toBeVisible();
  await expect(page.getByText("Name is required.")).toBeVisible();
  await expect(page.getByText("Organisation is required.")).toBeVisible();
  await expect(page.getByText("Email is required.")).toBeVisible();
  await expect(page.getByText("Message is required.")).toBeVisible();

  await page.getByLabel("Name").fill("Alex Morgan");
  await page.getByLabel("Organisation").fill("Example Research Hospital");
  await page.getByLabel("Email").fill("not-an-email");
  await page.getByLabel("Message").fill("Interested in research validation discussions.");
  await page.getByRole("button", { name: "Contact Neuvara" }).click();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();

  await page.getByLabel("Email").fill("alex@research.invalid");
  await page.getByRole("button", { name: "Contact Neuvara" }).click();
  await expect(
    page.getByText("Opening your email client to contact contact@neuvara.org.")
  ).toBeVisible();
});
