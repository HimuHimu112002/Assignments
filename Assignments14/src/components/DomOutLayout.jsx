import React from 'react'
import NavMenu from './NavMenu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Subscribe from './Subscribe'

const DomOutLayout = () => {
  return (
    <>
        <NavMenu/>
        <Outlet/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default DomOutLayout