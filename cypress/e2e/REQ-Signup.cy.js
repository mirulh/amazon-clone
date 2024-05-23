describe('Signup test', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });
  it('should show name, email, password and confirm password is required', () => {
    cy.getDataTest('cy-submitSignup').click();
    cy.wait(500);
    cy.getDataTest('cy-name').should('have.attr', 'required');
    cy.getDataTest('cy-email').should('have.attr', 'required');
    cy.getDataTest('cy-password').should('have.attr', 'required');
    cy.getDataTest('cy-confirmPassword').should('have.attr', 'required');
  });

  it('should redirect user to the homepage after successful login attempt', () => {
    cy.getDataTest('cy-name').type('Ali');
    cy.getDataTest('cy-email').type('ali@gmail.com');
    cy.getDataTest('cy-password').type('password123');
    cy.getDataTest('cy-confirmPassword').type('password123');
    cy.getDataTest('cy-submitSignup').click();
    cy.url().should('match', /\/$/);
  });
});

/* 

describe('Signup test', () => {
  it('', () => {});
});


*/
