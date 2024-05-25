describe('(Admin) View All Orders, View Order Details, Delete Order - test', () => {
  beforeEach(() => {
    cy.login('admin@example.com', '123456');
  });
  it('should allow admin to view all customer orders', () => {
    cy.visit('/');
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-orderLink').click();
    cy.getDataTest('cyA-detailsButton').eq(0).click();
    cy.wait(500);
    cy.go('back');
    cy.getDataTest('cyA-deleteButton').eq(0).click();
    cy.wait(1000);
    cy.contains('div', 'order deleted successfully')
      .should('have.text', 'order deleted successfully')
      .click();
  });
});
