# Oluwatobi Ikuesan | Portfolio

A minimal, grey toned portfolio built with **React**, **Vite**, **Tailwind CSS v4** and **daisyUI 5**.

## Quick start

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build into dist/
npm start        # serve dist/ plus the /api/chat endpoint (needs XAI_API_KEY)
```

## Replace the placeholder photo

The hero uses `public/images/profile.svg` as a stand in. Either:

1. drop your photo into `public/images/` (a 4:5 portrait, around 1200 x 1500 px, works best), then
2. update `image` in `src/data/profile.ts`, for example `image: "/images/profile.jpg"`.

The photo is shown in greyscale and fades to full colour on hover, so any photo blends with the palette.

## Edit the content

Everything you see on the page lives in **`src/data/profile.ts`**: name, intro, about text, stats, skills,
projects, social links and the contact email.

Each project shows as a flip card: the front has the title, company and tags, the back has the summary,
optional `highlights` (a list of bullet points) and a **Visit site** button when the project has a `link`.
Remember to replace `hello@example.com` with your real address.

## Design system

| Piece | Where | Notes |
| --- | --- | --- |
| Themes | `src/index.css` | `graphite` (light) and `graphite-dark`, pure greys only. Follows the system setting and remembers the toggle. |
| Type scale | `src/index.css` | Fluid `text-display`, `text-headline`, `text-title`, `text-lead`, `text-eyebrow` utilities sized with `clamp()`. |
| Fonts | `index.html` | Inter Tight (display), Inter (body), Instrument Serif (italic accents), JetBrains Mono (labels). |
| Motion | `src/index.css` | Words rise into place, the portrait floats, sections drift up on scroll. Disabled for reduced motion users. |

daisyUI components in use: navbar, menu, dropdown, swap (theme toggle), btn, badge, status, card (project flip cards), stats,
fieldset, input, textarea, alert, chat, loading and footer.

## Structure

```
src/
  data/profile.ts      content
  component/           Navbar, Hero, About, Skills, Work, Contact, Footer and small helpers
  page/                Layout, Home, Assistant (/ai), NotFound
  util/openai.ts       client for the server side /api/chat proxy
server.js              Express server for production
```
