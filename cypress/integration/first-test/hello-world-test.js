/// <reference types="cypress" />

describe("primjer 1", () => {
  it("Home and translation, and page load", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Hrvatski").should("exist");
    cy.contains("Hrvatski").click();
    cy.contains("NASLOVNA");
  });

  it("MAPA testing", () => {
    cy.contains("MAPA").click();
    cy.contains("English").click();
    cy.contains("EnoGastro").click();
  });
  it("nemanja prva proba", () => {});
  it("nemanja prva proba", () => {});
  it("nemanja prva proba", () => {});
  it("nemanja prva proba", () => {});
});
