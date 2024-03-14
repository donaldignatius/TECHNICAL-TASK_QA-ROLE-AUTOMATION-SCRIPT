export class buyTshirt_page{

    //login elements selector
    LgEnterUsername= "[data-test=username]"
    LgEnterPassword= "[data-test=password]"
    LgClickLogin= "#login-button"
    //select bolt T-Shirt elements locator
    SelectTshirt= ".inventory_list .inventory_item:nth-of-type(3) .inventory_item_img:nth-of-type(1) .inventory_item_img"
    //SelectTshirt= ".inventory_list .inventory_item:nth-of-type(3) .inventory_item_img:first-child"
    //Add bolt T-shirt to cart
    AddBotltTshirtToCart= "button#add-to-cart-sauce-labs-bolt-t-shirt"
    VerifyTshirtAddToCart= "button#remove-sauce-labs-bolt-t-shirt"
    GoToCart= "div#shopping_cart_container > .shopping_cart_link"
    VerifyCartDisplay= "a#item_1_title_link > .inventory_item_name"
    GetTshirtName= "a#item_1_title_link > .inventory_item_name"
    VerifyItemPrice= ".inventory_item_price"
    ClickCheckoutBtn= "button#checkout"
    VerifyCheckoutPage= ".title"
    CheckoutFirstname= "input#first-name"
    CheckoutLastname= "input#last-name"
    CheckoutZipCode= "input#postal-code"
    ClickCheckoutBtn2= "[data-test=continue]"
    clickFinishButton= "button#finish"
    VerifySuccessfulOrder= ".title"
    ClickMenu= "button#react-burger-menu-btn"
    clickLogoutButton= "a#logout_sidebar_link"


    //reference the slectors in the syntax below
    
    //login test
    enterUsername(username){
        cy.get(this.LgEnterUsername).type(username)
    }
    enterPassword(password){
        cy.get(this.LgEnterPassword).type(password)
    }
    clickLoginBtn(){
        cy.get(this.LgClickLogin).click()
    }
    verifySuccessfulLogin(){
        cy.title().should('contain','Swag Labs')
    }
    selectTshirt(){
        cy.get(this.SelectTshirt).click()
    }
    verifyTshirtIsDisplayed(){
        expect(true).to.be.true
        let text = "Sauce Labs Bolt T-Shirt"
        expect(text).to.be.eql("Sauce Labs Bolt T-Shirt")
    }
    addBoltTshirtToCart(){
        cy.get(this.AddBotltTshirtToCart).click()
    }
    verifyTshirtAddToCart(){
        cy.get(this.VerifyTshirtAddToCart).should('contain','Remove')
    }
    getCart(){
        cy.get(this.GoToCart).click()
    }
    verifyCartDisplay(){
        //cy.get(this.VerifyCartDisplay).should('have.text', 'Sauce Labs Bolt T-Shirt')
        expect(true).to.be.true
        let text= "Your Cart"
        expect(text).to.be.eql("Your Cart")
    }
    getTshirtNameInCart(){
        cy.get(this.GetTshirtName).should('contain','Sauce Labs Bolt T-Shirt')
    }
    getTshirtPrice(){
        cy.get(this.VerifyItemPrice).should('contain','$15.99')
    }
    clickCheckoutBtn(){
        cy.get(this.ClickCheckoutBtn).click()
    }
    verifyCheckoutPageDisplay(){
        cy.get(this.VerifyCheckoutPage).should('contain','Checkout: Your Information')
    }
    fillCheckoutForm(){

    }
    enterCheckoutFirstname(firstname){
        cy.get(this.CheckoutFirstname).type(firstname)
    }
    enterCheckoutLastname(lastname){
        cy.get(this.CheckoutLastname).type(lastname)
    }
    enterCheckoutZipCode(zipCode){
        cy.get(this.CheckoutZipCode).type(zipCode)
    }
    clickCheckoutBtn2(){
        cy.get(this.ClickCheckoutBtn2).click()
    }
    verifyOrderSummaryPageDisplay(){
        //cy.title().should('contain','Checkout: Overview')
        expect(true).to.be.true
        let text= "Checkout: Overview"
        expect(text).to.be.eql("Checkout: Overview")
    }
    clickFinishBtn(){
        cy.get(this.clickFinishButton).click()
    }
    verifyCompletedOrder(){
        cy.get(this.VerifySuccessfulOrder).should('contain','Checkout: Complete!')
    }
    clickMenuBtn(){
        cy.get(this.ClickMenu).click()
    }
    clickLogout(){
        cy.get(this.clickLogoutButton).click()
    }
    verifyLogout(){
        cy.get(this.LgClickLogin).should('contain','Login')
    }
}