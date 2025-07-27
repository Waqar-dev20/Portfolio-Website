import React from 'react'
import './Footer.css'

export default function Footer(props) {
  return (
    <>
       <footer style={props.style}><div><span className="span1">Copy Right &copy; |&nbsp;</span><span className="span2">Portfolio Website </span></div>
       <div><span>Developer : <span className='Ahmed'>Waqar Ahmed</span></span></div>
       </footer>
    
    </>
  )
}
