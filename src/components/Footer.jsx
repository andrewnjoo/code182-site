import Link from 'next/link'
import { BsTwitter, BsGithub, BsYoutube } from 'react-icons/bs'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/thecode182',
    icon: BsTwitter,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/code-182',
    icon: BsGithub,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@code-182',
    icon: BsYoutube,
  },
];

export function Footer () {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#aboutus">About Us</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                target="_blank"
              >
                <link.icon className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} code182
          </p>
        </div>
      </Container>
    </footer>
  )
}
