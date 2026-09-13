import { faker } from '@faker-js/faker'
import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";

describe('Tests performed on the login page', () => {

  it('Login - Successfully create an account', () => {
    loginPage.visit()
    loginPage.createAccount()
    loginPage.registeredSuccessfully()
  })

  it('Login - Successfully perform a login', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = Cypress.env('TEST_USER_PASSWORD')

    cy.createUserApi(name, email, password)

    loginPage.visit()
    loginPage.login(email, password)
    homePage.logoutIsVisble()
  })

})