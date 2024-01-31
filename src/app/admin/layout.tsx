import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <p>Painel de administração</p>
      <p>Admin</p>
    </div>
  )
}
