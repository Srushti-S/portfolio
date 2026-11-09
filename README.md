# Srushti Sonavane | Portfolio

Live site: [srushtis.vercel.app](https://srushtis.vercel.app/)

My personal portfolio. I'm a software engineer working across backend systems and applied AI, with an MS in Computer Science from Indiana University Bloomington.

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18, TypeScript |
| Build | Vite |
| Animation | GSAP (ScrollTrigger), Lenis |
| Styling | CSS, Geist font |
| Contact form | EmailJS |
| Hosting | Vercel |

## Sections

- Hero
- About
- Experience
- Projects
- Research and Publications
- Skills
- Education
- Contact

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root (see `.env.example`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The same three variables are set in the Vercel project settings for the live site.

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
│   ├── Education.tsx
│   ├── HoverLinks.tsx
│   ├── Landing.tsx
│   ├── MainContainer.tsx
│   ├── Navbar.tsx
│   ├── Publications.tsx
│   ├── ResumeButton.tsx
│   ├── RunPanel.tsx
│   ├── TechStack.tsx
│   ├── Work.tsx
│   └── WorkCard.tsx
├── context/
│   └── LoadingProvider.tsx
├── data/
│   ├── portfolio.ts
│   └── runs.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Deployment

Vercel deploys automatically on every push to `main`.
