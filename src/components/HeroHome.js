/**
 * @file Contains the client code for the hero content on the home page.
 */
import React from 'react'

const HeroHome = () => {


  return (
    <section className='relative'>

      {/* Illustration behind hero content */}
      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none' aria-hidden='true'>
        <svg className='svgShadow'width='1360' height='578' viewBox='0 0 1360 578' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='illustration-01'>
              <stop stopColor='#A78BFA' offset='0%' />
              <stop stopColor='#FBCFE8' offset='60.402%' />
              <stop stopColor='#F9A8D4' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='300' r='128' />
          </g>
          <g fill='url(#illustration-01)' fillRule='evenodd' transform="rotate(170 155 443)">
            <circle cx='155' cy='380' r='64' />
          </g>
        </svg>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>

        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>

          {/* Section header */}
          <div className='pb-12 md:pb-16'>
            <div className='max-w-3xl mx-auto'>
              <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4' data-aos='zoom-y-out'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300'>
                  sy-lla-bl
                </span>
              </h1>
              <p className='text-xl text-gray-600 mb-8' data-aos='zoom-y-out' data-aos-delay='150'>A word or pat of a word pronounced with a single, uninterrupted sounding of the voice.</p>
            </div>
          </div>

          {/* Hero SVG */}
          <div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
