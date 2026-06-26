import { useState, useCallback } from 'react'
import type { FormErrors } from '../types'

interface UseFormOptions<T> {
  initial: T
  validate?: (values: T) => FormErrors
  onSubmit?: (values: T) => Promise<void>
}

export function useForm<T extends object>({ initial, validate, onSubmit }: UseFormOptions<T>) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updateField = useCallback((field: keyof T, value: string | boolean) => {
    setValues(prev => ({ ...prev, [field]: value }))
    setErrors(prev => {
      const next = { ...prev }
      delete next[field as string]
      return next
    })
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    if (validate) {
      const errs = validate(values)
      setErrors(errs)
      if (Object.keys(errs).length > 0) return
    }
    if (onSubmit) {
      setSubmitting(true)
      try {
        await onSubmit(values)
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Une erreur est survenue')
        setSubmitting(false)
        return
      }
      setSubmitting(false)
    }
    setSubmitted(true)
  }, [validate, values, onSubmit])

  const reset = useCallback(() => {
    setValues(initial)
    setErrors({})
    setSubmitted(false)
    setSubmitError(null)
  }, [initial])

  return { values, errors, submitted, submitting, submitError, updateField, handleSubmit, setSubmitted, reset }
}