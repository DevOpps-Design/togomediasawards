import React from 'react'

interface BannerProps {
  title: string
  subtitle?: string
  highlight?: string
  image?: string
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle, highlight, image = '/assts/hero-1.webp' }) => (
  <section className="relative min-h-[40vh] md:min-h-[45vh] flex items-center px-6 pt-36 pb-16 md:pb-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl md:text-[3.25rem] font-bold leading-[1.08] text-white max-w-3xl mx-auto">
        {highlight ? (
          <>{title} <span className="text-brand-accent">{highlight}</span></>
        ) : title}
      </h1>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg leading-relaxed mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>
)
