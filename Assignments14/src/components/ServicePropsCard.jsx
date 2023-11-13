import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServicePropsCard = (props) => {
  return (
    <Card className='shadow' style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img className='w-100' variant="bottom" src={props.picture} />
      </Card.Body>
    </Card>
  )
}

export default ServicePropsCard