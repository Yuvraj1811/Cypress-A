const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '54ep27',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    AutomationURL: "https://testautomationpractice.blogspot.com/",
    firstname: "Danny",
    DynamicUrl: "https://webdriveruniversity.com/",
    OrangeUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },

  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('after:run',(result)=>{
        console.log('Cypress test run is completed');
        console.log('Total passed test:',result.totalPassed);
        console.log('Total failed test:', result.totalFailed)
      })
      on('task',{
        log(message){
          console.log(message);
          return null
        }
      })
      
    },
    
    
    baseUrl:"https://webdriveruniversity.com/",
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    video:true,
    videoCompression:true,
    
  
    
    
  },
   
  
});
