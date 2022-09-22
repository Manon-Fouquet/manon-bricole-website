import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import Gallery from '../components/gallery'

// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const Pro = ({data}) => {

  return (
      <Layout pageTitle="DIY projects">
        
        <h3>Some DIY projects - [UNDER CONSTRUCTION]</h3>
        <Gallery data={data}></Gallery>
        
      </Layout>
  )
}


export const query = graphql`
query PersoQuery {
  allMarkdownRemark (
    filter: {fileAbsolutePath: {regex: "/DIY/"}
    }
    sort: {
      fields: [frontmatter___date, frontmatter___title]
      order: [DESC, ASC]
    }
    ){
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
            fluid{
              ...GatsbyImageSharpFluid
              aspectRatio
            }
          }
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Personal portfolio" />
export default Pro