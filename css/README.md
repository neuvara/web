# css

- `style.css`: every style for every page, in this order: colour and font tokens (`:root`), base elements, header and mobile menu, buttons, home hero and illustration, content blocks, process steps, contact form, audit page parts (outline card, comparison table), rankings tables, privacy page, then the 1100px and 1440px layout tiers at the end.
- `noscript.css`: loaded only when JavaScript is off, so the nav links show without the hamburger menu.

To change a colour everywhere, change its token in `:root`. Layout for large laptops is in the `@media (min-width: 1440px)` block near the bottom.
