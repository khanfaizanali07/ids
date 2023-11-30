import React from 'react'

const ProcessCard = ({obj}) => {
  return (
    <div>
        <div className="card w-60 bg-base-100 transition-all hover:-translate-y-6 duration-500 hover:ease-in-out hover:shadow-xl cursor-pointer">
            <figure className="px-10 pt-10">
                <img src={obj.image} alt="" className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-center text-lg font-semibold">{obj.heading}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProcessCard
