// WRITE TESTS HERE

describe('Page', () => {
  it('should be visitable', () => {
    cy.visit('/');
    cy.wait(100000)
.visit('/');
  });
});

