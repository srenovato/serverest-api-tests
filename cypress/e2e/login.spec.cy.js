import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";
import user from "../fixtures/users"

describe('Tests performed on the login page', () => {

  it('Login - Successfully create an account', () => {
    loginPage.visit()
    loginPage.createAccount()
    loginPage.registeredSuccessfully()
  })

  it('Login - Successfully perform a login', () => {
    loginPage.visit()
    loginPage.login(user.default.email, user.default.password)
    homePage.logoutIsVisble()
  })

})