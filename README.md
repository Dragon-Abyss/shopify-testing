# Shopify QA Project

## Project Overview
This project is a QA portfolio showcasing **UI test automation with Playwright** and **API testing with Postman** against a real Shopify storefront.

Target storefront: **CartJS Dev** (`https://cartjs-dev.myshopify.com`), a public Shopify demo storefront suitable for safe customer-flow testing.

## Tools Used
- JavaScript (Node.js)
- Playwright (`@playwright/test`) for UI automation
- Postman Collection v2.1 for API testing
- Newman for command-line Postman execution

## Target Site
- URL: `https://cartjs-dev.myshopify.com`
- Platform: Shopify storefront

## Scope of Testing
### In scope
- Home page content validation
- Header/navigation checks
- Product browsing controls (dropdown/options)
- Add-to-cart flows
- Cart validation
- Cart quantity update
- Remove from cart
- Basic negative/state-reset checks
- Public Shopify AJAX/cart/search/product endpoints

### Out of scope
- Real checkout and payments
- Account registration/login abuse
- Order placement
- Security/performance testing

## Project Structure
```text
.
├── docs/
│   ├── bug-report-samples.md
│   ├── test-cases.md
│   ├── test-plan.md
│   └── test-summary.md
├── playwright/
│   ├── pages/
│   │   └── homePage.js
│   ├── tests/
│   │   └── storefront-ui.spec.js
│   └── utils/
│       └── cartApi.js
├── postman/
│   └── shopify-public-api.postman_collection.json
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## Setup Steps
1. Install Node.js (18+ recommended).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browser binaries:
   ```bash
   npx playwright install
   ```

## Run Playwright UI Tests
```bash
npm run test:ui
```

Optional:
- Headed mode: `npm run test:ui:headed`
- Open HTML report: `npm run test:ui:report`

## Run Postman/Newman API Tests
```bash
npm run test:api
```

## Sample Findings / Observations
- Cart operations use Shopify AJAX endpoints (`/cart/add.js`, `/cart/change.js`, `/cart.js`).
- Some storefront features (e.g., predictive search endpoint) may vary by theme config and can return non-200 statuses in valid scenarios.
- Due to public-site variability, assertions are intentionally practical and non-destructive.

## Project Summary
Built a JavaScript QA automation portfolio project using Playwright and Postman/Newman to validate real-world Shopify storefront browsing and cart flows. Implemented reusable page objects/utilities, UI and API regression coverage, and QA documentation (test plan, test cases, bug reports, and summary report).
