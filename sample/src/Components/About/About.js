import React from 'react'
import './About.css'
import about_img from '../../assests/about.png'
import play_icon from '../../assests/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play_icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIBERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>It’s our responsibility to protect your privacy and security in every product we make — so that every day you’re safer with Google</p>
            <p>It’s our responsibility to protect your privacy and security in every product we make — so that every day you’re safer with Google</p>
            It’s our responsibility to protect your privacy and security in every product we make — so that every day you’re safer with Google
        </div>
    </div>
  )
}

export default About
