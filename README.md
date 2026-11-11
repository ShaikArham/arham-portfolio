<div align="center">

# ARHAM / THE DATA SERIES

### Investigate the signal. Explain the evidence. Deliver the next step.

**An interactive portfolio at the intersection of business intelligence, data analytics and enterprise application support.**

[**Explore the live experience**](https://arham-bi.vercel.app/) · [**View my CV**](assets/Shaik_Arham_Saquib.pdf) · [**Browse the projects**](#featured-work) · [**Get in touch**](mailto:sarhamsaquib@gmail.com)

![Status](https://img.shields.io/badge/Portfolio-Live-0b7667?style=flat-square) ![Stack](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-1f2937?style=flat-square) ![Deployment](https://img.shields.io/badge/Hosting-Vercel-111827?style=flat-square) ![Research](https://img.shields.io/badge/DCU-MSc%20Data%20Analytics-633c91?style=flat-square)

*Shaik Arham Saquib · Dublin, Ireland*

</div>

---

## 01 / THE IDEA

**This isn't a list of skills. It's an invitation to inspect the work.**

A hiring manager should be able to move from a claim to its evidence in a few clicks. This portfolio pairs a cinematic, chapter-based interface with case studies that explain the problem, the method, the results and the limits. The goal is to make both the engineering and the judgment visible.

My background combines **2.5+ years of enterprise BI and application-support experience at Hitachi Digital Services** with an **MSc in Computing (Data Analytics) at Dublin City University**. I'm interested in data/BI analysis, reporting, application support and operational roles where systems need to be reliable and decisions need to be explainable.

> **The principle:** A good dashboard answers a question. A dependable workflow also shows where the answer came from, what could go wrong and what happens next.

## 02 / EXPLORE THE EXPERIENCE

| Chapter | What you'll find |
| :--- | :--- |
| **Introduction** | A visual entry point to the person and the work |
| **Experience** | Enterprise reporting, ERP/application support and operational responsibilities |
| **DCU research** | Explainable forecasting and LLM-assisted energy scheduling |
| **Selected work** | Project demos, source code, methodology and evidence |
| **Recognition** | Awards and original Tines Academy certificate images |
| **Contact** | CV, professional links and a contact form |

**Start here:** [arham-bi.vercel.app](https://arham-bi.vercel.app/)

The interface uses responsive layouts, interactive project dialogs, themed presentation and reduced-motion support. Visual presentation is part of the experience, but the underlying project descriptions and limitations matter more than animation.

## 03 / FEATURED WORK

### 01 · [OpsResolve AI](https://shaikarham.github.io/opsresolve-ai/)
**Enterprise application support · Python · Incident analytics · SLA reporting**

A support-investigation workspace built around fictional operational incidents. It connects incident views, SLA analysis and troubleshooting procedures to help make investigations more systematic.

**Evidence:** 200 fictional incidents · 26 troubleshooting procedures · incident, SLA and knowledge views  
[Live demonstration](https://shaikarham.github.io/opsresolve-ai/) · [Source code](https://github.com/ShaikArham/opsresolve-ai)

### 02 · Explainable Energy
**DCU MSc practicum · XGBoost · SHAP · LLM-assisted scheduling**

Co-authored research into explainable residential energy forecasting and scheduling. The approach combines an XGBoost forecast, SHAP explanations and a Llama 3 scheduling component.

**Evidence:** Test R² **0.651** in the evaluated research setup · co-authored with Bryan Masterson · supervised by Dr. Muhammad Salman Pathan  
[Read the practicum paper](assets/Practicum_Paper.pdf)

### 03 · [Customer Lens](https://shaikarham.github.io/customer-segmentation-rfm/site/)
**Customer analytics · Python · RFM segmentation · Data validation**

A reproducible retail-analysis pipeline that validates transactions, handles refunds in integer cents and produces transparent recency/frequency/monetary segments.

**Evidence:** 3,658 fictional input orders · 569 eligible customers · 12 calculation/reconciliation tests  
[Live demonstration](https://shaikarham.github.io/customer-segmentation-rfm/site/) · [Source code](https://github.com/ShaikArham/customer-segmentation-rfm)

### 04 · [Workforce Atlas](https://shaikarham.github.io/hr-workforce-analytics/site/)
**HR analytics · Headcount reconciliation · Workforce reporting**

A reporting case study that makes headcount, turnover and tenure metrics inspectable, with reconciliation between opening employees, hires, exits and closing employees.

**Evidence:** 800 fictional employee records · **536 + 125 − 46 = 615** closing employees · 13 tests  
[Live demonstration](https://shaikarham.github.io/hr-workforce-analytics/site/) · [Source code](https://github.com/ShaikArham/hr-workforce-analytics)

### 05 · [Report Relay](https://shaikarham.github.io/bi-reporting-automation/site/)
**BI automation · SQL · SQLite · Quality gates**

A CSV-to-SQLite reporting workflow with quarantined invalid rows, control totals and independent Python reconciliation of SQL reporting outputs. Failed quality checks preserve prior reports.

**Evidence:** 405 fictional input rows · 399 accepted · 6 quarantined · 15 tests  
[Live demonstration](https://shaikarham.github.io/bi-reporting-automation/site/) · [Source code](https://github.com/ShaikArham/bi-reporting-automation)

<details>
<summary><strong>Read the evidence boundaries</strong></summary>

The portfolio demos use fictional or synthetic data. They are not connected to Hitachi production systems. Customer Lens is descriptive segmentation, not a causal uplift model. Workforce Atlas does not predict individual attrition. Report Relay is a static snapshot, not a live Oracle integration. OpsResolve suggestions require human review. The energy practicum's measured performance is specific to its experimental setup and does not imply guaranteed household savings.

</details>

## 04 / WHAT I BRING

| Enterprise experience | Research and analytics | How I work |
| :--- | :--- | :--- |
| Oracle ERP / BI support, SQL, PL/SQL, reporting and data validation | Python, machine learning, XGBoost, SHAP and reproducible analysis | Investigate incidents, reconcile evidence, document assumptions and communicate next steps |
| Application and operational troubleshooting | Metric definitions, data quality and analytical reporting | Separate demonstrated results from hypotheses and limitations |

My portfolio is deliberately oriented around **traceability**: inputs, assumptions, checks, outputs and next actions. That approach comes from working with business-critical reporting and support workflows, not just building attractive dashboards.

## 05 / UNDER THE HOOD

```text
arham-portfolio/
├── index.html                 # Main chapters and semantic page structure
├── style.css / mobile.css     # Design system and responsive presentation
├── app.js                     # Interactive site behavior
├── portfolio-data.js          # Project evidence and professional timeline
├── src/                       # React + TypeScript hero/carousel source
├── carousel-build/            # Compiled client assets
├── assets/                    # CV, certificates, visuals and supporting media
│   └── portfolio-notifications.js
├── notifications/app.py       # Flask activity-summary service
├── scripts/                   # Build and validation checks
├── .github/workflows/         # Deployment and notification checks
└── vercel.json                # Static build and security headers
```

**Frontend:** HTML, CSS, JavaScript, React 19, TypeScript, Vite, Tailwind CSS and Lucide icons.  
**Delivery:** Static production build on Vercel; GitHub Pages mirror.  
**Notifications:** Browser-side event collection, Flask on Render and Resend email delivery.

### Run locally

```bash
git clone https://github.com/ShaikArham/arham-portfolio.git
cd arham-portfolio
npm ci
npm run dev
```

For the checked production output:

```bash
npm run build
```

The build performs TypeScript/Vite compilation and the repository's static checks before assembling `dist/`. The Vercel configuration deploys that output directory.

## 06 / VISITOR ACTIVITY, WITH BOUNDARIES

The optional visitor-activity system helps me understand **which portfolio material visitors chose to explore**, not who they are.

- **Recorded:** Meaningful client-reported clicks such as project details, certificate selections, CV links, introduction controls and external professional links. Activity emails include a relative-time sequence and the clicked labels when available.
- **Not recorded as proof:** Simply opening the page, passive scrolling, reading the full CV, watching an entire video or identifying a unique person.
- **Location:** An *unverified public-IP network estimate*. The city may describe an ISP or VPN exit rather than the visitor's real location. No GPS location is requested.
- **Delivery:** The tracker attempts a consolidated summary per browser-tab visit. Deduplication is best-effort, not guaranteed across multiple server instances. Email acceptance is not the same as confirmed inbox delivery.
- **Security:** Provider credentials are configured as backend environment variables, not committed to the frontend repository. The Vercel content security policy explicitly permits the notification endpoint.

The email notification system is **not** a hiring assessment or a source of reliable personal identity.

## 07 / DESIGN & ACCESSIBILITY

This portfolio is intended to be memorable **without hiding the information**. The experience includes a chapter-based visual language, responsive layouts, keyboard-accessible controls, native dialogs, visible focus states and reduced-motion behavior.

The Dublin-inspired artwork is illustrative, not a geographical map. The portfolio uses original interface code and does not claim affiliation with Netflix or other referenced visual inspirations.

**Accessibility status:** These are implementation features, not a claim of WCAG certification or a completed screen-reader/device audit.

## 08 / RELEASE & MAINTENANCE

| Destination | Address | Purpose |
| :--- | :--- | :--- |
| **Primary production** | [arham-bi.vercel.app](https://arham-bi.vercel.app/) | Share with hiring managers |
| GitHub Pages | [Portfolio mirror](https://shaikarham.github.io/arham-portfolio/) | Alternative static host |
| GitHub | [Source repository](https://github.com/ShaikArham/arham-portfolio) | Review implementation and changes |

**Release checklist:** Build passes; production deployment reaches `READY`; CV PDF and both Tines images load; project dialogs and links function; mobile layout is reviewed; notification emails are checked with clearly identified synthetic tests. A successful deployment alone does not certify end-to-end browser behavior.

**Current supporting documents:** [CV](assets/Shaik_Arham_Saquib.pdf) · [Tines 3B Fundamentals](assets/tines-3b-fundamentals.png) · [Tines Monitor and Govern](assets/tines-monitor-govern.png) · [Research paper](assets/Practicum_Paper.pdf)

---

<div align="center">

### LET'S TALK ABOUT THE WORK.

If you're hiring for **BI / Data Analyst, Reporting Analyst or Application Support** roles in Dublin, I'd welcome a conversation about the problems your team needs to solve.

[**Explore the portfolio**](https://arham-bi.vercel.app/) · [**Read the CV**](assets/Shaik_Arham_Saquib.pdf) · [**Email me**](mailto:sarhamsaquib@gmail.com)

<sub>Built to be explored. Grounded in evidence. Clear about limitations.</sub>

</div>
