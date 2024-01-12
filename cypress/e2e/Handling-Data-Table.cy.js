/// <reference types = "Cypress"/>

describe('Handling Data', () => {

    beforeEach(()=>{

        cy.visit("/")
        cy.get('#data-table').scrollIntoView().invoke('removeAttr','target').click()
    })
    
    it('Calculate and assert the total age of all user',()=>{
        var userDetail = []
        let numb = 0
        cy.get('#thumbnail-1 td').each(($ele, index, $list)=>{
            userDetail[index] = $ele.text();
            
            
        })
        .then(()=>{
            var i
            for(i = 0; i < userDetail.length; i++){
           // cy.log(userDetail[i])
        if(Number(userDetail[i])){
        numb += Number(userDetail[i])
        }
    
            }
            cy.log("Found" + numb)
            cy.
        })
        
        
    })
    it.only('Caculate and assert the age of a given user based on last name',()=>{
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($ele, index, $list)=>{
          const text = $ele.text()
          if(text.includes('Wood')){
            cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age){
                const userAge = age.text()
                cy.log(userAge)
                expect(userAge).to.equal('80')
            })
          }
        })
    })
});
