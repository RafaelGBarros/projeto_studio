import '@/styles/globals.css'

export const metadata = {
  title: 'Studio RT',
  description: 'Studio de Dança RT - Caraguatatuba',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
} 