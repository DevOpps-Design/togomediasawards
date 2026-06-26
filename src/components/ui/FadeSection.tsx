import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface FadeSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FadeSection: React.FC<FadeSectionProps> = ({ children, className, delay = 0 }) => {
  const { ref, visible } = useScrollReveal({ delay })

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out-expo ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className || ''}`}
    >
      {children}
    </div>
  )
}
