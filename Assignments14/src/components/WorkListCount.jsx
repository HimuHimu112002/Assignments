import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WorkListCountCard from './WorkListCountCard'
import { workListCountcard } from '../JSONDATA/DemoData'

const WorkListCount = () => {

    let count1 = workListCountcard.workLiskCard1.title
    let count2 = workListCountcard.workLiskCard1.title2
    let count3 = workListCountcard.workLiskCard1.title3
    let count4 = workListCountcard.workLiskCard1.title4

    let cardDiscription1 = workListCountcard.workLiskCard1.discription
    let cardDiscription2 = workListCountcard.workLiskCard1.discription2
    let cardDiscription3 = workListCountcard.workLiskCard1.discription3
    let cardDiscription4 = workListCountcard.workLiskCard1.discription4

  return (

    <Container className='my-5'>

        <Row>

            <Col className='m-auto my-4' sm="10" md="6" lg="3">
                <WorkListCountCard logo={workListCountcard.workLiskCard1.img} count={count1} Discription = {cardDiscription1}/>
            </Col>

            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo={workListCountcard.workLiskCard1.img2} count={count2} Discription = {cardDiscription2}/>
            </Col>

            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo={workListCountcard.workLiskCard1.img3} count={count3} Discription = {cardDiscription3}/>
            </Col>

            <Col className='m-auto' sm="10" md="6" lg="3">
                <WorkListCountCard logo={workListCountcard.workLiskCard1.img4} count={count4} Discription = {cardDiscription4}/>
            </Col>

        </Row>

    </Container>
    
  )
}

export default WorkListCount