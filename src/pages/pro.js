import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'

import TestPic1 from '../images/lutherie_5.jpg'
import TestPic2 from '../images/seattle.jpg'
import { StaticImage } from 'gatsby-plugin-image'
//style={{height:'150px'}}
/*style={{
  backgroundColor:"black",
  width: "100%",
  height: "300px",
  display: "inline-block", 
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat"
}}
*/
const Pro = () => {
  return (
      <Layout pageTitle="Work projects">
        
        <h1>A collection of work related articles</h1>
        <Container fluid="md"> 
          <Row className='mt-5'>
            <Col>
           <Card >
              <Card.Img variant="top" src={TestPic1}/> 
                <Card.Body>
                  <Card.Title>Algorithm for the Belgium CRM</Card.Title>
                  <Card.Text>
                  On October 2021
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col> 

              <Col>
              <Card >
                <Card.Img variant="top" src={TestPic2} thumbnail={true} height="300px" /> 
                <Card.Body>
                  <Card.Title>A blog article on my learning path to data science</Card.Title>
                  <Card.Text>
                    I am currently taking the course "Data scientist" at Udacity
                  </Card.Text>
                  <Button variant="primary" href='https://medium.com/p/3e8b5e797d4#2e92-4a5a3b91db85' target="_blank">Medium article</Button>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card style={{ width: '23rem' } }>
                <Card.Img variant="top" src={TestPic2}/> 
                <Card.Body>
                  <Card.Title>A blog article on my learning path to data science</Card.Title>
                  <Card.Text>
                    I am currently taking the course "Data scientist" at Udacity
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
        </Row>
        </Container>
      </Layout>
  )
}
export const Head = () => <Seo title="Professional portfolio" />
export default Pro