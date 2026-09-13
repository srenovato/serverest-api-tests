class HomePage {

    logoutIsVisble() {
        cy.get('[data-testid="logout"]').should('be.visible')
    }

    registerProduct() {
        cy.get('[data-testid="cadastrarProdutos"]').click()
    }

    searchProduct(term) {
        cy.get('[data-testid="pesquisar"]').type(term)
        cy.get('[data-testid="botaoPesquisar"]').click()
    }

    productResultVisible(name) {
        cy.contains('.card-title', name).should('be.visible')
    }

    noProductsFoundMessageVisible() {
        cy.contains('Nenhum produto foi encontrado').should('be.visible')
    }
}

export default new HomePage()
