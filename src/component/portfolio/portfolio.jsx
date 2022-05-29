import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/math.png'
import IMG2 from '../../assets/weather.png'
import IMG3 from '../../assets/picknmatch.png'
import IMG4 from '../../assets/chatbot.jpg'

const data= [
    {
        id:'1',
        title:'Math AI virtual assitant',
        github:'https://github.com/mathai.git',
        img:IMG1,
    },
    {
        id:'2',
        title:'Weather App',
        github:'https://github.com/weather.git',
        img:IMG2,
    },
    {
        id:'3',
        title:'Pick n Match',
        github:'https://github.com/picknmatch.git',
        img:IMG3,
    },
    {
        id:'4',
        title:'Chat bot',
        github:'https://github.com/chatbot',
        img:IMG4,
    },


]
    


const portfolio = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>projects</h2>
        <div className='projects_container'>
            {
        data.map(({id,title,github,img}) => {
            return (
        
            <article key={id} className='projects_item'>
                <div className='projects_item-image'>
                    <img src={img} alt={title}/>
                </div>
               
                <h3>{title}</h3>
                <div className='cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                </div>
            </article>
            ) 
             })
            }
             

            </div>
           
    </section>
  )
}

export default portfolio