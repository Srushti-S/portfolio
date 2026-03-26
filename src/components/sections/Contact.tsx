/// <reference types="vite/client" />
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '@/hooks/useGSAP'
import { personal } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)


type Status = 'idle' | 'sending' | 'success' | 'error'

interface Field {
  name: string
  email: string
  subject: string
  message: string
}

function FormField({
  label, type = 'text', name, value, onChange, multiline = false,
}: {
  label: string; type?: string; name: keyof Field
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  multiline?: boolean
}) {
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label
        htmlFor={name}
        style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4845' }}
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        required
        rows={multiline ? 5 : undefined}
        style={{
          background: '#111113',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '0.6rem',
          padding: '0.85rem 1.1rem',
          fontSize: '0.92rem',
          color: '#f0ede8',
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontWeight: 300,
          outline: 'none',
          resize: multiline ? 'vertical' : undefined,
          width: '100%',
          transition: 'border-color 0.25s',
          lineHeight: multiline ? '1.7' : undefined,
          minHeight: multiline ? '9rem' : undefined,
        }}
        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,169,110,0.45)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
      />
    </div>
  )
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function Contact() {
  const labelRef    = useScrollReveal<HTMLDivElement>()
  const headingRef  = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.06 })
  const leftRef     = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })
  const formRef     = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.18 })
  const formElRef   = useRef<HTMLFormElement>(null)

  const [fields, setFields] = useState<Field>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Animate send button on success
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (status === 'success' && btnRef.current) {
      gsap.fromTo(btnRef.current, { scale: 0.96 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' })
    }
  }, [status])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

    // If env vars not set yet, show a helpful message in dev
    if (!serviceId || serviceId === 'service_xxxxxxx') {
      setTimeout(() => {
        setStatus('error')
        setErrorMsg('Add your EmailJS credentials to .env — see .env.example for instructions.')
      }, 600)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formElRef.current!, publicKey)
      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try emailing directly.')
    }
  }

  // Social links
  const socials = [
    { label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/srushtis7', href: personal.linkedin },
    { label: 'GitHub',   value: 'github.com/Srushti-S',      href: personal.github  },
  ]

  return (
    <section
      id="contact"
      className="relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div style={{ padding: '8rem 3rem' }}>

        {/* Section label */}
        <div ref={labelRef} className="section-label opacity-0">Contact</div>

        {/* Header */}
        <div ref={headingRef} className="opacity-0" style={{ marginBottom: '5rem' }}>
          <h2
            className="font-display font-bold text-[#f0ede8]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Let's build<br />
            <em style={{ color: '#c8a96e', fontStyle: 'italic' }}>something together</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem', alignItems: 'start' }}
          className="contact-grid"
        >

          {/* LEFT — copy + socials */}
          <div ref={leftRef} className="opacity-0">
            <p style={{ fontSize: '1rem', color: '#8a8884', fontWeight: 300, lineHeight: '1.85', marginBottom: '3rem' }}>
              I'm currently open to full-time roles, internships, and interesting collaborations.
              Whether you have a position to discuss or just want to say hi — my inbox is always open.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {socials.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.1rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    color: '#8a8884',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.color = '#f0ede8'
                    el.style.paddingLeft = '0.5rem'
                    el.style.borderBottomColor = 'rgba(200,169,110,0.3)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.color = '#8a8884'
                    el.style.paddingLeft = '0'
                    el.style.borderBottomColor = 'rgba(255,255,255,0.07)'
                  }}
                >
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4845' }}>
                    {label}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                    {value}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div
              style={{
                marginTop: '2.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: '#6dbfa0',
                background: 'rgba(109,191,160,0.08)',
                border: '1px solid rgba(109,191,160,0.2)',
                borderRadius: '100px',
                padding: '0.5rem 1rem',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6dbfa0', flexShrink: 0, animation: 'pulseDot 2s ease-in-out infinite' }} />
              Available for opportunities · May 2026
            </div>
          </div>

          {/* RIGHT — form */}
          <div ref={formRef} className="opacity-0">
            <form
              ref={formElRef}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                <FormField label="Your name"  name="name"  value={fields.name}  onChange={handleChange} />
                <FormField label="Your email" name="email" type="email" value={fields.email} onChange={handleChange} />
              </div>

              <FormField label="Subject" name="subject" value={fields.subject} onChange={handleChange} />
              <FormField label="Message" name="message" value={fields.message} onChange={handleChange} multiline />

              {/* Submit */}
              <button
                ref={btnRef}
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  padding: '0.9rem 1.4rem',
                  marginTop: '0.5rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' || status === 'success' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  background: status === 'success' ? '#6dbfa0' : '#c8a96e',
                }}
              >
                {status === 'idle'    && 'Send message →'}
                {status === 'sending' && 'Sending…'}
                {status === 'success' && '✓ Message sent!'}
                {status === 'error'   && 'Try again →'}
              </button>

              {/* Error message */}
              {status === 'error' && errorMsg && (
                <p style={{ fontSize: '0.8rem', color: 'rgba(237,100,100,0.85)', lineHeight: '1.6', marginTop: '0.25rem' }}>
                  {errorMsg}
                </p>
              )}

              {/* EmailJS note for dev */}
              <p style={{ fontSize: '0.7rem', color: '#4a4845', lineHeight: '1.6', marginTop: '0.25rem' }}>
                Powered by EmailJS. 
                <code style={{ color: '#8a8884', fontFamily: 'monospace' }}>.env</code>{' '}
                to activate — see{' '}
                <code style={{ color: '#8a8884', fontFamily: 'monospace' }}>.env.example</code>.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
