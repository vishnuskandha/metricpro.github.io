# Security Policy

## Reporting a Vulnerability

This is a static marketing site served from GitHub Pages. It contains no
server-side code and processes no credentials directly.

If you discover a security issue, please report it privately by opening a
GitHub Security Advisory at:

https://github.com/vishnuskandha/metricpro.github.io/security/advisories/new

Please do not open a public issue for security problems. Reports are
acknowledged within 5 business days.

## Supported Versions

| Version | Supported |
| ------- | --------- |
| main    | Yes       |

## Security Notes

- The Request Demo form posts to Formspree (`https://formspree.io/...`), a
  third-party service. Form submissions are handled by Formspree's servers, not
  by this repository.
- The site loads third-party scripts and assets (Tailwind CSS Play CDN,
  Chart.js, Font Awesome, Google Fonts, metricpro.in images) from external
  CDNs. Review supply-chain risk before changing any of these URLs.
- All site content is static; there is no input that is ever executed on a
  server by this codebase.
