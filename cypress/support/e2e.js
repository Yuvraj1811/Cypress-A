// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import'cypress-iframe'
// import "cypress-mochawesome-reporter/registry"
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath')
require('cypress-diff')


//Hide all fetch/XHR request in Cy console, toogle, via cypress.json
const app = window.top;

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-named-xhr { display: none; }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

// Sys is not defined //This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception

Cypress.on('uncaught:exception',(err, reunnable)=>{
  return false;
})

