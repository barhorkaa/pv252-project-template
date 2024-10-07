import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("find-watman", async ({ page }) => {  
  await page.goto("/");
  await expect(page.getByAltText("This is watman")).toBeInViewport();
});

test("find-fibonacci", async ({ page }) => {
  await page.goto("/site_a.html");
  await expect(page.getByText("Factorial value ")).toBeVisible()
});

// YouTube Tests

