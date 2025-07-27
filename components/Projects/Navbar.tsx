'use client'
import React, { useState } from 'react'

const navLinks =[
    {label: "Home", href: "/"},
    {label: "About", href: "#about"},
    {label: "Faqs", href: "#faqs"},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="py-4 lg:py-8 sticky-top z-50">
        <div className="conatiner max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-full p-2 px-4 md:pr-2 items-center bg-neutral-950/70 backdrop-blur">
                <div className="image">
                </div>
                <div className="lg:flex justify-center items-center hidden">
                    <nav className="flex gap-6">
                        {navLinks.map((link) => (
                            <a href={link.href} key={link.label}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex justify-end gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu md:hidden"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" ></line>
                        <line x1="3" y1="6" x2="21" y2="6" ></line>
                        <line x1="3" y1="18" x2="21" y2="18" ></line>
                    </svg>
                    <button className="hidden md:inline-flex items-center"></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar