import React from 'react'
import logo_1 from '../../assets/images/award_1.png'
import logo_2 from '../../assets/images/award_2.png'
import logo_3 from '../../assets/images/award_3.png'
import logo_4 from '../../assets/images/award_4.png'
import logo_5 from '../../assets/images/award_5.png'
import logo_6 from '../../assets/images/award_6.png'
import logo_7 from '../../assets/images/award_7.png'
import logo_8 from '../../assets/images/award_10.png'
import logo_9 from '../../assets/images/award_9.png'
import logo_10 from '../../assets/images/award_8.jpg'

const Awards = () => {
  const totalDetails = [logo_1,logo_2,logo_3,logo_4,logo_5,logo_6,logo_7,logo_8,logo_9,logo_10];

  return (
    <div  className= ' parent w-full grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 lg:w-full'>
        
         {totalDetails.map((img , key)=>
         <div  className= 'h-[150px] w-full  flex flex-wrap justify-center overflow-hidden items-center   mb-[20px]  transform  transition duration-500 hover:scale-125'>
            <div style = {{ backgroundImage:`url(${img})` }} className='h-[180px] w-[150px] bg-no-repeat '> 
        </div>
        </div>
        )}
    </div>    
  )
}
export default Awards
