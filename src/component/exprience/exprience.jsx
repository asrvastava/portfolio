import React from 'react';
import "./exprience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const exprience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experienece</h2>
      <div className='experience_container'>

      <div className="experience_frontend">
          <h3>LANGUAGES</h3>
          <div className="experienece_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>PYTHON </h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Front Development</h3>
          <div className="experienece_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>css</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>React JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>GIT BASH</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>AI ML AND DATA SCIENCE</h3>
          <div className="experienece_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>OPEN CV</h4>
              <small className='text-light'> BEGINNER</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>NUMPY</h4>
              <small className='text-light'>BEGINEER</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>PANDAS</h4>
              <small className='text-light'>BEGINEER</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>SPEECH RECOGNITION</h4>
              <small className='text-light'>BEGINEER</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className="experienece_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>Mysql</h4>
              <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <h3>VAPT</h3>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                
              <h4>SQLMAP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
      
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>XSS</h4>
              <small className='text-light'>BEGINEER</small>
              </div>
            </article>
            <article className='experience_details'>
      
            <BsPatchCheckFill className='icon'/>
            <div>
            <h4>BURPSUITE</h4>
            <small className='text-light'>BEGINEER</small>
            </div>
          </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default exprience