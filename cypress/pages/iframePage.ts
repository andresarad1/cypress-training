import { iframe } from "../support/w3schoolLocators";

const w3schoolUrl = Cypress.env("w3school")

class IframePage{
    constructor(){
    }

    visit(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit(w3schoolUrl.w3schoolUrl)
        cy.frameLoaded(iframe.iframe)  
    }
      
    getFrameTitle(){
        cy.enter(iframe.iframe).then(getBody => {
            getBody().find(iframe.mainTitle).should('contain', 'HTML Tutorial');
          })
    }
    
    goToCssPageInFrame(){
        cy.enter(iframe.iframe).then(getBody => {
            getBody().find(iframe.cssNavBarItem).click();
            getBody().find(iframe.cssNavBarItem).should('have.attr', 'title').and('include', 'CSS Tutorial');          
          })
    }    
}

export default IframePage;