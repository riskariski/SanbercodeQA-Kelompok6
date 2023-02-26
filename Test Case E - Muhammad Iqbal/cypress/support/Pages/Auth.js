let waiting_time = 100
let timeout_time = 10000

class Auth{
    login(url_site, username, password){
        //Visit the site
        cy.visit(url_site, { timeout: timeout_time }).wait(waiting_time)
        //Login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: timeout_time }).type(username).wait(waiting_time)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: timeout_time }).type(password).wait(waiting_time)
        cy.get('.oxd-button').click().wait(waiting_time)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').wait(waiting_time)

    }
}

export default Auth

