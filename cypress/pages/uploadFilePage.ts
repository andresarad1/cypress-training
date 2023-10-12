import { fileUploaderLocators } from "../support/fileUploaderLocators";

class UploadFilePage{
    constructor() {
    }

    validateFileIsUploadedSuccesfully(){        
        cy.get(fileUploaderLocators.chooseFileButton).attachFile("dataContact.json");
        cy.get(fileUploaderLocators.uploadButton).click()
        cy.get(fileUploaderLocators.uploadedFileContainer).invoke('text').then((text) => {
            cy.log(text)
        })
    }
}

export default UploadFilePage;