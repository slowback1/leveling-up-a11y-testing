export default class PageDsl  {
    constructor() {
        cy.visit("http://localhost:5173/");
    }

    clickButton() {
        cy.get("[data-cy='incrementer']")
            .click();
    }

    validateCount(count = "1") {
        cy.get("[data-cy='count']")
            .should("have.text", count);
    }
}