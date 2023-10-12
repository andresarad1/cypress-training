
import { fillForm } from "../support/demoQaLocators";

const fForm = Cypress.env("fillFormDemoQA");

export class FillFormPage {
    constructor(){  
        
    }

    goToFillForm(){
        cy.visit(fForm.demoUrl+ "automation-practice-form");
     
    }
    
    fillOutAForm(){
        const birth = fForm.dateOfBirth.split(' ');
        const month = birth[1];
        const year = birth[2];
        const day = birth[0];

        cy.get(fillForm.fName).type(fForm.name,{force:true});
        cy.get(fillForm.lName).type(fForm.lastName,{force:true});
        cy.get(fillForm.email).type(fForm.email,{force:true});
        cy.get(fillForm.mobile).type(fForm.mobileNumber,{force:true});
        cy.get(fillForm.birth).click();
        cy.get(fillForm.month).select(month);
        cy.get(fillForm.year).select(year);        
        cy.get(fillForm.day).contains(day).click();
        cy.get(fillForm.gender).contains(fForm.gender).prev('input[type="radio"]').check({ force: true });
        fForm.hobbies.forEach((hobby: string) => {
            cy.get(fillForm.hobbies).contains(hobby).prev('input[type="checkbox"]').check({ force: true });
        });
        cy.get(fillForm.address).type(fForm.currentAddress, {force: true});
        cy.get(fillForm.submitButton).click({ force: true });      

    } 
    validateTitleAfterFillingForm(){
        cy.get(fillForm.formSentModalTitle).should('contain', "Thanks for submitting the form");
      }
}