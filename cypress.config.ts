import { defineConfig } from "cypress";

module.exports = defineConfig({


  e2e: {    
    setupNodeEvents(on, config) {

    },
    reporter: "cypress-multi-reporters", 
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
      },

    },    

    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,   
    video: false,
    screenshotOnRunFailure: false,
  },
  env:{
    User:{
      userName: "andresarad",

      password: "abc123",
      demoblazeUrl: "https://www.demoblaze.com"
    },
    fillFormDemoQA:{
      demoUrl: "https://demoqa.com/",
      name: "Andres ",
      lastName: "Yepes",
      email: "andresarad@hotmail.com",
      gender: "Male",
      dateOfBirth: "6 4 1994",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",

    },
    Upload: {
      uploadUrl   : "https://the-internet.herokuapp.com/upload"
    },
    w3school: {
      w3schoolUrl : "https://www.w3schools.com/html/html_iframe.asp"
    }
  }
});