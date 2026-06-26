import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { FadeSection } from '../components/ui/FadeSection'
import { Banner } from '../components/ui/Banner'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { CATEGORIES } from '../lib/constants'
import { supabase } from '../lib/supabase'
import type { Category, FormErrors } from '../types'

type EntityType = 'individual' | 'organization'

interface CandidatureForm {
  step: number
  categorie: string
  nom: string
  prenom: string
  email: string
  telephone: string
  media: string
  entityType: EntityType
  photo: File | null
  logo: File | null
  description: string
  accord: boolean
}

const INITIAL: CandidatureForm = {
  step: 0,
  categorie: '',
  nom: '', prenom: '', email: '', telephone: '', media: '',
  entityType: 'individual',
  photo: null, logo: null,
  description: '', accord: false,
}

const STEPS = ['Catégorie', 'Identité', 'Fichier', 'Confirmation']

const SELECT_OPTIONS = [
  { value: '', label: 'Sélectionnez une catégorie' },
  ...CATEGORIES.map(c => ({ value: c.label, label: c.label })),
]

// IDs for domain icons mapped to each category
const CAT_ICONS = [
  <svg key="ai" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="jn" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
  <svg key="rd" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
  <svg key="ct" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="wb" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>,
  <svg key="vm" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  <svg key="tv" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="tj" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="rj" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
  <svg key="em" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  <svg key="rn" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>,
  <svg key="wh" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
]

function useStaggered(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function CategoryCard({ cat, icon, index, selected, onSelect }: { cat: typeof CATEGORIES[number]; icon: React.ReactNode; index: number; selected: boolean; onSelect: () => void }) {
  const [open, setOpen] = useState(false)
  const { ref, visible } = useStaggered(0.15)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 500ms cubic-bezier(0.23,1,0.32,1) ${index * 60}ms, transform 500ms cubic-bezier(0.23,1,0.32,1) ${index * 60}ms`,
      }}
    >
      <button
        onClick={() => { onSelect(); setOpen(prev => !prev) }}
        className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 group ${
          open
            ? 'border-brand-accent bg-brand-accent/5 shadow-sm'
            : selected
              ? 'border-brand-accent/60 bg-brand-accent/5'
              : 'border-border-subtle bg-white hover:border-brand-accent/20 hover:bg-white'
        }`}
      >
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
          open ? 'bg-brand-accent text-white' : 'bg-brand-accent/10 text-brand-primary'
        }`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-1">
            Prix {String(cat.id).padStart(2, '0')}
          </span>
          <h3 className="text-sm font-bold leading-snug text-text-main group-hover:text-brand-primary transition-colors duration-200 pr-6">
            {cat.label}
          </h3>
        </div>
        {selected && (
          <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center shrink-0 mt-1">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
        )}
        <svg
          className={`w-4 h-4 mt-2 shrink-0 text-text-dim transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-3 rounded-b-2xl border border-t-0 border-brand-accent/20 bg-brand-accent/[0.02] -mt-1">
          {cat.objective && (
            <div className="mb-4">
              <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-2">Objectif</h4>
              <p className="text-xs text-text-muted leading-relaxed">{cat.objective}</p>
            </div>
          )}
          {cat.criteria && cat.criteria.length > 0 && (
            <div>
              <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-2">Critères d'évaluation</h4>
              <ul className="space-y-1">
                {cat.criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-brand-accent/50 mt-[5px] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function StepBar({ current }: { current: number }) {
  const pct = ((current + 1) / STEPS.length) * 100
  return (
    <div className="mb-8">
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[11px] text-text-dim font-medium mt-2">
        Étape {current + 1} sur {STEPS.length} · <span className="text-text-main">{STEPS[current]}</span>
      </p>
    </div>
  )
}

export const Categories: React.FC = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<CandidatureForm>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updateField = useCallback(<K extends keyof CandidatureForm>(key: K, val: CandidatureForm[K]) => {
    setValues(prev => ({ ...prev, [key]: val }))
    setErrors(prev => { const { [key]: _, ...rest } = prev; return rest })
  }, [])

  const selectedCat = values.categorie
    ? CATEGORIES.find(c => c.label === values.categorie) ?? null
    : null

  const entityLabel = selectedCat?.type === 'organization' ? 'Votre structure' : 'Votre média ou site'

  // validate current step, return false if invalid
  const validateStep = useCallback((step: number): boolean => {
    const e: FormErrors = {}
    if (step === 0 && !values.categorie) e.categorie = 'Sélectionnez une catégorie'
    if (step === 1) {
      if (!values.nom.trim()) e.nom = 'Requis'
      if (!values.prenom.trim()) e.prenom = 'Requis'
      if (!values.email.trim()) e.email = 'Requis'
    }
    if (step === 2) { /* file is optional */ }
    if (step === 3) {
      if (!values.accord) e.accord = 'Vous devez accepter'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }, [values])

  const goNext = useCallback(() => {
    if (validateStep(values.step)) updateField('step', values.step + 1)
  }, [values.step, validateStep, updateField])

  const goBack = useCallback(() => {
    updateField('step', values.step - 1)
    setErrors({})
  }, [values.step, updateField])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) return
    setSubmitError(null)
    setSubmitting(true)
    try {
      const file = values.entityType === 'organization' ? values.logo : values.photo
      let fileUrl: string | null = null

      if (file) {
        const ext = file.name.split('.').pop()
        const slug = `${values.prenom}-${values.nom}`.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '')
        const fileName = `${slug}-${Date.now()}.${ext}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('candidatures')
          .upload(fileName, file)
        if (uploadError) throw new Error(uploadError.message)
        fileUrl = uploadData?.path ?? null
      }

      const { error: insertError } = await supabase.from('candidatures').insert({
        full_name: `${values.prenom} ${values.nom}`.trim(),
        email: values.email.trim(),
        phone: values.telephone.trim(),
        category: values.categorie,
        entity_type: values.entityType,
        description: values.description.trim() || null,
        file_url: fileUrl,
        consent: values.accord,
      })
      if (insertError) throw new Error(insertError.message)

      navigate('/confirmation', {
        state: {
          name: `${values.prenom} ${values.nom}`.trim(),
          media: values.media.trim() || undefined,
          entityType: values.entityType,
          fileUrl,
          categorie: values.categorie,
        }
      })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setSubmitting(false)
    }
  }, [validateStep, values])

  const selectCategory = useCallback((label: string) => {
    const cat = CATEGORIES.find(c => c.label === label)
    if (!cat) return
    updateField('categorie', label)
    if (cat.type === 'organization') updateField('entityType', 'organization')
    else updateField('entityType', 'individual')
  }, [updateField])

  return (
    <>
      <SEO title="Catégories & Candidature" description="12 catégories et formulaire de candidature en ligne des Togo Médias Awards." />
      <Banner
        title="12 prix pour"
        highlight="12 talents"
        subtitle="Chaque catégorie récompense un aspect spécifique de l'excellence médiatique togolaise."
      />

      <div className="pt-16 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

        {/* ── CATEGORIES GRID — accordéon avec sélection ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              icon={CAT_ICONS[i]}
              index={i}
              selected={values.categorie === cat.label}
              onSelect={() => selectCategory(cat.label)}
            />
          ))}
        </div>

        {/* ── FORMULAIRE ÉTAPE PAR ÉTAPE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: pitch */}
          <FadeSection className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.2em] block mb-5">Candidature</span>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                Soumettre votre production
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 text-sm">
                Remplissez le formulaire pour soumettre votre travail au jury des Togo Médias Awards 2026. Toutes les candidatures sont examinées par un jury indépendant.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Jury indépendant', sub: 'Évaluation impartiale' },
                  { label: 'Résultats en septembre', sub: 'Septembre 2026' },
                  { label: 'Gratuit', sub: 'Aucun frais de dossier' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-text-main block leading-none mb-0.5">{item.label}</span>
                      <span className="text-xs text-text-dim">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>

          {/* Right: formulaire multi-étapes — style Tally */}
          <FadeSection delay={60} className="lg:col-span-8">
            <form
              id="form"
              onSubmit={handleSubmit}
              className="bg-white border border-border-subtle rounded-2xl px-5 py-8 sm:p-8 md:p-10 shadow-sm"
              noValidate
            >
              <h2 className="text-lg font-bold mb-6 text-text-main">Formulaire de candidature</h2>

              <StepBar current={values.step} />

              <div className="min-h-[280px]">
                {/* ── ÉTAPE 1 : Choix de la catégorie ── */}
                {values.step === 0 && (
                  <div className="space-y-5">
                    <p className="text-sm text-text-muted">
                      Sélectionnez la catégorie dans laquelle vous souhaitez candidater.
                    </p>
                    <Select
                      label="Catégorie"
                      options={SELECT_OPTIONS}
                      value={values.categorie}
                      onChange={e => selectCategory(e.target.value)}
                      error={errors.categorie}
                    />
                    {values.categorie && selectedCat && (
                      <div className="p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/20 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0 text-brand-accent">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-0.5">
                            Prix {String(selectedCat.id).padStart(2, '0')}
                          </span>
                          <p className="text-xs text-text-muted leading-relaxed">{selectedCat.objective}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── ÉTAPE 2 : Identité + type de candidat ── */}
                {values.step === 1 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Nom" placeholder="Votre nom" value={values.nom} onChange={e => updateField('nom', e.target.value)} error={errors.nom} />
                      <Input label="Prénom" placeholder="Votre prénom" value={values.prenom} onChange={e => updateField('prenom', e.target.value)} error={errors.prenom} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Email" type="email" placeholder="vous@exemple.tg" value={values.email} onChange={e => updateField('email', e.target.value)} error={errors.email} />
                      <Input label="Téléphone" type="tel" placeholder="+228 XX XX XX XX" value={values.telephone} onChange={e => updateField('telephone', e.target.value)} />
                    </div>
                    <Input label={entityLabel} placeholder={selectedCat?.type === 'organization' ? 'Nom de votre structure' : 'Votre média ou site'} value={values.media} onChange={e => updateField('media', e.target.value)} />

                    {/* Entity type toggle — only if category is individual */}
                    {selectedCat?.type === 'individual' && (
                      <div>
                        <label className="block text-sm font-bold text-text-main mb-3">Vous postulez en tant que</label>
                        <div className="flex gap-3">
                          {([
                            { value: 'individual', label: 'Journaliste indépendant', desc: 'Je postule en mon nom' },
                            { value: 'organization', label: 'Au nom de mon média', desc: 'Je représente ma structure' },
                          ] as const).map(opt => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => updateField('entityType', opt.value)}
                              className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 ${
                                values.entityType === opt.value
                                  ? 'border-brand-accent bg-brand-accent/5'
                                  : 'border-border-subtle hover:border-brand-accent/30'
                              }`}
                            >
                              <span className="text-sm font-bold text-text-main block leading-tight">{opt.label}</span>
                              <span className="text-[10px] text-text-dim mt-1 block">{opt.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedCat?.type === 'organization' && (
                      <div className="p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/20">
                        <p className="text-xs text-text-muted">
                          Cette catégorie est réservée aux structures. Vous postulez au nom de <strong className="text-text-main">{values.media || 'votre organisation'}</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* ── ÉTAPE 3 : Upload fichier ── */}
                {values.step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">
                        {values.entityType === 'organization' ? 'Logo de votre structure' : 'Photo professionnelle'}
                      </label>
                      <div
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 hover:border-brand-accent/50 ${
                          (values.entityType === 'organization' ? values.logo : values.photo)
                            ? 'border-brand-accent bg-brand-accent/[0.02]'
                            : 'border-border-subtle bg-gray-50/50'
                        }`}
                      >
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={e => {
                            const file = e.target.files?.[0] ?? null
                            if (values.entityType === 'organization') updateField('logo', file)
                            else updateField('photo', file)
                          }}
                        />
                        {(values.entityType === 'organization' ? values.logo : values.photo) ? (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                              <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <span className="text-sm font-bold text-text-main">
                              {(values.entityType === 'organization' ? values.logo : values.photo)?.name}
                            </span>
                            <span className="text-[10px] text-text-dim">
                              Cliquez pour changer
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <svg className="w-10 h-10 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
                            <span className="text-sm text-text-muted">
                              {values.entityType === 'organization' ? 'Déposez le logo ici' : 'Déposez votre photo ici'}
                            </span>
                            <span className="text-[10px] text-text-dim">PNG, JPG, WebP</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── ÉTAPE 4 : Description + confirmation ── */}
                {values.step === 3 && (
                  <div className="space-y-5">
                    <Textarea
                      label="Description"
                      placeholder="Contexte et impact de votre travail..."
                      value={values.description}
                      onChange={e => updateField('description', e.target.value)}
                    />

                    {/* Recap avant envoi */}
                    <div className="rounded-xl bg-gray-50 border border-border-subtle p-5 space-y-3">
                      <h3 className="text-sm font-bold text-text-main">Récapitulatif</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        <span className="text-text-dim">Catégorie</span>
                        <span className="text-text-main font-medium text-right">{values.categorie}</span>
                        <span className="text-text-dim">Candidat</span>
                        <span className="text-text-main font-medium text-right">{values.prenom} {values.nom}</span>
                        <span className="text-text-dim">Type</span>
                        <span className="text-text-main font-medium text-right capitalize">
                          {values.entityType === 'organization' ? 'Structure' : 'Individuel'}
                        </span>
                        <span className="text-text-dim">Téléphone</span>
                        <span className="text-text-main font-medium text-right">{values.telephone || '—'}</span>
                        <span className="text-text-dim">Fichier</span>
                        <span className="text-text-main font-medium text-right">
                          {(values.entityType === 'organization' ? values.logo : values.photo)?.name || '—'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="accord"
                        checked={values.accord}
                        onChange={e => updateField('accord', e.target.checked)}
                        className="mt-1 w-4 h-4 appearance-none border-2 border-border-subtle rounded-sm bg-transparent checked:border-brand-accent checked:bg-brand-accent transition-all duration-200 shrink-0"
                      />
                      <label htmlFor="accord" className="text-xs text-text-muted leading-relaxed cursor-pointer">
                        Je certifie que cette production est originale et respecte les droits d&apos;auteur.
                      </label>
                    </div>
                    {errors.accord && <p className="text-brand-alert text-xs">{errors.accord}</p>}
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-border-subtle mt-8">
                <div>
                  {values.step > 0 && (
                    <Button type="button" variant="ghost" arrow={false} onClick={goBack}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                      Retour
                    </Button>
                  )}
                </div>
                <div>
                  {values.step < 3 ? (
                    <Button type="button" variant="primary" arrow={false} onClick={goNext}>
                      Suivant
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </Button>
                  ) : (
                    <>
                      {submitError && <p className="text-brand-alert text-sm mb-2">{submitError}</p>}
                      <Button type="submit" variant="primary" arrow={false} disabled={submitting}>
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                            Envoi...
                          </span>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Envoyer ma candidature
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </FadeSection>
        </div>
      </div>
    </div>
  </>
  )
}
