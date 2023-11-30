import React from 'react'

const DeployCards = ({dep}) => {
  return (
    <div>
      <div className={`card hover:shadow-2xl lg:w-60 md:w-50 sm:w-40 w-30 bg-base-100 shadow-xl ${dep.style} mt-4`}>
            <div className="card-body">
                <h2 className="card-title">{dep.heading}</h2>
                <p>{dep.text}</p>
            </div>
            <figure><img src={dep.img1} alt="Images"/></figure>
        </div>
    </div>
  )
}

export default DeployCards
