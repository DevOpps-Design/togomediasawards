import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../../lib/constants'

const SOCIALS = [
  { label: 'Facebook', d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
  { label: 'Twitter', d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
  { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]

export const Footer: React.FC = () => (
  <footer className="bg-bg-alt border-t border-border-subtle">
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

        {/* Brand */}
        <div className="md:col-span-4">
          <Link to="/" className="inline-block mb-5">
            <img src="/brand/tma-logo.png" alt="TMA" className="h-9 md:h-10 w-auto" />
          </Link>
          <p className="text-sm text-text-muted leading-relaxed max-w-xs">
            {SITE.tagline}
          </p>
        </div>

        {/* Nav + Contact — 2 colonnes sur mobile, côte à côte sur desktop */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {/* Navigation */}
            <div>
              <h4 className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] mb-6">Navigation</h4>
              <ul className="space-y-3">
                {NAV_LINKS.filter(l => l.to !== '/' && l.to !== '/contact').map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-muted hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h4 className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] mb-6">Contact</h4>
              <ul className="space-y-2 text-sm text-text-muted mb-6">
                <li>{SITE.location}</li>
                <li>
                  <a href={`tel:${SITE.phone}`} className="hover:text-brand-primary transition-colors">{SITE.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-brand-primary transition-colors">{SITE.email}</a>
                </li>
              </ul>
              <div className="flex gap-3">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border-subtle px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 py-5 text-[11px] text-text-dim">
        <p>&copy; 2026 {SITE.name}. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="/mentions-legales" className="hover:text-brand-primary transition-colors">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-brand-primary transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
)
