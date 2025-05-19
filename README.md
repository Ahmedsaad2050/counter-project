# Counter App QA Project
This project is a QA-focused test framework for a simple counter app. It's built using cypress for e2e testing and includes accessibility and performance auditing using lighthouse,
Reports are auto-generated and uploaded as GitHub Acrion artifacts.
The original application had logic and accessibility issues. As part of the challenge, `no app-level fixes are assumed allowed unless explicitly requested`.

## This framework includes:

- Functional E2E tests using `Cypress`
- Accessibility checks using `axe-core`
- Performance audits using `Lighthouse`
- Report generation using `Mochawesome`
- GitHub Actions CI configuration for automated testing and reporting


### 1. Clone the repository:
- Run on bash or cmd:
git clone https://github.com/ahmedsaad2050/counter-project.git

### 2. Start the server locally:
- npm start

### 4. Run Cypress tests:
- npm run cy:run

### 5. Start the server and run cypress tests in one command:
- npm run test  ==> This will start the server and run cypress tests automatically.

### 6. Run Lighthouse performance audit:4
- npm run lighthouse

## 7. CI & Reporting:
- GitHub Actions workflow runs on pull requests to develop and master
- Cypress and Lighthouse reports are uploaded as downloadable artifacts
- Mochawesome merges all Cypress test results into a single HTML report

## Project Structure
- `cypress/e2e/` – Functional tests
- `cypress/accessibility/` – Accessibility tests using axe-core.
- `cypress/performance/` – Lighthouse performance test.
- `cypress/pages/` – Page Object Model abstraction.
- `cypress/reports/` – Output directory for HTML reports.
- `.github/workflows/` - GitHub Actions config.


## Notes:
- Accessibility violations are logged, to reflect the original app state.
- Performance audits run in headless mode via Lighthouse with Chrome stable.
- Cypress test failures can be reviewed in the generated reports or CI output.
- The used versions of tools and libraries are latest or the latest stable to ensure compatibility.


## Assumptions: 
- QA is not responsible for fixing application bugs unless specified
- All accessibility and performance issues are logged for awareness