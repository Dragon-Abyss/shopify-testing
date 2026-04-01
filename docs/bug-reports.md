Bug Reports

## BUG-001: Cart count does not update immediately after quick add under slow network
- **Environment:** Chromium, throttled network
- **Severity:** Medium
- **Priority:** P2
- **Precondition:** Home page open, cart initially empty
- **Steps to Reproduce:**
  1. Click "Add +Hat"
  2. Observe cart item count text near hero
- **Expected:** Item count updates to 1 within acceptable UI response time
- **Actual:** Count remains stale briefly until next DOM update
- **Notes:** Potential async DOM binding lag in cart widget

## BUG-002: Predictive search endpoint can return 404 depending on theme configuration
- **Environment:** Public storefront API checks
- **Severity:** Low
- **Priority:** P3
- **Precondition:** None
- **Steps:** Call `/search/suggest.json?q=hat&resources[type]=product`
- **Expected:** Endpoint either documented as unsupported or returns valid payload
- **Actual:** 404 on some storefront/theme configurations
- **Notes:** Not a checkout blocker; document behavior in test plan as environment-specific

## BUG-003: Collection content assertion brittle when relying on generic text "collection"
- **Environment:** API/HTTP checks
- **Severity:** Low
- **Priority:** P3
- **Precondition:** None
- **Steps:** GET `/collections/all`
- **Expected:** Stable assertion for collection page validity
- **Actual:** Generic string checks can be fragile across theme updates
- **Notes:** Improve by asserting canonical URL or structured markers when possible
