# NeoRox Games

A dark, neon blue/purple themed single-page gaming site built with React, Vite, Tailwind CSS,
and React Router. Browse a game catalog, filter/search, and go through a per-game download page
with a real 5-second countdown gate before the final download link is revealed.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  data/games.js          ← ALL game data lives here (edit this to add/update games)
  components/            ← reusable UI pieces (Header, GameCard, CountdownDownload, etc.)
  pages/
    Home.jsx             ← hero + games grid + about
    DownloadPage.jsx      ← per-game download page (route: /download/:slug)
    Legal.jsx             ← DMCA / Privacy / Disclaimer / Contact pages
```

## Adding or editing a game

Open `src/data/games.js` and add a new object to the array (or edit an existing one). Every
field is documented in the comment at the top of the file. The homepage grid and the game's
download page both read from this single array — no other file needs to change.

## Setting the real download link

Each game object has a `downloadUrl` field. Point it at your own hosting, mirror, or store page.
That is exactly the URL the "Continue to Download" button opens once the countdown finishes.

## Adding your ad code

There are now **two** countdown + ad gates in the download flow:

1. **Card gate** — opens the moment someone clicks a game card on the homepage.
   Ad slot lives in `src/components/DownloadGateModal.jsx`:
   ```html
   <div id="ad-container-gate">
     <!-- Paste AdSense code here -->
   </div>
   ```
2. **Final download gate** — shown on the game's own download page, right before the
   real file link. Ad slot lives in `src/components/CountdownDownload.jsx`:
   ```html
   <div id="ad-container">
     <!-- Paste AdSense code here -->
   </div>
   ```

Paste your Google AdSense (or other network) snippet into either or both. Each is shown for its
full 5-second countdown and never triggers a click on its own — no fake ad interactions. Both
countdowns keep ticking regardless of scrolling, and the card gate is a `position: fixed` modal,
so it stays on screen no matter how far the page behind it is scrolled.

## Notes

- No backend — the whole site is static and can be hosted on Vercel, Netlify, GitHub Pages, or
  any static host after `npm run build`.
- Update the canonical URL, Open Graph tags, and `robots.txt` sitemap URL in `index.html` /
  `public/robots.txt` once you have a real domain.
- Legal page copy in `src/pages/Legal.jsx` is placeholder text — replace with your own DMCA,
  Privacy Policy, Disclaimer, and Contact details before going live.
