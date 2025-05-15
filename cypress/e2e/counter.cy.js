describe('Counter App', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('TC1 - should increment the counter', () => {
        cy.get('[id*=counter]').should('have.text', '0');
        cy.get('[id*=increment]').click();
        cy.get('[id*=counter]').should('have.text', '1');
    });
})