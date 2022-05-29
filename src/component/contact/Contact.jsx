import React from 'react';
import "./contact.css";
import {IoMdMail} from "react-icons/io"
import {FaFacebookMessenger} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import Emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      Emailjs.sendForm('service_cytlnpm', 'template_gc4cula', form.current, 'DKg5u3q6gh6bMwUp6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return ( 
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <IoMdMail/>
          <h4>Email</h4>
          
          <h5 id='k1'>ankitsrivastava684@gmail.com</h5>
          <a href="mailto:ankitsrivastava@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
          <FaFacebookMessenger/>
          <h4>Messenger</h4>
          <h5>ankit kr srivastava</h5>
          <a href="https://m.me/100045263745787" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp/>
          <h4>whatsapp</h4>
          <h5>9523455896</h5>
          <a href="https://api.whatsapp.com/send?phone+919523455896" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONATACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full Name' require/>
          <input type="email" name="name" placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button type="submit" className='btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact