describe('',()=>{

    it('', () => {
        cy.visit("https://support.google.com/mail/answer/56256?hl=en")
        cy.get("a.action-button.btn.btn-raised:contains('Create an account')").should('be.visible').invoke('removeAttr','target').click()
        /// java students are idiot dont no how to make branch in git
    
    });
})