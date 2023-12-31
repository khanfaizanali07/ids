import React from 'react'

const SliderComponent = ({sliderDetails}) => {
  // sm:w-[150px] sm:h-[200px] md:w-[350px] md:h-[400px]
  return (
    <div className='card w-[330px] sm:w-[280px] md:w-[240px] sm:h-[400px]   relative bg-cover shadow-2xl overflow-hidden '>
      <div className="bg-cover w-full h-[240px] sm:w-[300px] sm:h-[170px] sm:overflow-hidden  bg-no-repeat  overflow-hidden ">
            <img src={sliderDetails.image} alt="image" className='w-full' />
      </div>
      <div className=' p-2 w-full h-1/2 sm:w-full sm:h-[200px] sm:p-[20px]  text-center font-nunito '>
        <div>
          <h2 className='text-2xl sm:text-xl font-semibold underline decoration-dotted'>{sliderDetails.heading}</h2>
        </div>
        <p className='text-[18px]  '>{sliderDetails.content}</p>
      </div>
    </div>
  )
}

export default SliderComponent
