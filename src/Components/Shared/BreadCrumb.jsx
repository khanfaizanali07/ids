import React from 'react'
import bannerImg from '../../assets/Images/About/page-banner.jpg';
const BreadCrumb = ({children}) => {
  return (
    <div>
      <div style={{backgroundImage : `url(${bannerImg})`}} className=" h-[350px] w-full flex justify-center items-center flex-col opacity-80 bg-no-repeat bg-center">
        {children}
      </div>
    </div>
  )
}

export default BreadCrumb
