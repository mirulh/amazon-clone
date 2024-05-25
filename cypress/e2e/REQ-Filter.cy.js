describe('Filter products by different categories', () => {
  it('should return products match by filter inputs', () => {
    cy.visit('/');
    cy.wait(500);
    cy.getDataTest('cy-searchButton').click();
    cy.wait(1000);

    // department
    cy.get('[data-test="cy-department"] > li > a').each((ct) => {
      cy.get(ct).click();
      cy.wait(500);
    });
    cy.getDataTest('cy-clear').click();

    // price
    cy.get('[data-test="cy-price"] > li > a').each((pr) => {
      cy.get(pr).click();
      cy.wait(500);
    });
    cy.getDataTest('cy-clear').click();

    // rating
    cy.get('[data-test="cy-rating"] > li > a').each((rt) => {
      cy.get(rt).click();
      cy.wait(500);
    });

    // sort by
    cy.get('[data-test="cy-sortBy"]')
      .children('option')
      .each(($el) => {
        cy.get('[data-test="cy-sortBy"]').select($el.val());
        cy.wait(500);
      });
  });
});
