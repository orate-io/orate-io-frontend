import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>

          {/* Site branding */}
          <div className='flex-shrink-0 mr-4'>
            {/* Logo */}
            <Link to='/' className='block' aria-label='Cruip'>
              <h1 className='text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter' data-aos='zoom-y-out'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300'>
                Syllabl
                </span>
              </h1>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className='flex flex-grow'>
            <ul className='flex flex-grow justify-end flex-wrap items-center'>
              <li>
                <Link to='/login' className='btn font-medium text-gray-100 bg-purple-400 hover:bg-pink-300 ml-3 rounded-lg pt-1 pb-1 pl-2 pr-2 transition-colors duration-300'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/signup' className='btn font-medium text-gray-100 bg-purple-400 hover:bg-pink-300 ml-3 rounded-lg pt-1 pb-1 pl-2 pr-2 transition-colors duration-300'>
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header
