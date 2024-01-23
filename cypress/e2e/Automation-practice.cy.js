/// <reference types = 'cypress' />


import { deatails } from "../PageObjectModel/POM"

const dt = new deatails

describe('Test All Functionality', () => {
    beforeEach(() => {

        cy.visit(Cypress.env('AutomationURL'))
    })
    it('Fill the form', () => {

        dt.verifyThetext()
        dt.enterfirstname()
        dt.enterEmail()
        dt.enterPhoneno()
        dt.enterAddress()


    })
    it('Select the radio button', () => {

        dt.checkGenderMale()
        dt.checkGenderFemale()
        dt.checkDaySunday()
        dt.checkDayMonday()


    })
    it('Verify text of checkbox', () => {
        dt.verifyCheckboxText()

    })
    it.only('Select Dropdown',()=>{
    
        dt.selectDropdown()
    })
})
