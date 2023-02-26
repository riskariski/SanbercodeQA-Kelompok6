require('@cypress/xpath');
describe('Verify Button', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })
  it('Verify Success Button Cancel in Add Form Location', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
    cy.wait(500)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
    cy.wait(500)
    cy.get('.oxd-button').click() // klik button login
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click() // klik button add
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[1]').click()// klik button cancel
})

  it('Verify Success Button Cancel in Add Form Edit', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
    cy.wait(500)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
    cy.wait(500)
    cy.get('.oxd-button').click() // klik button login
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[7]/div/button[2]/i').click() // klik edit
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[1]').click()// klik button cancel
  })
  it('Verify Success Button Delete Without Selecting Data', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // input username
    cy.wait(500)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") // input password
    cy.wait(500)
    cy.get('.oxd-button').click() // klik button login
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // klik menu admin
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/span').click() // klik tab bar organization
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a').click() // klik location
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[7]/div/button[1]/i').click() // klik delete
    cy.xpath('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]').click() // Klik Yes Delete button on pop up
    cy.get('.oxd-text--toast-message').should('have.text', 'Successfully Deleted')
    cy.wait(500)
  })
  
})