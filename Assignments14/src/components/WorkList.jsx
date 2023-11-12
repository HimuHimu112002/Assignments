import React from 'react'
import WorlListcard from './WorlListcard'
import { Col, Container, Row } from 'react-bootstrap'
const WorkList = () => {
    let title1 = 'Grow Your Business'
    let title2 = 'Improve brand loyalty'
    let title3 = 'Improve Business Model'

    let cardDiscription = 'We help identify the best ways to improve your business'
  return (
    <Container className='mt-5'>
        <div className='workList__top__text__section pt-4'>
            <h4 className='worklist__name'>Work List</h4>
            <h5 className='worklist__heading'>We provide the Perfect Solution to your business growth</h5>
        </div>
        <Row>
            <Col className='m-auto my-4' sm="10" md="6" lg="4">
                <WorlListcard logo='image/Work1.png' title={title1} Discription = {cardDiscription}/>
            </Col>
            <Col className='m-auto' sm="10" md="6" lg="4">
                <WorlListcard logo='image/Work2.png' title={title2} Discription = {cardDiscription}/>
            </Col>
            <Col className='m-auto' sm="10" md="6" lg="4">
                <WorlListcard logo='image/Work3.png' title={title3} Discription = {cardDiscription}/>
            </Col>
        </Row>
    </Container>
  )
}

export default WorkList