import React, { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-bg-main flex items-center justify-center">
    <div className="w-24 h-1 bg-bg-alt rounded-full overflow-hidden">
      <div
        className="h-full w-1/3 rounded-full animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #F2AC29 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  </div>
)

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-text-main font-body selection:bg-brand-accent selection:text-bg-main">
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      <Header />
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
      {!isHome && <Footer />}
    </div>
  )
}
