describe('', () => {

    it('', () => {
        cy.visit("https://support.google.com/mail/answer/56256?hl=en")
        cy.get("a.action-button.btn.btn-raised:contains('Create an account')").should('be.visible').invoke('removeAttr', 'target').click()


    });
    it.only('',() => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().then((url) => {
            const urlObject = new URL(url)
            const host = urlObject.host;
            const path = urlObject.pathname;
            const href = urlObject.href;
            const port = urlObject.portname;
            const hash = urlObject.hashname;

            cy.log('Host:', host)
            cy.log('Path', path)
            cy.log('Hash:', hash)
            cy.log('href', href)
            cy.log('port:', port)
        })
    })
})