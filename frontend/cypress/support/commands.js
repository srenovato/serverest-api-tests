Cypress.Commands.add('createUserApi', (nome, email, password, administrador = 'false') => {
  return cy.request('POST', 'https://serverest.dev/usuarios', {
    nome,
    email,
    password,
    administrador
  })
})

Cypress.Commands.add('createProductApi', (nome, preco, descricao, quantidade) => {
  const adminEmail = `${Date.now()}@teste.com`
  const adminPassword = Cypress.env('TEST_USER_PASSWORD')

  return cy.createUserApi('Admin Produto', adminEmail, adminPassword, 'true')
    .then(() => cy.request('POST', 'https://serverest.dev/login', {
      email: adminEmail,
      password: adminPassword
    }))
    .then((loginResponse) => cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: { Authorization: loginResponse.body.authorization },
      body: { nome, preco, descricao, quantidade }
    }))
})
