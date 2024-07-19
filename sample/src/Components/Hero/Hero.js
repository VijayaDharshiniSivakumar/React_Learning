import React from 'react'
import './Hero.css'
import dark_arrow from '../../assests/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education For a Better World</h1>
        <p>Education is the key that unlocks the golden door to freedom.” —George Washington Carver. This moving education quote comes from a man who was born into slavery and ultimately became one of the greatest scientists and inventors, as well as a pioneering educator</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero
