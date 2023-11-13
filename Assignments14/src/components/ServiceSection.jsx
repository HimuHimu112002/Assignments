import React from 'react'
import TeamPropsCard from './TeamPropsCard'
import { Col, Container, Row} from 'react-bootstrap'
import ServicePropsCard from './ServicePropsCard'

const ServiceSection = () => {
    let title1 = 'Build & Launch without problems'
    

  return (
    <Container className='service__section'>
        <div className='team__section--main'>
            <h4 className='service__section__main--heading'>Our All Services</h4>
            <h3 className='service__section__main--subHeading'>We Provide BestWeb design services</h3>
        </div>
        <Row>
            <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                <ServicePropsCard picture='image/Group1.png' title={title1}/>
            </Col>
            <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                <ServicePropsCard picture='image/Group2.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ServicePropsCard picture='image/Group3.png' title={title1}/>
            </Col>
            <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                <ServicePropsCard picture='image/Group4.png' title={title1}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ServiceSection