Cypress.Commands.add('createUserApi', (nome, email, password, administrador = 'false') => {
  return cy.request('POST', 'https://serverest.dev/usuarios', {
    nome,
    email,
    password,
    administrador
  })
})
