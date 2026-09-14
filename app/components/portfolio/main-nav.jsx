"use client"

import { useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="w-full bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" className="font-mono text-lime-400 font-semibold text-lg">
          ~/arman.arfat
        </a>

       
       {/* Desktop Links */}
<ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
  {navLinks.map((link) => (
    <li key={link.name}>
       <a
        href={link.href}
        className="relative py-1 transition-colors hover:text-lime-400 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-1 bg-lime-400 hover:bg-lime-300 text-black font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Let's Talk
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

     {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-300">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="relative w-fit py-1 transition-colors hover:text-lime-400 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.name}
      </a>
    ))}
     <a
      href="#contact"
      className="flex items-center justify-center gap-1 bg-lime-400 text-black font-medium px-5 py-2.5 rounded-lg"
    >
      Let's Talk
      <ArrowUpRight className="w-4 h-4" />
    </a>
  </div>
)}
    </header>
  )
}