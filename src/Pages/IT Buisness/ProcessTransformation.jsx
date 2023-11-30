import React from 'react'
import { FaCogs, FaCheckCircle} from 'react-icons/fa'
import img1 from '../../assets/Images/IT Buisness/IT Buisness1.jpg'
const ProcessTransformation = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-1/2 p-4 w-full">
            <div className="flex justify-center items-center">
            <FaCogs className="text-6xl"/>
            <h1 className="text-center font-bold text-lg">Process Transformation & Enhancement.</h1>
            </div>
            <p className="text-sm lg:pl-28 md:pl-18 sm:pl-8 pl-4">We at iDiligence helps Business to realize and implement Below success factors and business process transformation is the key to achieve this.</p>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Maximize the Business potential</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Identify business Value Proposition</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p> Improved Productivity and efficiency</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Organisation Change Management</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Achieve Competitive advantage by benchmarking</p>
            </div>
        </div>
        <div className="sm:w-1/2 p-4 w-full">
            <img src={img1} alt="Image"/>
        </div>
      </div>
    </div>
  )
}

export default ProcessTransformation
