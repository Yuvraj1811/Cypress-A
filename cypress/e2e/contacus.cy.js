/// <reference types = "Cypress" />

describe('', () => {
    
    it('', () => {
        cy.visit("https://automationteststore.com/")
        cy.title().should('include', "A place to practice your automation skills!")
        cy.url().should('include', "automationteststore")
        cy.get("a[href$='contact']").click()
        cy.get("#ContactUsFrm_first_name").type("Yuvraj")
        cy.get("#ContactUsFrm_email").type("ys4456@gmail.com")
        cy.xpath("//div[@class='form-group form_field']").eq(2).should("have.attr", "id", "field_13")
        cy.get("#ContactUsFrm_enquiry").type("Learning Cypress")
        cy.get("button[title='Submitop']").click()

    });
});