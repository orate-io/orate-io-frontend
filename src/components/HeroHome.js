/**
 * @file Contains the landing page hero.
 */
import React from 'react'

const HeroHome = () => {

  return (
    <section className='relative'>
      { /* Illustration behind the hero content */ }
      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none' aria-hidden='true'>
        <svg width='1360' height='578' viewBox='0 0 1360 578' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='illustration-01'>
              <stop stopcolor='#FFF' offset='0%' />
              <stop stopcolor='#EAEAEA' offset='77.402%' />
              <stop stopcolor='#DFDFDF' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='128' r='128' />
            <circle cx='155' cy='443' r='64' />
          </g>
        </svg>
      </div>

      <div className='max-w-6x1 mx-auto px-4 sm:px-6'>

        { /* Hero Content */ }
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>

          { /* Section Header */ }
          <div className='text-center pb-12 md:pb-16'>
            <h1 className='text-5x1 md:text-6x1 font-extrabold leading-tighter tracking-tighter mb-4' data-aos='zoom-y-out'>
              Make your website
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                wonderful
              </span>
            </h1>
            <div className='max-w-3x1 mx-auto'>
              <p className='text-x1 text-gray-600 mb-8' data-aod='zoom-y-out' data-aod-delay='150'>
                Our landing page template works on all devices so you only have to set it up once, and get beautiful results forever.
              </p>
              <div className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center' data-aos='zoom-y-out' data-aos-delay='300'>
                <div>
                  <a className='btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0' href='#0'>Start free trial</a>
                </div>
                <div>
                  <a className='btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4' href='#0'>Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        { /* Hero Image */ }
        <div>
          <div className='relative flex justify-center mb-8' data-aos='zoom-y-out' data-aos-delay='450'>
            <div className='flex flex-col justify-center'>
              { /* <img className='mx-auto' src={require('../images/hero-image.png').default} width='768' height='432' alt='Hero' /> */ }
              <div className='bg-blue-500 mx-auto' width='768' height='432' >
              </div>
              <svg className='absolute inset-0 max-w-full mx-auto md:max-w-none h-auto' width='768' height='432' viewBox='0 0768 432' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#EAEAEA" offset="77.402%" />
                    <stop stopColor="#DFDFDF" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#EAEAEA" offset="48.57%" />
                    <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                  <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <circle fillOpacity='.04' fill='url(#hero-ill-a)' cx='384' cy='216' r='128' />
                  <circle fillOpacity='.16' fill='url(#hero-ill-d)' cx='384' cy='216' r='96' />
                  <g fillRule='nonzero'>
                    <use fill='#000' xlinkHref='#hero-ill-d' />
                    <use fill='url(#hero-ill-e)' xlinkHref='#hero-ill-d' />
                  </g>
                </g>
              </svg>
              <button className='absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg' onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
                <svg className='w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className='ml-3'>Watch the full video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
