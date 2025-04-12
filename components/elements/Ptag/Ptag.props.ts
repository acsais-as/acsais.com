import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'p' | 'lead' | 'caption' | 'credits'
  children: ReactNode
}
