# Alisha & Alex · Kerala Wedding Invitation

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://qyvera-wedding-invitation.vercel.app/)

An elegant, luxury **Kerala Indian Wedding Invitation** web experience for **Alisha & Alex**, built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS 3**, and custom **WebGL / GLSL** procedural animations.

🌐 **Live URL**: [https://qyvera-wedding-invitation.vercel.app/](https://qyvera-wedding-invitation.vercel.app/)

---

## ✨ Features & Visual Architecture

The invitation is composed of three interconnected visual chapters:

1. **Hero Section (`InkBlotCarousel`)**
   - Full-bleed romantic photo carousel with organic liquid ink-bleed transitions.
   - Powered by SVG turbulence (`feTurbulence`) displacement filtering.
   - Smooth 2-second autoplay with interactive thumbnail selection and swipe support.

2. **Core 3D Experience (`LycorisSpecimen`)**
   - Interactive 3D burgundy spider lily flower rendered via raw WebGL GLSL shaders.
   - Scroll-scrubbed camera choreography through 6 cinematic wedding scenes:
     - **Scene 0**: *Alisha & Alex* Cover & Save the Date.
     - **Scene 1**: Overhead 3D floral crown with family blessing message.
     - **Scene 2**: Date, Muhurtham timing, and Venue details.
     - **Scene 3**: Kerala Wedding Union heritage emblem.
     - **Scene 4**: Minimal left-aligned personal invitation note.
     - **Scene 5**: Traditional Kerala Sadhya feast, evening celebration, and RSVP note.
   - Real-time procedural petals, curved stamens, specular bloom, and depth fog.

3. **Memories Section (`PolaroidLineCarousel`)**
   - *Our Journey* instant polaroids pegged to an interactive sagging string line.
   - Real-time analytical physics: catenary string sag (`stringY`), critically damped spring momentum (`springStep`), and pendulum swinging physics (`swingStep`).
   - Drag, click, arrow navigation, and auto-centering.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) (`react`, `react-dom`) | Modern reactive component architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (`~6.0.2`) | Strict type safety and `@/*` path alias resolution |
| **Build Tool** | [Vite 8](https://vite.dev/) (`vite`, `@vitejs/plugin-react`) | Lightning-fast HMR and optimized production rollup builds |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS | Utility-first styling with custom wedding color palette |
| **Design System** | [shadcn/ui Structure](https://ui.shadcn.com/) (`clsx`, `tailwind-merge`, `cva`) | Modular component hierarchy and styling utilities |
| **3D & Shaders** | Raw WebGL 1.0 & GLSL | Lightweight procedural 3D flower rendering without large 3D engine overhead |
| **Filters & FX** | SVG Displacement Filter Maps | Organic ink-bleed visual transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Subtle vector UI icons |
| **Linter** | [Oxlint](https://oxc.rs/) | High-speed JavaScript and TypeScript linting |

---

## 🎨 Color Palette & Typography

### Palette Tokens
- **Warm Ivory / Background**: `#F8F3E9`
- **Deep Burgundy / Crimson**: `#800D28` / `#8B3A46`
- **Mocha Cream / Accent**: `#E8DCC6` / `#D5C6AC`
- **Cosmic Latte / Muted**: `#B7A89A`
- **Espresso / Ink**: `#392B2A`

### Typography System
- **Editorial Headings**: Cormorant Garamond, Playfair Display, Cinzel *(Serif)*
- **Body & Captions**: Outfit, System Sans-Serif, Monospace *(Subtle letter-spaced uppercase)*

---

## 📁 Project Structure

```text
wd2/
├── public/
│   ├── favicon.svg                     # Site favicon
│   └── images/
│       └── couple/                     # Romantic wedding photo assets
│           ├── couple-1.jpg
│           ├── couple-2.jpg
│           ├── couple-3.jpg
│           ├── couple-4.jpg
│           └── couple-5.jpg
├── src/
│   ├── assets/                         # Static icons & vectors
│   ├── components/
│   │   └── ui/
│   │       ├── demo.tsx                # Hero carousel configuration & photos
│   │       ├── ink-blot-carousel.tsx   # SVG displacement ink-bleed carousel component
│   │       ├── lycoris-specimen.tsx    # 3D WebGL spider lily wedding scroll experience
│   │       ├── polaroid-demo.tsx       # Polaroid section configuration & slide captions
│   │       └── polaroid-line-carousel.tsx # Catenary string & swinging polaroid physics component
│   ├── lib/
│   │   └── utils.ts                    # Class name merging utilities (clsx + twMerge)
│   ├── App.css
│   ├── App.tsx                         # Main page assembly & section composition
│   ├── index.css                       # Global Tailwind layers and design tokens
│   ├── main.tsx                        # Application mount entry point
│   └── vite-env.d.ts                   # Vite TypeScript environment declarations
├── components.json                     # shadcn/ui configuration
├── index.html                          # HTML shell with meta tags & page title
├── package.json                        # Dependencies, scripts, and project metadata
├── postcss.config.js                   # PostCSS Tailwind plugins
├── tailwind.config.js                  # Tailwind theme, colors, and layout tokens
├── tsconfig.json                       # Root TypeScript config references
├── tsconfig.app.json                   # App-level TypeScript rules & '@/*' alias mapping
├── tsconfig.node.json                  # Vite config TypeScript rules
└── vite.config.ts                      # Vite build plugins and path alias resolution
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.0.0 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/alisha-alex-wedding.git
cd alisha-alex-wedding
npm install
```

### 2. Run Local Development Server
Start the Vite dev server:

```bash
npm run dev
```

To run on a specific port (e.g. `3000`):

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

Open your browser at `http://localhost:3000/`.

---

## ⚙️ Customization Guide

### 1. Editing Wedding Details & Copy
All wedding details can be customized directly in `src/App.tsx`:

```tsx
<LycorisSpecimen
  name="Alisha & Alex"
  weddingDate="Sunday, December 28, 2026"
  muhurtham="Muhurtham · 10:30 AM – 11:45 AM"
  venue="The Grand Lawn, Kumarakom Lake Resort"
  location="Kottayam, Kerala, India"
  invitationMessage="Together with their families, request the honour of your presence at their wedding ceremony"
  sadhya="Traditional Kerala Sadhya Feast · 1:00 PM"
  reception="Evening Reception & Dinner · 6:30 PM"
  rsvp="Kindly RSVP · With Love & Blessings"
/>
```

### 2. Changing Photos
- Add your photos to `public/images/couple/`.
- Update hero carousel images in `src/components/ui/demo.tsx`.
- Update polaroid journey images and captions in `src/components/ui/polaroid-demo.tsx`.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement |
| `npm run build` | Runs TypeScript type checking (`tsc -b`) and bundles production assets into `dist/` |
| `npm run preview` | Locally serves the built production bundle for testing |
| `npm run lint` | Runs Oxlint to check code quality and syntax rules |

---

## 🌐 Free Deployment (Vercel)

### Option A: Deploy via Vercel Dashboard (Recommended)
1. Push your repository to **GitHub**.
2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your wedding invitation will be live on a free SSL domain (e.g., `alisha-alex-wedding.vercel.app`).

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 📄 License
This project is private and created for **Alisha & Alex's Wedding Celebration**. Feel free to use the structure for personal wedding invitations.
