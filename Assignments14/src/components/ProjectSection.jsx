import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import ProjectPropsCard from './ProjectPropsCard'

const ProjectSection = () => {
    let title1 = 'Build & Launch without problems'
    

  return (
    <Container className='service__section'>
        <div className='team__section--main'>
            <h4 className='service__section__main--heading'>All Project</h4>
            <h3 className='service__section__main--subHeading'>Better Agency/SEO Solution At Your Fingertips</h3>
        </div>
        <Row>
            <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro1.png' title={title1}/>
                
            </Col>
            <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro2.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro3.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro4.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro5.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ProjectPropsCard picture='image/pro6.png' title={title1}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectSection