import { ReactNode } from 'react'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <p>Painel de Product</p>
    </div>
  )
}
