import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear=new Date().getFullYear()
  return (
    <div className='footer1'>
        <div className='fSec2'>
          <div className='copyRight'>
            <p>@{currentYear}YourCompany</p>
            <h2>Landing</h2>
            <button>Pursace Now</button>
          </div>
          <hr/>
          <div className='footer'>
            <div className='navFooter'>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer