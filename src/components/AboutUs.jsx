import Image from 'next/image'

import { Container } from '@/components/Container'
import devBackground from '@/images/dev-background.jpg'

export function AboutUs() {
  return (
    <Container className="pt-10 pb-8 text-center lg:pt-16">
      <div id="aboutus"></div>
      <h1 className="mx-auto max-w-4xl font-display text-xl font-medium tracking-tight text-slate-900 sm:text-5xl">
        About us
      </h1>
      <p className="mx-auto mt-6 flex max-w-2xl flex-col text-lg text-slate-700">
        code182 makes stuff.
      </p>
      <p className="mt-6 flex justify-center">
        <Image src={devBackground} alt="Code 182" width={500} />
      </p>
    </Container>
  )
}
