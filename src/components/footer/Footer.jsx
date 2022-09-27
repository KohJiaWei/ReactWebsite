import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" classname='footer_logo'>Jia Wei</a>
      

      <ul classname= 'permalinks'>
        <li><a href= '#'>Home</a></li>
        <li><a href= '#about'>About</a></li>
        <li><a href= '#experience'>Experience</a></li>
        <li><a href= '#portfolio'>Portfolio</a></li>
        <li><a href= '#testimonial'>Testimonials</a></li>
        <li><a href= '#contact'>Contact</a></li>
      </ul>


      <div classname = "footer_socials">
        <a href="https://github.com/kohJiaWei"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/kohjiawei/"><BsLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        <small> &copy; Jia Wei React Website, All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer