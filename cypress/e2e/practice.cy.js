/// <reference types="Cypress" />
/// hello worlds
describe('Handling data', () => {
    it('Calculate total number of price', () => {
        cy.visit("/");
        cy.get('#data-table').scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get("#thumbnail-1 td").as('itemPrice');

        var pricedetail = 0;

        // cy.get("@itemPrice").then($linktext => {
        //     if ($linktext && $linktext.length) {
        //         var itemPrice = $linktext.map((index, element) => {
        //             const priceText = Cypress.$(element).text().trim().replace('$', '');
        //             return parseFloat(priceText);
        //         }).get();

                for (var i = 0; i < itemPrice.length; i++) {           
                    if (!isNaN(itemPrice[i])) {
                        pricedetail += itemPrice[i];
                    }
                }

                cy.log('Total: $' + pricedetail.toFixed(2));
            } else {
                cy.log("No item prices found.");
            }
        });
    });
});
