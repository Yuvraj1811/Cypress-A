/// <reference types ="Cypress" />

describe("Validate dropdown functionality", ()=>{

    it("Select city from dropdown",()=>{

        cy.visit("https://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("input[id='ctl00_mainContent_ddl_originStation1_CTXT']").click()
        cy.get(".dropdownDiv").find('a[onclick="javascript:$CityDropDown.SetSelectedValue(this);return false;"]').as("City")
        cy.get('@City').each(($ele, $index, $list)=>{
            
            cy.log($ele.text())
            if($ele.text().includes('Hong Kong,Intl Apt, SAR China (HKG)',)){
                cy.wrap($ele).click({force:true})
            }
    })
    cy.get(".dropdownDiv").eq(2).find('a[onclick="javascript:$CityDropDown.SetSelectedValue(this);return false;"]').as("City1")
        cy.get('@City1').each(($ele, $index, $list)=>{
            
            cy.log($ele.text())
            if($ele.text().includes('Goa (GOI)')){
                cy.wrap($ele).click()
            }

    })

    cy.get(".ui-datepicker-calendar").find('td[data-handler="selectDay"]').as("dateselect")
    cy.get('@dateselect').each(($ele, $index, $list)=>{
        cy.log($ele.text())
        if($ele.text().includes('30')){
            cy.wrap($ele).click()
        }
    })
    cy.get('div[class="picker-second"]').eq(0).find('input[name="ctl00$mainContent$view_date2"]').click()
    cy.get("#ui-datepicker-div").find('a[data-handler="next"]').click()
    cy.get(".ui-datepicker-calendar").find('td[data-handler="selectDay"]').as("dateselect")
    cy.get('@dateselect').each(($ele, $index, $list)=>{
        cy.log($ele.text())
        if($ele.text().includes('9')){
            cy.wrap($ele).click({force:true})
        }
    })

    cy.get("#divpaxinfo").eq(0).click()
    cy.get("#hrefIncAdt").eq(0).as('Plusbtn')
    const add5 = "@Plusbtn";
    for(let i = 1; i < 5; i++){
        cy.get(add5).click()
    }

    cy.get("#btnclosepaxoption").eq(0).click()
    cy.get("#ctl00_mainContent_DropDownListCurrency").eq(0).select('USD')
    cy.get('input[type="submit"]').eq(0).click()
    cy.wait(3000)
    cy.get("#ctl00_mainContent_view_date1").eq(0).click()
    cy.get(".ui-datepicker-calendar").find('.ui-state-default').invoke('text').as("dateselect")
    var dateTotal = 0
    cy.get('@dateselect').then($datelink =>{
    var dateTotal2 = 0
    var datetotal3 = $datelink.split('')
    var i;
    for(i=0;i<datetotal3.length;i++){
        cy.log((datetotal3[i]))
        dateTotal2 += Number(datetotal3[i])
    }
    dateTotal += dateTotal2;
    cy.log("Total number: "+ dateTotal)
    })
        
    })


   

})
