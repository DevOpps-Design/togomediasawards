import React from 'react'
import { Link } from 'react-router-dom'
import type { ButtonVariant } from '../../types'

interface ButtonBaseProps {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
  arrow?: boolean
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-accent text-[#0D0D0D]',
  secondary: 'bg-transparent border border-brand-primary/50 text-brand-primary',
  ghost: 'bg-transparent text-text-muted',
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, to, arrow = true, ...props }) => {
  const base = `group relative inline-flex items-center gap-3 font-bold rounded-full transition-all duration-[400ms] ease-out-expo active:scale-[0.97] ${variantStyles[variant]} ${variant === 'primary' ? 'hover:brightness-110 hover:shadow-[0_0_30px_-5px_rgba(242,172,41,0.3)]' : variant === 'secondary' ? 'hover:bg-brand-primary/[0.06] hover:border-brand-primary' : 'hover:text-text-main hover:bg-black/5'} ${className}`

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-1.5" style={{ fontFamily: '"Cursor Gothic", system-ui, sans-serif' }}>{children}</span>
      {arrow && (
        <span className="relative z-10 w-7 h-7 rounded-full bg-black/5 flex items-center justify-center transition-all duration-[400ms] ease-out-expo group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  )

  if (to) {
    return <Link to={to} className={`${base} px-6 py-3 text-sm`}>{content}</Link>
  }

  return <button className={`${base} px-6 py-3 text-sm`} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>
}
