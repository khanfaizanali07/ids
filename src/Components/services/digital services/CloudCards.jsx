import React from 'react'

const CloudCards = ({obj}) => {
  return (
    <div>
      <div className={`card hover:shadow-2xl lg:w-80 md:w-70 sm:w-60 w-50 bg-base-100 shadow-xl ${obj.style} mt-4`}>
            <div className="card-body">
                <h2 className="card-title">{obj.heading}</h2>
                <p>{obj.text}</p>
            </div>
            <figure><img src={obj.img1} alt="Images"/></figure>
        </div>
    </div>
  )
}

export default CloudCards
