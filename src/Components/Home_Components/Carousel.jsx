import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from "swiper/modules"; 
import { EffectCreative } from 'swiper/modules'; 
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/swiper-bundle.css'; 
import {  useState } from 'react';


function Carousel() {
  const baseClasses = "relative bg-cover h-[520px] ";
  const textShadow = {textShadow : '2px 2px 8px #000'};
  const sm_Md_Style_h1 = "text-2xl sm:text-3xl md:text-5xl";
  const sm_Md_Style_h5 = "text-sm sm:text-xl md:text-2xl";
  const common_Style_For_Both = "text-slate-200 font-bold  font-nunito";
  <style>
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
  </style>
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (


<AnimatePresence mode='wait' initial={true}>
<div className="relative">
<Swiper
        onSlideChange={(swiper)=>{
          setActiveIndex(swiper.activeIndex)
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative , Autoplay]}
        className="mySwiper"
        // autoplay={{ delay: 5000,
        //   disableOnInteraction : false
        // }}
      >
        <SwiperSlide>
      <div
            className={`${baseClasses} bg-center bg-[url('./assets/images/home-bg-1.png')]  bg-no-repeat `}
          >
             
            { activeIndex==0 && <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className='h-full flex flex-col justify-center items-center'>
              <h1        
                style = {textShadow} className={`${sm_Md_Style_h1}  ${common_Style_For_Both}`}>Welcome to <span>iDiligence</span>
              </h1>
              <h5  style = {textShadow} className={`${sm_Md_Style_h5} ${common_Style_For_Both}`}>  Empowering Business Digitally
              </h5>
            </motion.div>}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-center bg-[url('./assets/images/home-bg-2.png')] bg-no-repeat`}
          >
          {activeIndex == 1 &&  <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
           className='h-full flex flex-col justify-center absolute left-10 top-5 z-10'>
              <h1  style = {textShadow} className={`${sm_Md_Style_h1}  ${common_Style_For_Both}`}>WE ARE EXPERT</h1>
              <h5  style = {textShadow} className={`${sm_Md_Style_h5} ${common_Style_For_Both}`}>  SAP/ERP SOLUTIONS - CLOUD & DIGITAL SERVICES - IT MANAGED SERVICES</h5>
          </motion.div>}
          </div>
        </SwiperSlide> 

      
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-center  bg-[url('./assets/images/home-bg-3.png')] bg-no-repeat`}
          >
           {activeIndex == 2 &&   <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
           className='h-full flex flex-col justify-center absolute left-10 top-5'>
              <h1  style = {textShadow} className={`{${sm_Md_Style_h1} ${common_Style_For_Both}`}>WE ARE CREATIVE</h1>
              <h5  style = {textShadow} className={`${sm_Md_Style_h5} ${common_Style_For_Both}`}>  IT & BUSINESS CONSULTING INFRASTRUCTURE MANAGEMENT</h5>
          </motion.div>}
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    </AnimatePresence>
  );
}

export default Carousel;
