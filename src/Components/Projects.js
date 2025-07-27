import React from 'react'
import './Projects.css'
import iblog from './iblog.jpg'
import spotify from './Spotify clone.png'
import gym from './Gym landing.png'
import login from './Login page.jpg'
import starbucks from './Starbucks clone.png'

export default function Projects(props) {
  return (
    <>
       <div style={props.style} class="container2">
            
            <div class="card-container">
                <h1>My Projects</h1>
                <div class="card">
                    <div class="card-img"><img src={iblog} alt=""/></div>
                    <div class="card-content">
                        <span id="hofca">iBlog Project</span>
                        <span>Developer : {props.developer}</span>
                        <span>Skills : HTML and CSS</span>
                    </div>
                </div>
                <hr />
                <div class="card">
                    <div class="card-img"><img src={starbucks} alt=""/></div>
                    <div class="card-content">
                        <span id="hofca">Starbucks clone Project</span>
                        <span>Developer : {props.developer}</span>
                        <span>Skills : HTML and CSS</span>
                    </div>
                </div>
                <hr />
                <div class="card">
                    <div class="card-img"><img src={login} alt=""/></div>
                    <div class="card-content">
                        <span id="hofca">Login page Project</span>
                        <span>Developer : {props.developer}</span>
                        <span>Skills : HTML and CSS</span>
                    </div>
                </div>
                <hr />
                <div class="card">
                    <div class="card-img"><img src={spotify} alt=""/></div>
                    <div class="card-content">
                        <span id="hofca">Spotify clone Project</span>
                        <span>Developer : {props.developer}</span>
                        <span>Skills : HTML,CSS and JAVASCRIPT</span>
                    </div>
                </div>
                <hr />
                <div class="card">
                    <div class="card-img"><img src={gym} alt=""/></div>
                    <div class="card-content">
                        <span>Gym landing page Project</span>
                        <span>Developer : {props.developer}</span>
                        <span>Skills : HTML and CSS</span>
                    </div>
                </div>
 
            </div>
        </div>
    </>
  )
}
