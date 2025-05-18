# Test Plan – Counter App

## Features to Test
- Increment Button
- Decrement Button
- Reset (via reload)
- Boundary Conditions (No negative count)
- Accessibility (ARIA compliance, keyboard focus)
- Performance (Responsiveness, load speed)

## Test Scenarios

| ID   | Scenario                                | Type       | Automated |
|------|-----------------------------------------|------------|-----------|
| TC01 | Increment counter by 1                  | Functional | ✅        |
| TC02 | See initial count at 0                  | Functional | ✅        |
| TC03 | Increment counter multiple times        | Functional | ✅        |
| TC04 | Decrement counter                       | Functional | ✅        |
| TC05 | Prevent going below 0                   | Boundary   | ✅        |
| TC06 | Decrement counter multiple times            | Functional | ✅        |
| TC07 | Click on both increment & decrement rapidly   | Functional | ✅        |
| TC08 | Count to higher numbers (stress test)   | Functional | ✅        |
| TC09 | Reset counter (reload simulation)       | Functional | ✅        |
| TC010 | Alternate click sequences               | Functional | ✅        |
| TC11 | No a11y violations on load              | A11y       | ✅        |
| TC12 | Buttons keyboard-focusable              | A11y       | ✅        |
| TC13 | Buttons have aria-labels                | A11y       | ✅        |
| TC14 | Buttons have visible labels or aria     | A11y       | ✅        |
| TC15 | Counter updates under 100ms             | Perf       | ✅        |
| TC16 | Handles rapid clicks without glitches   | Perf       | ✅        |
| TC17 | Lighthouse CI Checks                    | Perf       | ✅        |


## Tools
- Cypress, cypress-axe, custom check & cypress-audit

## Entry Criteria
- App deployed or served locally via dev server
- Page loads without console errors

## Exit Criteria
- All automated tests pass
- No critical accessibility or performance issues

## Reporting
- CI: GitHub Actions summary
- Accessibility: `accessibility-report.md`
- Performance: `performance-report.md`
