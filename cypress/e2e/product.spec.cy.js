import { faker } from '@faker-js/faker'
import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";
import productPage from "../support/pageObjects/productPage";

describe('Tests performed on the product page', () => {

  it('Product - Successfully register a product', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = Cypress.env('TEST_USER_PASSWORD')

    cy.createUserApi(name, email, password, 'true')

    loginPage.visit()
    loginPage.login(email, password)
    homePage.registerProduct()
    productPage.createNewProduct()
    productPage.productExists()
  })

  it('Product - Successfully find a product by name', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = Cypress.env('TEST_USER_PASSWORD')

    cy.createUserApi(name, email, password, 'false')

    loginPage.visit()
    loginPage.login(email, password)
    homePage.searchProduct('Tasty Wooden Tuna')
    homePage.productResultVisible('Tasty Wooden Tuna')
  })

  it('Product - No results for a nonexistent product', () => {
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = Cypress.env('TEST_USER_PASSWORD')

    cy.createUserApi(name, email, password, 'false')

    loginPage.visit()
    loginPage.login(email, password)
    homePage.searchProduct(faker.string.uuid())
    homePage.noProductsFoundMessageVisible()
  })
})