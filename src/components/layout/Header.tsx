import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/constants'
import { Button } from '../ui/Button'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path: string) => path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="mt-4 md:mt-6 pointer-events-auto flex items-center gap-6 bg-bg-main/75 backdrop-blur-2xl border border-border-subtle rounded-full px-2 py-1.5 max-w-[calc(100vw-2rem)] shadow-[0_8px_32px_rgba(13,13,13,0.06)]">
          <Link to="/" className="flex items-center pl-3 md:pl-4 shrink-0">
            <img src="/brand/tma-logo.png" alt="TMA" className="h-8 md:h-9 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all duration-[300ms] ease-out-expo ${
                  isActive(link.to)
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-text-muted hover:text-text-main hover:bg-black/5'
                }`}
                style={{ fontFamily: '"Cursor Gothic", system-ui, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button to="/categories" variant="primary" arrow={false}>
                Candidater
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 mr-1 relative active:scale-[0.95] transition-transform duration-150"
              aria-label="Menu"
            >
              <span className={`block w-5 h-[1.5px] bg-text-main rounded-full transition-all duration-[400ms] ease-out-expo ${menuOpen ? 'rotate-45 translate-y-[3.75px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-text-main rounded-full transition-all duration-[400ms] ease-out-expo ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-text-main rounded-full transition-all duration-[400ms] ease-out-expo ${menuOpen ? '-rotate-45 -translate-y-[3.75px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg-main/98 backdrop-blur-3xl flex flex-col justify-center transition-all duration-[600ms] ease-out-expo ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-start gap-6 px-8 max-w-xs">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold transition-all duration-[500ms] ease-out-expo ${
                isActive(link.to) ? 'text-brand-primary' : 'text-text-main hover:text-brand-primary'
              }`}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms',
                fontFamily: '"Cursor Gothic", system-ui, sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 500ms ease-out-expo, transform 500ms ease-out-expo',
              transitionDelay: menuOpen ? `${NAV_LINKS.length * 60 + 200}ms` : '0ms',
            }}
          >
            <Button
              to="/categories"
              variant="primary"
              className="mt-4 text-lg px-8 py-4"
              onClick={() => setMenuOpen(false)}
            >
              Candidater
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
