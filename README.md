# Srushti Sonavane — Portfolio

**Live →** [Srushti Sonavane](https://srushtis.vercel.app/)

Personal portfolio website showcasing my work, experience, and skills as a Full Stack Software Engineer pursuing an MS in Computer Science at Indiana University Bloomington.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Animation | GSAP (ScrollTrigger), Lenis smooth scroll |
| 3D | React Three Fiber / Three.js |
| Styling | Plain CSS with custom properties, Geist font |
| Contact form | EmailJS |
| Deployment | Vercel |

---

## Sections

- **Landing** — Animated hero with name reveal and cycling role text
- **About** — Bio + photo with GSAP parallax scroll
- **Experience** — Alternating timeline with animated draw-in line
- **My Work** — Horizontal scroll gallery with per-project SVG illustrations
- **Tech Stack** — Dual marquee rows of skills
- **Contact** — EmailJS-powered form + social links

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

---

## Environment Variables

Create a `.env` file in the root (see `.env.example`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These are configured as Environment Variables in Vercel for the deployed version.

---

## Project Structure

```
src/
├── components/
│   ├── styles/         
│   ├── utils/          
│   ├── About.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── Landing.tsx
│   ├── MainContainer.tsx
│   ├── Navbar.tsx
│   ├── SocialIcons.tsx
│   ├── TechStack.tsx
│   ├── Work.tsx
│   └── WorkCard.tsx     
├── context/
│   └── LoadingProvider.tsx
├── data/
│   └── portfolio.ts     
├── three/
│   └── Scene.tsx        
├── App.tsx
├── index.css            
└── main.tsx
```

---

## Deployment

Deployed on **Vercel** with automatic deploys on push to `main`.

Make sure to add the three `VITE_EMAILJS_*` variables under **Project → Settings → Environment Variables** in your Vercel dashboard.
