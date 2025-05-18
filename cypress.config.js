module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    // Minimal reporter addition (safe for Lighthouse)
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      json: true,
      quiet: true // ← Critical: prevents stdout conflicts
    },
    
    setupNodeEvents(on, config) {
      // 1. Keep your existing Chrome launch args (DON'T TOUCH)
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

      // 2. Add report cleanup (optional but recommended)
      on('before:run', () => {
        require('fs').rmSync('cypress/reports', { recursive: true, force: true });
      });



      return config;
    }
  }
};