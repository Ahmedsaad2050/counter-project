import { defineConfig } from 'cypress'
import fs from 'fs'; 
export default defineConfig({
  e2e: {
// Setup the base URL for the tests.
    baseUrl: 'http://localhost:3000',
// Setup the spec pattern for the tests.
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
// Setup the report and the reporter options.
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      json: true,
      quiet: true
    },
    setupNodeEvents(on, config) {
// Setup the before browser launch event to add custom arguments for Chrome Canary.
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
// Setup for the logging task.
      on('task', {
              log(message) {
                console.log(message)
                return null
              },
            })          
// Setup the before run event to remove existing reports and create a new directory.      
      on('before:run', () => {
        if (fs.existsSync('cypress/reports')) {                          // Check if the directory exists
          fs.rmSync('cypress/reports', { recursive: true, force: true }) // Remove existing reports
        }
          fs.mkdirSync('cypress/reports', { recursive: true }); // Ensure directory exists
      });
// Setup the after run event to check for failed tests and generate reports anyway.  
      on('after:run', (results) => {
        if (results.totalFailed > 0) {
          console.log('Tests failed - generating reports');
        }
      });
    }
  }
})