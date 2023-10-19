import React from 'react'
import ImageHero from '../assets/image-hero-desktop.png'
import { useGlobalContext } from '../context/context'
import '../Styles/Hero.css'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Make <br/>remote work</h1>
          <p>
            Get your team in sync, no matter your location.<br/>Streamline processes, create team rituals and<br/> watch productivity soar. 
          </p>
          <button className='btn'>Learn more</button>
        </article>
        <article className='hero-images'>
          <img src={ImageHero}  className='phone-img' alt="hero" />
        </article>
      </div>
    </section>
  )
}

export default Hero
