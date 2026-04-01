# Test Cases

| ID | Scenario | Precondition | Steps | Expected Result |
|---|---|---|---|---|
| UI-001 | Validate homepage load | Site reachable | Open home page | Title and hero heading visible |
| UI-002 | Validate header links | Home page opened | Check brand, Guide, Reference links; click Guide | Links visible and Guide opens |
| UI-003 | Validate product dropdown options | Home page opened | Open product selector | Coat and Hat options shown |
| UI-004 | Add Hat via quick action | Cart cleared | Click "Add +Hat" | Cart count increments to 1 |
| UI-005 | Add 2 Coats via quick action | Cart cleared | Click "Add 2 +Coats" | Cart count increments to 2 |
| UI-006 | Add from form with quantity | Cart cleared | Select Hat, qty 3, click Add to Cart | Cart reflects quantity 3 |
| UI-007 | Update quantity in cart | One line item exists | Click + then - on first row | Quantity increases then decreases |
| UI-008 | Remove item from cart | One line item exists | Click remove (×) | Empty cart message displayed |
| UI-009 | Clear cart state reset | Cart has items | Click Clear Cart | Cart becomes empty |
| API-001 | Clear cart setup | None | POST /cart/clear.js | 200 response |
| API-002 | Get empty cart | Cart cleared | GET /cart.js | 200 and item_count = 0 |
| API-003 | Get product data | None | GET /products.json?limit=3 | 200 and products array present |
| API-004 | Get collection page | None | GET /collections/all | 200 and HTML content |
| API-005 | Add variant to cart | None | POST /cart/add.js with valid variant | 200 and line item returned |
| API-006 | Validate cart count | Item added | GET /cart.js | item_count > 0 |
| API-007 | Change quantity | Item in line 1 | POST /cart/change.js line=1 qty=2 | 200 and qty updated |
| API-008 | Predictive search | None | GET /search/suggest.json... | supported status (200/404) observed |
| API-009 | Invalid variant negative | None | POST /cart/add.js with invalid id | 404/422 error response |
