'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { openLeadForm } from '@/components/lead-form-provider'

export function LeadFormTrigger({ children, type = 'button', onClick, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return <button type={type} onClick={(event) => { onClick?.(event); if (!event.defaultPrevented) openLeadForm() }} {...props}>{children}</button>
}
