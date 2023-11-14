import React from 'react'
import WorlListcard from './WorlListcard'
import { Col, Container, Row } from 'react-bootstrap'
import { workLisk } from '../JSONDATA/DemoData'
import { workLiskcard } from '../JSONDATA/DemoData'

const WorkList = () => {
    let title1 = workLiskcard.workLiskCard1.title
    let title2 = workLiskcard.workLiskCard1.title2
    let title3 = workLiskcard.workLiskCard1.title3

    let cardDiscription = workLiskcard.workLiskCard1.discription

  return (
    <Container className='mt-5'>
        <div className='workList__top__text__section pt-4'>
            {workLisk.map((item)=>(
                <>

                    <h4 className='worklist__name'>{item.heading}</h4>
                    <h5 className='worklist__heading'>{item.subHeading}</h5>

                </>
            ))}
            
        </div>
        <Row>

            <Col className='m-auto my-3' sm="10" md="6" lg="4">
                <WorlListcard logo={workLiskcard.workLiskCard1.img} title={title1} Discription = {cardDiscription}/>
            </Col>

            <Col className='m-auto mt-3' sm="10" md="6" lg="4">
                <WorlListcard logo={workLiskcard.workLiskCard1.img2} title={title2} Discription = {cardDiscription}/>
            </Col>

            <Col className='m-auto mt-3' sm="10" md="6" lg="4">
                <WorlListcard logo={workLiskcard.workLiskCard1.img3} title={title3} Discription = {cardDiscription}/>
            </Col>

        </Row>
    </Container>
  )
}

export default WorkList