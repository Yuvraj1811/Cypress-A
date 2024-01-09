///<reference types = "Cypress"/>

describe("Handel iframe",()=>{

    it('Handel iframe',()=>{

        cy.visit("https://www.hyrtutorials.com/p/frames-practice.html")
        cy.get("#frm1").then($iframe=>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iFrame')
        })
        cy.get('@iFrame').find(".top-bar-menu").find(".selectnav").select('Home')
        
    })
    it.only('Handel iframe2',()=>{

        cy.visit("https://www.hyrtutorials.com/p/frames-practice.html")
        cy.get("#frm2").then($iframe=>{
            const body2 = $iframe.contents().find('body')
            cy.wrap(body2).as('iFrame2')
        })
        cy.get('@iFrame2').find('.basicControls').as('Text')
        cy.get('@Text').should((expectedText)=>{
            const Textverify = expectedText.text()
            expect(Textverify).to.include('This page can be used for practicing the above controls using selenium')

        })
        cy.get('@iFrame2').find("#firstName").type("Yuvraj")
    })
})