describe("Logg in feature", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");
      cy.get("#login2").click();
      cy.get("#loginusername").type("andresarad",{force: true});
      cy.get("#loginpassword").type("abc123",{force: true});
      cy.get(".btn-primary").contains("Log in").click();

    });
  
    it("Validate a successful login and username", () => {
      cy.get("#nameofuser").should("include.text", "andresarad")
    });
    
    it("Add product to the cart and validate that the name corresponds to the selected product",() =>{
        
        cy.get("#itemc").contains("Phones").click();
        cy.get(".card-block").contains("Nokia lumia 1520").click();
        cy.get("#tbodyid").should("contain", "Nokia lumia 1520");
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get("#nava").click();
    
        cy.get(".list-group-item").contains("Laptops").click();
        cy.get(".card-title").contains("MacBook air").click();
        cy.get("#tbodyid").should("contain", "MacBook air");
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get("#nava").click();

        cy.get(".list-group-item").contains("Monitors").click();
        cy.get(".card-block").contains("ASUS Full HD").click();
        cy.get("#tbodyid").should("contain", "ASUS Full HD");
        cy.get(".btn-success").contains("Add to cart").click();
        cy.get("#nava").click();
        

    })

    it("Validate the total sum of the selected products' prices", ()=>{      
      cy.get("#cartur").click();      
      cy.wait(2000);      
      let contadorElemento = 0; 
      let suma = 0;
      cy.xpath("//*[@id='tbodyid']/tr").should((elementos) => {
        contadorElemento = elementos.length;
      }).then(()=>{
        for(let i = 1; i <= contadorElemento; i++){
          cy.xpath(`//*[@id="tbodyid"]/tr[${i}]/td[3]`).then((fila)=>{
            const value = parseInt(fila.text())            
            suma+= value;              
          })
        }
      }).then(()=>{
        let sumaString = suma.toString();
        cy.get("#totalp").invoke("text").should("eq", sumaString)
      });       
    });  

    it("Validate that the purchase is successful", () => {
      cy.get("#cartur").click(); 
      cy.xpath('//*[@class="col-lg-1"]//button').click();
      cy.get("#name").type("Rubén Andrés Yepes T", {force: true});
      cy.get("#country").type("Colombia", {force: true});
      cy.get("#city").type("Medellin", {force: true});
      cy.get("#card").type("3778 160662 55555", {force: true});
      cy.get("#month").type("Octubre", {force: true});
      cy.get("#year").type("2023", {force: true});
      cy.xpath('//button[@class="btn btn-primary"]').contains("Purchase").click()
      cy.get(".sweet-alert").should("be.visible")
      // cy.xpath('//div[@class="sa-confirm-button-container"]').contains("OK").click()
      
    })

    it("Send a message through the contact form", () => {
      cy.visit("https://www.demoblaze.com/index.html");
      cy.get(".nav-link").contains("Contact").click();
      cy.get("#recipient-email").type("andresarad@hotmail.com",{force: true});
      cy.get("#recipient-name").type("Andrés Yepes ",{force: true});
      cy.get("#message-text").type("Buenas tardes, les escribo porque estoy muy interesado en el puesto de QA Automation, me gustaría ponerme en contacto con ustedes, y asi puedan conocerme mejor",{force: true});
      cy.xpath('//button[@class="btn btn-primary"]').contains("Send message").click();
      cy.on('window:alert',(texto) =>{
        expect(texto).to.equal("Thanks for the message!!")
      })

    })

  });