describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the app title", () => {
    cy.get("h1").should("contain", "Todo App - Arquitetura Hexagonal");
  });
});
