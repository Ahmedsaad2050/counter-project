## Overview
This test plan covers the core functional testing of the Counter App. The main focus is verifying the counter’s behavior under normal and edge cases.
The additiona non-functional checks will be added also.

## Functional Tests

1. **Initial State**  
   - Counter should display `0` on initial load.

2. **Increment Functionality**  
   - Clicking the increment button increases the counter by 1.  
   - Multiple increments update the counter correctly.

3. **Decrement Functionality**  
   - Clicking the decrement button decreases the counter by 1.  
   - Decrementing at `0` should keep the counter at `0`.
   - Multiple decrements update the counter correctly.

4. **Edge Cases**  
   - Rapid clicks on both increment and decrement buttons.  
   - Very high counter values (stress testing).  
   - Multiple increment and decrement operations in sequence.
   - Reload function will reset the counter.

## Non-Functional Tests


- **Accessibility Tests**  
  - a11y violations checks on load
  - Ensure buttons are keyboard focused.  
  - Check if buttons have accessible names
  - Check buttons have visible text or aria-label

- **Performance Tests**  
  - Verify Lighthouse
  - Verify immediate response to clicks
  - Verify rapid clicking.

**Test Scenarios**
ID	Scenario	Type	Automated
TC01	Counter shows 0 on initial load	Functional	            ✅
TC02	Increment increases count by 1	Functional	            ✅
TC03	Multiple increments update correctly	Functional	      ✅  
TC04	Decrement decreases count by 1	Functional	            ✅
TC05	Prevent counter going below zero	Boundary	               ✅
TC06	Multiple decrements update correctly	Functional	      ✅
TC07	Rapid clicks on increment & decrement	Functional	      ✅
TC08	Stress test with high count values	Functional	         ✅
TC09	Reset counter by reloading page	Functional	            ✅
TC10	Alternate increments and decrements	Functional	         ✅
TC11	No accessibility violations on load	Accessibility	      ✅
TC12	Buttons are keyboard-focusable	Accessibility	         ✅
TC13	Buttons have proper ARIA labels	Accessibility	         ✅
TC14	Buttons have visible text or aria-label	Accessibility	✅
TC15	Counter updates respond under 100ms	Performance	         ✅
TC16	Handles rapid clicking without glitches	Performance	   ✅
TC17	Passes Lighthouse CI performance checks	Performance	   ✅

- **ESLint checks**
  - Verify any specified code errors or warnings

  - **Tools**
   - Cypress (for automated E2E tests)
   - Cypress-axe  (for accessibility audits)
   - Lighthouse (for performance checks via cypress-audit)
   - GitHub Actions (CI)
   - Mochawesome (test reports)

   **Entry Criteria**
   - The app runs locally or is deployed on a dev server
   - Page loads with no major console errors

   **Exit Criteria**
   - All automated tests pass in CI
   - No critical a11y or performance issues are left open
   - Reports are available and reviewed

   **Reporting**
   - Accessibility report (accessibility-report.md)
   - Performance report (performance-report.md)
   - Bug report (Bug-report.md
   )