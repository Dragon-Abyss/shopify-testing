# Test Plan - Shopify Public Storefront QA

## 1. Objective
Validate safe, public e-commerce customer flows on a real Shopify storefront using UI and API automation.

## 2. Test Items
- Storefront URL: `https://cartjs-dev.myshopify.com`
- UI: Homepage, navigation, product selection, add-to-cart, cart updates/removal
- API: public product, collection, cart, and search-related endpoints

## 3. Scope
### In Scope
- Public browsing flows
- Cart-related operations that do not create real orders
- Non-destructive API calls
- Basic negative validation

### Out of Scope
- Checkout/payment submission
- Real order placement
- Login/registration abuse scenarios
- Security/performance testing

## 4. Test Strategy
- UI tests with Playwright, focused on stable locators and observable customer behavior.
- API tests with Postman collection run by Newman.
- Keep tests deterministic by clearing cart during setup for repeatability.

## 5. Assumptions
- Target storefront remains public and reachable.
- Product variant IDs used by tests remain available.
- Theme/AJAX behavior may change over time on the live site.

## 6. Entry/Exit Criteria
### Entry
- Dependencies installed
- Storefront is accessible

### Exit
- UI and API suites executed
- Major blockers documented
- Summary and bug samples updated

## 7. Risks
- Live storefront changes can break selectors/data assumptions.
- Rate limits/bot protection may intermittently block automated traffic.
