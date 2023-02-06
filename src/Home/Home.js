import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SectionBetterway from './SectionBetterway/SectionBetterway'
import SectionTemplate from './SectionTemplate/SectionTemplate'
import TomAto from './TomAto/TomAto'

function Home() {
  return (
   <>
   <Navbar/>
   <SectionTemplate/>
   <SectionBetterway/>
   <TomAto/>
   <Footer/>
   </>
  )
}

export default Home