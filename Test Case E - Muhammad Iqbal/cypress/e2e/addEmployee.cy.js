
import Auth from '../support/Pages/Auth';
import Crud from '../support/Pages/CRUD';

const data = require('../fixtures/data.json');
const auth = new Auth()
const crud = new Crud()

describe('Add Employee', () => {
  let waiting_time = 100   // Time out
  let entri = "" // Entri data

  it('TC-E01 : Sukses Tambah Data "Employee | Default', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[0]     // Commands Add Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)     // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E02 : Sukses Tambah Data "Employee | Foto', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[1]     // Commands Add Data
    crud.create_with_images(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)     // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E03 : Sukses Tambah Data "Employee | Default +  "Create Login Details"', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[2]     // Commands Add Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)     // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E04 : Sukses Tambah Data "Employee" | Foto + "Create Login Details"', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)  // Login
    cy.GoToAddEmployee() // Navigate to Add Employee
    entri = data.data_users[3] // Add Data
    crud.create_with_images_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images, entri.username, entri.password)
    cy.getClick('.oxd-button--secondary') // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)     // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E05 : Sukses Tambah Data "Employee" | Status Disable', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[4]     // Commands Add Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)   // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E06 : Sukses Tambah Data "Employee"  | Status Disable + Foto', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[5]     // Commands Add Data
    crud.create_with_images_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-text--toast-title').should('be.visible').wait(waiting_time)   // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E07 : Gagal Tambah Data "Employee" | Invalid First Name', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[6]     // Commands Add Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E08 : Gagal Tambah Data "Employee" | Invalid Last Name', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[7]     // Commands Add Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(1000) // Jeda
  })

  it('TC-E09 : Gagal Tambah Data "Employee"  | Duplicate ID', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[8]     // Commands Add Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(1000) // Jeda
  })
})
