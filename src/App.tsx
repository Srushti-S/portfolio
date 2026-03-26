import { useLenis } from '@/hooks/useLenis'
import ParticleBackground from '@/three/ParticleBackground'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function App() {
  useLenis()

  return (
    <div style={{ background: '#0a0a0b', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* R3F particle field */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.5 }}>
        <ParticleBackground />
      </div>

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          position: 'relative', zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '2rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}
      >
        <p style={{ color: '#4a4845', fontSize: '0.72rem', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} Srushti Sonavane · React · Vite · Tailwind · GSAP · Three.js
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {([['GitHub', 'https://github.com/Srushti-S'], ['LinkedIn', 'https://linkedin.com/in/srushtis7'], ['Email', 'mailto:srushtisonavane@gmail.com']] as const).map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{ color: '#4a4845', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c8a96e')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#4a4845')}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
