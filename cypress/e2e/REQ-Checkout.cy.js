describe('Add Delivery Address and Choose Payment - test', () => {
  it('should redirect user to login page if user is not login yet when checkout', () => {
    cy.visit('/');
    cy.getDataTest('addToCart').eq(0).click();
    cy.getDataTest('cy-badgeCart').should('have.text', '1');
    cy.visit('/cart');
    cy.getDataTest('cy-checkout').click();
    cy.contains('h1', 'Sign In');
  });

  it('should show input is required and should allow user to add delivery address, select a payment method and place order', () => {
    const details = [
      'Ali bin Abu',
      'Persiaran Bestari, Cyber 11',
      'Cyberjaya',
      '63000',
      'Malaysia',
      'PayPal',
    ];

    cy.visit('/signin');
    cy.login('ali@gmail.com', 'password123');
    cy.visit('/');
    cy.wait(500);
    cy.getDataTest('addToCart').eq(0).click();
    cy.getDataTest('cy-badgeCart').should('have.text', '1');
    cy.visit('/cart');
    cy.wait(500);
    cy.getDataTest('cy-checkout').click();

    // add delivery address
    cy.getDataTest('cy-submitAddress').click();
    cy.wait(500);
    cy.getDataTest('cy-fullName')
      .type(details[0])
      .should('have.attr', 'required');
    cy.getDataTest('cy-address')
      .type(details[1])
      .should('have.attr', 'required');
    cy.getDataTest('cy-cityName')
      .type(details[2])
      .should('have.attr', 'required');
    cy.getDataTest('cy-postalCode')
      .type(details[3])
      .should('have.attr', 'required');
    cy.getDataTest('cy-country')
      .type(details[4])
      .should('have.attr', 'required');
    cy.getDataTest('cy-submitAddress').click();

    // choose payment method page
    cy.getDataTest('cy-payment').check(details[5]);
    cy.getDataTest('cy-submitMethod').click();
    cy.getDataTest('cy-submitOrder').click();
    cy.contains('div.card-title.h5', 'Order Summary').should(
      'have.text',
      'Order Summary'
    );
  });
});
