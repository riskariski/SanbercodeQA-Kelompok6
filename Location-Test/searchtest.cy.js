require('@cypress/xpath');
describe('Verify Search Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Verify Success Search No Records found', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
        cy.wait(500)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
        cy.wait(500)
        cy.get('.oxd-button').click() // klik button login
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("PT. Doni Sukses")
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', 'No Records Found')
        cy.wait(500)
    })
    it('Verify Success Search Found Records', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
        cy.wait(500)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
        cy.wait(500)
        cy.get('.oxd-button').click() // klik button login
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Doni")
        cy.wait(500)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text', '(1) Record Found')
        cy.wait(500)
    })
})