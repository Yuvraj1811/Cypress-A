/// <reference types = "Cypress" />

describe('Alias and Invoke', () => {
    it("Validate a specific hair care product",()=>{
    cy.visit("https://automationteststore.com/")
    cy.get(".subnav").contains("Hair Care").click()

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbail")
    cy.get("@productThumbail").its('length').should('be.gte', 5)
    cy.get("@productThumbail").should('include', "Seaweed Conditioner")
})
    it('Validate product thumbnail', () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("productThumbnail")
        cy.get("@productThumbnail").its('length').should('be.gte', 15)
        cy.get("@productThumbnail").find(".productcart").invoke('attr', 'title').should('include', "Add to Cart")

    });
    it('Calculate total of normal and sales product', ()=>{
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("productThumbnail")
        cy.get('@productThumbnail').find('.price ').each(($ele, $index, $list)=>{  //.should('contain','$')
            cy.log($ele.text())
        
    })
});
    it.only('Calculate total number sum',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("productThumbnail")
        cy.get('@productThumbnail').find('.price ').invoke('text').as('itemprice')

        var itemTotal = 0
        cy.get('@itemprice').then($lintext =>{
        var itempricetotal = 0
        var itemPrice = $lintext.split('$')
        var i;
        for(i = 0; i<itemPrice.length; i++){
            cy.log((itemPrice[i]))
            itempricetotal += Number(itemPrice[i])
        }
        itemTotal += itempricetotal;
        cy.log("Non sale price item total: "+ itemTotal)
        })
        .then(()=>{
            cy.log(''+itemTotal)
            expect(itemTotal).to.be.equal(1156)


        
    })
    
    })
});
