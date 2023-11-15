import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectPropsCard = (props) => {
  
  return (
    <Card className='shadow p-2' style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Img className='w-100' variant="bottom" src={props.picture} />
        <Card.Title className='pt-5 project__card--title'>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ProjectPropsCard