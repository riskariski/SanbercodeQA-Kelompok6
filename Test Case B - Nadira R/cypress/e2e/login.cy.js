///.<reference.types="cypress"./>
///typePositive


describe('opensourcedemo', () => {
  it('succeslogin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.wait(1000)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.wait(1000)
    cy.get ('.oxd-button').click();
    })
})