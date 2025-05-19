import { defineConfig } from 'cypress'
import fs from 'fs'; 
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      json: true,
      quiet: true
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isCanary) {
          launchOptions.args.push(
            "--remote-debugging-port=9222",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage"
          );
        }
        return launchOptions;
      });

      on('before:run', () => {
        if (fs.existsSync('cypress/reports')) {                          // Check if the directory exists
          fs.rmSync('cypress/reports', { recursive: true, force: true }) // Remove existing reports
        }
          fs.mkdirSync('cypress/reports', { recursive: true }); // Ensure directory exists
      });
      on('after:run', (results) => {
        if (results.totalFailed > 0) {
          console.log('Tests failed - generating reports');
        }
      });
    }
  }
})