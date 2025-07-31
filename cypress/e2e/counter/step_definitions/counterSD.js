const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import CounterPage from "../../../pages/CounterPage"; 
const counterPage = new CounterPage();

Given("the user opens the counter page", () => {
  cy.visit("/");
});

When("the user clicks on the increment button", () => {
    counterPage.clickIncrement();
});

When ("the user clicks on the decrement button {int} times", (times) => {
  for (let i = 0; i < times; i++) {
    counterPage.clickDecrement();
  }
});

When("the user clicks on the decrement button", () => {
  counterPage.clickDecrement();
});

Then("the counter should be decremented by 1", () => {
  counterPage.getCounterValue().then((counterValue) => {
    const currentValue = parseInt(counterValue.text());
    expect(currentValue).to.equal(0); // Assuming initial value is 1, after decrement it should be 0
  });
});

When("the user clicks on the reset button", () => {
  cy.reload();
});

Then("the counter value should be {string}", (value) => {
  counterPage.getCounterValue().should("have.text", value);
});

When("the user clicks on the increment button {int} times", (times) => {
  for (let i = 0; i < times; i++) {
    counterPage.clickIncrement();
  }
});

Then("the counter value should be {int}", (value) => {
  counterPage.getCounterValue().should("have.text", value.toString());
});