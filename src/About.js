import React from 'react'
import HeroSection from './components/HeroSection'

function About() {
  const data = {
    name: "Thapa ECommerce"
  }
  return (
    <HeroSection myData={data} />
  )
}

export default About