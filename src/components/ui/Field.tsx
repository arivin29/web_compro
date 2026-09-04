'use client'

import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  useId,
} from 'react'
import { twMerge } from '@/lib/cn'

interface FieldShellProps {
  label: string
  /** Pesan error. Ditampilkan sebagai teks, bukan hanya warna (blueprint §13). */
  error?: string
  hint?: string
  required?: boolean
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode
}

/**
 * Kerangka field form — blueprint §13.
 * Label selalu terlihat (placeholder bukan pengganti label),
 * error disampaikan lewat teks + `aria-describedby`, bukan warna saja.
 */
export function Field({ label, error, hint, required, children }: FieldShellProps) {
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-body text-body-sm font-semibold text-text-primary [.on-dark_&]:text-text-inverse"
      >
        {label}
        {required && (
          <span className="ml-1 text-brand-red" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only"> (wajib diisi)</span>}
      </label>

      {children({ id, describedBy, invalid: Boolean(error) })}

      {hint && !error && (
        <p id={hintId} className="mt-1.5 font-body text-body-sm text-text-muted">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} className="mt-1.5 font-body text-body-sm text-state-error">
          {error}
        </p>
      )}
    </div>
  )
}

/** Tinggi minimum 44px, radius 6px, focus ring biru — blueprint §13. */
const controlClasses = [
  'w-full rounded-md border bg-surface-white px-3.5 py-2.5',
  'font-body text-body text-text-primary placeholder:text-text-muted',
  'transition-colors duration-200',
  'focus:border-brand-blue-strong focus:outline-none focus:ring-2 focus:ring-brand-blue/25',
  'disabled:cursor-not-allowed disabled:bg-surface-soft disabled:opacity-60',
].join(' ')

export function Input({
  invalid,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      className={twMerge(
        controlClasses,
        'min-h-[44px]',
        invalid ? 'border-state-error' : 'border-border',
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
}

export function Textarea({
  invalid,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={twMerge(
        controlClasses,
        'min-h-[120px] resize-y',
        invalid ? 'border-state-error' : 'border-border',
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select
      className={twMerge(
        controlClasses,
        'min-h-[44px] appearance-none pr-10',
        // Panah kustom sebagai background — select bawaan tidak bisa digaya
        "bg-[url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23526276' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")] bg-[length:16px] bg-[right_0.875rem_center] bg-no-repeat",
        invalid ? 'border-state-error' : 'border-border',
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </select>
  )
}
