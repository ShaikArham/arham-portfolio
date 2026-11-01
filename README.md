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


## Interactive Dublin exhibit

The foreground city uses original 3D coordinates projected into a native canvas. Drag/keyboard orbit, three camera presets, zoom and reset work without third-party runtime libraries. It is a stylised composition rather than a geographical model. Rendering pauses when off-screen or when the tab is hidden. Reduced motion and the Motion control use single-frame updates. The project shelf uses original CSS 3D covers based on the user's own project images, with native buttons, arrows and keyboard selection.

Campus photo: The John and Aileen O`Reilly Library, by SSCOhA, 26 November 2016. Source https://commons.wikimedia.org/wiki/File:The_John_and_Aileen_O%60Reilly_Library.jpg . CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/ . The resized WebP and displayed crop remain under that licence; attribution appears beside the image.


## Rotating signal edition

The city model and its script were removed at Arham’s request. The foreground graphic now uses a two-dimensional rotating typographic ring, with Investigate / Explain / Deliver controls linked to the corresponding portfolio chapters. Motion off, reduced motion, hover and focus pause the rotation. The DCU section uses Arham’s supplied personal campus photograph, without visual modification.

Primary address: https://arham-bi.vercel.app/ . The previous Vercel address remains attached to the same project for existing links.

## Character carousel edition
The hero side panel is React + TypeScript, built with Vite and Tailwind utilities. Lucide supplies the arrow icons. Run `npm ci` then `npm run build`. The checked-in `carousel-build` supports the existing static publish pipeline. Four optimized WebP assets preserve the supplied Figma reference characters. Original image URLs remain in `src/main.tsx`; imagery is decorative, not a representation of employment or research. No license ownership is claimed for the supplied artwork.
Manual checks: next/previous wrapping, rapid-click lock, keyboard arrows, reduced motion, local image delivery and DCU image preservation.

## Personal edition
- Replaced the third-party reference figurines with one original illustrated avatar based on Arham's supplied face photograph. All four story positions use this consistent personal character.
- Added the existing real suit photograph behind the hero copy, with theme-aware contrast overlays.
- Added labelled, required contact fields with native email validation, limits, a topic selector, email draft preparation and copy fallback. The static site does not store form content or claim delivery. No mail service credentials are configured.
- Preserved the supplied DCU campus photograph, factual project descriptions and short production address.
- Mobile stacking, keyboard controls, reduced motion, local optimized artwork and accessible form status remain supported.

Avatar generated with the built-in image-generation tool. Prompt: Create a polished stylized 3D figurine of this exact adult man for his professional data analytics portfolio. Preserve his recognizable face, warm brown skin, thick wavy black hair, dark eyes and neatly trimmed beard and moustache. Full body standing, front three-quarter view, friendly confident subtle smile. Tastefully oversized head in premium collectible character style, adult proportions, navy business suit, white open-collar shirt, clean dark shoes, holding a closed slim laptop at his side. No glasses, no hat, no words, no logos, no background, true transparent alpha. Entire figure fully inside canvas with generous padding, studio lighting. This is an illustrated avatar based on the supplied real person, not photorealistic.

Source and optimized asset: `src/main.tsx`, `assets/arham-avatar.webp`. Only the derived avatar is published. The private selfie reference is not included in the repository.

## Cinematic chapter edition
Mainframe reference adapted to Arham's personal portfolio. Four full-screen chapters reposition the original avatar, change the palette and text, and support touch swipes plus previous/next controls. The supplied remote video supplies a subdued, blurred ambient layer with mouse-driven seek queuing. It never autoplays. Typewriter and entrance effects respect reduced motion. The portfolio's navigation and factual sections are retained.

Contact now submits JSON over HTTPS to FormSubmit from the page. Required fields, native email validation, a honeypot, duplicate-submit protection, a timeout and retry-preserving error feedback are included. Delivery requires the recipient to activate the FormSubmit form. Submission acceptance is not proof of inbox delivery. Privacy text identifies FormSubmit. No email app is launched.

The supplied 4-second reference clip is mirrored locally at `assets/hero-motion.mp4` to avoid third-party playback failures. Original supplied source: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4 . It remains a blurred decorative layer, not a representation of Arham.

## Four-pose character set
The hero now uses four separately generated illustrations of the same original character based on Arham: welcoming with an open hand, working on a laptop, explaining with a notebook and raised finger, and waving. Styling follows the supplied soft textured animation reference. A lighting-only revision adds subtle studio fill to the face and hands, retaining the natural warm brown skin tone. Each chapter preloads and crossfades its own pose.
Generated with the built-in image-generation tool from the supplied identity and style references. Final project assets: assets/arham-welcome.webp, assets/arham-build.webp, assets/arham-explain.webp, assets/arham-wave.webp. Prompt direction: consistent face, wavy black hair, beard, navy felt blazer and ivory shirt; distinct chapter gestures; transparent backgrounds; slightly brighter facial midtones and softer shadows, without changing identity.

## Luminous motion edition
Replaced muted hero tones with pearl blue, mint, violet and warm ivory. Left and right edge arrows, keyboard arrows, touch swipes and chapter dots navigate four original poses. The active character gently floats and rotates; these are illustrated 2D assets with depth styling, not a fabricated 360-degree model. Pearl section surfaces, revised contrast and restrained scroll-linked research/award transitions extend the design down the page. Default theme is light unless the visitor explicitly saved dark mode. Motion off and reduced-motion preferences disable optional effects; content stays readable without animation. No career claims or results were added.
