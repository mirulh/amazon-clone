describe('Search product by name', () => {
  it('should return products match by input name', () => {
    const searchTerm = 'shirt';

    cy.visit('/');
    cy.getDataTest('cy-search').type(searchTerm);
    cy.getDataTest('cy-searchButton').click();
    cy.contains('div.card-title.h5', searchTerm).should('exist');
  });
});
