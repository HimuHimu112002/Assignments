import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FeaturedProductCard from './FeaturedProductCard'
import { FeaturedData } from '../JSONDATA/DemoData'

const FeaturedProduct = () => {

    let title = FeaturedData.Featured.title
    let Discription = FeaturedData.Featured.subtitle

  return (

    <div className='featuredProduct__main__section py-5'>
    
        <Container>

            <div className='workList__top__text__section py-4'>
                    
                <h4 className='worklist__name'>{FeaturedData.Featured.heading}</h4>
                <h5 className='worklist__heading'>{FeaturedData.Featured.subHeading}</h5>

            </div>

            <Row>

                <Col className='m-auto shadow p-4 rounded mt-4' sm="10" lg="6">
                
                    <img className='w-100' src={FeaturedData.FeaturedCard.img}/>
                    <p className='py-3'>{title}</p>
                    <h4>{FeaturedData.FeaturedCard.subtitle}</h4>
                       
                </Col>

                <Col className='m-auto mt-4' sm="10" lg="6">

                    <Row>

                        <Col className='mt-3' md="6">
                            <FeaturedProductCard logo={FeaturedData.FeaturedCard.img2} title={title} Discription={Discription}/>
                        </Col>

                        <Col className='mt-3' md="6">
                            <FeaturedProductCard logo={FeaturedData.FeaturedCard.img3} title={title} Discription={Discription}/>
                        </Col>

                        <Col className='mt-3' md="6">
                            <FeaturedProductCard logo={FeaturedData.FeaturedCard.img3} title={title} Discription={Discription}/>
                        </Col>

                        <Col className='mt-3' md="6">
                            <FeaturedProductCard logo={FeaturedData.FeaturedCard.img4} title={title} Discription={Discription}/>
                        </Col>

                    </Row>

                </Col>

            </Row>

        </Container>

    </div>
  )
}

export default FeaturedProduct