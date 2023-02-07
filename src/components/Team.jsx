import React from 'react'
import Image from 'next/image'

import teamMember1 from '@/images/team-member-1.jpg'
import teamMember2 from '@/images/team-member-2.png'

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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-500">
              We are a team of passionate developers dedicated to finding solutions to problems.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
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
        </div>
      </div>
    </div>
  )
}
