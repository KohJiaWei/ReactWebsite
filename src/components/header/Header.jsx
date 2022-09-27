import React from 'react'
import './headers.css'
import CTA from './CTA.jsx'
import ME from '../../assets/images/itsME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Jia Wei </h1>
        <h5 className="text-light">Front End Developer </h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt = "me"/>
        </div>

        <a href= "#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header

