import './globals.css'

export const metadata = {
  title: "Dhanashri Patil — Software Test Engineer | Resume",
  description: "Professional resume of Dhanashri Patil - Software Test Engineer with expertise in automation and manual testing, skilled in Cypress, Selenium, and Appium."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
