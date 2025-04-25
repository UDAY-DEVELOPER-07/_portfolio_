import localFont from 'next/font/local'
import "./globals.css"

const myFont = localFont({
  src: '../../public/fonts/Dune_Rise.ttf',
  variable: '--font-dune-rise',
})
 
const myFont2 = localFont({
  src: '../../public/fonts/Michroma-Regular.ttf',
  variable: '--font-michroma-rise',
})

export const metadata = {
  title: 'My App',
  description: 'Using custom fonts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${myFont.variable} ${myFont2.variable}`}>
      <body>{children}</body>
    </html>
  )
}