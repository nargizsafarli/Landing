import React from 'react'
import "./Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='Navbar'>
       <div className='link'>
       {/* <Link to="/">Home</Link>
       <Link to="about">About</Link>
       <Link to="contact">Contact</Link> */}
       {["Home", "About", "Contact"].map((name, index) => (
          <NavLink
            key={index}
            to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
            className={({isActive})=>(isActive ? "active-link" : "")}
          >
            {name}
          </NavLink>
        ))}
       </div>
       <p>Landing</p>
      <button onClick={()=>navigate("/product")} className='button'>Buy Now</button>
    </div>
  )
}

export default Navbar