import React from 'react'
import { SEO } from '../components/SEO'
import { Banner } from '../components/ui/Banner'
import { FadeSection } from '../components/ui/FadeSection'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { SuccessState } from '../components/ui/SuccessState'
import { useForm } from '../hooks/useForm'
import { supabase } from '../lib/supabase'
import { CONTACT_INFOS, SITE } from '../lib/constants'
import type { FormErrors } from '../types'

interface ContactForm {
  nom: string
  email: string
  telephone: string
  objet: string
  message: string
}

const INITIAL: ContactForm = { nom: '', email: '', telephone: '', objet: '', message: '' }

function validate(values: ContactForm): FormErrors {
  const errs: FormErrors = {}
  if (!values.nom.trim()) errs.nom = 'Requis'
  if (!values.email.trim()) errs.email = 'Requis'
  if (!values.objet.trim()) errs.objet = 'Requis'
  if (!values.message.trim()) errs.message = 'Requis'
  return errs
}

async function submitContact(values: ContactForm): Promise<void> {
  const { error } = await supabase.from('contact_messages').insert({
    name: values.nom.trim(),
    email: values.email.trim(),
    phone: values.telephone.trim() || '',
    subject: values.objet.trim(),
    message: values.message.trim(),
  })
  if (error) throw new Error(error.message)
}

// Social links
const SOCIALS = [
  {
    label: 'Facebook',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export const Contact: React.FC = () => {
  const { values, errors, submitted, submitting, submitError, updateField, handleSubmit } = useForm({ initial: INITIAL, validate, onSubmit: submitContact })

  if (submitted) {
    return (
      <>
        <SEO title="Message envoyé" description="Merci pour votre message." />
        <SuccessState
          title="Message envoyé"
          message="Notre équipe vous répondra dans les plus brefs délais."
        />
      </>
    )
  }

  return (
    <>
      <SEO title="Contact" description="Contactez l'équipe des Togo Médias Awards 2026." />
      <Banner
        title="Une question ?"
        highlight="Écrivez-nous"
      />

      <div className="pt-16 pb-28 px-6">
        <div className="max-w-5xl mx-auto">

        {/* ── LAYOUT: infos + form — ima3 style ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: contact cards + map placeholder + socials */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Notre équipe vous répond dans les meilleurs délais. Pour toute demande de partenariat, de presse ou de candidature, utilisez le formulaire ci-dessous.
            </p>
            {/* Info cards */}
              {CONTACT_INFOS.map((item, i) => (
              <FadeSection key={i} delay={i * 60}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      {item.icon2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon2} />}
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-wider block mb-1">{item.label}</span>
                    <span className="text-text-main font-bold text-sm leading-snug">{item.value}</span>
                  </div>
                </div>
              </FadeSection>
            ))}

            {/* Social links — bare icons */}
            <FadeSection delay={220}>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-brand-primary/5 border border-border-subtle text-brand-primary flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </FadeSection>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <FadeSection delay={40}>
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border-subtle rounded-2xl p-8 md:p-10 shadow-sm"
                noValidate
              >
                <h2 className="text-lg font-bold mb-6">Envoyer un message</h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Nom complet" placeholder="Votre nom" value={values.nom as string} onChange={e => updateField('nom', e.target.value)} error={errors.nom} />
                    <Input label="Adresse Email" type="email" placeholder="vous@exemple.tg" value={values.email as string} onChange={e => updateField('email', e.target.value)} error={errors.email} />
                    <Input label="Téléphone" type="tel" placeholder="+228 XX XX XX XX" value={values.telephone as string} onChange={e => updateField('telephone', e.target.value)} error={errors.telephone} />
                  </div>
                  <Input label="Objet" placeholder="Motif de votre message" value={values.objet as string} onChange={e => updateField('objet', e.target.value)} error={errors.objet} />
                  <Textarea label="Message" placeholder="Rédigez votre demande ici..." value={values.message as string} onChange={e => updateField('message', e.target.value)} error={errors.message} />
                  {submitError && <p className="text-brand-alert text-sm">{submitError}</p>}
                  <Button type="submit" variant="primary" disabled={submitting}>{submitting ? 'Envoi...' : 'Envoyer le message'}</Button>
                </div>
              </form>
            </FadeSection>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
