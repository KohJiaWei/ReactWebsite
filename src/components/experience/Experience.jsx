import React from 'react'
import './experience.css'
import {GiMagicLamp} from "react-icons/gi"
import {GiMagickTrick} from  "react-icons/gi"
import {BsCodeSlash} from  "react-icons/bs"
import {HiAcademicCap} from  "react-icons/hi"
import {FaPython} from  "react-icons/fa"
import {CgCPlusPlus} from  "react-icons/cg"
import {GoFileBinary} from  "react-icons/go"
import {FaJava} from  "react-icons/fa"
import {SiJavascript} from  "react-icons/si"
import {AiFillHtml5} from  "react-icons/ai"
import {DiCss3} from  "react-icons/di"
import {FaReact} from  "react-icons/fa"








const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
            <AiFillHtml5 className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <DiCss3 className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          <article className='experience_details'>
            <SiJavascript className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>

          <article className='experience_details'>
            <FaReact className='experience_details-icon'/>
            <div>
              <h4>React.js</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>

          <article className='experience_details'>
            <FaJava className='experience_details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          </div>
        </div>
        <div className='experience_backend'>
        <h3>Programming Experience</h3>
          <div className="experience_content">
          <article className='experience_details'>
            <FaPython className='experience_details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <GiMagicLamp className='experience_details-icon'/>
            <div>
              <h4>C/C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          <article className='experience_details'>
            <GoFileBinary className='experience_details-icon' />
            <div>
              <h4>Data Science</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          {/* {//BROKEN}
          <article className='experience_details'>
            <br></br>
            <BsCodeSlash/>
            <h4>Hackathons/CTFs</h4>
            <br></br>
            <GiMagickTrick/>
            <div>
            <h5>CTFs</h5>
              <li className='text-light'><small>HTX Investigator's Challenge</small></li>
              <li className='text-light'><small>DSTA Brain Hack CDDC 2022</small></li>
              <br></br>
            </div>
            <HiAcademicCap/>
            <div>
              <h5>Hackathons</h5>
              <li className='text-light'><small>HackNTU</small></li>
              <li className='text-light'><small>Shopee Code League</small></li>
            </div>
          </article>
  */}
      
          </div>
        
        </div>
      </div>
    </section>
    
  )
}

export default Experience