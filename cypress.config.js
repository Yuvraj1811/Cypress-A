const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '54ep27',
  
  env: {
    retries: 4,
    firstname: "Danny",
    DynamicUrl: "https://webdriveruniversity.com/"
  },
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on)
    },
    
    
    baseUrl:"https://webdriveruniversity.com/",
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    video:true,
    videoCompression:true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    
  },
   
  
});
