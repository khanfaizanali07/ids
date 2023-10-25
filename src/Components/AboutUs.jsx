import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/Images/About/about-3.jpg'
import img2 from '../assets/Images/About/about-4.jpg'
const AboutUs = () => {
  // let a = new Date;
  // let b = a.getFullYear();
  // let c = b - 1;
  // let count = 4;
  // if( c < b){
  //   count++
  // }
  // console.log(count);

  // let count = 5;
  // if (c < b){
  //   count++
  // }
  const images = [
    {
      image: img1,
      class: 'rounded-lg lg:ml-20'
    },
    {
      image: img2,
      class: 'mt-40 rounded-lg ml-4'
    }
  ]
  return (
    <div>
      <div className="bg-[url('D:\Faizan\Internship\ids\src\assets\Images\About\page-banner.jpg')] h-[600px] w-full flex justify-center items-center flex-col opacity-80 bg-no-repeat bg-center">
      <b className="text-white text-6xl">About Us</b>
      <div className="flex justify-center items-center">
      <Link to='/' className="text-lg pt-4 text-white hover:text-black">Home</Link>
      <p className="pt-4 text-lg text-white">. / About</p>  
      </div>
      </div>
      <div className=" flex items-center justify-center flex-col lg:flex-row lg:flex lg:mt-4">
        <div className="flex lg:w-1/2 bg-no-repeat bg-center items-center
         justify-center bg-[url('D:\Faizan\Internship\ids\src\assets\Images\About\about-shape2.png')] md:h-[600px] h-[200px] w-[100px]">
            {images.map((image, index) => <img src={image.image} key={index} className={image.class}/>)}
        </div>
        
        <div className="lg:w-1/2 lg:pt-12 p-20">
          <p className="text-md text-black">WHO WE ARE</p>
          <b className="text-4xl pt-4">We run all kinds of IT services that
            vow your success</b>
          <p className="text-black text-md pt-4">Founded in 2018 with an Idea of providing IT Services and Solutions to the Corporate and Consumer industries, iDiligence Solutions is the next-gen IT enterprise focused on SAP and Digital Services.</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default AboutUs
