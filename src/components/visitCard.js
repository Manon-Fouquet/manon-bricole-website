import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import './visitCard.scss'

const VisitCard = (props) => {
  return (
  <div>

<div className="flip-container centered">
      <div className="flipper">
         <div className="front"></div>
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
      </div>
   </div>          
  </div>
  )
}
export default VisitCard