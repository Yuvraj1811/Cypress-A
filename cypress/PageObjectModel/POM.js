export class deatails {

    firstname_input = '#name'
    email_input = '#email'
    phone_input = '#phone'
    address = '#textarea'
    tex_text = ".form-group >label"
    gender_male = "#male"
    gender_female = "#female"
    day_sunday = "#sunday"
    day_monday = "#monday"
    checkbox_text = 'div[class="form-check form-check-inline"]'
    country_dropdown = "#country"



    verifyThetext() {
        cy.get(this.tex_text).each(($ele, index, list) => {
            const text = $ele.text()
            cy.log(text)
            if (text.includes('Name:')) {
                cy.log('Found Name:')
            }
        })
    }

    enterfirstname() {
        cy.fixture('example').then((data) => {
            globalThis.data = data
            cy.get(this.firstname_input).type(data.name)
        })

    }
    enterEmail(){
        cy.get(this.email_input).type("yuvraj@yahoo.com").should('have.value','yuvraj@yahoo.com')
    }
    enterPhoneno(){
        cy.get(this.phone_input).type('123456789')
    }
    enterAddress(){
        cy.get(this.address).type('London')
    }
    checkGenderMale(){
        cy.get(this.gender_male).check()
    }
    checkGenderFemale(){
        cy.get(this.gender_female).check()
    }
    checkDaySunday(){
        cy.get(this.day_sunday).check()
    }
    checkDayMonday(){
        cy.get(this.day_sunday).uncheck()
        cy.get(this.day_monday).check()
    }
    verifyCheckboxText(){
        cy.get(this.checkbox_text).each(($ele)=>{
            const checktext = $ele.text()
            cy.log(checktext)
        })
    }
    selectDropdown(){
        cy.get(this.country_dropdown).select('Brazil')
    }
}