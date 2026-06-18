# ZIA UL HASSAN // Cyberpunk Portfolio

A full-fledged, 3D-animated, cyberpunk-themed personal portfolio for **Muhammad Zia Ul Hassan** — Mechatronics & Control Engineer, Head of Robotics & AI at Punjab Group of Colleges, Lahore.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, **Three.js (React Three Fiber)**, and **Framer Motion**.

![Tech Stack](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-r184-black?logo=three.js)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black?logo=vercel)

---

## ✨ Features

- **Live 3D hero scene** — 1,200-point particle sphere, rotating wireframe core with 3 orbital rings, 8 floating wireframe shapes (icosahedrons, torus, octahedrons)
- **Glitch text effects**, CRT scanlines, perspective grid floor, animated gradient borders, holographic shimmers, pulse glows
- **Three cyberpunk fonts** — Orbitron (display), Rajdhani (body), Share Tech Mono (labels/mono)
- **Smooth scroll navigation** with active-section tracking + mobile hamburger menu
- **Scroll progress bar**, scroll-triggered reveals, animated skill bars
- **Mobile-first responsive design** with tap-to-expand collapsible cards on small screens
- **Downloadable CV** wired up at `/EngrZiaCvup.pdf`
- **Working contact form** that opens the visitor's email client pre-filled
- **8 sections** — Hero · About · Skills · Experience · Projects · Education · Contact · Footer

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18.18+** (or **Bun 1.1+**)
- npm / pnpm / yarn / bun — any package manager works

### Install & Run Locally

```bash
# 1. Install dependencies
npm install
# or: bun install / pnpm install / yarn install

# 2. Start the dev server
npm run dev
# or: bun run dev / pnpm dev / yarn dev

# 3. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 📦 Deploy to Vercel (Recommended)

This project is 100% Vercel-ready — zero configuration needed.

### Option A: One-Click Deploy via Dashboard

1. Push this repo to GitHub (`git push origin main`).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repo.
4. Vercel auto-detects Next.js — just click **Deploy**.
5. Your site is live in ~60 seconds at `https://<your-repo>.vercel.app`.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# From the project root
vercel              # Preview deploy
vercel --prod       # Production deploy
```

### Vercel Settings (auto-detected, no manual config needed)

| Setting        | Value          |
| -------------- | -------------- |
| Framework      | Next.js        |
| Build Command  | `next build`   |
| Output Dir     | `.next`        |
| Install Cmd    | `npm install`  |
| Node Version   | 20.x (default) |

No environment variables are required — the site is fully static.

---

## 🐙 Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "feat: initial cyberpunk portfolio"

# Create an empty repo on GitHub first, then:
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

Then connect the repo to Vercel via [vercel.com/new](https://vercel.com/new) for continuous deployment — every `git push` to `main` triggers a new production deploy.

---

## 📁 Project Structure

```
.
├── public/
│   ├── profile.png           # Your profile photo (used in hero)
│   ├── EngrZiaCvup.pdf       # Downloadable CV
│   ├── logo.svg              # Favicon
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css       # Cyberpunk theme system (neon palette, scanlines, glitch)
│   │   ├── layout.tsx        # Fonts (Orbitron, Rajdhani, Share Tech Mono) + metadata
│   │   └── page.tsx          # Section composition
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── cyber-scene.tsx       # 3D Three.js hero scene
│   │   │   ├── navbar.tsx            # Sticky nav + mobile menu
│   │   │   ├── hero.tsx              # Hero section
│   │   │   ├── about.tsx             # About + collapsible bio on mobile
│   │   │   ├── skills.tsx            # Animated skill bars + toolkit
│   │   │   ├── experience.tsx        # Timeline + volunteer cards
│   │   │   ├── projects.tsx          # Featured FYP + project grid
│   │   │   ├── education.tsx         # Degree + certification + hobbies
│   │   │   ├── contact.tsx           # Contact form (mailto) + CV download
│   │   │   ├── footer.tsx            # Footer with links
│   │   │   ├── section-heading.tsx   # Reusable neon section heading
│   │   │   ├── scroll-progress.tsx   # Top scroll progress bar
│   │   │   └── collapsible-card.tsx  # Reusable mobile collapsible
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/                 # use-toast, use-mobile
│   └── lib/
│       └── utils.ts           # cn() helper
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── components.json            # shadcn/ui config
└── README.md
```

---

## 🎨 Customization

### Change the color palette

Edit the CSS variables in `src/app/globals.css` (`:root` block):

```css
--color-cyber-cyan: #00f0ff;    /* primary neon */
--color-cyber-magenta: #ff00aa; /* secondary neon */
--color-cyber-purple: #b537f2;
--color-cyber-bg: #050208;      /* page background */
```

### Edit content

All portfolio content (bio, skills, projects, experience, education, contact info) lives as constant arrays at the top of each section component in `src/components/portfolio/`. Edit those arrays directly — no CMS needed.

### Replace the profile image

Drop a new image at `public/profile.png` (square, 800×800 or larger recommended).

### Replace the CV

Drop a new PDF at `public/EngrZiaCvup.pdf`. Update the download link in `src/components/portfolio/contact.tsx` if you rename it.

### Tweak the 3D scene

Edit `src/components/portfolio/cyber-scene.tsx` — adjust particle count, shape positions, colors, and rotation speeds.

---

## 🛠 Tech Stack

| Layer            | Technology                                  |
| ---------------- | ------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router) |
| Language         | TypeScript 5                                |
| Styling          | Tailwind CSS 4 + shadcn/ui                  |
| 3D               | Three.js + @react-three/fiber + @react-three/drei |
| Animation        | Framer Motion                               |
| Icons            | Lucide React                                |
| Fonts            | Orbitron, Rajdhani, Share Tech Mono (Google Fonts) |
| Lint             | ESLint + eslint-config-next                 |

---

## 📄 License

[MIT](./LICENSE) © Muhammad Zia Ul Hassan

Feel free to fork this repo and adapt it for your own portfolio — just swap out the content and assets. A credit/back-link is appreciated but not required.

---

## 📬 Contact

- **Email**: [mzia9612@gmail.com](mailto:mzia9612@gmail.com)
- **Phone**: +92-317-4694078
- **LinkedIn**: [m-zia-ul-hassan](https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/)
- **Location**: Lahore, Pakistan

---

> Built with neon, code, and a lot of caffeine.
