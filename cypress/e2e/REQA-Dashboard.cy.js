describe('(Admin) View Dashboard - test', () => {
  beforeEach(() => {
    cy.login('admin@example.com', '123456');
  });
  it('should allow admin to navigate to dashboard page', () => {
    cy.visit('/');
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-dashboardLink').click();
    cy.contains('h1', 'Dashboard').should('have.text', 'Dashboard');
  });
});
