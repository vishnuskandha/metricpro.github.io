# MetricPro Website

[![CI](https://github.com/vishnuskandha/metricpro.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/vishnuskandha/metricpro.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Static marketing website for **MetricPro**, a Customer Feedback System that helps
service managers turn customer feedback into quantifiable insights, address
service gaps, and increase customer satisfaction through systematic measurement.

## Live Site

https://metricpro.github.io/

## Features

- Single-page static site (HTML, CSS, JavaScript) - no build step or framework
- Responsive layout built with the Tailwind CSS Play CDN
- Interactive sample report charts powered by Chart.js
- Request Demo contact form (Formspree)
- Mobile navigation, help dialog, and smooth-scrolling section navigation
- Accessibility: skip link, keyboard-friendly dialog, focus styles, and
  `prefers-reduced-motion` support
- Semantic HTML with `header`/`main`/`section`/`footer` landmarks

## Project Structure

```
metricpro.github.io/
├── index.html            # Single-page site markup
├── assets/
│   ├── css/custom.css    # Custom styles and accessibility helpers
│   └── js/
│       ├── main.js       # Navigation, dialog, form, and scroll behavior
│       └── charts.js     # Chart.js sample report charts
├── .github/workflows/    # CI: HTML validation
├── attached_assets/      # Unreferenced editor attachment (kept for reference)
├── .replit               # Replit workspace configuration
└── replit.md             # Replit notes
```

## Run Locally

Any static file server works. For example:

```bash
# Python
python -m http.server 5000
# or Node
npx serve .
```

Then open http://localhost:5000 in your browser. No build step is required.

## Deployment

The site is deployed to GitHub Pages from the `main` branch. Pushing to `main`
publishes automatically.

## Validation

```bash
npx --yes html-validate index.html
```

This runs automatically in CI on every push and pull request.

## License

[MIT](LICENSE) - Copyright (c) 2026 Vishnu Skandha
