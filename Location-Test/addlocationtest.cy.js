require('@cypress/xpath');
describe('Verify Add Location Test', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })
  
  it('Verify Success Add Location', () => {
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
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click() // klik button add
    cy.wait(500)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input').type("Doni Corporation") // input name
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input').type("Pasuruan") // input city
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input').type("Jawa Timur") // input province
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[3]/div/div[2]/input').type("67157") // input postal code
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[4]/div/div[2]/div/div/div[1]').click() // dropdown country
    cy.wait(1000)
    cy.contains('Indonesia').click()
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[5]/div/div[2]/input').type("087654")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[6]/div/div[2]/input').type("1")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[7]/div/div[2]/textarea').type("Jl. Raya Pasuruan, 001/007, Pasuruan")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[8]/div/div[2]/textarea').type("Karyawan Baru")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click() // klik button save
    cy.wait(1000)
    cy.get('.oxd-text--toast-message').should('have.text', 'Successfully Saved')
    cy.wait(3000)
  })
  it('Verify Failed Add Location With Same Data', () => {
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
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click() // klik button add
    cy.wait(500)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input').type("Doni Corporation") // input name
    cy.wait(500)
    cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Already exists')
    cy.wait(500)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input').type("Pasuruan") // input city
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input').type("Jawa Timur") // input province
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[3]/div/div[2]/input').type("67157") // input postal code
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[4]/div/div[2]/div/div/div[1]').click() // dropdown country
    cy.wait(1000)
    cy.contains('Indonesia').click()
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[5]/div/div[2]/input').type("087654")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[6]/div/div[2]/input').type("1")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[7]/div/div[2]/textarea').type("Jl. Raya Pasuruan, 001/007, Pasuruan")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[8]/div/div[2]/textarea').type("Karyawan Baru")
    cy.wait(1000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click() // klik button save
    cy.wait(1000)
  })

  it('Verify Failed Add Location With Blank Field', () => {
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
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click() // klik button add
    cy.wait(500)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click() // klik button save
    cy.wait(500)
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    cy.wait(500)
})
})
