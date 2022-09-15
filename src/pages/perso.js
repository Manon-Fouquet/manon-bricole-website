import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import Polaroid from '../components/polaroid'
import styled from 'styled-components'

import TestVImage from "../images/lutherie_5.jpg"
import TestHImage from "../images/lutherie_1.jpg"


const GalleryContent = styled.div
    `
    border: 2px;
    border-style: dashed;
    border-color:yellow;
    display: flex;
    flex-direction: row;    
    align-items:flex-start;
    flex-wrap:wrap;
    justify-content:space-between;
`
//justify-content:space-around;

const SamplePolaroidV = {
  img : TestVImage,
  date:'2022/04/02' ,
  text:"Rosace"
}

const SamplePolaroidH = {
  img : TestHImage,
  date:'2022/04/02' ,
  text:"Rosace"
}

const Perso = () => {
  return (
      <Layout pageTitle="DIY projects">
        <h2>A collection of DIY projects</h2>
        <div className='row'>
          <div className='col-5'></div>
          <div className='col-5'></div>
            <div className='row'>
              <div className='col-3'>
                <Polaroid data={SamplePolaroidV}></Polaroid>
              </div>
              <div className='col-3'>
                <Polaroid data={SamplePolaroidH}></Polaroid>
              </div>
              <div className='col-3'>
                <Polaroid data={SamplePolaroidH}></Polaroid>
              </div>
              <div className='col-3'>
                <Polaroid data={SamplePolaroidV}></Polaroid>
              </div>
            </div> 
            <div className='row'>  
              <div className='col-3'>
                <Polaroid data={SamplePolaroidV}></Polaroid>
              </div>
            </div>
         </div>        
      </Layout>
  )
}
export const Head = () => <Seo title="Personal portfolio" />
export default Perso