const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { clearCart } = require('../utils/cartApi');

const BASE_URL = 'https://cartjs-dev.myshopify.com';

test.describe('CartJS Dev Shopify storefront UI smoke/regression', () => {
  test.beforeEach(async ({ request, page }) => {
    await clearCart(request, BASE_URL);
    await page.goto('/');
  });

  test('UI-001: home page loads with expected title and hero content', async ({ page }) => {
    await expect(page).toHaveTitle(/CartJS Dev/);
    await expect(page.getByRole('heading', { name: /A Javascript library/i })).toBeVisible();
  });

  test('UI-002: header navigation links are visible and functional', async ({ page }) => {
    const home = new HomePage(page);
    await expect(home.brandLink).toBeVisible();
    await expect(home.navGuide).toBeVisible();
    await expect(home.navReference).toBeVisible();
    await home.navGuide.click();
    await expect(page).toHaveURL(/\/guide/);
  });

  test('UI-003: product selector shows Coat and Hat options', async ({ page }) => {
    const home = new HomePage(page);
    await expect(home.productSelect).toContainText('Coat');
    await expect(home.productSelect).toContainText('Hat');
  });

  test('UI-004: quick add Hat updates cart count', async ({ page }) => {
    const home = new HomePage(page);
    await home.quickAddHat();
    await expect(home.cartCountStrong).toHaveText('1');
  });

  test('UI-005: quick add 2 Coats updates cart count to 2', async ({ page }) => {
    const home = new HomePage(page);
    await home.quickAddTwoCoats();
    await expect(home.cartCountStrong).toHaveText('2');
  });

  test('UI-006: add from product form with quantity updates cart', async ({ page }) => {
    const home = new HomePage(page);
    await home.addFromForm('716934999', '3');
    await expect(home.cartCountStrong).toHaveText('3');
  });

  test('UI-007: cart quantity can be incremented and decremented', async ({ page }) => {
    const home = new HomePage(page);
    await home.quickAddHat();
    await home.clickFirstRowPlus();
    await expect(page.locator('table[data-cart-view] tbody tr').first()).toContainText('2');
    await home.clickFirstRowMinus();
    await expect(page.locator('table[data-cart-view] tbody tr').first()).toContainText('1');
  });

  test('UI-008: item can be removed and empty cart message is shown', async ({ page }) => {
    const home = new HomePage(page);
    await home.quickAddHat();
    await home.removeFirstRow();
    await expect(home.emptyCartMessage).toBeVisible();
  });

  test('UI-009: clear cart button empties cart (negative/state reset)', async ({ page }) => {
    const home = new HomePage(page);
    await home.quickAddTwoCoats();
    await expect(home.cartCountStrong).toHaveText('2');
    await home.clearCartButton.click();
    await expect(home.emptyCartMessage).toBeVisible();
  });
});
