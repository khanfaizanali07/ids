import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/Images/About/page-banner.jpg';
const BreadCrumb = ({heading, link}) => {
  return (
    <>
      <div style={{backgroundImage : `url(${bannerImg})`}} className="lg:h-[350px] h-[250px] w-full flex justify-center items-center flex-col opacity-80 bg-no-repeat bg-center">
      <b className=" lg:text-6xl text-4xl text-[#336298] opacity-100">{heading}</b>
      <div className="text-lg breadcrumbs font-bold text-black opacity-100">
        <ul>
          <li><Link to='/'>Home</Link></li> 
          <li>{link}</li>   
        </ul>
      </div>
        
        </div>
  
    </>
  )
}

export default BreadCrumb
