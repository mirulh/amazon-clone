describe('Logout test', () => {
  beforeEach(() => {
    cy.login('ali@gmail.com', 'password123');
  });

  it('should allow user to logout', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-signoutLink').click();
  });
});
