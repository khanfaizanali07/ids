import React from 'react'
const IndustriesCard = ({obj}) => {
    
  return (
    <div>
        <div className={`card card-side bg-base-100 shadow-xl w-80 ${obj.style} transition-all hover:-translate-y-6 duration-500 hover:ease-in-out cursor-pointer`}>
  <figure className="w-[80px] p-[8px]"><img src={obj.image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{obj.heading}</h2>
  </div>
</div>
    </div>
  )
}

export default IndustriesCard
