import React from 'react'
import './service.css'
import {FaChess} from 'react-icons/fa'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        {/* TITLE CARD ONE */}
      <article className='service'>
          <div className='service_head'>
            <h3>Data Analysis</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
          </ul>
        </article>
        {/* TITLE CARD TWO */}
        <article className='service'>
          <div className='service_head'>
            <h3>Data Analysis</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FaChess className='service_list-icon'/>
              <p>Content Creation</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
          </ul>
        </article>

        {/* TITLE CARD THREE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>

            <li>
              <FaChess className='service_list-icon'/>
              <p>visualize data</p>
            </li>
            
          </ul>
        </article>


      </div>
      </section>
  )
}

export default Service