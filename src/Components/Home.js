import React from 'react'
import './Home.css'
import pc_pic from './pc-pic.jpg'
export default function Home(props) {
  return (
    <>
       <main style={props.style}>
        <div className="container">
            <div className="inner-container left-container">
                <div className="main-content">
                    <div><h1>Hello, I am WAQAR AHMED</h1>
                    <h3>Front-end Developer</h3></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rerum odio suscipit veritatis tempora fugiat, expedita dolores eos quaerat beatae, obcaecati laudantium dicta nobis, sint ipsa. Esse quo iure ipsa explicabo. Quas ipsum odio enim omnis modi voluptatum, ducimus saepe autem nesciunt aliquid cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quasi dicta qui a consequuntur iusto nesciunt debitis? Repudiandae voluptatem, quidem tenetur in eligendi aliquam eius nam quos atque consequuntur magnam!</p>
                </div>
            </div>
            <div className="inner-container right-container">
                <img src={pc_pic} alt="computer image"/>
            </div>
        </div>
    </main>
    </>
  )
}
