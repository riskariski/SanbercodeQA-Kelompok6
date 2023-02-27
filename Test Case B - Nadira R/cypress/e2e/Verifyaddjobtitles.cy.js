///.<reference.types="cypress"./>
///TypePositive

describe('opensourcedemo', () => {
    it('succesaddjobtitles', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')  //open link website
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')  //input username
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')  //input password
    cy.get('.oxd-button').click() //click button login
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() //click menu admin
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() //click menu job
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click() //click job titles
    cy.get('.oxd-button').click() //click button add
    //jobtitles
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('WebDeveloper')
    //jobspecipication
    cy.get('.oxd-file-input').selectFile(`sara soueidan.jpg`, {force:true})
    //note
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('someonewhoisspecializedinthedevelopmentofwebapplicationsandservices')
    //save
    cy.get('.oxd-button--secondary').click()  //click yes


    })
})
