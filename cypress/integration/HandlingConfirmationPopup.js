/// <reference types = "cypress" />

describe("Handling Confirmation Popup", () => {
  it("Handling Confirmation Popup Test", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://chercher.tech/practice/popups");
    cy.get('[name="confirmation"]').click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am confirm");
    });
  });
});
