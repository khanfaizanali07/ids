import React from 'react'
import { useState } from 'react'
const CloudComponent = ({details}) => {
   const [Color , setColor] = useState(false);
   const onColorChange = () =>
   {
      setColor(true)
   }
   const OnOut = ()=> {
      setColor(false)
   }
  return (

    <div className={`card w-[280px] lg:w-[240px] my-[20px] font-nunito shadow-2xl overflow-hidden hover:scale-[1.03] hover:transition-all duration-500`} onMouseOver={()=> onColorChange() } onMouseOut={ ()=> OnOut()}>
        <div className='relative'>
          <img src={details.image} alt="" />
        </div>
        <div className={`card-content p-3 sm:p-3 md:p-4 `} >
          <h1 className={`text-xl sm:text-2xl text-center mb-2 ${Color ? 'text-[#336298]' : ''}`}>{details.heading}</h1>
          <p className='text-sm text-center leading-6'>{details.para}</p>
        </div>
    </div>
  )
}

export default CloudComponent
