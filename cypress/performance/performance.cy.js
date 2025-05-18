import CounterPage from "../pages/CounterPage"; 

describe('Counter App Performance Checks', () => {
    const counterPage = new CounterPage();
    beforeEach(() => {
    cy.visit('/');
  });

// This TC checks if the app updates the counter within 100ms range on click.
    it('TC1 - App should update counter immediately on click', () => {
    counterPage.incrementButton.then(($btn) => {
        const start = performance.now();
        cy.wrap($btn).click();
        counterPage.counterValue.should('contain.text', '1').then(() => {
        const end = performance.now();
        expect(end - start).to.be.lessThan(100);
            });
        });
    });

// This TC checks if the app handles rapid clicks without lag or UI glitches.
    it('TC2 - App handles rapid clicks without lag or UI glitches', () => {
    for (let i = 0; i < 20; i++) {
        counterPage.clickIncrement();
    }
    cy.get('#counter').should('contain.text', '20');
    });

});
