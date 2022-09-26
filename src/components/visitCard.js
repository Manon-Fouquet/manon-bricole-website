import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import './visitCard.scss'

import HeaderCircle from "../images/profile.png"

const VisitCard = (props) => {
  return (
<div className="flip-container centered"> 
    
    <div className="back">
      <h1>Manon Fouquet</h1>
      <div className="font-a-icons">
        <div className="icon-group">
          <span className="bold">T: </span><span className="contact">{props.phone}</span>
        <div className="icon-group">
          <span className="bold">E: </span><a className="contact" href={"mailto:"&props.email} target="_top">{props.email}</a>
        </div>
        <div className="icon-group">
          <a className="contact" href="http://www.manon-fouquet.com" target="_blank" rel="noreferrer">www.manon-fouquet.com</a>
        </div>
      </div>  
    </div>  

    <a className="icon-box" href="https://www.linkedin.com/in/manon-fouquet/" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin}/>
    </a>
    <a className="icon-box" href="https://github.com/Manon-Fouquet" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub}/>
    </a>
  </div>
  <div className='left-square'/>
  <div className="circle-frame" >
    <div className = "circle-moon">
      <div className="circle-pic" style={{backgroundImage: `url(${HeaderCircle})`}}/>
    </div> 
  </div>
</div>      
  )
}
export default VisitCard