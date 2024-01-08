import './global.scss'
import Script from 'next/script'
export const metadata = {
  title: 'Best-Reps',
  description: 'Каталог лучших реплик во всем мире.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body>{children}</body>
    </html>
  )
}
