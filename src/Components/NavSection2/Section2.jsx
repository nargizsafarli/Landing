import React from 'react'
import "./Section2.css"
import homeIcon from "./assets/image.png"
import imgTwo from "./assets/image22.png"

function Section2() {
  return (
    <div className='SecTwoCon'>
        <div className='secTwoText'>
            <div  className='text-items'>
                <h1>Light, Fast & Powerful</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat nunc leo, velcies viverra purus id imperdiet. Aliquam ligula ante, maximus quis enim eu, pharetra feugiat urna. Aenean eget tempor velit,</span>
            </div>
            <div className='icons'>
                <div className='icon-items'>
                    <img src={homeIcon}/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum aliquam ligula, sed commodo est. Vestibulum vitae consequat dui, </p>
                </div>
                <div  className='icon-items'>
                    <img src={homeIcon}/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum aliquam ligula, sed commodo est. Vestibulum vitae consequat dui, </p>
                </div>
            </div>
        </div>
        <div className='secTwoImg'>
            <img src={imgTwo}/>
        </div>
    </div>
  )
}

export default Section2