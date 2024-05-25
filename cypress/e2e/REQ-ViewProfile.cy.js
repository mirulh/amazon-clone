describe('View and Edit Profile - test', () => {
  beforeEach(() => {
    cy.login('ali@gmail.com', 'password123');
  });

  it('should redirect user to profile page', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-profileLink').click();
  });

  it('name and email fields should not be blank to update changes', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-profileLink').click();
    cy.getDataTest('cy-name').clear();
    cy.getDataTest('cy-email').clear();
    cy.getDataTest('cy-submitUpdate').click();
    cy.getDataTest('cy-name').should('have.attr', 'required');
    cy.getDataTest('cy-email').should('have.attr', 'required');
  });

  it('should allow user to edit user details and update to save changes', () => {
    cy.visit('/');
    cy.getDataTest('cy-navLink').click();
    cy.getDataTest('cy-profileLink').click();
    cy.getDataTest('cy-name').clear();
    cy.getDataTest('cy-email').clear();
    cy.getDataTest('cy-name').type('Alan');
    cy.getDataTest('cy-email').type('alan@gmail.com');
    cy.getDataTest('cy-submitUpdate').click();
    cy.contains('div', 'User updated successfully')
      .should('have.text', 'User updated successfully')
      .click();
  });
});
