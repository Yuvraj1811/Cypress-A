/// <reference types = "Cypress" />

describe('Inspect Automation Test store usin chain command', () => {
    
    it.only('Click on the element using text command', () => {
        
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(itemheadeer){
            cy.log("Select the folloeing item: "+itemheadeer.text())
        })
    });

    it('Click on the element using text command', () => {
        
        cy.visit("https://automationteststore.com/")
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click()
    });
});