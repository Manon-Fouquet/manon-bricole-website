import * as React from 'react'
import Layout from '../components/layout-bootstrap'
import Seo from '../components/seo'
import Accordion from 'react-bootstrap/Accordion';

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page"  >
        
        <p style={{fontSize:"1.1rem", textAlign:"center"}}><i>Since 10 years, I have worked in applied mathematics and have developped
           strong methodological and technical skills to model and optimize complex systems. I'm a life-long learner, always trying to
           improve my skills on new topics, methods and technologies. On this website, you can find a collection of
           my professional projects (and also some projects I do as hobbies, for fun!)
        </i></p> 
        <p>Based on my previous experiences, I can offer the following services</p>
        <Accordion defaultActiveKey="-1">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Expertise in system modelling</Accordion.Header>
            <Accordion.Body>
              I can help you with system modelling in various mathematical framework (MILP, NLP, dynamic optimization, Machine Learning)
              <ol>
                <li> We will define together which is the best compromise for your system (e.g. among speed, robustness, complexity, requirement for optimality, reproducibility)</li>
                <li> We will agree on inputs and outputs of the system</li>
                <li> I will formulate the mathematical model, ready for implementation</li>   
                <li> Optional: I can implement the model in your favourite environment</li>    
                <li> Optional: I can set-up an API to call the optimization model and retrieve results</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Project management of technical projects</Accordion.Header>
            <Accordion.Body>
              I have coordinated several projects in highly technical environments and can offer you my services to set-up a new project.
              <ol>
                <li>We define together a set of business requirements</li>
                <li>We assess the available and required data for the project</li>
                <li>We agree on a validation methodology for software releases</li>
                <li>I propose a data architecture</li>                
                <li>I propose a work plan, with intermediate deliveries</li>
                <li>I set-up the technical architecture and tooling for collaborative development</li>                
                <li>I organize coordination meetings every 1 or 2 weeks with your organization</li>
                <li>I coordinate the work with software developpers and/or participate to software developements</li>
                <li>I organize software releases (intermediate and final versions)</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Data analysis</Accordion.Header>
        <Accordion.Body>
        I can conduct investigations on your data sets using Python (Pandas, Seaborn, Plotly,), following the CRISP-DM methodology (Cross-Industry Standard Process for Data Mining)
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="3">
        <Accordion.Header>Frontend development</Accordion.Header>
        <Accordion.Body>
          Creation of your website with a responsive design using Javascript/React/Webpack
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="4">
        <Accordion.Header>Expertise on energy markets</Accordion.Header>
        <Accordion.Body>
          I have developped a strong knowledge of electricity networks through my education at Mines ParisTech
          and during my work experience at Artelys. I have contributed to the development of auction clearing
          algorithms for several energy markets, and implemented several optimization models for power systems,
          see some examples <a href = './pro.js'>here</a>.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />
export default IndexPage