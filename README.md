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


## Dublin Studio edition

Original visual redesign informed by https://netflix-portfolio-kohl-beta.vercel.app/ : oversized typography, a framed portrait, episode-style sections and project posters. Its code, claims, images and personal content are not copied. Arham’s version uses emerald and copper, his actual portrait, local Dublin-inspired landmark artwork, DCU research and the existing five evidenced projects. No affiliation with Netflix is implied.

No YouTube players, links or videos are included. The footage edition has been removed from the published tree. The hero is immediately usable without a mandatory opening animation or viewer selection. Profiles, theme switching, motion settings, project detail dialogs, career tabs, local paper/CV and contact links remain available.


## Production collection edition

Design review used MotionSites’ public portfolio gallery and the freely available Shelf Hero prompt as inspiration for a browsable collection, distinctive project covers and restrained depth effects. No paid source code or third-party artwork was copied. Native pointer, page scrolling and keyboard controls are retained.

The five project records retain their evidence and limits. OpsResolve appears first and Explainable Energy second in All work. Category filters expose application support, research and analytics/reporting. Direct demo, paper and source links sit beside each case study. The page uses one fixed reading order, with no persona gate, hidden project rail or floating bottom navigation.

Run `node scripts/build.mjs` for the static production build. It runs the checks and copies only the web files and retained assets into `dist/`. Unused footage, source scripts, uploads and local secrets are excluded. `vercel.json` configures the build, static output, content security policy and response headers.

Deployment target: Vercel production, from this repository. GitHub Pages remains a fallback. Browser verification and deployment status must be checked after release; a passing build alone does not prove the site is live or certify accessibility.


## Live Vercel release

Production: https://arham-portfolio-topaz.vercel.app/ . Project: arham-portfolio, owned by the user’s Vercel workspace. The release was uploaded through the authorized Vercel connection from reviewed source. Vercel runs the checked static build. Automatic GitHub deployments are not connected: Vercel requires a separate GitHub Login Connection before Git linking can be enabled.

Verified: public HTTP 200, local JavaScript/portrait/paper delivery, custom HTTP 404, response security headers, rendered project collection, filters and case-study dialogs. Vercel’s initial runtime error scan returned no errors. No external log drains are configured. This does not substitute for a screen-reader audit or physical-device testing.
