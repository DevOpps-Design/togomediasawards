import React from 'react'
import { SEO } from '../components/SEO'
import { Banner } from '../components/ui/Banner'
import { Button } from '../components/ui/Button'
import { FadeSection } from '../components/ui/FadeSection'
import { ACTIVITIES, SCHEDULE, OBJECTIVES } from '../lib/constants'

const ACTIVITY_ICONS = [
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>,
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
]

export const Edition2026: React.FC = () => {

  return (
    <>
      <SEO
        title="Édition 2026"
        description="Thème, objectifs, activités et calendrier de la 4ᵉ édition des Togo Médias Awards."
      />
      <Banner
        title="La 4ᵉ édition"
        highlight="sous le signe de l'IA"
      />

      <div className="pt-16 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

        <FadeSection delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6 mb-20 items-start">
            {/* Blockquote */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-7xl text-brand-accent/15 select-none leading-none font-serif">&ldquo;</div>
                <blockquote className="text-xl md:text-2xl text-text-main font-bold leading-relaxed pl-8 border-l-2 border-brand-accent">
                  Médias, Intelligence Artificielle et données personnelles : jeunesse plurielle et innovation pour un développement durable.
                </blockquote>
                <p className="text-text-muted mt-6 leading-relaxed pl-8">
                  Cette édition se déroule dans un contexte de mutation technologique rapide. L&apos;objectif est d&apos;amener
                  les professionnels de la presse et la jeunesse créative à s&apos;approprier l&apos;intelligence artificielle
                  tout en préservant l&apos;éthique et la protection des données personnelles.
                </p>
              </div>
            </div>
            {/* Objectifs */}
            <div className="lg:col-span-5 bg-white border border-border-subtle rounded-2xl p-7 shadow-sm">
              <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-5">Objectifs</span>
              <ul className="space-y-4">
                {OBJECTIVES.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="w-7 h-7 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeSection>

        {/* ── CALENDRIER — full-width banner stack ── */}
        <FadeSection delay={80}>
          <div className="mb-20">
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">Calendrier</span>
            <h2 className="text-3xl font-bold mb-10">Programme de l&apos;édition</h2>
            <div className="space-y-5">
              {SCHEDULE.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden group"
                  style={{
                    opacity: 0,
                    animation: `timeline-entry 600ms cubic-bezier(0.23,1,0.32,1) ${i * 80}ms forwards`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-bg-main to-brand-accent/5" />
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at ${30 + i * 15}% ${40 + i * 10}%, #F2AC29 0px, transparent 60%)`,
                  }} />
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 px-7 py-7 sm:py-9">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                      {ACTIVITY_ICONS[i]}
                    </div>
                    <div className="sm:min-w-[130px]">
                      <span className="text-sm font-bold text-brand-accent block leading-none">{s.period}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-text-main leading-snug">{s.activity}</h3>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-text-muted">
                        {s.time !== '-' && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <circle cx="12" cy="12" r="10" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                            </svg>
                            {s.time}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {s.location}
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-5xl font-black text-brand-primary/[0.04] select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ── ACTIVITÉS — cards ima4 style ── */}
        <FadeSection delay={100}>
          <div className="mb-20">
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">Activités</span>
            <h2 className="text-3xl font-bold mb-10">Moments clés de l&apos;édition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTIVITIES.map((act, i) => (
                <div
                  key={i}
                  className="bg-white border border-border-subtle rounded-2xl p-6 hover:shadow-md hover:border-brand-accent/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-accent/20 transition-colors duration-300">
                    {ACTIVITY_ICONS[i]}
                  </div>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-2">{act.date}</span>
                  <h3 className="font-bold text-base mb-2 text-text-main">{act.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ── CTA PARTENAIRES — ima3 style dark banner ── */}
        <FadeSection delay={100}>
          <div className="rounded-2xl bg-brand-primary text-bg-main overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,#F2AC29_0%,transparent_60%)]" />
            <div className="relative max-w-2xl mx-auto text-center px-8 py-16">
              <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-4">Partenaires</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                Devenez partenaire de la transformation médiatique
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Soutenir les Togo Médias Awards, c&apos;est investir dans une jeunesse innovante et des médias
                responsables. Ensemble, construisons un avenir numérique éthique pour le Togo.
              </p>
              <Button to="/contact" variant="primary">Nous contacter</Button>
            </div>
          </div>
        </FadeSection>
      </div>
    </div>
  </>
  )
}
