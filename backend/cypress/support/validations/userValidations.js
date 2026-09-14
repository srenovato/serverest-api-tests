export const validateUserCreated = (response) => {
  expect(response.status).to.eq(201)
  expect(response.body).to.have.all.keys('message', '_id')
  expect(response.body.message).to.eq('Cadastro realizado com sucesso')
  expect(response.body._id).to.be.a('string').and.not.be.empty
}

export const validateDuplicateEmailError = (response) => {
  expect(response.status).to.eq(400)
  expect(response.body).to.have.all.keys('message')
  expect(response.body.message).to.eq('Este email já está sendo usado')
}

export const validateUserDeleted = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.all.keys('message')
  expect(response.body.message).to.eq('Registro excluído com sucesso')
}

export const validateUserDeleteNoOp = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.all.keys('message')
  expect(response.body.message).to.eq('Nenhum registro excluído')
}

export const validateRequiredFieldsError = (response) => {
  expect(response.status).to.eq(400)
  expect(response.body).to.have.all.keys('nome', 'email', 'password', 'administrador')
  expect(response.body.nome).to.eq('nome é obrigatório')
  expect(response.body.email).to.eq('email é obrigatório')
  expect(response.body.password).to.eq('password é obrigatório')
  expect(response.body.administrador).to.eq('administrador é obrigatório')
}

export const validateUserNotFound = (response) => {
  expect(response.status).to.eq(400)
  expect(response.body).to.have.all.keys('message')
  expect(response.body.message).to.eq('Usuário não encontrado')
}

export const validateUserRetrieved = (response, expectedUser) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
  expect(response.body.nome).to.eq(expectedUser.nome)
  expect(response.body.email).to.eq(expectedUser.email)
  expect(response.body.administrador).to.eq(expectedUser.administrador)
}

export const validateUserListFilteredByEmail = (response, expectedUser) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.all.keys('quantidade', 'usuarios')
  expect(response.body.quantidade).to.eq(1)
  expect(response.body.usuarios).to.have.length(1)
  expect(response.body.usuarios[0].email).to.eq(expectedUser.email)
  expect(response.body.usuarios[0].nome).to.eq(expectedUser.nome)
}

export const validateUserUpdated = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.all.keys('message')
  expect(response.body.message).to.eq('Registro alterado com sucesso')
}
