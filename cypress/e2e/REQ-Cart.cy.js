describe('Cart Management test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should add a product to cart page and the quantity increase by 1', () => {
    cy.getDataTest('addToCart').click({ multiple: true });
    cy.getDataTest('cy-badgeCart').should('have.text', '3');
  });
  it('should display cart page, increase and decrease product quantity, and remove product from cart', () => {
    cy.getDataTest('addToCart').click({ multiple: true });
    cy.getDataTest('cy-badgeCart').should('have.text', '3');
    cy.visit('/cart');
    cy.getDataTest('cy-itemAdd').click({ multiple: true });
    cy.getDataTest('cy-itemAdd').click({ multiple: true });
    cy.getDataTest('cy-itemMinus').click({ multiple: true });

    // loop and delete all
    cy.getDataTest('cy-itemTrash').each(() => {
      cy.getDataTest('cy-itemTrash').first().click();
    });
    cy.get('div[role="alert"].fade.alert.alert-info.show').contains(
      'Cart is empty.'
    );
  });
});
