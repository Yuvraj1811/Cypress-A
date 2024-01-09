/// <reference types = "Cypress" />

describe('Auto-suggestion Dropdon', ()=>{

    it('Click on autosuggestion dropdown', ()=>{

        cy.visit("/")
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click()
        cy.get("#myInput").type("App")
        cy.get('#myInputautocomplete-list').each(($ele, $index, $list)=>{
            const list = $ele.text()
            const productName = 'Apple';
            
            if(list === productName){
               $ele.click()

               cy.get("#submit-button").click()
            }
        })
        // with then command
        .then(()=>{
            cy.get("#myInput").type('grap')
            cy.get('#myInputautocomplete-list').each(($ele, $index, $list)=>{
                const productList = $ele.text()
                const productToSelect = "Grapes";

                if(productList === productToSelect){
                    $ele.click()

                    cy.get("#submit-button").click()
                }
            })
        })
    })
})