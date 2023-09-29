import './globals.css'
import Navbar from '@components/header/navbar'

export const metadata = {
  title: 'MD Commerce',
  description: 'The best e-commerece website in algeria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

       
      <body>
        <section className='w-full text-center bg-dark text-white p-1'>Free shipping over 10000 DA </section>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
