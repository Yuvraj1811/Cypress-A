/// <reference types = 'cypress' />

describe('Find broken link',()=>{

    it('Broken link',()=>{

        cy.visit('https://automationteststore.com/')
        let brokenlink = 0
        let activelink = 0
        cy.get('a').each(($link, index)=>{
            const href = $link.prop('href')

            if(href){
            
                cy.request({
                    method:'HEAD',
                    url: href,
                    failOnStatusCode: false,
                }).then((response)=>{
                    if(response.status >= 400){
                        cy.log(`broken link found:${index +1}: ${href}`)
                        brokenlink++
                    }
                    else{
                        cy.log(`Active link:${index +1}: ${href}`)
                        activelink++
                    }
                })
            }
        })
    })
})
