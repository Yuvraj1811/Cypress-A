/// <reference types = "Cypress" />

describe("Iterate over element",()=>{

    it("Login information of all hair care products",()=>{
       cy.visit("https://automationteststore.com/")
        cy.get(".subnav").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($ele, $index, $list)=>{

            cy.log("Index: "+$index+" : "+$ele.text())
        })

    })

    it.only("Add specific product to basket",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get(".subnav").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($ele, $index, $list)=>{
            if($ele.text().includes("Curls to straight Shampoo")){
                cy.wrap($ele).click()

            }
        })
    })
})

