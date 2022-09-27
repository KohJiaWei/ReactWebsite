import React from 'react'
import './headers.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kohjiawei/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/kohJiaWei/" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/" target="_blank"><SiInstagram/></a>

    </div>
  )
}

export default HeaderSocials