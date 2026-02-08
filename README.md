# Analytics Dashboard (Next.js + TypeScript)

A bold, portfolio-ready analytics dashboard built with Next.js App Router and TypeScript. The UI highlights KPI cards, revenue trends, traffic mix, and product performance using lightweight, custom CSS.

## Features
- KPI summary cards with trend indicators
- Revenue trend bar chart
- Traffic source mix and top product performance
- Activity timeline for recent releases
- Static data module for fast demo content

## Tech Stack
- Next.js (App Router)
- TypeScript
- Custom CSS (no UI framework)
- Static export ready for GitHub Pages

## Getting Started
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Visit: `http://localhost:3000`

## Deploy to GitHub Pages
This project is configured for static export. GitHub Actions can deploy the `out/` folder.

1. Create a GitHub repo (e.g. `analytics_dashboard`).
2. Push the project to `main`.
3. In GitHub, enable Pages: **Settings → Pages → Source: GitHub Actions**.
4. The URL will be:
   - `https://YOUR_USERNAME.github.io/analytics_dashboard/`

If your repo is a user site (`USERNAME.github.io`), no base path is needed.

## Notes
This project uses mock data to keep the dashboard fast and easy to demo. Swap the data layer for a real backend when needed.
