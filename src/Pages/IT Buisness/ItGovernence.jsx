import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {BiSolidInstitution} from 'react-icons/bi'
import img1 from '../../assets/Images/SAP/it-governance-and-strategy.jpg'
const ItGovernence = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col">
        <div className="card sm:w-1/2 pt-[10px] w-full ">
            <div className="flex justify-center items-center">
            <BiSolidInstitution className="text-5xl sm:text-6xl"/>
            <h1 className=" font-bold">IT Governance and Strategy</h1>
            </div>
            <p className="text-sm lg:pl-28 md:pl-18 sm:pl-8 pl-4">We at iDiligence help Organisations to Setup IT Governance across the organisation which includes. 
            </p>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>IT Organisation Structure</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>IT Demand and Delivery Management</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>KPIs and Performance Management</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Risk Management</p>
            </div>
            <div className="flex lg:pl-28 md:pl-18 sm:pl-8 pl-4">
                <FaCheckCircle/>
                <p>Business Strategy streamlining</p>
            </div>
        </div>
        <div className="w-full sm:w-1/2 py-[15px] px-[60px] sm:px-[50px] md:px-[70px] lg:px-[90px]">
            <img src={img1} alt="Image"/>
        </div>
      </div>
    </div>
  )
}

export default ItGovernence

