import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const navRef   = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('about')


  useEffect(() => {
    const el = navRef.current
    if (!el) return
    gsap.fromTo(
      el.querySelectorAll('[data-nav]'),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href) as HTMLElement)
      .filter(Boolean)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.4s, backdrop-filter 0.4s',
        ...(scrolled ? {
          background: 'rgba(10,10,11,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        } : {}),
      }}
    >
      {/* Logo */}
      <a
        data-nav
        href="#home"
        className="font-display font-bold text-[#f0ede8] opacity-0"
        style={{ fontSize: '1.1rem', letterSpacing: '0.02em', textDecoration: 'none' }}
      >
        SS
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center" style={{ gap: '2.5rem', listStyle: 'none' }}>
        {links.map((link, i) => {
          const isActive = active === link.href.slice(1)
          return (
            <li key={link.href}>
              <a
                data-nav
                href={link.href}
                className={`opacity-0 ${isActive ? 'nav-link-active' : ''}`}
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isActive ? '#c8a96e' : '#8a8884',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  animationDelay: `${0.3 + i * 0.1}s`,
                }}
                onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = '#c8a96e' }}
                onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = '#8a8884' }}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Hire me CTA */}
      <a
        data-nav
        href="mailto:srushtisonavane@gmail.com"
        className="btn btn-ghost opacity-0 hidden sm:inline-flex"
        style={{ fontSize: '0.75rem' }}
      >
        Hire me ↗
      </a>
    </nav>
  )
}
