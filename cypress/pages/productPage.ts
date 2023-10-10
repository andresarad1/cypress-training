import { homePage,cartPage } from "../support/locators";

export class ProductPage {
    constructor(){
        
    }

    addProduct(category : string, specification: string){
        cy.get(homePage.categories).contains(category).click();
        cy.get(homePage.itemChoice).contains(specification).click();
        cy.get(cartPage.titleItem).should("contain", specification);
        cy.get(cartPage.btnAdd).contains("Add to cart").click();
        cy.get(homePage.btnMainPage).click();
    }
     
}