'use client'
import '../styles/header.scss'
import { useEffect, useState } from 'react' // Import useEffect to handle page activation
import Image from 'next/image'
import Link from 'next/link'

import { Playfair } from 'next/font/google'

const playfair = Playfair({
  weight: '400',
  preload: false,
  variable: '--font-playfair'
})

import logo from '/public/sketch-logo.svg'

export default function Header () {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log('clicked')
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header id='header' className={`header ${isMenuOpen ? 'open' : ''}`}>
      <div className='wrapper'>
        <nav className='navbar'>
          <Link className='logo-container' href='#'>
            <div className='image-container'>
              <Image src={logo} alt='mbf logo' />
            </div>
            <p className={`${playfair.className} logo-text`}>
              Marybeth Foxhoven
            </p>
          </Link>
          <div className='menu-toggle' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <ul className={`flex-row ${isMenuOpen ? 'open' : ''}`}>
            <li className='list-item'>
              <a href='#about-us' className='nav-link' onClick={closeMenu}>
                About
              </a>
            </li>
            <li className='list-item'>
              <a href='#expect' className='nav-link' onClick={closeMenu}>
                Web Design
              </a>
            </li>
            <li className='list-item'>
              <a href='#new-patient' className='nav-link' onClick={closeMenu}>
                Digital Paintings
              </a>
            </li>

            <li className='list-item'>
              <a href='#location' className='nav-link' onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
