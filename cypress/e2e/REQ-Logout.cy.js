describe('Logout test', () => {
  beforeEach(() => {
    cy.login('admin@example.com', '123456');
  });

  it('should allow user to logout', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-signoutLink').click();
    cy.contains('h1', 'Sign In').should('exist');
  });
});
