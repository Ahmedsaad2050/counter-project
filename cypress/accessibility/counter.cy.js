import CounterPage from "../pages/CounterPage"; 

describe('Counter App', () => {
    const counterPage = new CounterPage();

// A user can increment the counter and validate the counter value.
    it('TC1 - A user can increment the counter', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrement();
        counterPage.getCounterValue().should('have.text', '1');
    });

// A user can see 0 on the counter initial state.
    it('TC2 - A user can see 0 on the counter initial state', () => {
        counterPage.getCounterValue().should('have.text', '0');
    })

// A user can increment the counter multiple times and validate the counter value.
    it('TC3 - A user can increment the counter multiple times', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrementMultiple();
        counterPage.getCounterValue().should('have.text', '2');
    })

// A user can decrement the counter and validate the counter value.
    it('TC4 - A user can decrement the counter', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrement();
        counterPage.clickDecrement();
        counterPage.getCounterValue().should('have.text', '0');
    })

// A user can not decrement the counter below 0 and validate the counter value to stay at 0.
    it('TC5 - A user can not decrement the counter below 0', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickDecrement();
        counterPage.getCounterValue().should('have.text', '0');
    })

// A user can decrement the counter multiple times and validate the counter value.
    it('TC6 - A user can decrement the counter multiple times', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrementMultiple();
        counterPage.clickDecrementMultiple();
        counterPage.getCounterValue().should('have.text', '0');
    })

// A user can click rapidly on both increment and decrement buttons and validate the counter value.
    it('TC7 - A user can click rapidly on both increment and decrement buttons', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrementMultiple();
        counterPage.clickDecrementMultiple();
        counterPage.clickIncrementMultiple();
        counterPage.getCounterValue().should('have.text', '2');
    })

// A user can count to higher numbers and validate the counter value.
    it('TC8 - A user can count to higher numbers', () => {
        counterPage.getCounterValue().should('have.text', '0');
        for (let i = 0; i < 50 ; i++) {
            counterPage.clickIncrement();
            counterPage.getCounterValue().should('have.text', '' + (i + 1))
        }
        counterPage.getCounterValue().should('have.text', '50');
    })

// A user can reset the counter and validate the counter value to stay at 0.
    it('TC9 - A user can reset the counter', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrementMultiple();
        cy.reload();
        counterPage.getCounterValue().should('have.text', '0');
    })

// A user can increment and decrement in sequence and validate the counter value.
    it('TC10 - A user can increment and decrement in sequence', () => {
        counterPage.getCounterValue().should('have.text', '0');
        counterPage.clickIncrementMultiple();
        counterPage.clickDecrementMultiple();
        counterPage.clickIncrementMultiple();
        counterPage.clickIncrementMultiple();
        counterPage.clickDecrementMultiple();
        counterPage.getCounterValue().should('have.text', '2');
    })
})