import React from 'react'
import NavBar from './Home_Components/NavBar'
import Carousel from './Home_Components/Carousel'
import Cards from './Home_Components/Cards'
import Slider from './Home_Components/Slider'
import Credentials from './Home_Components/Credentials'
import Awards from './Home_Components/Awards'
const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}
      {/* <Carousel/> */}
      {/* <Cards/> */}
      <Slider/>
      <Credentials/>
      <Awards/>
    </div>
  )
}

export default Home
