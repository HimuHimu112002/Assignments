import React from 'react'
import WorlListcard from './WorlListcard'
import { Col, Container, Row } from 'react-bootstrap'
import WorkListCountCard from './WorkListCountCard'

const WorkListCount = () => {
    let count1 = '240452'
    let count2 = '6300'
    let count3 = '25000'
    let count4 = '360452'

    let cardDiscription1 = 'Followers'
    let cardDiscription2 = 'Solved Problems'
    let cardDiscription3 = 'Happy Customers'
    let cardDiscription4 = 'Projects'
  return (
    <Container className='my-5'>
        <Row>
            <Col className='m-auto my-4' sm="10" md="6" lg="3">
                <WorkListCountCard logo='image/Work1.png' count={count1} Discription = {cardDiscription1}/>
            </Col>
            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo='image/Work2.png' count={count2} Discription = {cardDiscription2}/>
            </Col>
            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo='image/Work3.png' count={count3} Discription = {cardDiscription3}/>
            </Col>
            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo='image/Work3.png' count={count4} Discription = {cardDiscription4}/>
            </Col>
        </Row>
    </Container>
  )
}

export default WorkListCount