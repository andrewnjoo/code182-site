import Head from 'next/head'

import { Header } from '@/components/Header'
import { AboutUs } from '@/components/AboutUs'
import { Team } from '@/components/Team'
import { Projects } from '@/components/Projects'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>code182 - Coding made simple</title>
        <meta name="description" content="We make code simple" />
      </Head>
      <Header />
      <main>
        <AboutUs />
        <Team />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
