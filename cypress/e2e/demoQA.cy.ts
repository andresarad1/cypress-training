import { FillFormPage } from "../pages/fillFormDemoQA";

const fForm = new FillFormPage();

describe("DemoQATests", () => {
    beforeEach(() => {
        fForm.goToFillForm();
    });

    it("Validate student registration", () => {
        fForm.fillOutAForm();
        fForm.validateTitleAfterFillingForm();
    });
  


  });