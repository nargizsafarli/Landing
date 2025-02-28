import React from 'react'
import "./About.css"
import aImg1 from "./assets/img1.png"
import aImg2 from "./assets/img2.png"
import aImg3 from "./assets/img3.png"

function About() {
  return (
    <div className='about-container'>
        <div className='about-text'>
         <p>
         Providing innovative app solution 
         <span> to make customer life easy to grow.</span>
         </p>
         <h3>
         Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining to make a type speci men book. It has survived essentially unchanged
         </h3>
        </div>
        <div className='about-img'>
            <img className='img1' src={aImg1}></img>
            <img className='img2' src={aImg2}></img>
            <img className='img3' src={aImg3}></img>
        </div>
    </div>
  )
}

export default About