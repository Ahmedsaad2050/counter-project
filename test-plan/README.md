## Overview
This test plan covers the core functional testing of the Counter App. The main focus is verifying the counter’s behavior under normal and edge cases.
The additiona non-functional checks will be added also.

## Functional Tests

1. **Initial State**  
   - Counter should display `0` on initial load.

2. **Increment Functionality**  
   - Clicking the increment button increases the counter by 1.  
   - Multiple increments update the counter correctly.

3. **Decrement Functionality**  
   - Clicking the decrement button decreases the counter by 1.  
   - Decrementing at `0` should keep the counter at `0`.
   - Multiple decrements update the counter correctly.

4. **Edge Cases**  
   - Rapid clicks on both increment and decrement buttons.  
   - Very high counter values (stress testing).  
   - Multiple increment and decrement operations in sequence.
   - Reload function will reset the counter.

## Non-Functional Tests


- **Accessibility Tests**  
  - a11y violations checks on load
  - Ensure buttons are keyboard focused.  
  - Check if buttons have accessible names
  - Check buttons have visible text or aria-label

- **Performance Tests**  
  - Verify immediate response to clicks
  - Verify rapid clicking.

