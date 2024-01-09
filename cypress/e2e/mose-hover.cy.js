/// <reference types = "Cypress"/>

describe('Mouse-Hover', () => {
    it('Scroll Element into view', () => {

        cy.visit("/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click()
        
    });
    it('Drag and Drop', ()=>{
        cy.visit("/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get("#draggable").trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})

    })
    it('Double Click', () => {
        cy.visit("/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click()
        cy.wait(4000)
        cy.get("#double-click").trigger('dblclick')
        
    });
    it('I should able to hold down the left mouse click button on a given element',()=>{
        cy.visit("/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get("#click-box").trigger('mousedown',{which: 1}).then(($ele)=>{
            expect($ele).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })
});