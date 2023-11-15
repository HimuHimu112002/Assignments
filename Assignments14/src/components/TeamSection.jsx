import React from 'react'
import TeamPropsCard from './TeamPropsCard'
import { Col, Container, Row} from 'react-bootstrap'
import BreadCamb from './BreadCamb'
import { teamCard } from '../JSONDATA/DemoData'

const TeamSection = () => {
  
    let title1 = teamCard.teamMember.title
    let title2 = teamCard.teamMember.title2
    let title3 = teamCard.teamMember.title3
    let discription = teamCard.teamMember.discription

  return (

    <div>
    
      <BreadCamb/>

      <Container className='team__section'>

        <div className='team__section--main'>
            <h4 className='team__section__main--heading'>{teamCard.teamHeading.heading}</h4>
            <h3 className='team__section__main--subHeading'>{teamCard.teamHeading.subHeading}</h3>
        </div>

        <Row>

          <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
            <TeamPropsCard picture={teamCard.teamMember.img} discription={discription} title={title1}/>
          </Col>

          <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
            <TeamPropsCard picture={teamCard.teamMember.img2} discription={discription} title={title2}/>
          </Col>

          <Col className='m-auto mt-5' sm='10' md='6' lg='4'>
            <TeamPropsCard picture={teamCard.teamMember.img3} discription={discription} title={title3}/>
          </Col>

        </Row>

      </Container>

    </div>

  )
}
export default TeamSection