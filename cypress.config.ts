import { defineConfig } from "cypress";

module.exports = defineConfig({


  e2e: {    
    setupNodeEvents(on, config) {

    },
    baseUrl: "https://www.demoblaze.com",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,   
    video: false,
    screenshotOnRunFailure: false,
  },
  env:{
    User:{
      userName: "andresarad",
      password: "abc123"
    }
  }

});