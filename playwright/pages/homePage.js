class HomePage {
  constructor(page) {
    this.page = page;
    this.brandLink = page.getByRole('link', { name: 'CartJS Dev' });
    this.navGuide = page.getByRole('link', { name: 'Guide' });
    this.navReference = page.getByRole('link', { name: 'Reference' });
    this.quickAddHatButton = page.getByRole('button', { name: 'Add +Hat' });
    this.quickAddCoatButton = page.getByRole('button', { name: 'Add 2 +Coats' });
    this.clearCartButton = page.getByRole('button', { name: 'Clear Cart' });
    this.productSelect = page.locator('form[data-cart-submit] select[name="id"]');
    this.quantitySelect = page.locator('form[data-cart-submit] select[name="quantity"]');
    this.addToCartButton = page.locator('form[data-cart-submit] button[type="submit"]');
    this.cartCountStrong = page.locator('[data-cart-render="item_count"]');
    this.emptyCartMessage = page.getByText("You don't have any items in your cart.");
    this.cartRows = page.locator('table[data-cart-view] tbody tr').filter({ has: page.locator('td') });
  }

  async goto() {
    await this.page.goto('/');
  }

  async quickAddHat() {
    await this.quickAddHatButton.click();
  }

  async quickAddTwoCoats() {
    await this.quickAddCoatButton.click();
  }

  async addFromForm(variantId, quantity = '1') {
    await this.productSelect.selectOption(variantId);
    await this.quantitySelect.selectOption(quantity);
    await this.addToCartButton.click();
  }

  async clickFirstRowPlus() {
    await this.page.locator('a[data-cart-update]').filter({ hasText: '+' }).first().click();
  }

  async clickFirstRowMinus() {
    await this.page.locator('a[data-cart-update]').filter({ hasText: '-' }).first().click();
  }

  async removeFirstRow() {
    await this.page.locator('a[data-cart-remove]').first().click();
  }
}

module.exports = { HomePage };
