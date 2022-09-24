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
      <Layout pageTitle="Work projects">
         
      <SubHeaders>A collection of work related articles - [UNDER CONSTRUCTION]</SubHeaders>
      
      <IntroPLeft> Here are a few projects on which I had the opportunity to work, either as developper, project manager
        or system expert.</IntroPLeft>
        <Gallery data={data}></Gallery>
        
      </Layout>
  )
}


export const query = graphql`query ProQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/work/"}}
    sort: {fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC]}
  ) {
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
            gatsbyImageData(
              height: 200
              )
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Professional portfolio" />
export default Pro