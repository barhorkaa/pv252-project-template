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

test("find-fi-programmes", async ({ page }) => {
  await page.goto("https://www.muni.cz/");
  await page.getByRole('link', { name: /Chci studovat/ }).first().click()

  await page.locator('#menu-main').getByRole('link', { name: 'Bakalářské a magisterské' }).click()
  await page.getByRole('link', { name: /Programy podle fakult/ }).click()
  await page.getByRole('link', { name: 'Fakulta informatiky' }).click()

  await expect(page).toHaveTitle(/Studijní programy: Fakulta informatiky/)
});

test("find-fi-dean", async ({ page }) => {
  await page.goto("https://www.muni.cz/");

  await page.getByPlaceholder('Hledej').fill("fi dekan")
  await page.keyboard.press("Enter")

  await expect(page.locator('#ajax-form-containerresults > .row-main > .grid')).toContainText("Vedení Fakulty informatiky")

  await page.getByRole('link', { name: /Vedení Fakulty informatiky/ }).click()
  await page.getByText(/^děkan/).click()
  await expect(page.getByText('děkan Fakulty informatiky')).toBeVisible()
});

test("shop-munishop", async ({ page }) => {
  await page.goto("https://munishop.muni.cz")

  await page.getByRole('link', { name: 'Reklamní předměty Jdu' }).getByRole('button').click()
  await page.getByLabel('Katalog produktů').getByRole('link', { name: 'Kancelářské a školní potřeby' }).click()

  await expect(page.getByText(/Přívěšek hrášky/)).toBeVisible()
  await page.getByRole('link', { name: /Přívěšek hrášky/ }).click()

  await page.getByRole('button', { name: 'Koupit' }).first().click()
  await page.getByRole('button', { name: 'Košík' }).click()

  await expect(page.getByRole('row', { name: 'Celkem 95,00 Kč' }).locator('td')).toContainText(/95,00/)
});