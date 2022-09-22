import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import { Container, Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'
// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const ArtWork = ({data}) => { return(

  <Layout pageTitle="Art work">
    
    <h3>Some creations</h3>
    

    <Container fluid="md"> 
        <Row className='mt-4'  >
          {
            data.allFile.nodes.map(node => 
              {
                return  (
                <Col className='col-12 col-sm-12 col-md-6 col-lg-4'>
                  <Img fluid ={node.childImageSharp.fluid} className="w-100 shadow-1-strong rounded mb-4"/>
                </Col> )
              }

            )
          }
      </Row>
        
    </Container>
    
  </Layout>
  )
}


export const query = graphql`
query artQuery {
  allFile(filter: {absolutePath: {regex: "/art/"}}) {
    nodes {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Art work" />
export default ArtWork