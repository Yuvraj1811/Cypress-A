/// <reference types = "Cypress" />

describe('Navigation Browser', () => {
    it('Navigate Browser',()=>{

        cy.visit("/")
        cy.get("#contact-us").invoke('removeAttr', 'target').click()
        cy.wait(3000)
        cy.go("back")
        cy.reload()
      //  cy.reload(true)//reload without using cache

    })
    
});