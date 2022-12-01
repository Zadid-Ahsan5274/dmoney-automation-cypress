const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern= [
         'cypress/e2e/userLogin.cy.js',
         'cypress/e2e/getUserList.cy.js',
         'cypress/e2e/createUser.cy.js',
         'cypress/e2e/deleteUser.cy.js'
      ]
      return config;
    },
  },
});
