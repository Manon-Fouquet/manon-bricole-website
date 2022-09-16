import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'

import TestPic2 from '../images/seattle.jpg'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

// 
const Pro = ({data}) => {

  return (
      <Layout pageTitle="Work projects">
        
        <h3>A collection of work related articles</h3>
        <Container fluid="md"> 
        <Row className='mt-4'  >
          {
            data.allMarkdownRemark.nodes.map(node => 
              {
                //const image = getImage(node.frontmatter.picture?node.frontmatter.picture:'../images/seattle.jpg')
              
                const picPath = node.frontmatter.picture
                return  <Col className='col-12 col-sm-12 col-md-6 col-lg-4'>
                <Card style={{marginBottom:"20px"}} >
                  
                <GatsbyImage src ="../images/seattle.jpg"></GatsbyImage>
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
query MyQuery{
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          date(formatString: "MMMM YYYY")
          link
          summary
          title
          slug
          picture 
        }
      }
    }
  }
`
export const Head = () => <Seo title="Professional portfolio" />
export default Pro