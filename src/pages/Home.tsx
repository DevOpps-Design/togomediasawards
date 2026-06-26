import React, { useEffect, useState } from 'react'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/Button'

const HERO_IMAGES = ['/assts/hero-1.webp', '/assts/hero-2.webp', '/assts/hero-3.webp']
const PRESS_DATE = new Date('2026-06-27T14:00:00+00:00')

export const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSlide(prev => (prev + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = PRESS_DATE.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <SEO
        title="Accueil"
        description="Site officiel des Togo Médias Awards 2026. Récompenser l'excellence journalistique et l'innovation numérique au Togo."
      />

      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16 md:pt-20">

        {/* ── Background slideshow ── */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-out-strong ${
                i === slide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* ── Dark overlay filter ── */}
        <div className="absolute inset-0 bg-black/55" />

        {/* ── Subtle texture ── */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 20%, #F2AC29 1px, transparent 1px), radial-gradient(circle at 75% 80%, #F2AC29 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* ── Gradient overlay for depth ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* ── Slide indicators ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === slide ? 'w-8 bg-brand-accent' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1
              className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto transition-all duration-[800ms] ease-out-strong delay-[150ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Médias togolais, intelligence artificielle :<br />
              <span className="text-brand-accent">la jeunesse prend le micro.</span>
            </h1>

            <p
              className={`text-white/60 text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-10 font-normal transition-all duration-[800ms] ease-out-strong delay-[300ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Les Togo Médias Awards récompensent les journalistes et créateurs qui font un usage responsable de l&apos;IA pour informer et inspirer la jeunesse.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[800ms] ease-out-strong delay-[450ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Button to="/categories" variant="primary">Candidater</Button>
              <Button to="/edition-2026" variant="secondary" className="text-white border-white hover:text-brand-accent hover:border-brand-accent">Programme 2026</Button>
            </div>

            {/* ── Press conference countdown ── */}
            <div
              className={`mt-16 transition-all duration-[800ms] ease-out-strong delay-[550ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 font-semibold">
                Conférence de presse
              </p>
              <p className="text-white/60 text-xs md:text-sm mb-4">
                27 juin 2026 à 14h • Hôtel Mirambo, Lomé
              </p>
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {[
                  { label: 'Jours', value: timeLeft.days },
                  { label: 'Heures', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Secondes', value: timeLeft.seconds },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-white text-lg md:text-2xl font-bold leading-none tabular-nums">
                      {String(value).padStart(2, '0')}
                    </span>
                    <span className="text-white/40 text-[10px] md:text-xs tracking-wider mt-1.5 font-light">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

      </section>
    </>
  )
}
