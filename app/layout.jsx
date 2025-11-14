import './globals.css'

export const metadata = {
  title: 'Dhanashri Patil — Resume',
  description: 'Software Test Engineer Resume Website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
