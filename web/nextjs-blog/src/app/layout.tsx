import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree} from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'


const roboto = Roboto({ subsets: ['latin'] , variable:'--font-roboto' })
const baijamjuree = Baijamjuree({ subsets: ['latin'] , weight:'700' , variable:'--font-baijamjuree'})

export const metadata: Metadata = {
  title: 'Bem Estar',
  description: 'Site para monitorar aspectos da saude para fazer sua vida melhor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
