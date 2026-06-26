import React from 'react'
import { Button } from './Button'

interface SuccessStateProps {
  title: string
  message: string
}

export const SuccessState: React.FC<SuccessStateProps> = ({ title, message }) => (
  <div className="relative min-h-[80dvh] flex flex-col items-center justify-center px-6">
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
      <p className="text-text-muted text-lg leading-relaxed max-w-lg mx-auto mb-10">{message}</p>
      <Button to="/" variant="secondary" arrow>Retour à l&apos;accueil</Button>
    </div>
  </div>
)
