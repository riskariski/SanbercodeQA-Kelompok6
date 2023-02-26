require('@cypress/xpath');
describe('Verify Update Location Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Verify Success Edit Location', () => {
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
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
        cy.wait(500)
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0887763')
        cy.wait(500)
        cy.get('.oxd-button--secondary').click()
        cy.wait(500)
        cy.get('.oxd-text--toast-message').should('have.text', 'Successfully Updated')
        cy.wait(500)
    })
})
