# Arham · The Data Series

Shaik Arham Saquib's cinematic portfolio for business intelligence, data analytics, reporting and application support opportunities in Dublin and Ireland.

A static HTML/CSS/JavaScript site, hosted at https://shaikarham.github.io/arham-portfolio/.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000. No dependencies or build step are needed.

## Update content

- `portfolio-data.js`: five project descriptions, demo/code links, evidence and career-season content.
- `index.html`: professional introduction, skills, recognition, education and contact details.
- `style.css`: responsive streaming-inspired visual design and light/dark themes.
- `app.js`: profile views, opening sequence, project dialogs, intro chapters, season tabs and theme controls.
- `assets/`: the existing CV, portrait, certificate, practicum paper and project screenshots.

The viewer selector changes section/project ordering, not qualifications or results. Session storage remembers the selected view and theme. There are no analytics, contact-form submissions or backend services.

## Projects and evidence

OpsResolve AI and the co-authored DCU energy practicum appear alongside three new October 2026 fictional-data demonstrations: Customer Lens, Workforce Atlas and Report Relay. Demo figures are sample statistics, not commercial improvements. The analytics dashboards do not claim to be Power BI `.pbix` implementations.

Enterprise role titles and dates are preserved from the previous portfolio. Education is presented without grades. The practicum is credited as co-authored and research limitations are explicit.

## Accessibility

Native dialogs support Escape and modal focus handling. Buttons have visible keyboard focus states. Reduced-motion preference disables animations and smooth scrolling. The intro is skippable. Core professional information and project links remain available without JavaScript.

## Design reference

The cinematic streaming-portfolio concept was requested with [Sushmita Dasari's Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series) as a reference. This implementation is original HTML/CSS/JavaScript and does not reuse that repository's source code, photos or personal content. It is not affiliated with a streaming platform.

## Dublin journey edition

Original SVG artwork provides a composite Dublin skyline (including a Spire silhouette, Georgian streetscape and classical frontage), Ha'penny/Samuel Beckett bridge-inspired crossings, a campus-inspired DCU scene and a Docklands skyline. These are illustrative compositions, not geographic maps or exact campus elevations.

The Liffey-inspired chapter route links introduction, experience, DCU, projects and contact. The DCU section links directly to the research panel and paper. Viewer profiles retain their emphasis while preserving all sections.

`app.js` updates decorative scene state and small parallax offsets through requestAnimationFrame, using a passive scroll listener. The navigation remains native anchor scrolling with no scroll interception. Reduced-motion preferences and the visible Motion control disable decorative movement. Mobile breakpoints simplify the composition. Theme switching changes the blue-hour sky to a daylight palette.

Artwork: `assets/dublin/`. Interface additions and overrides appear in the Dublin edition block of `style.css`.


## Foreground film edition

The introductory Dublin film section replaces decorative landmark backgrounds. The Spire chapter embeds POPtravel’s original Dublin city walk from the published O’Connell Street chapter at 1:20:00. The DCU chapter embeds the official DCU Campus Tour - English (DCU International Academy). Those videos are neither downloaded nor edited: their reuse licence has not been verified, and exact shot boundaries are not visually verified. Original source links remain visible if embedding is unavailable. Players load only after a visitor clicks Play and stop when the film section leaves the viewport or another scene is selected.

The bridge chapter uses the user-provided 12-second Samuel Beckett Bridge video by Luciann Photography, Pexels asset 4003029. Source: https://www.pexels.com/video/drone-footage-of-samuel-beckett-bridge-4003029/ . Licence: https://www.pexels.com/license/ . Resized to 1280px, compressed, audio omitted. No endorsement is implied. The local bridge film can be scrubbed by scrolling or the labelled slider, or played manually. Reduced motion and Motion off use manual controls with no extended scroll section.

This is a hybrid foreground-video edition, not a completed continuous Spire-to-DCU scroll film. Creating that exact experience still requires appropriately licensed downloadable footage for those two locations.
