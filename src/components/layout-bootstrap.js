import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeaderMoon from './headerMoon'
import { Container,Navbar,NavDropdown ,Nav, Row} from 'react-bootstrap'
import CV_EN from '../data/202209_CV_FOUQUET_Manon_EN.pdf'
import CV_FR from '../data/202209_CV_FOUQUET_Manon_FR.pdf'

const Layout = ({ pageTitle, children }) => {
  
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
    <body>
      <Container>
        <Row>
          <Navbar bg="white" expand="lg"  fixed='top'>
            <Container>
              <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/pro/">Work projects</Nav.Link> 
                <Nav.Link href="/perso/">DIY</Nav.Link> 
                <Nav.Link href="/contact/">Contact</Nav.Link>
                  <NavDropdown title="CV" id="basic-nav-dropdown">
                    <NavDropdown.Item href={CV_EN}>en</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={CV_FR}>fr</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        <Row>
          <HeaderMoon></HeaderMoon>
        </Row>

        <Row>
          <main>
              {children}
          </main>
        </Row> 
      </Container>  
    </body>
  )
}
export default Layout