import * as React from 'react'
import {
    polaroidFrame,
    polaroidPic,
    PolaroidDate,
    PolaroidDescr
} from './polaroid.module.scss'

const HeaderMoon = (picture) => {
  return (
      <div className = {polaroidFrame}>
          <div className={polaroidPic}>
              <div className = {PolaroidDate} style={{backgroundImage: "url(" + picture + ")"}}>
                <div className={circlePic}></div>
              </div>
          </div>
      </div>
  )
}
export default HeaderMoon