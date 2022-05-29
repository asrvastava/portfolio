import React from 'react';
import "./About.css";
import {FaAward} from 'react-icons/fa'
import {SiCodeproject} from 'react-icons/si'
import {RiBuildingFill} from 'react-icons/ri'
import ME from '../../assets/profile.jpg'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon '/>
              <h5>Experience</h5>
              <small>3+ Years coding  in</small>
              <small> differenet languages</small>
            </article>
            <article className='about_card'>
              <RiBuildingFill className='about_icon '/>
              <h5>student at </h5>
              <small>MAIT, DELHI</small>
            </article>
            <article className='about_card'>
              <SiCodeproject className='about_icon '/>
              <h5>projects</h5>
              <small>6</small>
            </article>
          </div>
          <p>I'm Ankit Kumar Srivastava and I'm an optimistic person who loves to learn and explore new fields and technologies.
             An egalitarian with a creative mind and kind soul dedicated and determined to be able to achieve what I desire.
            I was born in Patna,Bihar .My schooling done from patna.  I came to Delhi to purse Diploma in information 
            technology enabled services and management in 2018, which I completed in 2021. Currently I am a sophomore pursing
            B. Tech UG from MAIT, GGSIPU. I am an adventurous person who loves to travel. I am a perpetual learner. 
            I love to learn new skills, techniques, and technologies. </p>
             <a href='#contact' className='btn-primary'>Let's Talk</a>
        </div>
      </div>



    </section>
  )
}

export default about