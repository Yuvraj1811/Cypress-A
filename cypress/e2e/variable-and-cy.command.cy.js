/// <reference types = "Cypress" />


describe('Verifying variables, cypress commands and jquery commands', () => {

    it('Navigation to specific products page', () => {
        cy.visit("https://automationteststore.com/")
        const makeuplink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeuplink.click()
        const skkinLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skkinLink.click()

        
    
    });

     it('Navigation to specific products page', () => {
        cy.visit("https://automationteststore.com/")
        const makeuplink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeuplink.click()

        cy.get("h1 .maintext").then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("Found the folloing: "+ headerText)
            expect(headerText).is.eq("Makeup")
        })
     });
    
     it.only('Validate properties from contact us form', () => {
         cy.visit("https://automationteststore.com/index.php?rt=content/contact")
         //cypress commadn chaining 
         cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should("contain", "First")
         cy.get("label[class='control-label col-md-4 ']").eq(0).should("contain", "First name:").invoke('text')
         .then((firstName)=>{
            cy.log("Found:"+firstName)
         })
         // jquery command approach
         cy.contains("#ContactUsFrm", "Contact Us Form").then(text =>{
            const contactText = text.find("#field_11").text("First name:")
            expect(contactText).to.contain("First name:")
         })
         // embedded command (Closure)
         cy.get("#field_11").then(FnText=>{
            cy.log(FnText.text())
            cy.log(FnText)
         })
     });
    
});