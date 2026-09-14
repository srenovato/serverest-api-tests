import userApi from '../../support/api/userApi'
import { logUser } from '../../support/helpers/logger'
import { createUser } from '../../support/factories/userFactory'
import {
  validateUserCreated,
  validateDuplicateEmailError,
  validateUserDeleted,
  validateUserDeleteNoOp,
  validateRequiredFieldsError,
  validateUserNotFound,
  validateUserRetrieved,
  validateUserListFilteredByEmail,
  validateUserUpdated
} from '../../support/validations/userValidations'

describe('User API', () => {

  let createdUserIds = []

  beforeEach(() => {
    createdUserIds = []
  })

  afterEach(() => {
    createdUserIds.forEach((id) => userApi.delete(id, false))
  })

  describe('Create', () => {

    it('Should create a new user successfully', () => {

      const user = createUser()

      logUser(user)

      userApi.create(user)
        .then((response) => {

          validateUserCreated(response)
          createdUserIds.push(response.body._id)

        })

    })

    it('Should not allow creating a user with an existing email', () => {

      const user = createUser()

      logUser(user)

      userApi.create(user)
        .then((firstResponse) => {

          validateUserCreated(firstResponse)
          createdUserIds.push(firstResponse.body._id)

          return userApi.create(user, false)

        })
        .then((secondResponse) => {

          validateDuplicateEmailError(secondResponse)

        })

    })

    it('Should return validation errors when required fields are missing', () => {

      userApi.create({}, false)
        .then((response) => {

          validateRequiredFieldsError(response)

        })

    })

  })

  describe('Read', () => {

    it('Should retrieve a user by id', () => {

      const user = createUser()

      logUser(user)

      userApi.create(user)
        .then((createResponse) => {

          validateUserCreated(createResponse)
          createdUserIds.push(createResponse.body._id)

          return userApi.getById(createResponse.body._id)

        })
        .then((getResponse) => {

          validateUserRetrieved(getResponse, user)

        })

    })

    it('Should return an error when retrieving a user with a non-existent id', () => {

      userApi.getById('idinvalido123456', false)
        .then((response) => {

          validateUserNotFound(response)

        })

    })

    it('Should list users filtered by email', () => {

      const user = createUser()

      logUser(user)

      userApi.create(user)
        .then((createResponse) => {

          validateUserCreated(createResponse)
          createdUserIds.push(createResponse.body._id)

          return userApi.getAll({ email: user.email })

        })
        .then((listResponse) => {

          validateUserListFilteredByEmail(listResponse, user)

        })

    })

  })

  describe('Update', () => {

    it('Should update an existing user successfully', () => {

      const user = createUser()
      const updatedUser = createUser()

      logUser(user)

      userApi.create(user)
        .then((createResponse) => {

          validateUserCreated(createResponse)
          createdUserIds.push(createResponse.body._id)

          return userApi.update(createResponse.body._id, updatedUser)

        })
        .then((updateResponse) => {

          validateUserUpdated(updateResponse)

        })

    })

    it('Should not allow updating a user to an email already in use by another user', () => {

      const firstUser = createUser()
      const secondUser = createUser()

      userApi.create(firstUser)
        .then((firstResponse) => {

          validateUserCreated(firstResponse)
          createdUserIds.push(firstResponse.body._id)

          return userApi.create(secondUser)

        })
        .then((secondResponse) => {

          validateUserCreated(secondResponse)
          createdUserIds.push(secondResponse.body._id)

          return userApi.update(secondResponse.body._id, { ...secondUser, email: firstUser.email }, false)

        })
        .then((updateResponse) => {

          validateDuplicateEmailError(updateResponse)

        })

    })

  })

  describe('Delete', () => {

    it('Should delete an existing user successfully', () => {

      const user = createUser()

      logUser(user)

      userApi.create(user)
        .then((createResponse) => {

          validateUserCreated(createResponse)

          return userApi.delete(createResponse.body._id)

        })
        .then((deleteResponse) => {

          validateUserDeleted(deleteResponse)

        })

    })

    it('Should return a no-op message when deleting a non-existent id', () => {

      userApi.delete('idinvalido123456')
        .then((response) => {

          validateUserDeleteNoOp(response)

        })

    })

  })

})
