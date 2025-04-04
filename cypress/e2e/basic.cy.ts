describe('Basic Test', () => {
  it('should visit the homepage', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.screenshot('homepage');
  });

  it('should have a body element', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
  });
}); 