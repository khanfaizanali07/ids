import React, { useState } from 'react'
const CredentialComponent = ({details}) => {
  
  
  return (
    <div className='flex justify-center ' >
    <div className="collapse collapse-arrow  border-2 border-solid  sm:w-[600px] md:w-10/12">
        <input  type="radio" name="my-accordion-2"/> 
            <div  className="collapse-title text-xl font-medium text-white ">
                    {details.heading}
            </div>
            <div className=" collapse-content text-slate-100"> 
                {details.content}
            </div>
     </div>

    </div>
  )
}

export default CredentialComponent
