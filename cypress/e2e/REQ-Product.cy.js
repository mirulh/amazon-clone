describe('View Product, Rate, and Comment - test', () => {
  it('should display the product details by clicking on it', () => {
    cy.visit('/');
    cy.getDataTest('cy-productCard').eq(0).click();
  });

  beforeEach(() => {
    cy.login('ali@gmail.com', 'password123');
  });

  it('should require user to comment and rate a product at the same time', () => {
    cy.visit('/');
    cy.getDataTest('cy-productCard').eq(0).click();
    cy.getDataTest('cy-ratings').select(['3']);
    cy.getDataTest('cy-submitReview').click();
    cy.contains('div', 'Please enter comment and rating')
      .should('exist')
      .click();
    cy.wait(500);
    cy.getDataTest('cy-comment').type('A very good product!');
    cy.getDataTest('cy-submitReview').click();
    cy.contains('div', 'Review submitted successfully')
      .should('have.text', 'Review submitted successfully')
      .click();
  });
});
