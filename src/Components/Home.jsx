import React from 'react'
import NavBar from './Home_Components/NavBar'
import Carousel from './Home_Components/Carousel'
import Cards from './Home_Components/Cards'
import Slider from './Home_Components/Slider'
import Credentials from './Home_Components/Credentials'
import Awards from './Home_Components/Awards'
import Services from './Home_Components/Services'
import Contact from './Home_Components/Contact'
import Clients from './Home_Components/Clients'
import Footer from './Home_Components/Footer'
import SapServices from './SAP_Components/SapServices'
import SapNavbar from './SAP_Components/SapNavbar'

const Home = () => {
  
  return (
    <div>
      {/* <Carousel/> */}
      <SapNavbar/>
      <SapServices/>
      {/* <Cards/> */}
      {/* <Services/> */}
      {/* <Slider/> */}
      {/* <Clients/> */}
      {/* <Credentials/> */}
      {/* <Awards/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Home
