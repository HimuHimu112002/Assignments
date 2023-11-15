import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TestimonialPropsCard = (props) => {

  return (

    <Card className='shadow' style={{ width: 'auto' }}>
      <Card.Img className='w-50 m-auto pt-5 img-fluid' variant="top" src={props.picture} />
      <Card.Body>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Title className='text-center'>{props.title}</Card.Title>
        <p className='text-center'>{props.subTitle}</p>
      </Card.Body>
    </Card>
    
  )
}

export default TestimonialPropsCard