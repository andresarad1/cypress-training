import { downloaderLocators} from "../support/demoQaLocators";

const fForm = Cypress.env("fillFormDemoQA");
const path = require("path");

class DownloadFilePage{
    constructor() {
    }

    verifyDowload(){
        cy.visit(fForm.demoUrl +"upload-download")
        cy.get(downloaderLocators.download).contains("Download").click();
    }
    
    validateDownloadedFileExistsOnFolder() {
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, "sampleFile.jpeg")).should("exist");
      }

}

export default DownloadFilePage;