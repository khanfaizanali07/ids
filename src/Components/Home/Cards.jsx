import React from 'react'
import CardComponent from './Cardcomponent.jsx'
import logo1 from '../../assets/images/1st_logo.png'
import logo2 from '../../assets/images/2nd_logo.png'
import logo3 from '../../assets/images/3rd_logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Cards = () => {
    const cardDetails = [
        {
            heading : 'Discover',
            image : logo1,
            content : 'Analyzing the existing Business processes, rules, procedures and identifying the business needs, issues, gaps and challenges is the first and Key milestone for any change, enhancement and Solution.'
        },
        {
            heading : 'Define',
            image : logo2,
            content : "Based on the Discovery of Business Processes, we define the New Processes, Workflows, Business rules and Develop the solutions based on the Discovery phase results and outcome."
        },
        {
            heading : 'Deploy',
            image : logo3,
            content : "Deployment or rollout of changes to production without impacting BAU is an important and ultimate milestone for any project to be completed successfully without making any changes to current production."
        }
    ]
  
return (
    <>
    <div className=' hidden md:absolute md:flex  md:justify-center md:gap-[15px] w-full py-[20px] bg-transparent  md:z-10 md:top-[420px]'>        
    
      {cardDetails.map((card,index) => <CardComponent cardDetails={card} key={index}/>)}

    </div>
    <div className='md:hidden absolute z-10 top-[420px] w-full justify-center'>
        <Swiper
            loop={true} 
            slidesPerView={1}
            spaceBetween={20}
            //dir='all'
            breakpoints={{
                640:{
                    slidesPerView:2,
                    spaceBetween:20,
                    spaceBetween:30
                }
            }}
            className="mySwiper px-[35px] sm:px-[15px] mx-[120px] sm:mx-[20px] ">
            {cardDetails.map((card,index)=>
              <SwiperSlide>
                <CardComponent cardDetails={card}  key={index}/>
           </SwiperSlide>
        )}
</Swiper>
      </div>
    </>    
  )
}

export default Cards
