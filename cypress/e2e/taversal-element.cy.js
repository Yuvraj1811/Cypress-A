/// <reference types = "Cypress"/>

describe('Taversing DOM element in Cypress',()=>{
    beforeEach(()=>{

        cy.visit("/")
        cy.get('#data-table').scrollIntoView().invoke('removeAttr','target').click()
    })
    it('Children()',()=>{
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children('.active').should('contain','Contact Us')
    })
    it('Closest',()=>{
        cy.get('span[class="badge traversal-badge"]').closest('ul').should('have.class','list-group')

    })
    it("eq()",()=>{
        cy.get(".traversal-drinks-list > *").eq(2).should('contain','Milk').invoke('text').then((text)=>{
            cy.log(text)
        })
    })
    it("filter()",()=>{
        cy.get(".btn-group-toggle > *").filter(".active").should('contain','Button-1')
    })
    it('find()',()=>{
        cy.get(".traversal-pagination").find("li").find('a').should('have.length', 7)
    })
    it('First()',()=>{
        cy.get(".traversal-table > tbody > tr > td").first().should('contain','Andy')
    })
    it('Last()',()=>{
        cy.get(".traversal-table > tbody > tr > td").last().should('contain','Scott')
    })
    it('nextAll()',()=>{
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3)
    })
    it.only('nexyUntill()',()=>{
        cy.get('#coffee').nextUntil('#milk')
    })
})