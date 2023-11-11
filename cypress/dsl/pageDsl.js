export default class PageDsl  {
    constructor() {
        cy.visit("http://localhost:5173/");
    }

    clickTheThingThatHasTheButtonRole() {
        cy.findByRole("button")
            .click();
    }

    clickButton() {
        cy.get("[data-cy='incrementer']")
            .click();
    }

    keyboardButton() {
        cy.get("[data-cy='incrementer']")
            .type("{Enter}")
    }

    validateCount(count = "1") {
        cy.get("[data-cy='count']")
            .should("have.text", count);
    }

    typeIntoInput(value = "value") {
        cy.get("[data-cy='input']")
            .clear()
            .type(value);
    }

    verifyTextContent(method = "bad", value = "value") {
        let input = cy.get("[data-cy='input']")
        if(method === "bad") {
            input.should("have.text", value)
        } else {
           input.should("have.value", value);
        }
    }

    clickLabel() {
        cy.get("[data-cy='label']")
            .click();
    }

    verifyInputIsFocused() {
        cy.get("[data-cy='input']")
            .should("have.focus")
    }

    typeIntoInputWithTheRightRole() {
        cy.findByRole("textbox")
            .type("value");
    }
}