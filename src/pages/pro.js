import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'
import Img from 'gatsby-image'

import { graphql } from "gatsby"

// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const displayCard = ({imgMayBeNull})=>{
  if(imgMayBeNull!=null){
    return(
       <div> 
        <Card.Img/>
                  <Img fluid ={imgMayBeNull.childImageSharp.fluid} alt=""/>
          </div>
        )
  }else{
    return  "NO IMAGE FOUND"
  }
}

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
                
                <Card style={{marginBottom:"20px", textAlign:"justify"}} >
                {/*displayCard(node.frontmatter.picture)*/}
                <Card.Img/>
                {node.frontmatter.picture==null?"":<Img fluid ={node.frontmatter.picture.childImageSharp.fluid} alt=""/>}
                
                <Card.Body>
                    <Card.Title style={{color:"rgb(3, 68, 94)"}}>{node.frontmatter.title}</Card.Title>
                    <Card.Text>
                    {node.frontmatter.summary}
                    </Card.Text>
                    <Card.Text>
                    <u>keywords:</u> <ts/><i>
                      {node.frontmatter.keywords.join(", ")}
                    </i>
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
  allMarkdownRemark (
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
export const Head = () => <Seo title="Professional portfolio" />
export default Pro