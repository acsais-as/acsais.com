import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  label: string
}
