import React from 'react'
import { Link } from 'react-router-dom'

const BreadCamb = () => {
  return (

    <div  className='breadCamb__main'>
      <div>
        <h1 className='px-5'>{window.location.pathname.split("/")[1]}</h1>
        <p className='breaCamb px-4'><Link to="/"> Home</Link> > {window.location.pathname.split("/")[1]}</p>
      </div>
    </div>

  )
}

export default BreadCamb