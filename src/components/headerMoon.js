import * as React from 'react'
import {
    circleHeader,
    circleFrame,
    circlePic,
    circleMoon
} from './headerMoon.module.scss'


import HeaderCircle from "../images/Cartoonify.svg"

const HeaderMoon = () => {
  return (
      <div className = {circleHeader}>
          <div className={circleFrame}>
              <div className = {circleMoon} >
                <div className={circlePic} style={{backgroundImage: `url(${HeaderCircle})`}}></div>
              </div>
          </div>
      </div>
  )
}
export default HeaderMoon