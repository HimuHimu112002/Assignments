import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FeaturedProductCard from './FeaturedProductCard'

const FeaturedProduct = () => {
    let title = 'App Design - June 20, 2022'
    let Discription = 'Redesign channel website landng page'
  return (
    <div className='featuredProduct__main__section py-5'>
        <Container>
            <div className='workList__top__text__section py-4'>
                <h4 className='worklist__name'>Featured Project</h4>
                <h5 className='worklist__heading'>We provide the Perfect Solution to your business growth</h5>
            </div>
            <Row>
                <Col className='shadow p-4 rounded mt-2' sm="10" lg="6">
                    <img className='w-100' src='image/Mask.png'/>
                    <p className='py-3'>{title}</p>
                    <h4>App Redesign</h4>
                </Col>
                <Col sm="10" lg="6">
                    <Row>
                        <Col md="6">
                            <FeaturedProductCard logo='image/Mask1.png' title={title} Discription={Discription}/>
                        </Col>
                        <Col md="6">
                            <FeaturedProductCard logo='image/Mask2.png' title={title} Discription={Discription}/>
                        </Col>
                        <Col md="6">
                            <FeaturedProductCard logo='image/Mask3.png' title={title} Discription={Discription}/>
                        </Col>
                        <Col md="6">
                            <FeaturedProductCard logo='image/Mask4.png' title={title} Discription={Discription}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FeaturedProduct