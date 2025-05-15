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
   - The counter should never display a negative number.  
   - Decrementing at `0` should keep the counter at `0`.

4. **Edge Cases**  
   - Rapid clicks on both increment and decrement buttons.  
   - Very high counter values (stress testing).  
   - Multiple increment and decrement operations in sequence.



- **Accessibility Tests**  
  - Ensure buttons are keyboard navigable.  
  - Verify compatibility with screen readers.

- **Performance Tests**  
  - Verify immediate response to clicks, even under rapid clicking.

