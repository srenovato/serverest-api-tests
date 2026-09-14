class UserApi {

  create(user, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: user,
      failOnStatusCode
    })
  }

  delete(id, failOnStatusCode = true) {
    return cy.request({
      method: 'DELETE',
      url: `/usuarios/${id}`,
      failOnStatusCode
    })
  }

  getById(id, failOnStatusCode = true) {
    return cy.request({
      method: 'GET',
      url: `/usuarios/${id}`,
      failOnStatusCode
    })
  }

  getAll(params = {}, failOnStatusCode = true) {
    return cy.request({
      method: 'GET',
      url: '/usuarios',
      qs: params,
      failOnStatusCode
    })
  }

  update(id, user, failOnStatusCode = true) {
    return cy.request({
      method: 'PUT',
      url: `/usuarios/${id}`,
      body: user,
      failOnStatusCode
    })
  }

}

export default new UserApi()