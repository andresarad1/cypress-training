import { loginPage } from "../support/locators";

const user = Cypress.env("User")

export class LoginPage {
    constructor(){    
    }

    toLogIn(){
        cy.visit("/");
        cy.get(loginPage.logIn).click();
        cy.get(loginPage.loginUser).type(user.userName,{force: true});
        cy.get(loginPage.loginPassword).type(user.password,{force: true});
        cy.get(loginPage.loginRegister).contains("Log in").click();
    }

    verifyLogin(){
        cy.get(loginPage.registerUser).should("include.text", user.userName)
    }

    
}

