import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import HeaderMoon from '../components/headerMoon'
import Seo from '../components/seo'
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import {
  subHeaders,
  introP,
  technoList
} from '../components/layout.module.scss';

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page"  >
        
      <HeaderMoon/>

      <p className={introP}>For 10 years, I have worked in modelling and optimization of energy systems. 
          On this website, you can find a collection of my  <a href = './pro/'>professional projects</a>  (and also some <a href = './perso/'>projects I do as hobbies</a>)
      </p> 

      <h2 className={subHeaders}>Services</h2>
      
      <p style={{fontSize:"1.1rem", textAlign:"left"}}>Based on my previous experiences, I can offer you the following services as freelance</p>
      
      <Accordion defaultActiveKey="-1" style={{marginLeft:"1.5rem", marginBottom:"2rem"}}>
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
      <Accordion.Item eventKey="4">
        <Accordion.Header>Expertise on energy markets</Accordion.Header>
        <Accordion.Body>
          I have developped a strong knowledge of electricity networks through my education at Mines ParisTech
          and during my work experience at Artelys. I have contributed to the development of auction clearing
          algorithms for several energy markets, and implemented several optimization models for power systems.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <h2 className={subHeaders}>Technologies</h2>
    
    <Container style={{paddingLeft:"1rem"}}>
      <Row><h4 className={technoList}>Backend</h4></Row>
      <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto">
        <Col> <StaticImage src='../images/icons/python.png' height={50} alt="python"/></Col>
        <Col><StaticImage src='../images/icons/pandas.png'  height={50} alt="pandas"/></Col>
        <Col><StaticImage src='../images/icons/seaborn.png' height={50} alt="seaborn"/></Col>
        {/* <Col><StaticImage src='../images/icons/scikit.png'  height={50} alt="scikit"/></Col> */}
        <Col><StaticImage src='../images/icons/plotly.png'  height={50} alt="plotly"/></Col>
        <Col><StaticImage src='../images/icons/java.png'    height={50} alt="java"/></Col>
        <Col><StaticImage src='../images/icons/docker.png'  height={50} alt="docker"/></Col>
      </Row> 

      <Row><h4 className={technoList}>Frontend</h4></Row> 
      <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto">
      
        <Col><StaticImage src='../images/icons/javascript.png'  height={50} alt="javascript"/></Col>
        <Col><StaticImage src='../images/icons/react.png'       height={50} alt="react"/></Col>
        <Col><StaticImage src='../images/icons/gatsby.png'      height={50} alt="gatsby"/></Col>
      </Row>
      <Row><h4 className={technoList}>Simulation and optimization</h4> </Row>
      <Row xs="3" sm="4" md="5" lg="auto" xl="auto" xxl="auto">
          <Col><StaticImage src='../images/icons/AMPL.png'      height={50} alt="AMPL"/></Col>
          <Col><StaticImage src='../images/icons/XPRESS.png'    height={50} alt="XPRESS"/></Col>
          <Col><StaticImage src='../images/icons/modelica.png'  height={50} alt="Modelica"/></Col>
          <Col><StaticImage src='../images/icons/matlab.png'    height={50} alt="MATLAB"/></Col>
      </Row>
    </Container>
  </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage
