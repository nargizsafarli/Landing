import React from 'react'
import "./Contact.css"
import imgBg from "./assets/bg contact.svg"
import { LuMessageSquareText } from "react-icons/lu"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <div className='contact-container'>
       <div className='contact-header'>
       <div className='header-text'>
       <h2>Contact Us</h2>
       <span>With precious...</span>
       </div>
        <img className='contact-img' src={imgBg}/>
       </div> 

       <div className='text2'>
        <h1>Do you Have any <span>question</span></h1>
        <p>If you have any question about our product, service, payment or company, Visit our FAQs page.
        </p>
        <div className='contact-icons'>
            <div className='icons-items'>
                <div className='icon-div div1'><LuMessageSquareText /></div>
                <div className='icont-text'>
                    <h4>Email Us</h4>
                    <span>example@gmail.com</span>
                </div>
            </div>
            <div className='icons-items'>
                <div className='icon-div div2'><MdOutlinePhoneInTalk /></div>
                <div  className='icont-text'>
                    <h4>Call Us</h4>
                    <span>+1 (888) 553-46-11</span>
                </div>
            </div>
            <div className='icons-items'>
                <div className='icon-div div3'><CiLocationOn /></div>
                <div  className='icont-text'>
                    <h4>Visit Us</h4>
                    <span>5588, Business Avenue,USA5</span>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Contact