import React from 'react'
import NavMenu from '../../components/NavMenu'
import HeroSection from '../../components/HeroSection'
import WorkList from '../../components/WorkList'
import '../Home/style.css'
import WorkListCount from '../../components/WorkListCount'
import FeaturedProduct from '../../components/FeaturedProduct'

const Home = () => {
  return (
    <>

      <NavMenu/>
      <HeroSection/>
      <WorkList/>
      <WorkListCount/>
      <FeaturedProduct/>
  
    </>
  )
}

export default Home