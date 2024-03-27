import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import ImageSlider from './components/ImageSlider'
import './styles/home.scss'

import { Playfair } from 'next/font/google'

const playfair = Playfair({
  weight: '400',
  preload: false,
  variable: '--font-playfair'
})

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <div className='homepage-hero'>
          <div className='wrapper'>
            <div className='hero-text'>
              <div className='right-side'>
                <h1 className={`${playfair.className}`}>Marybeth Foxhoven</h1>
                <p className='description'>
                  designer & illustrator based in Des Moines
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='image-slider'>
          <ImageSlider />
        </div> */}
      </main>
    </>
  )
}
