import userApi from '../../support/api/userApi'
import { logUser } from '../../support/helpers/logger'
import { createUser } from '../../support/factories/userFactory'

describe('User API', () => {

  it('Should create a new user successfully', () => {

    const user = createUser()
    
    logUser(user)

    userApi.create(user)
      .then((response) => {

        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        expect(response.body).to.have.property('_id')

      })

  })

  it('Should not allow creating a user with an existing email', () => {

    const user = createUser()

    logUser(user)

    userApi.create(user)

    userApi.create(user, false)
      .then((response) => {

        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('Este email já está sendo usado')

      })

  })

  it('Should delete an existing user successfully', () => {

    const user = createUser()

    logUser(user)

    userApi.create(user)
      .then((createResponse) => {

        expect(createResponse.status).to.eq(201)

        const userId = createResponse.body._id

        return userApi.delete(userId)

      })
      .then((deleteResponse) => {

        expect(deleteResponse.status).to.eq(200)
        expect(deleteResponse.body.message).to.eq('Registro excluído com sucesso')

      })

  })

})