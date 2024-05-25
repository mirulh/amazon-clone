describe('(Admin) View All Products, Edit Product Details and Delete Product, ', () => {
  beforeEach(() => {
    cy.login('admin@example.com', '123456');
  });

  it('it should allow admin to edit product details', () => {
    const productDetails = [
      'Muji Long Trousers',
      'muji-long-trousers',
      '50',
      '/images/p4.jpg',
      'Trousers',
      'Muji',
      '50',
      'Muji brand new long trousers',
    ];

    cy.visit('/');
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-productLink').click();
    cy.getDataTest('cyA-editProductButton').last().click();
    cy.wait(1000);
    cy.getDataTest('cyA-productName').click().clear().type(productDetails[0]);
    cy.getDataTest('cyA-productSlug').click().clear().type(productDetails[1]);
    cy.getDataTest('cyA-productPrice').click().clear().type(productDetails[2]);
    cy.getDataTest('cyA-productImage').click().clear().type(productDetails[3]);
    // cy.getDataTest('cyA-uploadImage').selectFile(
    //   '/home/mirulh/Downloads/4.png'
    // );
    cy.getDataTest('cyA-productCategory')
      .click()
      .clear()
      .type(productDetails[4]);
    cy.getDataTest('cyA-productBrand').click().clear().type(productDetails[5]);
    cy.getDataTest('cyA-productCount').click().clear().type(productDetails[6]);
    cy.getDataTest('cyA-productDesc').click().clear().type(productDetails[7]);
    cy.getDataTest('cyA-submitUpdate').click();
    cy.contains('div', 'Product updated successfully')
      .should('have.text', 'Product updated successfully')
      .click();
  });

  it('it should allow admin to create a new product', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-productLink').click();
    cy.getDataTest('cyA-createProductButton').click();
    cy.contains('div', 'product created successfully')
      .should('have.text', 'product created successfully')
      .click();
    cy.wait(1000);
    cy.getDataTest('cyA-productPrice').click().clear().type('20');
    cy.wait(1000);
    cy.getDataTest('cyA-submitUpdate').click();
    cy.contains('div', 'Product updated successfully')
      .should('have.text', 'Product updated successfully')
      .click();
  });

  it('it should allow admin to delete a product', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-productLink').click();
    cy.getDataTest('cyA-deleteProductButton').last().click();
    cy.contains('div', 'product deleted successfully')
      .should('have.text', 'product deleted successfully')
      .click();
  });
});
