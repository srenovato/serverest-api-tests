// support/helpers/logger.js

export const logUser = (user) => {
    cy.log('========== USER ==========')
    cy.log(`Name: ${user.nome}`)
    cy.log(`Email: ${user.email}`)
    cy.log(`Password: ${user.password}`)
    cy.log('==========================')
}