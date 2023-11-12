import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
   <div className='footer__main__section'>
    <Container>
      <Row>
        <Col sm="10" md="6" lg="6">
            <h1>WEB LOGO</h1>
            <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>

            <div className='footer__icon__main'>
              <div className='footer_icon__div'>
                <FaFacebookF/>
              </div>
              <div className='footer_icon__div'>
                <FaFacebookF/>
              </div>
              <div className='footer_icon__div'>
                <FaFacebookF/>
              </div>
              <div className='footer_icon__div'>
                <FaFacebookF/>
              </div>
            </div>
        </Col>
        <Col sm="10" md="6" lg="3">
          <h2>Quick Links</h2>
          <ul className='footer__menu'>
            <li>Home</li>
            <li>Team</li>
            <li>Service</li>
            <li>Projects</li>
            <li>Testimonials</li>
          </ul>
        </Col>
        <Col sm="10" md="6" lg="3">
        <h2>Address</h2>
          <p>Design Agency Head Office.
          Airport Road
          United Arab Emirate</p>
        </Col>
      </Row>
    </Container>
    
   </div>
  )
}

export default Footer