import React from 'react'

const EcommerceCard = ({ecommerce}) => {
  return (
    <div>
      <div className="sm:w-96 w-40 hover:bg-[#336298] text-black hover:text-white border-2 border-[#e7e7e7] transition-all hover:-translate-y-6 duration-500 hover:ease-in-out bg-white">
            <img src={ecommerce.image} alt="" className={`rounded-lg p-4 ${ecommerce.styles}`}/>
            <h2 className="text-xl text-left p-4 font-bold">{ecommerce.heading}</h2>
            <p className="text-sm text-left p-4">{ecommerce.text}</p>
        </div>
    </div>
  )
}

export default EcommerceCard
