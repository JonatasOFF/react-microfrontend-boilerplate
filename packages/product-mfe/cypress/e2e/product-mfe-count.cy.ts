

describe("Product MFE", () => {
  it('should be able to add count', () => {
    cy.visit('http://localhost:3001');
    cy.get('button').contains('Click here to add count').click()
    cy.get('div').contains('1').should('contain', '1');
  });
})
