import React, { useEffect } from 'react'
import Carousel from '../Components/Home/Carousel'
// import Cards from './Home_Components/Cards'
// import Slider from '../Components/Home/Slider'
import Credentials from '../Components/Home/Credentials'
// import Awards from './Home_Components/Awards'
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
      {/* <Cards/> */}
      <Services/>
      <Clients/>
      <Credentials/>
      {/* <Awards/> */}
      {/* <Slider/> */}
      <Contact/>
   
      </>
    }
    </div>
  )
}

export default Home
