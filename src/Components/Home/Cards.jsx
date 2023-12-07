import React from 'react'
import CardComponent from './Cardcomponent.jsx'
import logo1 from '../../assets/images/1st_logo.png'
import logo2 from '../../assets/images/2nd_logo.png'
import logo3 from '../../assets/images/3rd_logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'
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
    <div className='lg:w-full'> 
    <div className='w-full  px-[10px] py-[20px] sm:px-0 md:px-0  xl:px-[0px] md:absolute bg-transparent  md:z-10 md:top-[420px]'>
      <div className='container   md:flex md:justify-center lg:container lg:px-[60px] hidden md:gap-[20px] py-[10px] '>
      {cardDetails.map((card,index) => <CardComponent cardDetails={card} key={index}/>)}
      </div>
      </div>
    <div className='w-full  md:hidden absolute z-10 top-[420px]'>
    <div className='container justify-center'>
        <Swiper
            modules={[Autoplay]}
            loop={true} 
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            breakpoints={{
                640:{
                    slidesPerView:2,
                    spaceBetween:10,
                    spaceBetween:30,
                    loop:true
                }
            }}
            className="mySwiper container px-[10px] sm:px-[0px]  sm:w-[640px] rounded-lg">
            {cardDetails.map((card,index)=>
              <SwiperSlide >
                <CardComponent cardDetails={card}  key={"cd "+index}/>
           </SwiperSlide>
        )}
</Swiper>
      </div>
      </div>
    </div>    
  )
}

export default Cards
