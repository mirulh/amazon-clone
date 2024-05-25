describe('View Order History and Order Details - test', () => {
  beforeEach(() => {
    cy.login('ali@gmail.com', 'password123');
  });
  it('should allow user to view Order Details in Order History page ', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-orderLink').click();
    cy.wait(500);
    cy.getDataTest('cy-detailsButton').eq(0).click();
    cy.contains('div.card-title.h5', 'Order Summary').should(
      'have.text',
      'Order Summary'
    );
  });
});
