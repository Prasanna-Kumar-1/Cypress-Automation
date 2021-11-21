/// <reference types = "cypress" />
import { recurse } from "cypress-recurse";

// Cypress-recurse : way to re-run Cypress commands until a predicate function returns true
describe("Cypress recurse demo", () => {
  it("Demonstrating Cypress Recurse", () => {
    cy.visit("https://www.saucedemo.com/");
    const userName = "standard_user";
    const password = "secret_sauce";
    recurse(
      () => cy.get("#user-name").clear().type(userName),
      ($input) => $input.val() === userName,
      {
        delay: 1000,
        timeout: 5000,
      }
    );
    cy.get("#user-name").clear().type(password);
    cy.get("#login-button").click();
  });
});
