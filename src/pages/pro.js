import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'

import TestPic1 from '../images/lutherie_5.jpg'
import TestPic2 from '../images/seattle.jpg'
import { StaticQuery, graphql } from "gatsby"


const Pro = ({data}) => {

  return (
      <Layout pageTitle="Work projects">
        
        <h3>A collection of work related articles</h3>
        <Container fluid="md"> 
        <Row className='mt-4' fluid="md" >
          {
            data.allFile.nodes.map(node => (
              <Col>
                <Card style={{marginBottom:"20px"}} >
                <Card.Img variant="top" src={TestPic2}/> 
                <Card.Body>
                    <Card.Title>{node.name}</Card.Title>
                    <Card.Text>
                    short description
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col> 

            ))
          }
      </Row>
      
        </Container>
      </Layout>
  )
}


export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "work"}}) {
    nodes {
      name
    }
  }
}
`
export const Head = () => <Seo title="Professional portfolio" />
export default Pro