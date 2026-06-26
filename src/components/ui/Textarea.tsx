import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-dim" style={{ fontFamily: '"Cursor Gothic", system-ui, sans-serif' }}>{label}</label>
    <textarea
      className={`w-full bg-bg-main border ${error ? 'border-brand-alert' : 'border-border-subtle'} rounded-xl px-4 py-3 text-text-main placeholder:text-text-dim/50 focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all duration-[300ms] ease-out-expo h-28 resize-none ${className}`}
      {...props}
    />
    {error && <p className="text-brand-alert text-sm mt-1">{error}</p>}
  </div>
)
