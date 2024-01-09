/// <reference types = 'Cypress' />

describe('Date picker ', () => {
    it('Date picker', () => {
        cy.visit("/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        
        let date = new Date()
        date.setDate(date.getDate())
        cy.log(date.getDate()) // get date current i.e 5
        
        let date2 = new Date()
        date.setDate(date.getDate()+5) // get date current i.e 5 + 5 =10
        cy.log(date.getDate())
    });
    it.only('', () => {
        cy.visit("/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click()

        var date = new Date()
        date.setDate(date.getDate())
        date.setDate(date.getFullYear()+1)

        var future_year = date.getFullYear()
        var future_month = date.getMonth()
        var future_Day = date.getDay()

        cy.log(future_year)
        cy.log(future_month)
        cy.log(future_Day)
    });
    
});
