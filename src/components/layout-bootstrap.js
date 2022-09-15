import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import HeaderMoon from './headerMoon'
import { Container,Navbar,NavDropdown ,Nav, Row} from 'react-bootstrap'


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
              <Navbar.Brand href="/">Manon Fouquet's blog</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/pro/">Work projects</Nav.Link> 
                <Nav.Link href="/perso/">DIY</Nav.Link> 
                <Nav.Link href="/contact/">Contact</Nav.Link>
                  <NavDropdown title="CV" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/pro/">en</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/perso/">fr</NavDropdown.Item>
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