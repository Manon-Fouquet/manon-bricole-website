import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container,Navbar,NavDropdown ,Nav, Row} from 'react-bootstrap'
import CV_EN from '../data/202209_CV_FOUQUET_Manon_EN.pdf'
import CV_FR from '../data/202209_CV_FOUQUET_Manon_FR.pdf'

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <body >
      <Container fluid='xl' >
        <Row >
          <Navbar bg="white" expand="lg"  fixed='top'>
            <Container>
              <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav >
                <Nav.Link href="/pro/">Work projects</Nav.Link> 
                <Nav.Link href="/perso/">DIY</Nav.Link> 
                <Nav.Link href="/art/">Art-work</Nav.Link> 
                <Nav.Link href="/contact/">Contact</Nav.Link>
                  <NavDropdown title="CV" id="basic-nav-dropdown">
                    <NavDropdown.Item href={CV_EN}>english</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={CV_FR}>french</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>


        <Row style={{paddingTop:"100px", paddingBottom:"50px"}}>
            {children}
        </Row> 
      </Container>  
    </body>
  )
}
export default Layout