import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import { Container, Row, Col} from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image";
// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const ArtWork = ({data}) => { return (
  <Layout pageTitle="Art work">    

        
    <h2>Water painting</h2>
        
        <p> I used to paint a while ago, here are some modest water colors :)</p>
    <Container fluid="md"> 
        <Row className='mt-4'  >
          {
            data.allFile.nodes.map(node => 
              {
                return (
                  <Col className='col-12 col-sm-12 col-md-6 col-lg-4'>
                    <GatsbyImage
                      image={node.childImageSharp.gatsbyImageData}
                      className="w-100 shadow-1-strong rounded mb-4" />
                  </Col>
                );
              }

            )
          }
      </Row>
        
    </Container>
    
  </Layout>
);
}


export const query = graphql`query artQuery {
  allFile(filter: {absolutePath: {regex: "/art/"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}
`
export const Head = () => <Seo title="Art work" />
export default ArtWork