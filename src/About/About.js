import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Growth from './Growth/Growth'
import Ourfounding from './OurFounding/Ourfounding'
import Ourmission from './OurMission/Ourmission'

function About() {
  return (
    <>
    <Navbar/>
    <Ourmission/>
    <Ourfounding/>
    <Growth/>
    <Footer/>
    </>
  )
}

export default About