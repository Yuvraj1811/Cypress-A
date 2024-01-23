/// <reference types="cypress" />

describe('Your Test Suite Description', () => {

    beforeEach(() => {
        // Assuming 'session' is a custom command
        // If not, replace it with 'cy.login' or a similar command
        cy.session(['Admin','admin123'], () => {
            cy.visit(Cypress.env("OrangeUrl"));
            cy.get('input[placeholder="Username"]').clear().type('Admin');
            cy.get('input[name="password"]').clear().type('admin123');
            cy.get('button[type="submit"]').click();
        });
    });

    it('Your First Test Case Description', () => {
        cy.visit(Cypress.env("OrangeUrl"));
        cy.get(".oxd-main-menu-item-wrapper >a").contains('Admin').click()
        cy.get(".oxd-topbar-body-nav > ul >li >span").contains('Job')
        cy.reload()
    });

    it('Your Second Test Case Description', () => {
        cy.visit(Cypress.env("OrangeUrl"));
        cy.get(".oxd-main-menu-item-wrapper >a").contains('Leave').click()
        
    });
});
