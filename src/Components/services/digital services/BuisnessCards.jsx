import React from 'react'

const BuisnessCards = ({buisness}) => {
  return (
    <div>
        <div className={`card card-side bg-base-100 md:w-[400px] sm:w-[400px] w-[300px] shadow-xl cursor-pointer hover:animate-pulse transition ease-in-out duration-1000 hover:transition hover:scale-110 hover:ease-in-out hover:duration-700 ${buisness.styles}`}>
            <figure className="px-5 pt-5">
                <img src={buisness.image} alt="Shoes" className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{buisness.heading}</h2>
            </div>
        </div>
    </div>
  )
}

export default BuisnessCards
