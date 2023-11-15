import React from 'react'
import TeamPropsCard from './TeamPropsCard'
import { Col, Container, Row} from 'react-bootstrap'
import ServicePropsCard from './ServicePropsCard'
import BreadCamb from './BreadCamb'

import { serviceCard } from '../JSONDATA/DemoData'

const ServiceSection = () => {
    let title1 = serviceCard.ourService.title
    let discription = serviceCard.ourService.discription
    

  return (
    <div>
        <BreadCamb/>

        <Container className='service__section'>

            <div className='team__section--main'>
                <h4 className='service__section__main--heading'>Our All Services</h4>
                <h3 className='service__section__main--subHeading'>We Provide BestWeb design services</h3>
            </div>
            
            <Row>

                <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                    <ServicePropsCard picture={serviceCard.ourService.img} discription={discription} title={title1}/>
                </Col>

                <Col className='m-auto mt-5' sm='10' md='6' lg='6'>
                    <ServicePropsCard picture={serviceCard.ourService.img2} discription={discription} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ServicePropsCard picture={serviceCard.ourService.img3} discription={discription} title={title1}/>
                </Col>

                <Col className='mt-5 m-auto' sm='10' md='6' lg='6'>
                    <ServicePropsCard picture={serviceCard.ourService.img4} discription={discription} title={title1}/>
                </Col>

            </Row>
        </Container>
        
    </div>
  )
}

export default ServiceSection