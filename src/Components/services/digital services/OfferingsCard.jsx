import React from 'react'

const OfferingsCard = ({obj}) => {
  return (
    <div>
        <div className={`sm:w-30 w-40 hover:bg-[#336298] text-black hover:text-white border-2 border-[#e7e7e7] transition-all hover:-translate-y-6 duration-500 hover:ease-in-out ${obj.style} bg-white`}>
            <img src={obj.image} alt="" className={`rounded-lg p-4 text-center`}/>
            <h2 className="text-xl text-center p-4 font-bold">{obj.heading}</h2>
        </div>
    </div>
  )
}

export default OfferingsCard
