import React from 'react'

const WorkListCountCard = (props) => {

  return (
    <div className='shadow px-4 py-5 rounded'>
      <img src={props.logo}/>
      <h3 className='py-3'>{props.count}</h3>
      <p>{props.Discription}</p>
    </div> 
  )
}
export default WorkListCountCard