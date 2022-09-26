import * as React from 'react'
import { Card, Button ,Row,Col,Container} from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image";
import Clamp from 'react-multiline-clamp'
/* 1st attempt multiline clamp : 
   style= {{
  maxHeight:"150px", 
  textOverflow: "ellipsis",
  overflow: "hidden",
  paddingBottom:"10px"}}*/

const Gallery = ({data}) => { return (
  <Container fluid> 
      <Row  xs="1" sm="1" md="2" lg="3" xl="3" xxl="4"  >
        {
          data.allMarkdownRemark.nodes.map(node => 
            {
              const articlePic = node.frontmatter.picture && node.frontmatter.picture.childImageSharp.gatsbyImageData
              return (
                <Col>
                
                <Card style={{marginBottom:"20px", textAlign:"justify"}} >
                {/*displayCard(node.frontmatter.picture)*/}
                <GatsbyImage image={articlePic} />
                
                <Card.Body>
                    <Card.Title  as = "h6" style={{color:"rgb(3, 68, 94)"}}>{node.frontmatter.title}</Card.Title>
                    <Card.Text  >
                    <Clamp withTooltip 
                    lines={5}
                    maxLines={100}
                    withToggle
                    showMoreElement={({ toggle }) => (
                        <Button size='sm' variant="secondary" onClick={toggle}>
                            more
                        </Button>
                    )}
                    showLessElement={({ toggle }) => (
                        <Button size='sm' variant="secondary" onClick={toggle}>
                            less
                        </Button>
                    )}>
                  {node.frontmatter.summary}
                    </Clamp>
                    </Card.Text>
                    <Card.Text>
                    <u>{node.frontmatter.keywords && "keywords:"}</u> <ts/><i>
                      {node.frontmatter.keywords && node.frontmatter.keywords.join(", ")}
                    </i>
                    </Card.Text>
                    <Button size='sm' variant="primary" href={node.frontmatter.link} target="_blank" rel="noopener">Link</Button>
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

