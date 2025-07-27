import React from 'react'
import './Contact.css'
export default function Contact(props) {
  return (
    <>
      <div style={props.style} className="contact-container">

        <div class="container3">
            <h2 class="font1">Feel Free to Contact Me</h2>
            <div class="inputs">
                <input type="text" placeholder="Enter Your Name"/>
                <input type='number' placeholder="Enter Your Phone Number"/>
                <input type="email" placeholder="Enter Your Email ID"/>
                <textarea rows="10" placeholder="How may I help you?"></textarea>
                <button>Submit</button>
            </div>
        </div>
   
      </div>
    </>
  )
}
