/// <reference types = "Cypress" />

describe('Auto-Suggestion-Dropdown', () => {

    it('Select Dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("#autosuggest").type("ind")
        cy.get(".ui-menu-item").each(($ele, $index, $list)=>{
            const list = $ele.text()
            const countrySelect = "India"

            if(list === countrySelect){
               $ele.trigger("click") //JQuery method
            }
        })
        
    });
});