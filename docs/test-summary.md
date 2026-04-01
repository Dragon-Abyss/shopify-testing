# Test Summary Report

## Build Under Test
- Public Shopify storefront: `https://cartjs-dev.myshopify.com`

## Scope Executed
- UI automation: homepage, navigation, product/cart flows
- API automation: cart/product/collection/search public endpoints

## High-Level Result
- Framework and suites prepared for repeatable execution.
- Live-site variability and environment access controls may affect pass rates.

## Observations
- Public Shopify AJAX cart endpoints are suitable for safe QA portfolio testing.
- Using cart clear as setup improves test determinism.
- Live third-party sites can change without notice; docs include assumptions and risks.

## Recommendations
- Re-run periodically and update variant IDs/selectors if storefront changes.
- Keep assertions business-relevant and resilient for portfolio readability.
