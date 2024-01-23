/// <reference types = "Cypress"/>

describe('Handel', () => {
    beforeEach(() => {
        cy.visit("https://testautomationpractice.blogspot.com/")
    })
    it.skip('handel 2', () => {
        var TextAREA = []
        let numb = 0

        cy.get(".table-container tr >td").each(($ele, index) => {
            const textDollar = $ele.text()
            if (textDollar.startsWith('$')) {
                cy.log(textDollar)
            }
            const pricematch = textDollar.match(/\$([\d.]+)/)
            if (pricematch) {
                const price = parseFloat(pricematch[1])
                cy.log(price)
                TextAREA[index] = price
            }

        }).then(() => {
            var i
            for (i = 0; i < TextAREA.length; i++) {
                if (Number(TextAREA[i])) {
                    numb += Number(TextAREA[i])
                }
            }
            cy.log(numb)
        })

    })
    it("Handel Alert", function () {

        cy.get('button[onclick="myFunctionAlert()"]').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am an alert box!')
        })
    })
    it('Confirm box', () => {
        cy.get('button[onclick="myFunctionConfirm()"]').click()
        cy.on('window:confirm', (message) => {
            cy.log(`conform message: ${message}`)
        })
    })
    it.only('prompt', () => {

        cy.get('button[onclick="myFunctionPrompt()"]').click()
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Harry Potter')
            cy.contains('Please enter your name:').click()
        })



    })
})