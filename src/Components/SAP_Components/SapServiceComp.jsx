import React from 'react'


const SapServiceComp = ({details}) => {
  return (
    <>    
    
    <div className='card border-2 border-black overflow-hidden w-[300px] rounded-lg sm:mb-[25px] md:mb-[30px] shadow-2xl hover:transition-all  hover:duration-700 hover:scale-x-[1.02] hover:scale-y-[1.03]'>
    <div style={{backgroundImage : `url(${details.image})`}} className=' w-full h-[200px] bg-cover  bg-no-repeat border-2 border-green-500'>
    </div>
     <div className='p-[20px] hover:bg-[#4b6e9753] hover:text-white h-[200px]'>
        <h1 className='text-center font-nunito font-semibold  sm:text-xl mb-[5px]'>{details.heading}</h1>
        <p className='text-sm text-center'>{details.para}</p>
    </div>   
    </div>
    </>

  )
}

export default SapServiceComp
