describe('Signup test', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('should show input is required and should redirect user to the homepage after successful signup attempt', () => {
    cy.getDataTest('cy-submitSignup').click();
    cy.wait(500);
    cy.getDataTest('cy-name').type('Ali').should('have.attr', 'required');
    cy.getDataTest('cy-email')
      .type('ali@gmail.com')
      .should('have.attr', 'required');
    cy.getDataTest('cy-password')
      .type('password123')
      .should('have.attr', 'required');
    cy.getDataTest('cy-confirmPassword')
      .type('password123')
      .should('have.attr', 'required');
    cy.getDataTest('cy-submitSignup').click();
    cy.wait(500);
    cy.url().should('match', /\/$/);
  });
});

/* 

describe('Signup test', () => {
  it('', () => {});
});


*/
