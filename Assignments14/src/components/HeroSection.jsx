import React from 'react'
import '../pages/Home/style.css'
import { Col, Container, Row,Button} from 'react-bootstrap'
import { homeData } from '../JSONDATA/DemoData'

const HeroSection = () => {

  return (

    <div className='hero__section'>

        <Container>

            <Row>

                <Col sm="10" lg="6">
                    <div className='hero__left__section'>
                        {homeData.map((item)=>(
                            <>

                                <h1 className='hero__left__section--heading'>{item.heading}</h1>
                                <p className='hero__left__section--Subheading'>{item.subHeading}</p>

                            </>
                        ))}

                        <Button className='hero__left__section--button px-5 py-2'>Get Started</Button>
                    </div>
                </Col>

                <Col className='banner__right__img' sm="10" lg="6">
                    <div>
                        <img className='img-fluid w-100' src={homeData[0].img}/>
                    </div>
                </Col>

            </Row>


            <div className=' shadow rounded py-4 hero__section--logo'>
                {homeData.map((item)=>(
                    item.brandLogo.map((item)=>(
                        <img className='img-fluid' src={item.img}/>
                    ))
                ))}
            </div>

        </Container>

    </div>
    
  )
}

export default HeroSection