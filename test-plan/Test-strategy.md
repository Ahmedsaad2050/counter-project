# Test Strategy – Counter App

## Objective
Ensure the counter app is functionally correct, accessible, and performant using automation-first QA practices.

## Scope
- Functional testing of counter features
- Accessibility validation (ARIA, keyboard support)
- Performance responsiveness (UI feedback latency)
- Cross-browser compatibility (Chrome, Electron)
- CI pipeline validation via GitHub Actions

## Testing Types
- **Manual Testing**: For exploratory testing and validation of UI edge cases
- **Automated Testing**: E2E coverage via Cypress
- **Accessibility Testing**: With `cypress-axe`
- **Performance Testing**: Using `lighthouse ci` and custom assertions

## Tools & Frameworks
- **Cypress** – E2E testing
- **cypress-axe** – Accessibility audits
- **lighthouse** – Lighthouse integration 
- **GitHub Actions** – CI automation

## Environments
- Local development
- GitHub Actions CI

## Test Data
- No external data needed.

## Risks & Assumptions
- UI markup changes (e.g. missing IDs/labels) may break tests
- Performance numbers may vary in CI due to headless.
- Tests should be updated as UI evolves

## Notes:
- Performance goals include keeping UI response under 100ms for smooth user experience.
- Test results will be reported in GitHub Actions with notifications for failures to keep the team informed.
- Regression tests will run on every pull request to catch issues early.