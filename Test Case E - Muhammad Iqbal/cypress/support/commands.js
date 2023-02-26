let waiting_time = 500
let timeout_time = 10000

Cypress.Commands.add('GoToAddEmployee', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item', { timeout: timeout_time }).click().wait(waiting_time)
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item', { timeout: timeout_time }).click().wait(waiting_time)
})

Cypress.Commands.add('getClick', (el) => {
    cy.get(el, { timeout: timeout_time }).click().wait(waiting_time)
})

Cypress.Commands.add('getTyped', (el, data) => {
    cy.get(el, { timeout: timeout_time }).clear().type(`{backspace}` + data).wait(waiting_time)
})

Cypress.Commands.add('getValidate', (el, assert) => {
    cy.get(el, { timeout: timeout_time }).should(assert).wait(waiting_time)
})
