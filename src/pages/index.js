import * as React from 'react'
import Layout from '../components/layout'
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

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <GalleryContent>
          <Polaroid data={SamplePolaroidV}></Polaroid>
          <Polaroid data={SamplePolaroidV}></Polaroid>
          <Polaroid data={SamplePolaroidH}></Polaroid>
          <Polaroid data={SamplePolaroidH}></Polaroid>
          <Polaroid data={SamplePolaroidV}></Polaroid>
        </GalleryContent>
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage