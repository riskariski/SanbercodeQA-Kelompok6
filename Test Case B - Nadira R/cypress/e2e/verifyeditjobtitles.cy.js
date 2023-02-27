///.<reference.types="cypress"./>
///typePositive

describe('opensourcedemo', () => {
    it('succeseditjobtitles', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() //clic menu job
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click() //click job titles
    cy.get(':nth-child(18) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) //click icon pensil
    cy.get(':nth-child(2) > .oxd-input').clear().type('uxwriter')  // edit jobtitles- description
    cy.get('.oxd-button--secondary').click() // click save

    })
})