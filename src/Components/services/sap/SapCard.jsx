import React, { useEffect } from 'react'

const SapCard = ({details}) => {
  
  return (
    <>

    <div className='card w-[400px]  overflow-hidden shadow-2xl transition-all duration-700 lg:mb-[0px] cursor-pointer'>
      <div className='img-container relative'>
          <img src={details.image} alt="" className='relative transition-all duration-1000  w-full'  />
      </div>
      <div className='cont relative '>
        <div className={`h-slide absolute w-full bg-black bg-opacity-25 hover:bg-opacity-50 text-white text-center ${details.style}`}>
        <h1 className=' font-nunito font-semibold  sm:text-xl mb-[5px]'>{details.heading}</h1>
        <p className="">{details.text}</p>
        </div>
      </div>
    </div>
</>
  )
}

export default SapCard
