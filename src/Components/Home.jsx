import React from 'react'
import Carousel from './Home_Components/Carousel'
// import Cards from './Home_Components/Cards'
// import Slider from './Home_Components/Slider'
import Credentials from './Home_Components/Credentials'
import Awards from './Home_Components/Awards'
import Services from './Home_Components/Services'
import Contact from './Home_Components/Contact'
import Clients from './Home_Components/Clients'




const Home = () => {
  
  return (
    <div>
      <Carousel/>
      {/* <Cards/> */}
      <Services/>
      {/* <Slider/> */}
      <Clients/>
      <Credentials/>
      <Awards/>
      <Contact/>

    </div>
  )
}

export default Home
