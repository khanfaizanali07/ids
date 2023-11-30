import React from 'react'

const MobileMockup = ({mob}) => {
  return (
    <div>
      <div>
            <div className="mockup-phone">
            <div className="camera"></div> 
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <img src={mob.img} alt="Mobile" className="w-40 p-8"/>
                        <h1 className="text-xl font-bold p-2 text-center">{mob.heading}</h1>
                        <p className="text-justify p-2">{mob.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMockup
