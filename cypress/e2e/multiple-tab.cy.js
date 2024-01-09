///<reference types ="Cypress"/>

describe('Handel Multiple Tab',()=>{

    it('Handling multiple tab',()=>{

        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")

        cy.get('a[title="Flights"]').eq(1).invoke('removeAttr','target').click()
    })
})