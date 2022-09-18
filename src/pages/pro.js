import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'
import Img from 'gatsby-image'

import { graphql } from "gatsby"

// Could not manage to use gatsby-plugin-image to retrieve img from mdx path


const Pro = ({data}) => {

  return (
      <Layout pageTitle="Work projects">
        
        <h3>A collection of work related articles</h3>
        <Container fluid="md"> 
        <Row className='mt-4'  >
          {
            data.allMarkdownRemark.nodes.map(node => 
              {
                
                return  <Col className='col-12 col-sm-12 col-md-6 col-lg-4'>
                <Card.Img/><Img fluid ={node.frontmatter.picture.childImageSharp.fluid}/>
                <Card style={{marginBottom:"20px"}} >
                <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    <Card.Text>
                    {node.frontmatter.summary}
                    </Card.Text>
                    <Button size='sm' variant="primary" href={node.frontmatter.link} target="_blank">Link</Button>
                  </Card.Body>
                </Card>
              </Col> 
              }
  
            )
          }
      </Row>
      
        </Container>
      </Layout>
  )
}


export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        summary
        date
        link
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
export const Head = () => <Seo title="Professional portfolio" />
export default Pro