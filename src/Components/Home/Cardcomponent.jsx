import React, { useEffect } from 'react'

const CardComponent = ({cardDetails}) => {

  return (
   
    <div className="card h-full w-full shadow-xl bg-slate-100 hover:bg-blue-300 hover:border-2 hover">
    <div>
      <div className=' float-right mt-5 me-5'>
          <img  src={cardDetails.image} alt="logo" />
      </div>
        <div>
        <div className={`card-title p-3`}>
        <h2 className="text-3xl mt-5 ms-1"><span className="text-red-400 text-4xl">{cardDetails.heading[0]}</span>{cardDetails.heading.slice(1)}</h2>
       </div>
        <p className="ms-5">{cardDetails.content}</p>
      </div>
    </div>
  </div>




      // <div >
      // <h2>{cardDetails.heading}</h2>
      // <p>{cardDetails.content}</p>
      // <img src={cardDetails.image} alt="" className='h-20 w-20' />
      // </div>
  );
};


export default CardComponent
