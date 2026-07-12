import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";
import productPage from "../support/pageObjects/productPage";
import user from "../fixtures/users"

describe('Tests performed on the product page', () => {

  it('Product - Successfully register a product', () => {
    loginPage.visit()
    loginPage.login(user.admin.email, user.admin.password)  
    homePage.registerProduct()
    productPage.createNewProduct()
    productPage.productExists()
  })
})