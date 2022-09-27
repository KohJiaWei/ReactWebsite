import React from 'react'
import CV from '../../assets/images/JW Uni v2.pdf'
import './headers.css'


/* this is the button */

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>

        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA