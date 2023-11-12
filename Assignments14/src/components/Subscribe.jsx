import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Subscribe = () => {
  return (
    <Container>
        <Row className='subscribe__main__section py-5'>
            <Col md="10">
                <h5>SUBSCRIBE</h5>
                <h1>Subscribe to get the latest news about us</h1>
                <p>Please drop your email below to get daily update about what we do</p>

                <div className='form__section py-4'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <Button className='subscribe--button'>Subscribe</Button>
                </div>
      
            </Col>
        </Row>
    </Container>
  )
}

export default Subscribe