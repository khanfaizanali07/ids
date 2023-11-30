import React from 'react'

const AnalyticsCard = ({analytics}) => {
  return (
    <div>
      <div className="card card-side bg-base-100 md:w-[600px] sm:w-[400px] w-[300px] shadow-xl cursor-pointer hover:animate-pulse transition ease-in-out duration-1000 hover:transition hover:scale-110 hover:ease-in-out hover:duration-700">
            <figure><img src={analytics.image} alt="Images" className="p-1"/></figure>
            <div className="card-body">
                <h2 className="card-title">{analytics.heading}</h2>
                <p>{analytics.text}</p>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsCard
