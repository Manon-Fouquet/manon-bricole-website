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
      <Container fluid="xxl" style={{padding:"0px"}} >
        <Navbar bg="white" expand="sm"  fixed='top' style={{
          marginBottom:"75px" , 
          paddingLeft:"12px", 
          paddingRight:"12px",
          width:"100%"}}>

            <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="/pro/">Work projects</Nav.Link> 
              <NavDropdown title="Personal projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/perso/">DIY</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/art/">Painting</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact/">Contact</Nav.Link>
              <NavDropdown title="CV" id="basic-nav-dropdown">
                <NavDropdown.Item href={CV_EN}>english</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={CV_FR}>french</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <div style={{
                      width:"100%", 
                      padding:"12px",
                      paddingTop:"3rem",
                      margin:"0px"}}>
            {children}
        </div> 
      </Container>  
  )
}
export default Layout