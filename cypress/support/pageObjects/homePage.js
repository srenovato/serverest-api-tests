class HomePage {

    logoutIsVisble() {
        cy.get('[data-testid="logout"]').should('be.visible')
    }

    registerProduct() {
        cy.get('[data-testid="cadastrarProdutos"]').click()
    }
}

export default new HomePage()
