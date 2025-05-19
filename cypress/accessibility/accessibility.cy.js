import 'cypress-axe';
import CounterPage from "../pages/CounterPage"; 

describe('Counter App Accessibility Checks', () => {
  const counterPage = new CounterPage();
  beforeEach(() => {
    cy.visit('/');
// inject axe-core for a11y testing
    cy.injectAxe();
  });

// This TC checks if the app has no detectable a11y violations on load.
  it('TC1 - App has no detectable a11y violations on load', () => {
    cy.checkA11y(null, null, (violations) => {
      if (violations.length > 0) {
        cy.log(`${violations.length} accessibility violation(s) found:`);
        const violationMessages = violations.map((v) => {
          const selector = v.nodes.map((n) => n.target).join(', ');
          const message = `${v.id}: ${v.description} on ${selector}`;
          cy.log(message);
          return message;
        });
        // Delay assertion so logs appear in report
        cy.wrap(null).then(() => {
          throw new Error(`Accessibility violations:\n--${violationMessages.join('\n--')}`);
        });
      } else {
        cy.log('No accessibility violations found');
      }
    }, { skipFailures: true }); 
  });
// This TC checks if the app buttons are keyboard focusable.
  it('TC2 - App buttons are keyboard focusable', () => {
    counterPage.incrementButton.focus().should('have.focus');
    counterPage.decrementButton.focus().should('have.focus');
  });

// This TC checks if the app buttons have accessible names.
  it('TC3 - App buttons have accessible names', () => {
    counterPage.incrementButton
      .should('have.attr', 'aria-label')
      .and('match', /increment|increase/i);

    counterPage.decrementButton
      .should('have.attr', 'aria-label')
      .and('match', /decrement|decrease/i);
  });
  
// This TC checks if the app buttons have visible text or aria-label.
  it('TC4 - App buttons have visible text or aria-label', () => {
    counterPage.incrementButton.should(($btn) => {
      const hasText = $btn.text().trim().length > 0;
      const hasAria = $btn.attr('aria-label') && $btn.attr('aria-label').length > 0;
      expect(hasText || hasAria).to.be.true;
    });
    counterPage.decrementButton.should(($btn) => {
      const hasText = $btn.text().trim().length > 0;
      const hasAria = $btn.attr('aria-label') && $btn.attr('aria-label').length > 0;
      expect(hasText || hasAria).to.be.true;
    });
  });
});
