//Page Object Model for the Counter Page, to ensure that the code is clean and maintainable.
class CounterPage{
// The increment button.
    get incrementButton(){
        return cy.get('#increment-btn');
    }
// The decrement button.
    get decrementButton(){
        return cy.get('#decrement-btn');
    }
// The counter value.
    get counterValue(){
        return cy.get('#counter');
    }
// The increment button click method.
    clickIncrement(){
        this.incrementButton.click();
    }
// The decrement button click method.
    clickDecrement(){
        this.decrementButton.click();
    }
// The increment button click method for two clicks.
    clickIncrementMultiple(){
        this.incrementButton.click().click();
    }
// The decrement button click method for tow clicks.
    clickDecrementMultiple(){
        this.decrementButton.click().click();
    }
// The counter value method.
    getCounterValue(){
        return this.counterValue;
    }
}
export default CounterPage;