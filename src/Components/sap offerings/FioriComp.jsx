import React from 'react'

const FioriComp = ({details}) => {
  return (

    <div className='card w-[450px] rounded-md my-[30px] lg:my-[15px] shadow-2xl overflow-hidden hover:scale-[1.03] hover:transition-all duration-500  hover:bg-[#336298] hover:text-white'>
        <div className='relative'>
          <img src={details.image} alt="" />
        </div>
        <div className='card-content p-3 sm:p-3 md:p-4 '>
          <h1 className='text-xl sm:text-2xl text-center p-[5px] '>{details.heading}</h1>
          <p className='text-sm lg:text-base text-center p-[10px] lg:p-[20px] '>{details.para}</p>
        </div>
    </div>

  )
}

export default FioriComp
