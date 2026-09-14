class ProductPage {

    createNewProduct() {
      this.randomProduct = `Test Product ${Math.floor(Math.random() * 100) + 1}`

      cy.get('[data-testid="nome"]').type(this.randomProduct)
      cy.get('[data-testid="preco"]').type('100')
      cy.get('[data-testid="descricao"]').type('This is a test product')
      cy.get('[data-testid="quantity"]').type('10')
      cy.get('[data-testid="cadastarProdutos"]').click()
      }

      productExists() {
        cy.get('tbody tr').contains(this.randomProduct).should('be.visible')
      }

}

export default new ProductPage()
