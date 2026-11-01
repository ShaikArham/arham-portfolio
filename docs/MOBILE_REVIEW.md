# Mobile review — 1 November 2026

Changes made before portfolio sharing:

1. Replaced golden hair lighting with neutral black hair in all four character assets.
2. Redrew laptop support hand with four fingers and a visible thumb; preserved left ring-finger band.
3. Removed the decorative star and ambient video responsible for unwanted green visual elements; changed progress indicator to violet.
4. Removed public Motion on/off control and stale stored opt-out. Motion runs by default and respects the device's reduced-motion accessibility setting.
5. Enabled sticky laptop-to-DCU scroll animation on phone widths.
6. Separated hero artwork and copy to prevent overlap.
7. Replaced fixed mobile hero height with content-driven layout and safe viewport units for the scroll stage.
8. Reduced navigation crowding and enlarged controls to touch-friendly sizes.
9. Increased mobile text and contact-field sizes; used 16px inputs to avoid iOS focus zoom.
10. Improved contact-pill, menu and dialog-title contrast; preserved full DCU photo aspect ratio.

Validation: TypeScript and Vite production build; source/anchor/assets/CSP checks. Browser viewport checks at 320px, 390px and 430px. Mobile menu, all five project selections, case-study dialog and scroll reveal exercised. No horizontal document overflow in these viewport checks. Local QA frame is excluded from production.

Limits: viewport checks use the available Chromium browser, not a physical iPhone or Safari. Real-device Safari rendering and contact-email delivery still need confirmation. Do not claim a guaranteed 100/100 score or confirmed inbox delivery from these checks.
