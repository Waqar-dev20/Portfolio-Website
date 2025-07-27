import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let[color,setcolor]=useState({color:'black'})
  let [mode, setMode] = useState("Dark")
  let [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  let [invert, setinvert] = useState({ filter: "invert(0)" })

  let ChangeMode = () => {
    if (mode === "Dark") {
      setMode("Light")
      setStyle({
        color: "white",
        backgroundColor: "black"
      })
      setinvert({ filter: "invert(1)" })
      setcolor({color:'white'})
    }
    else {
      setMode("Dark")
      setStyle({
        color: "black",
        backgroundColor: "white"
      })
      setinvert({ filter: "invert(0)" })
      setcolor({color:'black'})
    }
  }
  return (
    <>
    <Router>
     <Navbar color={color} invert={invert} style={style} mode={mode} ChangeMode={ChangeMode} />
        <Routes>
          <Route exact path="/" element={<Home style={style}/>} />
          <Route exact path="/about" element={<About style={style}/>} />
          <Route exact path="/contact" element={<Contact style={style}/>} />
          <Route exact path="/projects" element={<Projects developer="Waqar Ahmed" style={style}/>} />
        </Routes>

        <Footer style={style} /> 
      </Router>
    </>
  );
}

export default App;