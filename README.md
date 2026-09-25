<div align="center">

# MetricPro Website

**Static marketing website for a customer feedback system, with interactive sample charts, demo request form, and responsive navigation.**

`HTML · CSS · JavaScript · Chart.js`

</div>


<!-- README polish: repository metadata badges -->
<p>
  <a href="https://github.com/vishnuskandha/metricpro.github.io"><img alt="GitHub stars" src="https://img.shields.io/github/stars/vishnuskandha/metricpro.github.io?style=for-the-badge&logo=github&label=Stars"></a>
  <a href="https://github.com/vishnuskandha/metricpro.github.io/fork"><img alt="GitHub forks" src="https://img.shields.io/github/forks/vishnuskandha/metricpro.github.io?style=for-the-badge&logo=github&label=Forks"></a>
  <a href="https://github.com/vishnuskandha/metricpro.github.io/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/vishnuskandha/metricpro.github.io?style=for-the-badge&logo=github&label=Issues"></a>
  <a href="https://github.com/vishnuskandha/metricpro.github.io/commits"><img alt="Last commit" src="https://img.shields.io/github/last-commit/vishnuskandha/metricpro.github.io?style=for-the-badge&logo=git&label=Updated"></a>
</p>
<!-- End README polish -->

[![CI](https://github.com/vishnuskandha/metricpro.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/vishnuskandha/metricpro.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Static marketing website for **MetricPro**, a Customer Feedback System that helps
service managers turn customer feedback into quantifiable insights, address
service gaps, and increase customer satisfaction through systematic measurement.

## Live Site

https://vishnuskandha.github.io/metricpro.github.io/

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
