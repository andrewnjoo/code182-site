import React from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'

import teamMember1 from '@/images/team-member-1.jpg'
import teamMember2 from '@/images/team-member-2.png'
import { HeaderText } from './ui_components/HeaderText'

const people = [
  {
    name: 'Andrew Njoo',
    role: 'Co-Founder / Full-stack Developer',
    imageUrl: teamMember1,
  },
  {
    name: 'Deborah Ong',
    role: 'Back-end Developer',
    imageUrl: teamMember2,
  },
]

export function Team() {
  return (
    <Container className="pt-10 pb-8 text-center lg:pt-16" id="team">
      <div id="aboutus"></div>
      <HeaderText
        text="Team"
      />
      <div className="mx-auto mt-6 flex max-w-2xl flex-col text-lg text-slate-700">
        We are a team of passionate developers dedicated to finding solutions to
        problems.
        <ul
          role="list"
          className="mt-12 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center space-x-4 lg:space-x-6 text-left sm:text-center">
                <Image
                  src={person.imageUrl}
                  alt="profile picture"
                  className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
                />
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>{person.name}</h3>
                  <p className="text-neutral-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
