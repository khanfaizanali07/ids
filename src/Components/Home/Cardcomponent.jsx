import React, { useEffect } from 'react'

const CardComponent = ({cardDetails}) => {

  return (
   <>
    <div className="card lg:w-[345px] shadow-2xl rounded-lg py-[30px] md:py-[10px] lg:py-[30px] px-[10px] md:px-[10px] lg:px-[25px] bg-slate-100 hover:bg-black hover:bg-opacity-[0.5] hover:text-white font-nunito transition-all duration-700 lg:block  ">
    <div>
      <div className={`float-right pt-2 px-2 sm:w-[90px] md:w-[110px]`}>
          <img  src={cardDetails.image} alt="logo" />
      </div>
        <div className=''>
        <div className={`card-title p-3 `}>
        <h2 className="text-2xl lg:text-3xl mt-5 ms-1"><span className="text-[#336298] text-4xl ">{cardDetails.heading[0]}</span>{cardDetails.heading.slice(1)}</h2>
       </div>
        <p className="ms-5 hover:text-white">{cardDetails.content}</p>
      </div>
    </div>
  </div>
</>
  );
};


export default CardComponent
