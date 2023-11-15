import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TeamPropsCard = (props) => {

  return (

    <Card className='shadow card__section' style={{ width: 'auto' }}>
      <Card.Img variant="top" src={props.picture} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.discription}
        </Card.Text>
        <Button className='team__button px-4 py-2'>View Details</Button>
      </Card.Body>
    </Card>

  )
}
export default TeamPropsCard