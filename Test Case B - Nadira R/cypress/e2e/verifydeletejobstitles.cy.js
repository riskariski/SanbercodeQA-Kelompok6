///.<reference.types="cypress"./>
///typePositive

describe('opensourcedemo', () => {
    it('succesdeletejobtitles', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-sidepanel-body')
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() //click menu job
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click() //click job titles
    cy.get('.orangehrm-horizontal-padding > .oxd-text').click({force:true})
    cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force:true})
    cy.get('.oxd-button--label-danger').click() //click button yes

    })
})