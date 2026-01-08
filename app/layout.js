import './globals.css'

export const metadata = {
  title: 'KOMO-YUKI | Modern Asian Gifts & Toys Retail Concept',
  description: 'Japanese-inspired retail designed for high-footfall town centres. Professional B2B presentation for landlords and property developers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700&family=Noto+Serif+JP:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
