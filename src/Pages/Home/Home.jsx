import React from 'react'
import "./Home.css"
import Navbar from '../../Shared/Navbar/Navbar'
import Introduce from '../../Components/Introduce/Introduce'

function Home() {
  return (
    <div>
        <Navbar/>
        <Introduce/>
    </div>
  )
}

export default Home