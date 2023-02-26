
import Auth from '../support/Pages/Auth';
import Crud from '../support/Pages/CRUD';

const data = require('../fixtures/data.json');
const auth = new Auth()
const crud = new Crud()

describe('Add Employee', () => {
  let waiting_time = 100   // Time outs
  let entri = "" // Entri data

  it('TC-E01 : Sukses Tambah Data "Employee | Default', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[0]     // Inisialisasi Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E02 : Sukses Tambah Data "Employee | Foto', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[1]     // Inisialisasi Data
    crud.create_with_images(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E03 : Sukses Tambah Data "Employee | Default +  "Create Login Details"', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[2]     // Inisialisasi Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E04 : Sukses Tambah Data "Employee" | Foto + "Create Login Details"', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)  // Login
    cy.GoToAddEmployee() // Navigate to Add Employee
    entri = data.data_users[3] // Add Data
    crud.create_with_images_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images, entri.username, entri.password)
    cy.getClick('.oxd-button--secondary') // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E05 : Sukses Tambah Data "Employee" | Status Disable', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[4]     // Inisialisasi Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E06 : Sukses Tambah Data "Employee"  | Status Disable + Foto', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[5]     // Inisialisasi Data
    crud.create_with_images_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.getValidate('.oxd-text--toast-title', 'be.visible') //Validate
    cy.getValidate('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'be.visible')
    cy.wait(3000) // Jeda
  })

  it('TC-E07 : Gagal Tambah Data "Employee" | Invalid First Name', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[6]     // Inisialisasi Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(3000) // Jeda
  })

  it('TC-E08 : Gagal Tambah Data "Employee" | Invalid Last Name', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[7]     // Inisialisasi Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(3000) // Jeda
  })

  it('TC-E09 : Gagal Tambah Data "Employee"  | Duplicate ID', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[8]     // Inisialisasi Data
    crud.create(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)  // Validates
    cy.wait(3000) // Jeda
  })

  it('TC-E10 : Gagal Tambah Data "Employee"  | Invalid Image Type', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[9]     // Inisialisasi Data
    crud.create_with_images(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.images)
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)     // Validates
    cy.wait(3000) // Jeda
  })
 
  it('TC-E11 : Gagal Tambah Data "Employee"  | Invalid Username', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[10]     // Inisialisasi Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)   // Validates
    cy.wait(3000) // Jeda
  })

  it('TC-E12 : Gagal Tambah Data "Employee"  | Invalid Password', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[11]     // Inisialisasi Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)   // Validates
    cy.wait(3000) // Jeda
  })

  it.only('TC-E13 : Gagal Tambah Data "Employee"  | Invalid Confirm Password', () => {
    auth.login(data.url, data.data_login.username, data.data_login.password)     // Login
    cy.GoToAddEmployee()     // Navigate to Add Employee
    entri = data.data_users[12]     // Inisialisasi Data
    crud.create_with_detailed(entri.First_Name, entri.Middle_Name, entri.Last_Name, entri.Employee_Id, entri.username, entri.password)
    cy.getClick(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')  // Disable Status
    cy.getTyped('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', "@Password123456") // Invalid Password
    cy.getClick('.oxd-button--secondary')     // Save Data
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').wait(waiting_time)   // Validates
    cy.wait(3000) // Jeda
  })
})
