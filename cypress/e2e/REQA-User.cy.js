describe('(Admin) View All Users, Edit User Details, Give User Admin privilege and Delete User - test', () => {
  beforeEach(() => {
    cy.login('admin@example.com', '123456');
  });

  it('should allow admin to give or take a user admin privilege by selecting isAdmin', () => {
    cy.visit('/');
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-usersLink').click();
    cy.getDataTest('cyA-editButton').last().click();
    cy.wait(1000);
    cy.getDataTest('cyA-userIsAdmin').click();
    // cy.getDataTest('cyA-userIsAdmin').should('be.checked');
    cy.getDataTest('cyA-updateButton').click();
    cy.contains('div', 'User updated successfully')
      .should('have.text', 'User updated successfully')
      .click();
  });

  it('should allow admin to view list of users, edit a user name or email, and delete a user', () => {
    const newDetails = ['Alan', 'alan@gmail.com'];
    cy.visit('/');
    cy.getDataTest('cyA-navLink').click();
    cy.getDataTest('cyA-usersLink').click();
    cy.getDataTest('cyA-editButton').last().click();
    cy.wait(1000);
    cy.getDataTest('cyA-userName').clear().type(newDetails[0]);
    cy.getDataTest('cyA-userEmail').clear().type(newDetails[1]);
    cy.getDataTest('cyA-updateButton').click();
    cy.contains('div', 'User updated successfully')
      .should('have.text', 'User updated successfully')
      .click();
    cy.wait(1000);
    cy.getDataTest('cyA-deleteButton').last().click();
    cy.contains('div', 'user deleted successfully')
      .should('have.text', 'user deleted successfully')
      .click();
  });
});
