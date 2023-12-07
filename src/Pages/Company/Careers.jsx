import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../Components/Shared/BreadCrumb'
import {GrMailOption} from 'react-icons/gr'
const Careers = () => {
  return (
    <div>
      <BreadCrumb heading={"Careers"} link={"Careers"}/>
      <div className="w-full flex justify-center items-center py-20">
        <h1 className="md:text-4xl text-xl text-center font-bold">Become a part of our family to <br/> inspire and get inspired by <br/> <span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent">Professional Experts.</span></h1>
      </div>
      <div className="flex lg:flex-row md:justify-center md:items-center w-full bg-[#336298] py-20 lg:px-16 flex-wrap flex-col">
        <div className="lg:w-1/2 w-full">
          <h1 className="md:text-3xl text-xl font-bold text-[#9AB2CC] lg:pl-12 pl-4"><span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent">iDiligence</span> is comitted to helping you reach to your potential.</h1>
          <p className="md:text-lg text-md text-white pt-6 lg:pl-12 pl-4 text-justify pr-4">iDiligence Solutions Pvt. Ltd. is always in search of the best talent who not only become part of our iDS team but also enhances its values. As a member, our employee is not only an asset to our company but a “Diligent” who makes a difference to himself, the company and the clients. If you are charged up to grow along with us and considers yourself a good & continuous learner, then you are at the right place.</p>
        </div>
        <div className="lg:w-1/2 w-full lg:px-16 flex justify-center items-center flex-col pt-10">
            <GrMailOption className="text-2xl text-white"/>
            <p className="md:text-xl text-md text-white pt-4 text-center">REACH OUT NOW!</p>
            <p className="md:text-4xl text-xl pt-4 text-center font-bold bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent"><a href="mailto:careers@i-diligence.com">careers@i-diligence.com</a></p>
            <Link className="pt-6" to='/contact'><button className=" btn bg-[#336298] text-white hover:opacity-0.100 hover:bg-black md:w-60 w-30">Contact us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Careers
