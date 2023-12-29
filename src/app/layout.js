import './global.scss'

export const metadata = {
  title: 'Best-Reps',
  description: 'Каталог лучших реплик во всем мире.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
