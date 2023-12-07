import React from 'react'
import { FaSitemap, FaCheckCircle} from 'react-icons/fa'
import img1 from '../../assets/Images/SAP/Agile.png'
const Agile = () => {
    return (
        <div>
          <div className="flex sm:flex-row flex-col">
            <div className="sm:w-1/2 p-[20px] w-full">
                <div className="flex justify-center items-center">
                <FaSitemap className="text-5xl sm:text-6xl"/>
                <h1 className="text-center font-bold text-lg">Agile and DevOps</h1>
                </div>
                <p className="text-sm lg:pl-28 md:pl-18 sm:pl-8 pl-4">We at iDiligence helps organization to transform the SDLC process from Waterfall to Agile Methodologies with our deep experience in SDLC process transformation.</p>
                <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                    <FaCheckCircle/>
                    <p> SCRUM </p>
                </div>
                <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                    <FaCheckCircle/>
                    <p> SAFe</p>
                </div>
                <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                    <FaCheckCircle/>
                    <p>KANBAN</p>
                </div>
                <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                    <FaCheckCircle/>
                    <p> XP</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 py-[20px] px-[80px] sm:px-[50px] md:px-[70px] lg:px-[90px]">
                <img src={img1} alt="Image"/>
            </div>
          </div>
        </div>
      )
    
}

export default Agile
