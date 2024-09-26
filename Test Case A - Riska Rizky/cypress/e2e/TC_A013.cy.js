/// <reference types="cypress" />

describe("Logout", () => {
  it("Success Logout", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.url().should("include", "orangehrm");
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".orangehrm-login-logo > img").should("be.visible");
    cy.get(".oxd-text--h5").should("contain.text", "Login");

    cy.get(
      ":nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label",
      { timeout: 4000 }
    ).should("contain.text", "Username");
    cy.get(
      ":nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label",
      { timeout: 4000 }
    ).should("contain.text", "Password");

    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input", {
      timeout: 2000,
    }).type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input", {
      timeout: 2000,
    }).type("admin123");
    cy.get(".oxd-button", { timeout: 2000 }).click();

    cy.contains("Dashboard");
    cy.get(".oxd-brand-banner > img").should("be.visible");
    cy.get(
      ":nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    ).should("contain.text", "Time at Work");
    cy.get(
      ":nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    ).should("contain.text", "My Actions");

    cy.get(".oxd-userdropdown-tab", { timeout: 2000 }).click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link", { timeout: 2000 }).click();

    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".orangehrm-login-logo > img").should("be.visible");
  });
});
