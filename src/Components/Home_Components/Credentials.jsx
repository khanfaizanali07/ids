import React from 'react'
import CredentialComponent from './CredentialComponent'
import credImg from '../../assets/images/cred_img.png'
const Credentials = () => {
    const accordionDetails = [
        {
            heading : "How we can help Your business?",
            content : "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business."
        },
        {
            heading : "What are the Advantages of iDiligence?",
            content : "iDiligence takes into consideration every little detail to make sure the system run smoothly and responsively. iDiligence employs a new technique called Minified Technology for securing customers' database & building up highly confidential firewalls."
        },
        {
            heading : "How working process is simplified?",
            content : "We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure iDiligence would run seamlessly and the design is reserved in its best form when viewed from a wide range of mobile devices & browsers."
        },
    ]

  return (
    <div>
      <div className='Parent bg-[#121621] lg:w-full py-12 lg:flex lg:justify-center'>
        
        <div className=' flex flex-col justify-center  gap-5  lg:w-[640px] lg:h-full'>
        <h5 className='text-center  mt-2 text-xl sm:text-2xl lg:text-xl font-sans font-semibold text-slate-500 tracking-widest ' >
            OUR COMPANY
        </h5>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-thin text-white font-nunito text-center'>
            Share the joy of achieving <span className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent '>Glorious Moments</span> & ascend up the top.
        </h1>
        {
            accordionDetails.map((details ,index)=>
             <CredentialComponent details = {details}/>
        )}
        </div>
        <div className='flex items-center justify-center lg:w-[640px] lg:h-full'>
            <img src={credImg} alt="image" className='h-[550px] w-[550px] overflow-hidden'/>
        </div>
    </div>  
    </div>
  )
}

export default Credentials
