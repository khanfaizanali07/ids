import React from 'react'

const PortalCard = ({portal}) => {
  return (
    <div>
        <div className="w-80 hover:bg-[#336298] text-black hover:text-white border-2 border-[#e7e7e7] transition-all hover:-translate-y-6 duration-500 hover:ease-in-out bg-white">
            <img src={portal.image} alt="" className={`rounded-lg p-4 ${portal.styles}`}/>
            <h2 className="text-xl text-left p-4 font-bold">{portal.heading}</h2>
            <p className="text-sm text-left p-4">{portal.text}</p>
        </div>
        
    </div>
  )
}

export default PortalCard
