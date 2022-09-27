import React from 'react'
import './testimonial.css'
import AVATAR1 from "../../assets/images/tingying.jpg"
import AVATAR2 from "../../assets/images/anthonychew.png"
import AVATAR3 from "../../assets/images/ReubenPang.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVATAR1,
    name: 'Ting Ying',
    review: "Truly Poggers... I approve of his skills"
  },
  {
    avatar: AVATAR2,
    name: 'Anthony. C',
    review: "great teammate"
  },
  {
    avatar: AVATAR3,
    name: 'Reuben P',
    review: "His undying dedication to all tedious, mundane commitments boggles my mind."
  }

]


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from peers</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar,name,review},index)=> {
            return(
              <SwiperSlide key ={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>

            )

            }
          )
        }
       

        

      </Swiper>
    </section>
    
  )
}

export default Testimonial