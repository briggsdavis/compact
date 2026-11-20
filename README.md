# compact

A visual-first Next.js site for movie-inspired dinner plans. The current build contains the home page and a front-end-only contact page. Menu and Movies are marked as coming soon. No Convex backend is connected yet.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The hero CD is rendered in CSS with layered reflective gradients, raised rings, perspective, and scroll response. The illustrations and transitions are also CSS, so the project does not need a downloaded 3D model or image assets.

## Local visual preview

If npm is unavailable, serve the static visual preview with `python3 -m http.server 4173 --directory preview` and open `http://localhost:4173`. The Next.js app remains the source project; the preview is a static front-end copy.
