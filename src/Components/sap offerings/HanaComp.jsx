import React from 'react'

const HanaComp = ({details}) => {
  return (
    <div>
    <div className='px-[120px] md:px-[50px]'>
    <div className='flex  flex-col md:flex-row card w-full md:w-full lg:w-[800px]  overflow-hidden shadow-2xl  cursor-pointer mb-[20px]  hover:bg-slate-400 border-2 hover:border-[#336298] hover:duration-500 '>
      <div className='p-[15px]'>
      <div className={` md:w-[300px] h-[200px]  bg-cover rounded-lg`} style={{backgroundImage : `url(${details.image})`}} >
      </div>
      </div>
      <div className={`md:w-[600px] card-body  `}>
        <h3 className='text-2xl text-center'>{details.heading}</h3>
        <p className='text-md text-center'>{details.para}</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default HanaComp
