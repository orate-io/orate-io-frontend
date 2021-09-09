/**
 * @file Contains all the components for client code in the landing page.
 */
import React from 'react'
import Header from './Header'
import HeroHome from './HeroHome'
import FeaturesBlocks from './FeaturesBlocks'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  )
}

export default Home
