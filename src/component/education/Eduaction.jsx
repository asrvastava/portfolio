import React from 'react'
import {CgTrophy} from 'react-icons/cg'
import "./Education.css"
 
const Eduaction = () => {
  return (
    <section id="education">
    <h5>What have i did </h5>
    <h2>My Education</h2>
    <div className='education_container'>
      <div className="education_frontend">
        <h3>Education</h3>
        <div className="education_content">
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>HIGH SCHOOOL</h4>
            <small className='text-light'>ST VINOBHA HIGH SCHOOL</small>
            <small className='text-light'>   2018</small>
            </div>
          </article>
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>DIPLOMA IN INFORMATION TECHNOLOGY</h4>
            <small className='text-light'>AMBEDKAR INSTITUTE OF TECHNOLOGY</small>
            <small className='text-light'>   (2018-2021)</small>

            </div>
          </article>
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>BTECH IN INFOMATION TECHNOLOGY AND ENGINEERING</h4>
            <small className='text-light'>MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY</small>
            <small className='text-light'> ( 2021-2024)</small>
            </div>
          </article>
          
        </div>
      </div>
      <div className='education_backend'>
      <h3>Achievements</h3>
        <div className="education_content">
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>TEACH INDIA</h4>
            <small className='text-light'>THE TIMES GROUP</small>
            <small className='text-light'>SUMMER OF 2018</small>
            </div>
          </article>
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>BASIC OF NETWORK CONFIGURATION</h4>
            <small className='text-light'>NETWORK BULLS</small>
            </div>
          </article>
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>NAANDI FOUNDATION </h4>
            <small className='text-light'> EMPLOYABILITY SKILL TRAINING</small>
            <small className='text-light'> JULY 2020</small>
            </div>
          </article>
          <article className='education_details'>
            <CgTrophy className='icon'/>
            <div>
            <h4>TECH MAHINDRA </h4>
            <small className='text-light'>SKILL FOR MARKET TRAINING</small>
            <small className='text-light'> JANUARY 2021</small>
            </div>
          </article>
          <article className='education_details'>
    
            <CgTrophy className='icon'/>
            <div>
            <h4>INTERSHIP IN ETHICAL HACKING</h4>
            <small className='text-light'>INTERSHALA </small>
            <small className='text-light'>APRIL 2021</small>
            </div>
          </article>
          <article className='education_details'>
    
            <CgTrophy className='icon'/>
            <div>
            <h4>HASH CODE 2022</h4>
            <small className='text-light'>QUALIFIER ROUND </small>
            <small className='text-light'>MARCH 2022</small>
            </div>
        </article>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Eduaction