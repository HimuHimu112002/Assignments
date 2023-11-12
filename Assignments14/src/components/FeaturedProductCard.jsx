import React from 'react'

const FeaturedProductCard = (props) => {
  return (
   
    <div className='shadow p-4 rounded'>
        <img className='w-100' src={props.logo}/>
        <p className='py-3'>{props.title}</p>
        <h4>{props.Discription}</h4>
    </div> 
   
  )
}

export default FeaturedProductCard