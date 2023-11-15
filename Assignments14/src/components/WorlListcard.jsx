import React from 'react'
const WorlListcard = (props) => {

  return (

    <div className='shadow-sm px-4 py-5 rounded'>
      <img src={props.logo}/>
      <h3 className='py-3'>{props.title}</h3>
      <p>{props.Discription}</p>
      <a href='#'>Learn more</a>
    </div> 
  )
}
export default WorlListcard