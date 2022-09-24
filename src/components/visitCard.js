import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import './visitCard.scss'

import {
  circleFrame,
  circlePic,
  circleMoon
} from './headerMoon.module.scss'

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
          <a className="contact" href="http://www.manon-fouquet.com" target="_blank">www.manon-fouquet.com</a>
        </div>
      </div>
    </div>   
      <a className="icon-box" href="https://www.linkedin.com/in/manon-fouquet/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a className="icon-box" href="https://github.com/Manon-Fouquet" target="_blank">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
  </div>
  <div className={circleFrame} style={{
          zIndex:100, 
          top:"30px", 
          borderColor:'black',
          borderWidth:'1px',
          boxShadow:"10px 10px 10px 10px rgba(0, 0, 0, 0.1)"}}>
      <div className = {circleMoon} style={{
          backgroundColor:'rgba(6,137,190,0.5)',
          width:"120px",
          height:"120px"
        }} >
        <div className={circlePic} style={{
          backgroundImage: `url(${HeaderCircle})`,
          left:"0px",
          top:"0px",
          width:"120px",
          height:"120px"}}></div>
      </div>
    </div>
</div>      
  )
}
export default VisitCard