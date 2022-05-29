import React from 'react'
import "./header.css"
import Me from "../../assets/profile.jpg"
import  CV from './CTA'
import Headersocial from './Headersocial'

const Header = () => {
  return ( 
    <section id='home'>
    <header className='container'>
      <div className='header_container' id="header">
        <h3 className='text-light'>Hello I'm</h3>   
        <h1  id='k'>Ankit Kumar Srivastava </h1>  
        <h3 className='text-light'>developer</h3>
        <CV/>
        <Headersocial/>
        <div className='me'>
          <img className="profile" src={Me} alt="me"></img>
        </div>
        <a href="#contact" className='scroll_down'>scroll down</a>
        </div>
    </header>
    </section>
  )

}

export default Header