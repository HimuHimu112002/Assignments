import React from 'react'
import TeamPropsCard from './TeamPropsCard'
import { Col, Container, Row} from 'react-bootstrap'
import BreadCamb from './BreadCamb'
const TeamSection = () => {
    let title1 = 'Devon Lane'
    let title2 = 'Danny Bailey'
    let title3 = 'Alex Lov'

  return (
    <div>
    
      <BreadCamb/>
      <Container className='team__section'>

        <div className='team__section--main'>
            <h4 className='team__section__main--heading'>Our Team Member</h4>
            <h3 className='team__section__main--subHeading'>Check our awesome team members</h3>
        </div>
        <Row>
            <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
                <TeamPropsCard picture='image/team1.png' title={title1}/>
            </Col>
            <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
                <TeamPropsCard picture='image/team2.png' title={title2}/>
            </Col>
            <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
                <TeamPropsCard picture='image/team3.png' title={title3}/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TeamSection