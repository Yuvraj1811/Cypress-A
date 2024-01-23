/// <reference types = 'cypress' />

describe('Handel Tabel data', () => {

    beforeEach(() => {

        cy.visit("https://testautomationpractice.blogspot.com/")
    })
    it('Handel Tabel Data', () => {
        var tabelData = []
        let numb = 0
        cy.get('table[name="BookTable"] td').as('Tabel')
        cy.get('@Tabel').each(($ele, index) => {

            const textData = $ele.text()
            cy.log(textData)
            tabelData[index] = textData
        }).then(() => {
            var i
            for (i = 0; i < tabelData.length; i++) {
                if (Number(tabelData[i])) {
                    numb += Number(tabelData[i])
                }
            }
            cy.log("Total: " + numb)
        })
    })
    it('Handel 2 Tabel Data', () => {
        cy.get('table[name="BookTable"] tr td:nth-child(2)').each(($ele,index)=>{
            const text = $ele.text()
            if(text.includes('Animesh')){
                cy.get('table[name="BookTable"] tr td:nth-child(2)').eq(index).next().next().then(function(Price){
                    const userPrice = Price.text()
                    cy.log(userPrice)

                })
            }
        })

    })
})