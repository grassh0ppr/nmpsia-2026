# NMPSIA Website

Website for the New Mexico Public Schools Insurance Authority (NMPSIA).

## Project Structure

```
nmpsia-2026/
│
├── .gitignore
│
├── HTML Pages
│   ├── index.html                    # Homepage
│   ├── about.html
│   ├── accessibility.html
│   ├── archived-premiums.html
│   ├── auth-release-health-info.html
│   ├── behavioral-health.html
│   ├── benefits.html
│   ├── board-login.html
│   ├── change-password.html
│   ├── contact-us.html
│   ├── covid-19.html
│   ├── district-contacts.html
│   ├── download-center.html
│   ├── employee-enrollment.html
│   ├── employer-enrollment.html
│   ├── employer-trainings.html
│   ├── enrollment-tutorials.html
│   ├── flood-relief.html
│   ├── mobile-app.html
│   ├── mobile-app-privacy.html
│   ├── natural-disaster-aid.html
│   ├── plan.html
│   ├── premiums.html
│   ├── procurements.html
│   ├── reset-password.html
│   ├── risk.html
│   ├── search.html
│   ├── support.html
│   ├── transparency-rule.html
│   ├── wellness.html
│   └── wildfire-relief.html
│
├── images/                           # Image assets
│   ├── *.jpg                         # JPG images
│   └── *.png                         # PNG images
│
├── scripts/                          # JavaScript files
│   ├── components/                   # Reusable components
│   │   ├── applying-life-ltd-component.js
│   │   ├── board-meeting-minutes.js
│   │   ├── board-meeting-packets.js
│   │   ├── board-members-component.js
│   │   ├── carrier-contacts-component.js
│   │   ├── carriers/                 # Carrier-specific components
│   │   │   ├── bcbs-dental-component.js
│   │   │   ├── bcbsmed-component.js
│   │   │   ├── cvscaremark-component.js
│   │   │   ├── davis-component.js
│   │   │   ├── delta-component.js
│   │   │   ├── lantern-component.js
│   │   │   ├── pres-component.js
│   │   │   └── ucdental-component.js
│   │   ├── docs-forms-component.js
│   │   ├── dom-partner-imputed-income.js
│   │   ├── find-a-provider.js
│   │   ├── footer/                   # Footer components
│   │   │   ├── footer-sitemap.css
│   │   │   └── footer-sitemap.js
│   │   ├── navbar/                   # Navigation components
│   │   │   └── webflow-navbar-component.js
│   │   ├── procurements/             # Procurement components
│   │   │   ├── active-component.js
│   │   │   ├── all-component.js
│   │   │   └── closed-component.js
│   │   ├── risk/                     # Risk management components
│   │   │   ├── common-forms.js
│   │   │   ├── cybersecurity-info.js
│   │   │   ├── in-person-trainings.js
│   │   │   ├── online-trainings.js
│   │   │   ├── property-liability.js
│   │   │   ├── public-use-schools.js
│   │   │   ├── request-certificate.js
│   │   │   ├── risk-training.js
│   │   │   ├── stop-it-content.js
│   │   │   ├── training-contacts.js
│   │   │   └── workers-comp.js
│   │   ├── rules-component.js
│   │   ├── stat-reporting-component.js
│   │   └── wellness/                 # Wellness program components
│   │       ├── be-your-best-self.js
│   │       ├── behavioral-health.js
│   │       ├── dental-health.js
│   │       ├── diabetes-mgmt.js
│   │       ├── ergonomic-health.js
│   │       ├── eye-health.js
│   │       ├── go-back-btn.js
│   │       ├── gym-membership.js
│   │       ├── hypertension-mgmt.js
│   │       ├── newsletters-healthkits.js
│   │       ├── reproductive-health.js
│   │       ├── telehealth-virtual.js
│   │       ├── weight-mgmt.js
│   │       ├── wellness-ambassador.js
│   │       └── wellness-by-carrier.js
│   ├── data/                         # Data files
│   │   └── search-index.json         # Search index data
│   ├── downloadCenter.js
│   ├── health-info.js
│   ├── homepage-news.js
│   ├── main.js                       # Main application script
│   ├── meetingsData.js
│   ├── risk-premium.js
│   ├── search-engine.js
│   ├── sidebar-navigation.js
│   ├── sign_in_training.js
│   └── wellness-news.js
│
└── css/                           # CSS stylesheets
    ├── district-contacts.css
    ├── footer.css
    ├── form.css
    ├── main.css                      # Main stylesheet
    ├── queries.css                   # Media queries
    └── webflow_navbar/               # Webflow navbar styles
        ├── css/
        │   ├── normalize.css
        │   ├── webflow-navbar.css
        │   └── webflow.css
        ├── images/
        │   ├── favicon.ico
        │   ├── NMPSIA-logo-white.png
        │   └── webclip.png
        ├── index.html
        └── js/
            └── webflow.js
```

## Key Directories

- **HTML Pages**: Root-level HTML files for different pages of the website
- **scripts/components/**: Modular JavaScript components organized by feature area (carriers, footer, navbar, procurements, risk, wellness)
- **scripts/data/**: JSON data files used by the application
- **css/**: CSS stylesheets including main styles and Webflow navbar styles
- **images/**: Image assets used throughout the site

## Component Organization

Components are organized by functional area:

- **carriers/**: Insurance carrier-specific components
- **footer/**: Footer navigation and sitemap components
- **navbar/**: Navigation bar components
- **procurements/**: Procurement-related components
- **risk/**: Risk management and training components
- **wellness/**: Wellness program components
