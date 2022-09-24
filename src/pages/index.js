import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import HeaderMoon from '../components/headerMoon'
import Seo from '../components/seo'
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const IntroP = styled.p
`
  font-size:1.1rem;
  text-align:center;
  margin-bottom:2.5rem;
  font-style:italic;
`

const SubHeaders = styled.h2
`
  margin-bottom:2rem;
  margin-top:2rem;
  text-align:left;  
  justify-content:left;
`


const TechnoList = styled.h4
`
  margin-bottom:1.5rem;
`
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page"  >

        <Row>
          <HeaderMoon/>
        </Row>

       <Row style = {{paddingBottom:"2rem", marginLeft:"1.5rem"}}> 
        <IntroP>Since 10 years, I have worked in applied mathematics and have developped
           strong methodological and technical skills to model and optimize complex systems. 
           On this website, you can find a collection of my  <a href = './pro/'>professional projects</a>  (and also some <a href = './perso/'>projects I do as hobbies</a>, for fun!)
        </IntroP> 

        <SubHeaders>Services</SubHeaders>
        <p style={{fontSize:"1.1rem", textAlign:"left",marginLeft:"1.5rem"}}>Based on my previous experiences, I can offer you the following services</p>
        <Accordion defaultActiveKey="-1" style={{marginLeft:"1.5rem"}}>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Expertise in system modelling</Accordion.Header>
            <Accordion.Body>
              I can help you with system modelling in various mathematical framework (MILP, NLP, dynamic optimization, Machine Learning)
              <ol>
                <li> Choose the best modelling framework for your system (best compromise among speed, robustness, complexity, requirement for optimality, reproducibility)</li>
                <li> Define what are the inputs and outputs of the system</li>
                <li> Formulation of the mathematical model, ready for implementation</li>   
                <li> Optional: implementation of the model in your favourite environment</li>    
                <li> Optional: set-up of an API to call the optimization model and retrieve results</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Project management of technical projects</Accordion.Header>
            <Accordion.Body>
              I have coordinated several projects in highly technical environments and can offer you my services to set-up a new project.
              <ol>
                <li>Business understanding: some meetings to write a set of business requirements</li>
                <li>Assessment of the available and required data for the project</li>
                <li>Proposal of a validation methodology for software releases</li>
                <li>Proposal of a data and software architecture for the project</li>                
                <li>Definition of a work plan, with intermediate deliveries</li>
                <li>Set-up of the technical architecture and tooling for collaborative development</li>                
                <li>Organization of project status meetings (every 1 or 2 weeks)</li>
                <li>Coordination of the work with software developpers (realization of some/all software developements)</li>
                <li>Intermediate and final software releases</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Data analysis</Accordion.Header>
        <Accordion.Body>
        I can conduct investigations on your datasets using Python (Pandas, Seaborn, Plotly), following the CRISP-DM methodology (Cross-Industry Standard Process for Data Mining).
        A report with useful visualizations will be provided.
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="3">
        <Accordion.Header>Frontend development</Accordion.Header>
        <Accordion.Body>
          Creation of your website, front-end development 
          <ol>
                <li>Discussion on the site content and expected functionalities</li>
                <li>Optional : graphical design</li>
                <li>Optional : blueprints of the user navigation throughout the website</li>
                <li>Implementation with a responsive design using Javascript/React/Webpack</li>
            </ol>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="4">
        <Accordion.Header>Expertise on energy markets</Accordion.Header>
        <Accordion.Body>
          I have developped a strong knowledge of electricity networks through my education at Mines ParisTech
          and during my work experience at Artelys. I have contributed to the development of auction clearing
          algorithms for several energy markets, and implemented several optimization models for power systems.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </Row >
    
    <SubHeaders>Tecnologies</SubHeaders>
    <Container style={{marginLeft:"1.5rem"}}>
    <Row><TechnoList>Backend</TechnoList></Row>
    <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto"  style={{paddingBottom:"2rem"}}>
      <Col> <StaticImage src='../images/icons/python.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/pandas.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/seaborn.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/scikit.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/plotly.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/java.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/docker.png'  height={100}/></Col>
    </Row> 

    <Row><TechnoList>Frontend</TechnoList></Row> 
    <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto"  style={{paddingBottom:"2rem"}}>
    
      <Col><StaticImage src='../images/icons/javascript.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/react.png'  height={100}/></Col>
      <Col><StaticImage src='../images/icons/gatsby.png'  height={100}/></Col>
    </Row>
    <Row><TechnoList> Simulation and optimization</TechnoList> </Row>
    <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto"  style={{paddingBottom:"2rem"}}>
        <Col><StaticImage src='../images/icons/AMPL.png'  height={100}/></Col>
        <Col><StaticImage src='../images/icons/XPRESS.png'  height={100}/></Col>
        <Col><StaticImage src='../images/icons/modelica.png'  height={100}/></Col>
        <Col><StaticImage src='../images/icons/MATLAB.png'  height={100}/></Col>
    </Row>
    </Container>
  </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage