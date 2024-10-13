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

test("open-muni", async ({ page }) => {
  await page.goto("https://www.muni.cz/");
  await expect(page).toHaveTitle(/Masarykova univerzita/)
});

test("change-language", async ({ page }) => {
  await page.goto("https://www.muni.cz/");

  await page.getByRole('navigation', { name: 'Výběr jazyka' }).click()
  await page.getByRole('link', { name: 'English' }).click()

  await expect(page).toHaveTitle(/Masaryk University/)
});