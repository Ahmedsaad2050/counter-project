module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
