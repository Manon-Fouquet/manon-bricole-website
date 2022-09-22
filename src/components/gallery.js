import * as React from 'react'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image";

// Could not manage to use gatsby-plugin-image to retrieve img from mdx path

const Gallery = ({data}) => { return (
  <Container fluid="md"> 
      <Row className='mt-4'  >
        {
          data.allMarkdownRemark.nodes.map(node => 
            {
              const articlePic = node.frontmatter.picture && node.frontmatter.picture.childImageSharp.gatsbyImageData
              return (
                <Col className='col-12 col-sm-12 col-md-4 col-lg-4'>
                
                <Card style={{marginBottom:"20px", textAlign:"justify"}} >
                {/*displayCard(node.frontmatter.picture)*/}
                <Card.Img/>
                <GatsbyImage image={articlePic}/>
                
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
              ); 
            }

          )
        }
    </Row>
      
  </Container>
);
}

export default Gallery

