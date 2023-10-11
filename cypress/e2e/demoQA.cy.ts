import { FillFormPage } from "../pages/fillFormDemoQA";

const fForm = new FillFormPage();

describe("DemoQATests", () => {
    beforeEach(() => {
        fForm.goToFillForm();
    });

    it("Llenar el formulario de registro estudiante", () => {
        fForm.fillOutAForm();
        fForm.validateTitleAfterFillingForm();
    });
  


  });