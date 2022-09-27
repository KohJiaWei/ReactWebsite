import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsBookHalf} from 'react-icons/bs'
import {GiSpikedDragonHead} from 'react-icons/gi'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react';

const Nav = () => {
  const {activeNav, setActiveNav} = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><FcAbout/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BsBookHalf/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><GiSpikedDragonHead/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><AiOutlineMessage/></a>
      
    </nav>
    
  )
}

export default Nav