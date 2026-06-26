import React from 'react'
import { SEO } from '../components/SEO'
import { Banner } from '../components/ui/Banner'
import { FadeSection } from '../components/ui/FadeSection'
import { TARGETS } from '../lib/constants'

function splitTarget(t: string): [string, string] {
  const i = t.indexOf('(')
  return i === -1 ? [t, ''] : [t.slice(0, i).trim(), t.slice(i + 1, -1).trim()]
}

const TARGET_LAYOUT = [
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-3 md:row-span-1',
]

const STATS = [
  { value: '04', label: 'Éditions', sub: 'depuis 2022' },
  { value: '10', label: 'Catégories', sub: 'de prix' },
  { value: '50+', label: 'Candidatures', sub: 'chaque édition' },
  { value: '100+', label: 'Journalistes', sub: 'récompensés' },
]

const MILESTONES = [
  { year: '2022', edition: '1ʳᵉ Édition', text: 'Fondation des Togo Médias Awards — 1ʳᵉ cérémonie à Lomé, 8 catégories, plus de 40 candidatures.' },
  { year: '2023', edition: '2ᵉ Édition', text: '2ᵉ édition : intégration des nouveaux médias numériques et des créateurs de contenus.' },
  { year: '2024', edition: '3ᵉ Édition', text: '3ᵉ édition : focus éthique et responsabilité numérique. Partenariats institutionnels élargis.' },
  { year: '2025', edition: '4ᵉ Édition', text: '4ᵉ édition : IA, données personnelles et jeunesse plurielle. Plus de 80 candidatures reçues.' },

]

const TARGET_ICONS = [
  <svg key="j" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m-6 4h3" /></svg>,
  <svg key="e" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3a4 4 0 008 0" /></svg>,
  <svg key="c" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  <svg key="i" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="o" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" /></svg>,
]

export const About: React.FC = () => (
  <>
    <SEO
      title="À propos"
      description="Découvrez l'histoire, la vision et la mission des Togo Médias Awards. Promouvoir l'excellence journalistique au Togo depuis 2022."
    />
    <Banner
      title="Créés en 2022 pour élever"
      highlight="l'excellence journalistique au Togo."
    />

    <div className="pt-16 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

      {/* ── 2-COL ASYMMETRIC: texte + collage image — inspiré ima3 ── */}
      <FadeSection delay={80}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Text */}
          <div>
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-5">Notre mission</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Promouvoir l&apos;excellence médiatique au service de la jeunesse togolaise
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Dans un paysage médiatique en profonde mutation, les T.M.A constituent un signal fort : le journalisme togolais, qu&apos;il soit radiophonique, télévisuel, en ligne ou mobile, mérite une reconnaissance à la hauteur de son engagement.
            </p>
            <p className="text-text-muted leading-relaxed">
              Chaque année, notre jury indépendant évalue des centaines de productions selon des critères rigoureux d&apos;impact, d&apos;innovation, d&apos;éthique et de qualité rédactionnelle.
            </p>
          </div>
          {/* Photo */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-border-subtle">
            <img
              src="/assts/hero-2.webp"
              alt="Togo Médias Awards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeSection>

      {/* ── STATS BAR ── */}
      <FadeSection delay={80}>
        <div className="mb-20">
          <div className="px-0 py-10 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0">

            {/* Left: title + subtitle */}
            <div className="lg:w-64 lg:shrink-0 lg:pr-10 lg:border-r lg:border-border-subtle">
              <h2 className="text-2xl font-bold text-text-main leading-tight mb-2">
                Nos chiffres
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Quatre éditions d'excellence et de reconnaissance du journalisme togolais.
              </p>
            </div>

            {/* Right: stats grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-10">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    opacity: 0,
                    animation: `timeline-entry 600ms cubic-bezier(0.23,1,0.32,1) ${i * 80}ms forwards`,
                  }}
                >
                  <div className="text-3xl md:text-4xl font-black text-brand-accent leading-none mb-1 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm font-semibold text-text-main">{s.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </FadeSection>

      {/* ── TIMELINE PARCOURS: 2-col editorial ── */}
      <FadeSection delay={80}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 mb-20 items-start">

          {/* Left: large photo */}
          <div className="lg:sticky lg:top-36">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-border-subtle">
              <img
                src="/assts/hero-2.webp"
                alt="Cérémonie Togo Médias Awards"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: heading + edition grid */}
          <div>
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-5">Notre parcours</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">4 éditions, un engagement constant</h2>
            <p className="text-text-muted leading-relaxed mb-12 max-w-md">
              De 2022 à 2025, les T.M.A ont évolué pour refléter les transformations du secteur médiatique togolais et africain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {MILESTONES.map((m, i) => (
                <div
                  key={i}
                  className={`${i === MILESTONES.length - 1 && MILESTONES.length % 2 !== 0 ? 'sm:col-span-2' : ''} border border-border-subtle rounded-xl p-5`}
                  style={{
                    opacity: 0,
                    animation: `timeline-entry 600ms cubic-bezier(0.23,1,0.32,1) ${i * 100}ms forwards`,
                  }}
                >
                  <span className="text-xl sm:text-2xl font-black text-brand-accent leading-none block select-none mb-1 tracking-tight">
                    {m.edition}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <style>{`
          @keyframes timeline-entry {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </FadeSection>

      {/* ── VISION & MISSION: overlapping offset ── */}
      <FadeSection delay={80}>
        <div className="relative mb-20">
          <div className="bg-brand-primary rounded-3xl p-10 md:p-14 md:w-[58%] relative z-10">
            <svg className="w-8 h-8 text-white/50 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-4">Vision</span>
            <p className="text-white/85 leading-relaxed text-base max-w-[50ch]">
              Un environnement médiatique togolais responsable, innovant et inclusif, où la technologie sert le développement sans compromettre les droits fondamentaux.
            </p>
          </div>
          <div className="bg-white border border-border-subtle rounded-3xl p-10 md:p-14 md:w-[58%] md:ml-auto -mt-5 md:-mt-12 relative z-20">
            <svg className="w-8 h-8 text-brand-accent/60 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-4">Mission</span>
            <p className="text-text-muted leading-relaxed text-base">
              Promouvoir l&apos;excellence, l&apos;innovation et l&apos;éthique dans les médias à travers des distinctions annuelles, des campagnes de sensibilisation et des actions de renforcement de capacités auprès de la jeunesse.
            </p>
          </div>
        </div>
      </FadeSection>

      {/* ── CIBLES — bento grid ── */}
      <FadeSection delay={100}>
        <div className="mb-20">
          <div className="mb-12 max-w-xl">
            <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-4">Bénéficiaires</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">À qui s&apos;adressent les T.M.A ?</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Les T.M.A s&apos;adressent à l&apos;ensemble des acteurs de l&apos;écosystème médiatique togolais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            {TARGETS.map((t, i) => {
              const [title, sub] = splitTarget(t)
              return (
                <div
                  key={i}
                  className="flex items-start gap-4"
                  style={{
                    opacity: 0,
                    animation: `timeline-entry 500ms cubic-bezier(0.23,1,0.32,1) ${i * 80}ms forwards`,
                  }}
                >
                  <span className="text-brand-accent shrink-0 mt-0.5">{TARGET_ICONS[i]}</span>
                  <div>
                    <h3 className="text-sm font-bold text-text-main">{title}</h3>
                    {sub && <p className="text-sm text-text-muted leading-relaxed mt-0.5">{sub}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FadeSection>
    </div>
  </div>
  </> 
)
