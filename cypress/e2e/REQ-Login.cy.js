describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('should show email and password is required and should redirect user to the homepage after successful login attempt', () => {
    cy.getDataTest('cy-submitLogin').click();
    cy.wait(500);
    cy.getDataTest('cy-email')
      .type('ali@gmail.com')
      .should('have.attr', 'required');
    cy.getDataTest('cy-password')
      .type('password123')
      .should('have.attr', 'required');
    cy.getDataTest('cy-submitLogin').click();
    cy.url().should('match', /\/$/);
  });
});

/* 

    cy.getDataTest('cy-navLink')
      .click()
      .getDataTest('cy-signoutLink')
      .should('be.visible');

*/
