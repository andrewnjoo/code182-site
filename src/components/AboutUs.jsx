import Image from 'next/image'

import { Container } from '@/components/Container'
import devBackground from '@/images/dev-background.jpg'
import { HeaderText } from './ui_components/HeaderText'

export function AboutUs() {
  return (
    <Container className="pt-10 pb-8 text-center lg:pt-16">
      <div id="aboutus"></div>
      <HeaderText
        text="About Us"
      />
      <div className="mx-auto mt-6 flex max-w-2xl flex-col text-lg text-slate-700">
        code182 is a maker collective based in Fremont, CA.
      </div>
      <div className="mt-6 flex justify-center">
        <Image src={devBackground} alt="Code 182" width={500} />
      </div>
    </Container>
  )
}
