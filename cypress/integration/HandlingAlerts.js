/// <reference types="cypress" />

// (1) Cypress handles Alerts autmatically
// (2) When the alert occurs window:alert is the browser event that is triggered by default for the alert event.
//     Cypress automatically handles the event by clicking the OK button.
describe("Handling Alerts in Cypress", () => {
  it("Handling Alerts Test", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents cypress from failing test
      return false;
    });
    cy.visit("https://chercher.tech/practice/popups");
    cy.get("[name='alert']").click();
  });

  // Manually trigger events to understand pop up Alerts

  it("Handling Alerts : Manually Triggering Test", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents cypress from failing test
      return false;
    });
    cy.visit("https://chercher.tech/practice/popups");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am alert");
    });
    cy.get("[name='alert']").click();
  });
});
