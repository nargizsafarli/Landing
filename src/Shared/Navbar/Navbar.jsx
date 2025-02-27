import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
       <div className='link'>
       <Link to="/">Home</Link>
       <Link to="about">About</Link>
       <Link to="contact">Contact</Link>
       </div>
       <p>Landing</p>
      <button className='button'>Buy Now</button>
    </div>
  )
}

export default Navbar