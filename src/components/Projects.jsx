import React from 'react'
import clsx from 'clsx'
import { OpenInNew } from '@mui/icons-material'

import { Container } from '@/components/Container'
import { HeaderText } from './ui_components/HeaderText'

const defaultFeatures = [
  {
    name: 'Expense Tracker | WIP',
    summary: 'Stay on top of your expenses.',
    description:
      'Keep on track of your expenses and plan a budget for the future.',
    image: '',
    icon: () => '💰',
    selected: true,
  },
  {
    name: 'bookkss | Book Review App',
    summary: 'Never lose track of your books again.',
    description: 'Keep track of your books and their reviews.',
    image: '',
    icon: () => '📚',
    selected: false,
    link: 'https://bookkss.com/',
  },
]

export function Projects() {
  const [features, setFeatures] = React.useState([...defaultFeatures])

  return (
    <section
      id="projects"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <HeaderText text="Projects" />
        <Features features={features} setFeatures={setFeatures} />
      </Container>
    </section>
  )
}

function Features({ features, setFeatures }) {
  return (
    <ul
      role="list"
      className="mt-12 flex flex-col md:flex-row md:justify-center"
    >
      {features.map((feature) => (
        <li key={feature.name} className="mx-6 my-4">
          <Feature
            feature={feature}
            isActive={feature.selected}
            setFeatures={setFeatures}
          />
        </li>
      ))}
    </ul>
  )
}

function Feature({ feature, isActive, className, setFeatures, ...props }) {
  const handleClick = () => {
    setFeatures((features) =>
      features.map((f) => {
        if (f.name === feature.name) {
          return {
            ...f,
            selected: true,
          }
        }
        return {
          ...f,
          selected: false,
        }
      })
    )
  }

  return (
    <>
      <a
        onClick={(event) => {
          event.preventDefault()
          handleClick()
        }}
      >
        <div
          className={clsx(
            className,
            !isActive && 'opacity-75 hover:opacity-100'
          )}
          {...props}
          id="projects"
        >
          <div
            className={clsx(
              'mx-auto w-9 rounded-lg',
              isActive ? 'bg-blue-600' : 'bg-slate-500'
            )}
          >
            <feature.icon />
          </div>
          <h3
            className={clsx(
              'mt-6 text-center text-sm font-medium',
              isActive ? 'text-blue-600' : 'text-slate-600'
            )}
          >
            {feature.name}
          </h3>
          <p className="mt-2 text-center font-display text-xl text-slate-900">
            {feature.summary}
          </p>
          <p className="mt-4 text-center text-sm text-slate-600">
            {feature.description}
          </p>
        </div>
      </a>
      {feature.link && (
        <a
          href={feature.link}
          className="mt-4 flex justify-center text-center text-sm text-slate-600"
          about="_blank"
          rel="noopener noreferrer"
        >
          <OpenInNew />
        </a>
      )}
    </>
  )
}
