import { iframe } from "../support/w3schoolLocators";

const w3schoolUrl = Cypress.env("w3schoolUrl")
const htmlUrl = "html/html_iframe.asp"

class IframePage{
    constructor(){
    }

    visit(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit(w3schoolUrl + htmlUrl)
        cy.frameLoaded(iframe.iframe)  
    }
      
    getFrameTitle(){
        cy.iframe(iframe.iframe).find(iframe.mainTitle).should("contain", "HTML Tutorial")
    }
    
    goToCssPageInFrame(){
        cy.iframe(iframe.iframe).find(iframe.topNavbar).click()
        cy.iframe(iframe.iframe).find(iframe.mainTitle).should("contain", "CSS Tutorial")

        // cy.enter(iframe.iframe).then(getBody => {
        //     getBody().find(iframe.mainTitle).should('exist')
        //     getBody().find(iframe.mainTitle).should("contain", "CSS Tutorial")
        //   })
            // cy.iframe(iframe.iframe).find(iframe.mainTitle).should("exist")

            // cy.iframe(iframe.iframe).find(iframe.mainTitle).invoke("text").then((text) => {
            //     expect(text).to.include("CSS Tutorial");
            //   });
        
    }

    
}

export default IframePage;