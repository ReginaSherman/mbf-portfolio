'use client'
import { useState } from 'react'
import Image from 'next/image'
import '../styles/image-slider.scss'
import dizzySketch from '/public/digital-paintings/dizzy-sketch.png'
import dizzyPainting from '/public/digital-paintings/dizzy-painting.png'

import ellaSketch from '/public/digital-paintings/ella-sketch.png'
import ellaPainting from '/public/digital-paintings/ella-painting.png'

import louieSketch from '/public/digital-paintings/louie-sketch.png'
import louiePainting from '/public/digital-paintings/louie-painting.png'

export default function ImageSlider () {
  const [sliderValue, setSliderValue] = useState(50)

  const updateAfterContainer = e => {
    setSliderValue(e.target.value)
    const afterContainer = document.getElementsByClassName('afterContainer')[0]
    afterContainer.style.width = `${e.target.value}%`
  }

  return (
    <>
      <section className='beforeAfter'>
        <div className='beforeContainer'>
          <Image src={dizzyPainting} className='beforeImage' alt='Before' />
        </div>
        <div className='afterContainer'>
          <Image src={dizzySketch} className='afterImage' alt='After' />
        </div>
        <div className='sliderContainer'>
          <input
            type='range'
            id='slider'
            value={sliderValue}
            onChange={updateAfterContainer}
          />
        </div>
      </section>
      {/* <section className='beforeAfter'>
        <div className='beforeContainer'>
          <Image src={ellaPainting} className='beforeImage' alt='Before' />
        </div>
        <div className='afterContainer'>
          <Image src={ellaSketch} className='afterImage' alt='After' />
        </div>
        <div className='sliderContainer'>
          <input
            type='range'
            id='slider'
            value={sliderValue}
            onChange={updateAfterContainer}
          />
        </div>
      </section> */}
      {/* <section className='beforeAfter'>
        <div className='beforeContainer'>
          <Image src={louiePainting} className='beforeImage' alt='Before' />
        </div>
        <div className='afterContainer'>
          <Image src={louieSketch} className='afterImage' alt='After' />
        </div>
        <div className='sliderContainer'>
          <input
            type='range'
            id='slider'
            value={sliderValue}
            onChange={updateAfterContainer}
          />
        </div>
      </section> */}
    </>
  )
}
