///<reference types= "cypress"/>
import { buyTshirt_page } from "../pages/buyTshirt_page.cy";
describe('Technical task_QA role', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })
   //create a constant variable and call it BT, this will link the pageObjects to test file
    const BT = new buyTshirt_page();
    //create an it block to store the test case
    it('TC-01: buy T-shirt', ()=>{
        //link the fixture file which contains the test data to the test
        cy.fixture('T-shirtData').then((data)=>{
            BT.enterUsername(data.username);
            BT.enterPassword(data.password);
            BT.clickLoginBtn();
            //verify successful login
            BT.verifySuccessfulLogin();
            //select bolt T-Shirt
            BT.selectTshirt();
            //verify that the bolt T-shirt is displayed
            BT.verifyTshirtIsDisplayed();
            //add bolt T-shirt to cart
            BT.addBoltTshirtToCart();
            //verify bolt T-shirt is added successfully to cart
            BT.verifyTshirtAddToCart();
            //get cart
            BT.getCart();
            //verify that the name sauce labs bolt T-shirt is displayed in the cart
            BT.getTshirtNameInCart();
            //verify the T-shirt price is equal to $15.99
            BT.getTshirtPrice();
            //click checkout button
            BT.clickCheckoutBtn();
            //verify the checkout page is displayed
            BT.verifyCheckoutPageDisplay();
            //fill the checkout form
            BT.enterCheckoutFirstname(data.firstname);
            BT.enterCheckoutLastname(data.lastname);
            BT.enterCheckoutZipCode(data.zipCode);
            BT.clickCheckoutBtn2();
            //verify that the order summary page is displayed
            BT.verifyOrderSummaryPageDisplay();
            //click the finish button to complete order
            BT.clickFinishBtn();
            //verify that the order confirmation page is displayed
            BT.verifyCompletedOrder();
            //logout of the application
            BT.clickMenuBtn();
            BT.clickLogout();
            //verify logout
            BT.verifyLogout();


        })
    })
})