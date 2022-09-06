import * as React from 'react'
import {
    circleHeader,
    circleFrame,
    circlePic,
    circleMoon
} from './headerMoon.module.scss'

const HeaderMoon = (picture) => {
  return (
      <div className = {circleHeader}>
          <div className={circleFrame}>
              <div className = {circleMoon} style={{backgroundImage: "url(" + picture + ")"}}>
                <div className={circlePic}></div>
              </div>
          </div>
      </div>
  )
}
export default HeaderMoon