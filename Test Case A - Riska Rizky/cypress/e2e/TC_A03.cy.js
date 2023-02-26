/// <reference types="cypress" />

describe("Failed Login", () => {
  it("Valid Username Valid Password (Uppercase) ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/ ");
    cy.url().should("include", "orangehrm");
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".orangehrm-login-logo > img").should("be.visible");
    cy.get(".oxd-text--h5").should("contain.text", "Login");
    cy.get(".orangehrm-login-forgot > .oxd-text").should(
      "contain.text",
      "Forgot your password?"
    );
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
    }).type("ADMIN123");
    cy.get(".oxd-button", { timeout: 2000 }).click();

    cy.get(".oxd-alert-content").should("be.visible");
    cy.get(".oxd-alert-content > .oxd-text").should(
      "contain.text",
      "Invalid credentials"
    );
  });
});
