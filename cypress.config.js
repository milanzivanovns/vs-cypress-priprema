const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/login",
    env: {
      testUserEmail: "vivifytest@gmail.com",
      testUserPassword: "12345678"
    },
  },
});
