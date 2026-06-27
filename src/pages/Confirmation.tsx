import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/Button'

const SITE_URL = 'https://togomediasawards.com'
const HASHTAGS = 'TMA2026'

function getShareText(name: string, entityLabel?: string): string {
  const who = entityLabel || name
  return `Je suis candidat${name.includes(' ') ? '·e' : ''} aux Togo Médias Awards 2026 ! 🏆 ${who} participe à cette édition historique. Rejoignez le mouvement et candidatez vous aussi sur ${SITE_URL} ${HASHTAGS}`
}

function ShareButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-xl border border-border-subtle bg-white hover:bg-gray-50 hover:border-brand-accent/30 hover:text-brand-accent transition-all duration-200 flex items-center justify-center text-text-muted"
    >
      {icon}
    </a>
  )
}

export const Confirmation: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state as {
    name: string
    media?: string
    entityType: 'individual' | 'organization'
    fileUrl?: string
    categorie: string
  } | null

  if (!data) {
    return (
      <div className="pt-36 pb-28 px-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Page non accessible</h1>
        <p className="text-text-muted mb-6">Vous devez d'abord soumettre une candidature.</p>
        <Button to="/categories" variant="primary">Candidater</Button>
      </div>
    )
  }

  const isOrg = data.entityType === 'organization'
  const displayName = isOrg && data.media ? data.media : data.name
  const shareText = getShareText(data.name, isOrg ? data.media : undefined)
  const encodedText = encodeURIComponent(shareText)
  const encodedUrl = encodeURIComponent(SITE_URL)

  const [copied, setCopied] = React.useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${SITE_URL}/categories`).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <SEO
        title="Candidature confirmée"
        description="Félicitations pour votre candidature aux Togo Médias Awards 2026."
      />

      <div className="pt-36 pb-28 px-6">
        <div className="max-w-lg mx-auto text-center">

          {/* Success icon */}
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Candidature reçue !
          </h1>
          <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Merci {data.name} ! Notre équipe examinera votre production et reviendra vers vous dans les plus brefs délais.
          </p>

          {/* Badge / Card */}
          <div className="bg-white border border-border-subtle rounded-2xl p-8 mb-8 shadow-sm">
            <p className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] mb-3">
              Togo Médias Awards 2026
            </p>
            {data.fileUrl ? (
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-gray-100">
                <img
                  src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/candidatures/${data.fileUrl}`}
                  alt={displayName}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-2xl mx-auto mb-4 bg-brand-accent/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            )}
            <h2 className="text-lg font-bold text-text-main mb-1">{displayName}</h2>
            <p className="text-xs text-text-muted mb-4">
              {data.categorie}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-accent uppercase tracking-wider border border-brand-accent/20 rounded-full px-4 py-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Candidature confirmée
            </div>
          </div>

          {/* Partage */}
          <div className="mb-8">
            <p className="text-sm font-bold text-text-main mb-4">
              Partagez votre participation et inspirez d'autres talents !
            </p>
            <div className="flex items-center justify-center gap-3">
              <ShareButton
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                }
              />
              <ShareButton
                href={`https://twitter.com/intent/tweet?text=${encodedText}`}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                }
              />
              <ShareButton
                href={`https://wa.me/?text=${encodedText}`}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                }
              />
              <ShareButton
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                }
              />
              <button
                onClick={handleCopyLink}
                className="w-11 h-11 rounded-xl border border-border-subtle bg-white hover:bg-gray-50 hover:border-brand-accent/30 hover:text-brand-accent transition-all duration-200 flex items-center justify-center text-text-muted"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </button>
            </div>
            {copied && (
              <p className="text-xs text-brand-accent mt-3 font-medium">Lien copié !</p>
            )}
          </div>

          <Button to="/" variant="secondary" arrow>
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </>
  )
}
