import React from 'react'
import "./Home.css"
import Navbar from '../../Shared/Navbar/Navbar'
import Introduce from '../../Components/Introduce/Introduce'
import Section2 from '../../Components/NavSection2/Section2'


function Home() {
  return (
    <div>
        <Navbar/>
        <Introduce/>
       <Section2/>
    </div>
  )
}

export default Home