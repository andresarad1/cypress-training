
import { LoginPage,ProductPage,CartPage,MessagePage } from "../pages";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const shoppingCartPage = new CartPage();
const messagePage = new MessagePage();

describe("Demoblaze Tests", () => {

    beforeEach(() => {
      loginPage.toLogIn()
    });
  
    it("Validate a successful login and username", () => {
      loginPage.verifyLogin()
    });
    
    it("Add product to the cart and validate that the name corresponds to the selected product",() =>{
        productPage.addProduct("Phones","Nokia lumia 1520");
        productPage.addProduct("Laptops","MacBook air");
        productPage.addProduct("Monitors","ASUS Full HD");       
    })

    it("Validate the total sum of the selected products' prices", ()=>{      
      shoppingCartPage.verifyCartPage();
      shoppingCartPage.verifySumProducts();     
    });  

    it("Validate that the purchase is successful", () => {
      shoppingCartPage.createPurchaseOrder();
    })

    it("Send a message through the contact form", () => {    
     messagePage.goToContactPage();
     messagePage.fillForm();
     messagePage.verifySendMessage(); 
    })

  });