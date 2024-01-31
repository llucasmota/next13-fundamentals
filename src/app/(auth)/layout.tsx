import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <p>Área de autenticação</p>
      <p>Admin</p>
    </div>
  )
}
