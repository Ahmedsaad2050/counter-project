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
        if (browser.name === 'chrome') {
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
        if (fs.existsSync('cypress/reports')) {
          fs.rmSync('cypress/reports', { recursive: true, force: true })
        }
      });
    }
  }
})