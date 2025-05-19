# Bug Report - Counter App
## Reported by
Ahmed
## Summary:
This report documents a core functional edge case and an improvment opportunity for accessibilty.


## Environment
- App: Counter Web App (static HTML/JS)
- Browser: Chrome/Electron (latest)
- Cypress Version: 14.3.3
- Cypress-Axe Version: 1.5.0
- cypress-audit: "^1.1.0",
- axe-core: "^4.10.3"
- OS: Linux/Windows

## Functional Bug - Title: Counter goes below zero (negative)

### ID: Bug-1

### Description:
The counter allows the user to decrement below `0`, resulting in negative numbers, This violates the expected behavior in test case TC5, which expects 0 as the minimum value for the counter.

### Severity: Medium

### Steps to reproduce:
1. Open the counter web app
2. Click the **Decrement** button once or more
3. Observe the counter going below `0`

### Expected Behavior:
The counter should **never** go below `0`, If the current value is `0`, clicking **Decrement** button should do nothing

### Actual behavior:
The counter decrements to negative values like `-1`, `2`, etc.

### Suggested fix:
Add a guard condition in the decrement handler.
`if (count > 0)`


## Non-Functional Bugs - Title: A11y Accessibility Violations:

### ID: A11y-1
### Description:
Initial accessibility audits using **cypress-axe** showed the app has multiple **a11y** violations, These were not blocking functionality but may affect users relying on assistive technologies.

### Severity: Low

### Violations Detected:
2 issues on load:
- Buttons doesn't have `aria-label` attributes
- No landmark roles were defined `<main>, etc`

### Impact: May affect screen reader context

### Recommendation: 
- Add descriptive aria-label attributes to each button (e.g., “Increase counter”, “Decrease counter”) so screen readers can clearly communicate their purpose to users with visual impairments.

- Wrap the app’s main content inside a <main> tag to help screen reader users quickly locate the primary section of the page and navigate more efficiently.