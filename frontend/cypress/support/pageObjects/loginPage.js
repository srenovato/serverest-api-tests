import { faker } from '@faker-js/faker'

class LoginPage {
    visit() {
        cy.visit('/')
    }

    login(email, password) {
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="senha"]').type(password)
      cy.get('[data-testid="entrar"]').click()
      
    }


    createAccount() {
      const name = faker.person.fullName()
      const email = faker.internet.email()

      cy.get('[data-testid="cadastrar"]').click()
      cy.get('[data-testid="nome"]').type(name)
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="password"]').type(Cypress.env('TEST_USER_PASSWORD'))
      cy.get('[data-testid="cadastrar"]').click()
    }

    registeredSuccessfully() {
      cy.contains('.alert-link', 'Cadastro realizado com sucesso').should('be.visible')
    }
}

export default new LoginPage()
