import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import Introduce from '../../Components/Introduce/Introduce'
import Section2 from '../../Components/NavSection2/Section2'
import Section3 from '../../Components/NavSection3/Section3'
import Footer from '../../Shared/Footer/Footer'
import Pricing from '../../Components/Pricing/Pricing'


function Home() {
  return (
    <div>
        <Navbar/>
        <Introduce/>
       <Section2/>
       <Section3/>
       <Pricing/>
       <Footer/>
    </div>
  )
}

export default Home