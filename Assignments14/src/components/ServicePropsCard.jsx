import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServicePropsCard = (props) => {

  return (

    <Card className='shadow' style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.discription}
        </Card.Text>
        <Card.Img className='w-100' variant="bottom" src={props.picture} />
      </Card.Body>
    </Card>
    
  )
}

export default ServicePropsCard