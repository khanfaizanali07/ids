import React, { useEffect } from 'react'

const CardComponent = ({cardDetails}) => {

  return (
   <>
    <div className="card w-[320px] shadow-2xl rounded-lg py-[30px] px-[20px] bg-slate-100 hover:bg-blue-300 font-nunito transition-all duration-700  lg:block">
    <div>
      <div className={`float-right pt-2 px-2 `}>
          <img  src={cardDetails.image} alt="logo" />
      </div>
        <div>
        <div className={`card-title p-3`}>
        <h2 className="text-2xl lg:text-3xl mt-5 ms-1"><span className="text-red-400 text-4xl">{cardDetails.heading[0]}</span>{cardDetails.heading.slice(1)}</h2>
       </div>
        <p className="ms-5">{cardDetails.content}</p>
      </div>
    </div>
  </div>
</>
  );
};


export default CardComponent
