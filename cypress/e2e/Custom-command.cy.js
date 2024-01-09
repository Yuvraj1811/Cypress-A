/// <reference types ='Cypress' />

describe('Custom Command', ()=>{
    
    })
    it('Customa command', ()=>{
        cy.fixture('example').then((data)=>{
            globalThis.data = data
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get("input[name='first_name']").type(data.name)
        // cy.get('input[name="last_name"]').type(data.lastName)
       //  cy.UserData(data.name, data.lastName)
           cy.UserData(Cypress.env("firstname"),data.lastName)
    })
})