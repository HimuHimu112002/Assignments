import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import ProjectPropsCard from './ProjectPropsCard'
import BreadCamb from '../components/BreadCamb'

import { projectCard } from '../JSONDATA/DemoData'
const ProjectSection = () => {

    let title1 = projectCard.project.title
    
  return (
    <div>
        <BreadCamb/>
        
        <Container className='service__section'>

            <div className='team__section--main'>
                <h4 className='service__section__main--heading'>{projectCard.projectHeading.heading}</h4>
                <h3 className='service__section__main--subHeading'>{projectCard.projectHeading.subHeading}</h3>
            </div>

            <Row>

                <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img} title={title1}/>
                    
                </Col>

                <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img2} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img3} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img4} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img5} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ProjectPropsCard picture={projectCard.project.img6} title={title1}/>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default ProjectSection