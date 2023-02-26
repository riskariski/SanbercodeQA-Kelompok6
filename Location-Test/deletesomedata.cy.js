require('@cypress/xpath');
describe('Verify Delete some data Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Verify Success Delete Some Data', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
        cy.wait(1000)
        cy.get('.oxd-button').click() // klik button login
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
        cy.wait(500)
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
        cy.wait(500)
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
        cy.wait(500)
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.wait(500)
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
        cy.wait(500)
        cy.get('.oxd-text--toast-message').should('have.text', 'Successfully Deleted')
        cy.wait(500)
    })
})
