import UploadFilePage from "../pages/uploadFilePage";
import DownloadFilePage from "../pages/downloadPage";

const uploadFilePage = new UploadFilePage();
const downloadFilePage = new DownloadFilePage()

const fileUploaderBaseUrl = Cypress.env("Upload")

describe("File Uploader", () => {

    beforeEach(() => {
        cy.visit(fileUploaderBaseUrl.uploadUrl)
    })

    it("Validate File Is Uploaded Succesfully", () => {
        uploadFilePage.validateFileIsUploadedSuccesfully();
    })

})
describe("Download File", () => {

    beforeEach(() => {
        
    })

    it("Validate file is downloaded succesfully",()=>{
        downloadFilePage.verifyDowload();
    })

    it("Validate downloaded file exists on downloads folder", () => {
        downloadFilePage.validateDownloadedFileExistsOnFolder();
      });

})




