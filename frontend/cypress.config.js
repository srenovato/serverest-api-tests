const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "Mouts Frontend Automation",
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  video: true,
  videosFolder: "cypress/videos",

  screenshotsFolder: "cypress/screenshots",

  e2e: {
    baseUrl: "https://front.serverest.dev/login",

    env: {
      TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD,
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});