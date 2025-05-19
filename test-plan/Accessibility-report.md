# Accessibility Report – Counter App

## Summary
- Automated checks via `cypress-axe` indicate **no critical violations** on page load.
- The following violations were caught and reported:
`1-landmark-one-main: Ensure the document has a main landmark on html`
`2-region: Ensure all page content is contained by landmarks on h1`


### Key Accessibility Features
- Buttons are keyboard focusable
- Buttons have `aria-label` attributes
- Buttons include visible text or accessible names

### Recommendations
- Include a `<main>` tag to clearly define the primary content area and improve navigability for screen reader users.
- Add aria-label attributes to buttons and the `<main>` section to provide meaningful context for assistive technologies.