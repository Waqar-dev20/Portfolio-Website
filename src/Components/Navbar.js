import React, { useState } from 'react'
import portfolio from './portfolio.png'; 
import close from './close.svg'; 
import hamburger from './menu.png'; 
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    let [menu_style,setMenu_style] = useState({right:"-220px"})
    function OpenMenu(){
  setMenu_style({right:"2px"})
}
function CloseMenu(){
setMenu_style({right:"-220px"})
}

  
  return (
    <>
      <header className="header">

        <nav style={props.style}>
            <div className="left-navs">
                <div className="head"><Link to="/"><img src={portfolio} alt="pic"/></Link> <h2><Link style={props.color} to="/">Portfolio</Link></h2></div>
                <ul>
                    <li id="home"><Link to="/">Home</Link></li>
                    <li><Link style={props.color} to="/about">About me</Link></li>
                    <li id="contact"><li><Link to="/contact">Contact me</Link></li></li>
                    <li><Link style={props.color} to="/projects">Projects</Link></li>
                </ul>
            </div>
            <div className="right-navs">
                <div className="hamburger"><img style={props.invert} onClick={OpenMenu} src={hamburger} alt="Hamburger"/></div>
                <label id="mode" htmlFor="toggle">Enable {props.mode} Mode</label>
                <label className="switch">
                    <input onChange={props.ChangeMode} type="checkbox" id="toggle"/>
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
        <div style={menu_style} className="menu-container">
            <div className="close-img"><img onClick={CloseMenu} src={close} alt="close"/></div>
            <ul>
                    <li id="home"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li id="contact"><li><Link to="/contact">Contact me</Link></li></li>
                    <li><Link to="/projects">Projects</Link></li>
                
                <li><label id="mode2" htmlFor="toggle2">Enable {props.mode} Mode</label>
                <label className="switch">
                    <input onChange={props.ChangeMode} type="checkbox" id="toggle2"/>
                    <span className="slider"></span>
                </label></li>
                </ul>
        </div>
    </header>
    </>
  )
  
}
