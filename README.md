# Srushti Sonavane — Portfolio

Personal portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + GSAP + React Three Fiber**.

## Tech Stack

| Layer       | Choice                       | Why                                             |
|-------------|------------------------------|-------------------------------------------------|
| Framework   | React 18 + TypeScript        | Industry standard; already on your resume       |
| Build tool  | Vite 5                       | Fastest DX, modern standard                     |
| Styling     | Tailwind CSS v3              | Most in-demand utility-first approach           |
| Animations  | GSAP 3 + ScrollTrigger       | Same as moncy.dev; professional-grade           |
| Smooth scroll | Lenis                      | Synced with GSAP ScrollTrigger                  |
| 3D          | React Three Fiber + Three.js | Particle background; declarative R3F API        |
| Contact     | EmailJS                      | No-backend email sending                        |

## Project Structure

```
srushti-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx          
│   │   └── sections/
│   │       ├── Hero.tsx            
│   │       ├── About.tsx           
│   │       ├── Experience.tsx      
│   │       ├── Projects.tsx        
│   │       └── Contact.tsx         
│   ├── data/
│   │   └── portfolio.ts            
│   ├── hooks/
│   │   ├── useGSAP.ts              
│   │   └── useLenis.ts            
│   ├── three/
│   │   └── ParticleBackground.tsx  
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                   
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Customising Content

**Every piece of text, link, and data lives in one file:**

```
src/data/portfolio.ts
```

Edit `personal`, `stats`, `education`, `experience`, `projects`, and `skills` — the components read from this file automatically. No need to touch the components for content changes.

## Adding Your Photo

In `src/components/sections/About.tsx`, find the photo placeholder block and replace it with:

```tsx
<img
  src="/images/your-photo.jpg"
  alt="Srushti Sonavane"
  className="w-full h-full object-cover object-center"
/>
```

Then add your photo to `public/images/your-photo.jpg`.

## EmailJS Setup (Contact form)

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Create a service + email template
3. Add a `.env` file at the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

The Contact component (built next session) reads these automatically.

## Deployment

### Vercel (recommended — free, fast)
```bash
npm run build
```

### Netlify
```bash
npm run build
```

## Design Tokens

All custom colours, fonts, and animation timings are in `tailwind.config.js` under `theme.extend`. Change the `accent` colour there to re-theme the whole site.


