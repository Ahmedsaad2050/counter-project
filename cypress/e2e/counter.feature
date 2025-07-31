Feature: Counter functionality
    Scenario: TC1 - User increments the counter
      Given the user opens the counter page
      When the user clicks on the increment button
      Then the counter value should be '1'

    Scenario: TC2 - User decrements the counter
      Given the user opens the counter page
      When the user clicks on the decrement button
      Then the counter value should be '0'

    Scenario: TC3 - User increments the counter multiple times
      Given the user opens the counter page
      When the user clicks on the increment button 5 times
      Then the counter value should be '5'

    Scenario: TC4 - User decrements the counter multiple times
      Given the user opens the counter page
      When the user clicks on the decrement button 3 times
      Then the counter value should be '0'

    Scenario: TC5 - User cannot decrement below zero
      Given the user opens the counter page
      When the user clicks on the decrement button 5 times
      Then the counter value should be '0'

    Scenario: TC6 - User increments and decrements the counter
      Given the user opens the counter page
      When the user clicks on the increment button 3 times
      And the user clicks on the decrement button 2 times
      Then the counter value should be '1'

    Scenario: TC7 - User can count to higher numbers
      Given the user opens the counter page
      When the user clicks on the increment button 50 times
      Then the counter value should be '50'

    Scenario: TC8 - User resets the counter
      Given the user opens the counter page
      When the user clicks on the reset button
      Then the counter value should be '0'