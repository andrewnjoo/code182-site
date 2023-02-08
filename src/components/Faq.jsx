import Image from 'next/image'

import { Container } from '@/components/Container'
import { HeaderText } from '@/components/ui_components/HeaderText'
import backgroundImage from '@/images/background-faqs.jpg'

const faq = [
  {
    question: 'What does code182 make?',
    answer: 'code182 makes performant software for businesses and users.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Please contact us for a quote. We offer market competitive rates.',
  },
]

export function Faq () {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <HeaderText
          text="Frequently asked questions"
        />
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faq.map((qAndA) => (
            <li key={qAndA.question}>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {qAndA.question}
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                {qAndA.answer}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
