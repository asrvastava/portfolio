import React from 'react';
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from "react-icons/fa"

import {RiServiceLine} from "react-icons/ri"
import {MdContactMail} from "react-icons/md"
import { useState } from 'react';
import {SiCodeproject} from 'react-icons/si'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#');
  return (
    
    <nav>
      <a href='#home' onClick={()=> setActiveNav('#')} className={activeNav ==='#home' ? 'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#')} className={activeNav ==='#about' ? 'active':''}><FaUserAlt/></a>
      <a href='#experience'onClick={()=> setActiveNav('#')} className={activeNav ==='#experience' ? 'active':''}><RiServiceLine/></a>
      <a href='#projects' onClick={()=> setActiveNav('#')} className={activeNav ==='#projects' ? 'active':''}><SiCodeproject/></a>
      <a href='#contact' onClick={()=> setActiveNav('#')} className={activeNav === '#contact' ? 'active':''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav