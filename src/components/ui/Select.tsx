import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select: React.FC<SelectProps> = ({ label, error, options, className = '', ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-dim" style={{ fontFamily: '"Cursor Gothic", system-ui, sans-serif' }}>{label}</label>
    <select
      className={`w-full bg-bg-main border ${error ? 'border-brand-alert' : 'border-border-subtle'} rounded-xl px-4 py-3 text-text-main focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all duration-[300ms] ease-out-expo appearance-none ${className}`}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
    {error && <p className="text-brand-alert text-sm mt-1">{error}</p>}
  </div>
)
