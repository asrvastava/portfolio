import React from 'react'
import "./footer.css";
import {FiFacebook} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import {FaDiscord} from "react-icons/fa"
import {BsMessenger} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Iamvastava</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#profolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socails'>
        <a href="https://www.facebook.com/profile.php?id=100045263745787">  <FiFacebook/> </a>
        <a href="https://www.instagram.com/srivas___ankit/"> <BsInstagram/> </a>
        <a href="https://www.twitter.com/iamvastava/"> <FiTwitter/>  </a>
        <a href="https://discord.com/channels/@me/948337985349382147"> <FaDiscord/> </a>
        <a href="https://m.me/100045263745787"> <BsMessenger/> </a> 
        <a href="https://www.linkedin.com/in/ankit-kumar-srivastava-93949821b/" target="_blank">   <BsLinkedin/>   </a>
        <a href="https://github.com/asrvastava" target="_blank">    <FiGithub/>  </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; srivastava ALL RIGHTS RESERVED 2022.</small>
      </div>
    </footer>
  )
}

export default footer