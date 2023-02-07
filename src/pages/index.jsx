import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutUs } from '@/components/AboutUs'
import { Projects } from '@/components/Projects'

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
        <Projects />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
