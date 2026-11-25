# Dimension Fall — A GlitchWorks Original

A neon-lit endless falling arcade game about crossing realities. Move through shifting obstacle courses, swap dimensions to change which barriers are solid, collect GlitchCoins and spend your run's phase energy on a destructive dash.

## Play
- **A / D or ← / →** — steer. Touch-screen players can drag horizontally.
- **Space** — shift between Prime (cyan) and Alternate (magenta) reality. Barriers belonging to your current reality are solid; neutral barriers are always solid. Shift has a short cooldown.
- **Shift** — phase dash. A charged dash breaks eligible dimension barriers; neutral barriers stay dangerous.
- **Escape** — pause; **R** — restart after a run; **M** — mute (keyboard mapping reserved).
- On mobile, use drag plus the on-screen action buttons. The portrait arena has no page-scroll gestures.

## Features
- Phaser-powered, delta-time simulation; accelerating descent, inertial steering, moving and rotating barriers, collectible coins, dimension-dependent collisions, shift cooldown, phase dash and locally saved best/coins/run count.
- Six selectable arcade modes (Endless, Hardcore, Zen, Time Trial, Daily Dimension, Portal Rush), animated dimension-themed title screen, responsive mobile controls, local records, character unlock/equip shop, achievements overview and settings.
- Eight named environment phases are reflected in run HUD/progression. A compact set of original geometric graphics is rendered in-engine; no third-party artwork or music is required.
- Versioned localStorage save, PWA manifest and a cache-first/offline service worker. No account, backend, paid service or environment variables.

## Technology and structure
React + TypeScript + Vite for the interface; Phaser 3 for the canvas simulation; CSS for the arcade UI. `src/game.ts` owns the scene, motion, procedural gap rows and collision rules. `src/App.tsx` owns menus, interface overlays and local persistence. `public/` contains the web manifest, original SVG icon and service worker.

## Development
Requires Node 22 and npm.

```sh
npm ci
npm run dev          # Vite on 0.0.0.0:5173
npm run typecheck
npm test
npm run build        # production files in dist/
npm run preview
```

## Netlify deployment
The repository root is the base directory. Netlify settings are already declared in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node: `22`

To deploy: sign in to Netlify → Add new site / Import an existing project → choose GitHub and authorize the repository → select this repository and deployment branch → confirm build command and publish directory → deploy → verify the generated site URL → enable automatic deployments for subsequent pushes. The included SPA rewrite supports direct route refresh. This project has not been deployed from this repository.

## Save data, PWA and online features
Save key `df-save` stores a version-1 validated local profile (coin balance, best score, games, unlocked/equipped characters and settings). Storage is device/browser-local and does not sync. Reset is available in Settings. The service worker caches the application shell and same-origin resources after successful fetches, and removes older cache versions on update. Installability/offline capabilities depend on browser support and HTTPS (localhost is also allowed). The leaderboard is explicitly local; global records need a separately configured backend and are not simulated.

## Known limitations
This implementation focuses on a coherent, replayable core rather than presenting unfinished feature screens as complete. The obstacle generator uses a single navigable gap template with varied widths, movement and rotation; advanced boss attacks, validated multi-step route planning, ten active power-ups, full tutorials, persistent history analytics, rich audio, import/export, high-resolution raster app icons and the full 30-achievement catalogue are not implemented yet. Time Trial/Portal Rush/Daily Dimension currently select distinct mode labels and presentation, but do not yet have fully distinct objective systems; Daily is not yet seeded at the simulation level. Some settings and cosmetic tabs are presentational. Local scores are not shared. Optional external Google Fonts fall back to local system fonts when offline.

## Credits
Original game identity and procedural vector/canvas visuals by GlitchWorks. No external game assets bundled. Optional fonts are served by Google Fonts when online.
