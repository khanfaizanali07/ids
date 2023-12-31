import React, { useEffect } from 'react'
import Carousel from '../Components/Home/Carousel'
import Cards from '../Components/Home/Cards'
import Slider from '../Components/Home/Slider'
import Credentials from '../Components/Home/Credentials'
import Award from '../Components/Home/Awards'
import Services from '../Components/Home/Services'    
import Contact from '../Components/Home/Contact'
import Clients from '../Components/Home/Clients'
import Spinner from '../Components/Shared/Spinner'

const Home = ({isLoding, showSpinner}) => {
  useEffect(() => {
    showSpinner
  })
  return (
    <div>
      {isLoding ? <Spinner/> :
      <>
      <Carousel/>
      <Cards/>
      <Services/>
      <Clients/>
      <Credentials/>
      <Slider/>
   
    </>
    }
    </div>
  )
}

export default Home
