# Competitor Benchmark Tool — Frontend (v1)

A React + Vite frontend for tracking broker market share, broking-industry
parameters, competitor news, and MF/SIF data. Right now it runs entirely on
mock data with a data layer that already behaves the way you described:
each dataset auto-refreshes once in the first week of the month (news
refreshes hourly instead), and every page has a manual **Refresh now** button.

## A–Z: run it locally in VS Code

1. Install **Node.js LTS** (v18 or newer) from nodejs.org if you don't have it.
   Check with `node -v` in a terminal.
2. Unzip this project and open the folder in VS Code (`File -> Open Folder`).
3. Open a terminal in VS Code (Ctrl+`) and run:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser.
6. You'll land on the **Dashboard**. Use the left sidebar to visit:
   - NSE Active Clients
   - Broking Industry Data
   - Competitor News
   - MF & SIF Data
7. Each page shows "Last updated" and a "Refresh now" button - click it to
   force a re-fetch (currently reloads the bundled mock data after a short
   simulated delay, standing in for a real network call).
8. To stop the server, go back to the terminal and press Ctrl+C.
9. To build a production bundle (static files you could host anywhere,
   including GitHub Pages later): `npm run build` -> output lands in `dist/`.

## Where your real data goes

- `src/data/mockData.js` - replace the arrays/objects here with your real
  numbers first, to get a feel for the shape (this is also the fastest way
  to drop in the Excel data you already have - export it as JSON matching
  the same field names, or write a small script to convert it).
- `src/lib/dataSource.js` - this is the layer to rewire once you have a
  real fetch job. Each dataset (`brokerLeaderboard`, `industryParams`,
  `news`, `mfSif`) has its own fetch function; swap the mock return for a
  real `fetch('/api/...')` call. The monthly/hourly scheduling logic
  (`loadDataset`, `forceRefresh`) doesn't need to change.

## Important: why real NSE/AMFI fetching needs a small backend

Browsers block direct requests to other websites' pages/Excel files unless
that site explicitly allows it (CORS). NSE, AMFI, CDSL, etc. generally
don't allow this from arbitrary frontends. So the real automated fetch
(reading the NSE "active clients" Excel, AMFI's monthly AUM data, etc.)
needs to run **server-side**, not in the browser. The plan for that phase:

1. A small Node/Express (or Python/FastAPI) backend with one endpoint per
   dataset, e.g. `/api/broker-leaderboard`, `/api/industry-params`.
2. A scheduled job (using `node-cron` in Node, or a simple cron entry if
   deployed on a server) that:
   - Runs daily during the first 7 days of each month, checks if that
     month's data has already been captured, and if not, downloads and
     parses the relevant Excel/CSV/page for each source.
   - Exposes a `POST /api/refresh/:dataset` endpoint for the manual
     "Refresh now" button to call on demand, any time.
   - Stores the parsed results (JSON is enough to start; a small SQLite or
     Postgres DB once this grows) so the frontend just reads the latest
     stored snapshot instead of re-fetching on every page load.
3. The frontend's `dataSource.js` calls those endpoints instead of the
   local mock functions - the rest of the app (hooks, pages, UI) stays
   the same because it already expects `{ data, fetchedAt, trigger }`.
4. For live push updates instead of polling, add a WebSocket (or
   Server-Sent Events) connection from the backend so the frontend updates
   the moment a scheduled fetch completes, without a page refresh.
5. For free hosting: the **frontend** (this app, built with `npm run
   build`) can go on GitHub Pages, Netlify, or Vercel's free tier. The
   **backend + scheduler** needs somewhere that keeps running in the
   background - Render, Railway, or Fly.io all have small free/low-cost
   tiers suitable for a lightweight cron + API like this. GitHub Pages
   alone can't run the backend since it only serves static files.

## A note on scraping NSE / AMFI / CDSL

Before wiring up the real scraper, check each source's terms of use for
automated access - some publish an official bulk-data/API download page
that's much more reliable than scraping an HTML page. NSE, for instance,
publishes several reports as direct file downloads (Excel/CSV) rather than
requiring page-scraping - pointing your fetch job at the exact file URL is
more robust than parsing rendered HTML.

## Project structure

```
src/
  data/mockData.js        - placeholder datasets (swap for your real data)
  lib/dataSource.js       - fetch + monthly/hourly scheduling + cache
  lib/useDataset.js       - React hook wrapping dataSource for pages
  components/             - Sidebar, FetchBar, StatCard, SectionPreviewCard
  pages/
    Dashboard.jsx          - home page: broker leaderboard + section previews
    ActiveClients.jsx      - full NSE active-client / market-share table
    BrokingIndustry.jsx    - 25-30 industry parameters, filterable by category
    News.jsx               - competitor news feed, hourly cadence
    MutualFunds.jsx        - MF & SIF headline stats, flow chart, top AMCs
```
