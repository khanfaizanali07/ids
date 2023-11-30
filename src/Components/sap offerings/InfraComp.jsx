import React from 'react'

const InfraComp = ({details}) => {
  return (
<div className={`card w-[300px] rounded-md mx-[15px] my-[20px] lg:my-[15px] shadow-2xl overflow-hidden hover:scale-[1.03] hover:transition-all duration-500  hover:bg-[#336298] hover:text-white ${details?.style}`}>
    <div className='relative'>
      <img src={details?.image} alt="" />
    </div>
    <div className='card-content p-2 sm:p-3 md:p-4 font-nunito'>
      <h1 className='text-xl sm:text-2xl text-center '>{details?.heading}</h1>
      <p className='text-sm  text-center p-[10px] '>{details?.para}</p>
    </div>
</div>
  )
}

export default InfraComp
