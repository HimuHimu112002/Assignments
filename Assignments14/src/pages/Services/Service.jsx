import React from 'react'
import { Col, Container, Row,Button} from 'react-bootstrap'
const Service = () => {
  return (
    <div className='hero__section'>
    <Container>
        <Row>
            <Col sm="10" lg="6">
                <div className='hero__left__section'>
                    <h1 className='hero__left__section--heading'>Increase Your Customers Loyalty and Satisfaction</h1>
                    <p className='hero__left__section--Subheading'>We help businesses like yours earn more customers, standout from competitors,  make more money</p>

                    <Button className='hero__left__section--button px-5 py-2'>Get Started</Button>
                </div>
            </Col>

            <Col className='' sm="10" lg="6">
                <div>
                    <img className='img-fluid w-100' src='image/heroImg.png'/>
                </div>
            </Col>

        </Row>


        <div className='hero__section--logo'>
            <img className='img-fluid' src='image/logos_google.png'/>
            <img className='img-fluid' src='image/Trello-logo-blue 1.png'/>
            <img className='img-fluid' src='image/logos_monday.png'/>
            <img className='img-fluid' src='image/Notion.png'/>
            <img className='img-fluid' src='image/Slack.png'/>
        </div>
    </Container>
</div>
  )
}

export default Service