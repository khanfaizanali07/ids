import React from 'react'
import slider_1 from './../../assets/images/Slide_1.jpg'
import slider_2 from './../../assets/images/Slide_2.jpg'
import slider_3 from './../../assets/images/Slide_3.jpg'
import slider_4 from './../../assets/images/Slide4.jpg'
import slider_5 from './../../assets/images/Slide_5.jpg'
import SliderComponent from './SliderComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
  const sliderDetails = [
    {
        image : slider_2,
        heading : "BI & Data Analytics",
        content : " It's easy to switch between different devices while keeping your data safe with secure login."
    },
    {
        image : slider_3,
        heading : "Internet Of Things",
        content : "It's easy to switch between different devices while keeping your data safe with secure login."
    },
    {
        image : slider_4,
        heading : "Digital Marketing",
        content : "It's easy to switch between different devices while keeping your data safe with secure login."
    },
    {
        image : slider_5,
        heading : "Other Services",
        content : " Controlling your daily tasks, assign and discuss on projects, checking deadlines and set time to relax."
    },
    {
      image : slider_3,
      heading : "Other Services",
      content : " Controlling your daily tasks, assign and discuss on projects, checking deadlines and set time to relax."
    },
    {
      image : slider_1,
      heading : "Cloud Computing",
      content : " Controlling your daily tasks, assign and discuss on projects, checking deadlines and set time to relax."
  },
  ]
  
    return (
    <div className='w-full py-[25px] px-[5px]'>
      <div>
        <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            spaceBetween={20}
            loop={true} 
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640:{
                slidesPerView : 2,
                spaceBetween : 20,
                centeredSlides: false,
                loop:true
              },
              1024:{
                slidesPerView : 3,
                centeredSlides : false,
                spaceBetween:40                
              }
            }}
            className="mySwiper w-[350px]  sm:w-[600px] lg:w-full lg:ps-[340px] p-[10px]">
            {sliderDetails.map((details,index)=>
              <SwiperSlide>      
                <SliderComponent sliderDetails={details} key={"ab"+index} />
           </SwiperSlide>
)}
</Swiper>
      </div>
    </div>

  )
}

export default Slider
