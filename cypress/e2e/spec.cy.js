import PageDsl from "../dsl/pageDsl.js";

describe('a11y examples', () => {
  let pageObject;

  beforeEach(() => {
    pageObject = new PageDsl();
  })

  it("the count starts off at zero", () => {
    pageObject.validateCount("0");
  })

  it('can click the button in order to increment the count', () => {
    pageObject.clickButton();

    pageObject.validateCount("1");
  })

  it("can click the button twice to see the count go up twice", () => {
    pageObject.clickButton();
    pageObject.clickButton();

    pageObject.validateCount("2");
  })

  it("can click the button with the keyboard", () => {
    pageObject.keyboardButton();

    pageObject.validateCount("1")
  });

  it("can type into the input field", () => {
    pageObject.typeIntoInput();

    pageObject.verifyTextContent();
  })

  it("clicking into the label should focus the input", () => {
    pageObject.clickLabel();

    pageObject.verifyInputIsFocused();
  })
})