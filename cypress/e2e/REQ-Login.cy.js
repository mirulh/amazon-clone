describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });
  it('should show email and password is required', () => {
    cy.getDataTest('cy-submitLogin').click();
    cy.wait(500);
    cy.getDataTest('cy-email').should('have.attr', 'required');
    cy.getDataTest('cy-password').should('have.attr', 'required');
  });

  it('should redirect user to the homepage after successful login attempt', () => {
    cy.getDataTest('cy-email').type('ali@gmail.com');
    cy.getDataTest('cy-password').type('password123');
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
