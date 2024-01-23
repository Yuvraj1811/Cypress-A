/// <reference types = 'cypress' />


describe('Test Suite', ()=>{

    it('',()=>{

        cy.visit("https://www.google.com/")
        cy.get("div[class='DPXIy']").type('amazon,{enter}')
        cy.wait(5000)
        cy.get('h3[class="LC20lb MBeuO DKV0Md"]').contains('Amazon.in').click()
        cy.wait(10000)
        cy.origin('https://www.amazon.in/',()=>{
            
            cy.get("a[class='nav-a  ']").should('be.visible').and()
        })
      
        

            
        })

        })
        
        


