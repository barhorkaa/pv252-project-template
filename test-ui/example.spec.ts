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

test("open-youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await expect(page).toHaveTitle(/YouTube/)
});

test('should search for a video', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await page.fill('input#search', 'never gonna give you up');
  await page.press('input#search', 'Enter');

  await page.waitForSelector('ytd-video-renderer');

  const videoResults = await page.$$('ytd-video-renderer');
  expect(videoResults.length).toBeGreaterThan(0);
});
