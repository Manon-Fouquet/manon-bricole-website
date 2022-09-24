import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Gallery from '../components/gallery'
import styled from 'styled-components'

const IntroPLeft = styled.p
`
  font-size:1.1rem;
  text-align:left;
  margin-bottom:1.5rem;
  font-style:italic;
`

const SubHeaders = styled.h2
`
  margin-bottom:2rem;
  margin-top:2rem;
  text-align:left;  
  justify-content:left;
`


const Pro = ({data}) => {

  return (
      <Layout pageTitle="DIY projects">
        
        <SubHeaders>Some DIY projects - [UNDER CONSTRUCTION]</SubHeaders>
        
        <IntroPLeft> I love building things by myself. Here are a few DIY works in my house and other small projects.
        </IntroPLeft>
        <Gallery data={data}></Gallery>
        
      </Layout>
  )
}


export const query = graphql`query PersoQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/DIY/"}}
    sort: {
      fields: [frontmatter___date, frontmatter___title], 
      order: [DESC, ASC]}) {
    nodes {
      html
      frontmatter {
        title
        summary
        date
        link
        keywords
        picture {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Personal portfolio" />
export default Pro