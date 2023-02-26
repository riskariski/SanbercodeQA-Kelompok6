let waiting_time = 500

class Crud {
    create(First_Name, Middle_Name, Last_Name, Employee_Id) {
        cy.getTyped('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', First_Name)
        cy.getTyped(':nth-child(2) > :nth-child(2) > .oxd-input', Middle_Name)
        cy.getTyped(':nth-child(3) > :nth-child(2) > .oxd-input', Last_Name)
        cy.getTyped('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', Employee_Id)
    }

    create_with_images(First_Name, Middle_Name, Last_Name, Employee_Id, Images) {
        cy.getTyped('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', First_Name)
        cy.getTyped(':nth-child(2) > :nth-child(2) > .oxd-input', Middle_Name)
        cy.getTyped(':nth-child(3) > :nth-child(2) > .oxd-input', Last_Name)
        cy.getTyped('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', Employee_Id)
        cy.get('.oxd-file-input').selectFile(`cypress/images/${Images}`, { force: true })
    }

    create_with_detailed(First_Name, Middle_Name, Last_Name, Employee_Id, username, password) {
        cy.getTyped('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', First_Name)
        cy.getTyped(':nth-child(2) > :nth-child(2) > .oxd-input', Middle_Name)
        cy.getTyped(':nth-child(3) > :nth-child(2) > .oxd-input', Last_Name)
        cy.getTyped('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', Employee_Id)

        // Login Details
        cy.getClick('.oxd-switch-input')
        cy.getTyped(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input', username)
        cy.getTyped('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input', password)
        cy.getTyped('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', password)

    }

    create_with_images_detailed(First_Name, Middle_Name, Last_Name, Employee_Id, Images, username, password) {
        cy.getTyped('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', First_Name)
        cy.getTyped(':nth-child(2) > :nth-child(2) > .oxd-input', Middle_Name)
        cy.getTyped(':nth-child(3) > :nth-child(2) > .oxd-input', Last_Name)
        cy.getTyped('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input', Employee_Id)
        cy.get('.oxd-file-input').selectFile(`cypress/images/${Images}`, { force: true })

        // Login Details
        cy.getClick('.oxd-switch-input')
        cy.getTyped(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input', username)
        cy.getTyped('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input', password)
        cy.getTyped('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', password)
    }
}

export default Crud