import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com/index.html",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
  },
});