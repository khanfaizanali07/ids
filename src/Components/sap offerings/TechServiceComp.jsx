import React from 'react'

const TechServiceComp = ({details}) => {
  return (
<div className='card w-[300px] rounded-md mx-[10px] my-[10px] shadow-2xl overflow-hidden hover:scale-[1.03] hover:transition-all duration-500  hover:bg-[#336298] hover:text-white'>
    <div className='relative'>
      <img src={details.image} alt="" />
    </div>
    <div className='card-content p-2 sm:p-3 md:p-4 '>
      <h1 className='text-xl sm:text-2xl text-center '>{details.heading}</h1>
      <p className='text-sm  text-center p-[10px] '>{details.para}</p>
    </div>
</div>
  )
}

export default TechServiceComp
