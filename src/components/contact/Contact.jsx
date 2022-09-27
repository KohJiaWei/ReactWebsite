
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e80kkpo', 'template_dtfibvo', form.current, 'QrdDl5ITjB-t5g9xF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id ='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <HiOutlineMail className="contact_option-icon"/>
          <h4>Email:</h4>
          <h5>kohjiawei@hotmail.com</h5>
          <a href="mailto: kohjiawei@hotmail.com"> Send a message!</a>
        </article>

        <article className='contact_option'>
        <BsLinkedin className="contact_option-icon"/>
          <h4>Linkedin:</h4>
          <h5>https://www.linkedin.com/in/kohjiawei/</h5>
          <a href="https://www.linkedin.com/in/kohjiawei/"> Connect on Linkedin!</a>
        </article>

        <article className='contact_option'>
        <FaTelegram className="contact_option-icon"/>
          <h4>Telegram:</h4>
          <h5>@Koh_Jia_Wei</h5>
          <a href="https://telegram.me/Koh_Jia_Wei"> Send a message!</a>
        </article>
      </div>
        {/*END OF CONTACT OPTION */}
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your Full Name' required/>
      <input type='email' name='email' placeholder='Your Email' required/>
      <textarea name="message" row="7" placeholder="Your Message" required></textarea>
      <button type ="submit" className="btn btn-primary"> Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact