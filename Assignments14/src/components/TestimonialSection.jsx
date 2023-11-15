import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import TestimonialPropsCard from './TestimonialPropsCard'
import BreadCamb from '../components/BreadCamb'

const TestimonialSection = () => {
    let title1 = 'Devon Lane'
    let title2 = 'Danny Bailey'
    let title3 = 'Alex Lov'
    let subTitle = 'Backend Developer'

  return (
    <div>

        <BreadCamb/>

        <Container className='team__section'>

            <div className='team__section--main'>
                <h4 className='team__section__main--heading'>Testimonial List</h4>
                <h3 className='team__section__main--subHeading'>Better Agency/SEO Solution At Your Fingertips</h3>
            </div>

            <Row>

                <Col className='m-auto mt-4' sm='10' lg='4'>
                    <TestimonialPropsCard picture='image/tes1.png' title={title1} subTitle={subTitle}/>
                </Col>

                <Col className='m-auto mt-4' sm='10' lg='4'>
                    <TestimonialPropsCard picture='image/tes2.png' title={title2} subTitle={subTitle}/>
                </Col>

                <Col className='m-auto mt-4' sm='10'  lg='4'>
                    <TestimonialPropsCard picture='image/tes3.png' title={title3} subTitle={subTitle}/>
                </Col>

                <Col className='mt-4 m-auto' sm='10'  lg='4'>
                    <TestimonialPropsCard picture='image/tes4.png' title={title3} subTitle={subTitle}/>
                </Col>

                <Col className='mt-4 m-auto ' sm='10'  lg='4'>
                    <TestimonialPropsCard picture='image/tes5.png' title={title3} subTitle={subTitle}/>
                </Col>

                <Col className='mt-4 m-auto' sm='10'  lg='4'>
                    <TestimonialPropsCard picture='image/tes6.png' title={title3} subTitle={subTitle}/>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default TestimonialSection