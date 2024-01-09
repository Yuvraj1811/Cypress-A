/// <reference types = "Cypress" />

describe("Test Contas US Form via Webdriver UI",()=>{
  it("Should be able to submit a successful submission via contact us form",()=>{
   Cypress.env("retries")
      cy.visit(Cypress.env("DynamicUrl") + "/Contact-Us/contactus.html",{timeout: 6000})
      Cypress.config('defaultCommandTimeout', 100)
      cy.get('[name="first_name"]').type("Yuvraj")
      cy.get('[name="last_name"]555').type("Singh")
     // cy.pause()
      cy.get('[name="email"]').type("ys444@gmail.com")
      cy.get('[name="message"]').type("Lerning cypress")
      cy.get('[type="submit"]').click()
      // cy.go("back")


  })
})