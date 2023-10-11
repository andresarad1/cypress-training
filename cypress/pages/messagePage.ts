import { homePage,sendMessage } from "../support/locators";



export class MessagePage {
    constructor(){
    
    }

    goToContactPage(){
        cy.visit("/");
        cy.get(homePage.navar).contains("Contact").click();
    }

    fillForm(){
      cy.get(sendMessage.email).type("andresarad@hotmail.com",{force: true});
      cy.get(sendMessage.name).type("Andrés Yepes ",{force: true});
      cy.get(sendMessage.message).type("Buenas tardes, les escribo porque estoy muy interesado en el puesto de QA Automation, me gustaría ponerme en contacto con ustedes, y asi puedan conocerme mejor",{force: true});
    }

    verifySendMessage(){
        cy.xpath(sendMessage.sendMessage).contains("Send message").click().then(()=>{
            cy.on('window:alert',(texto) =>{
              expect(texto).to.equal("Thanks for the message!!")
            })
          });
    }
    
}