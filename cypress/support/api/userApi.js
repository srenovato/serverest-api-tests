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

}

export default new UserApi()