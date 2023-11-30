import { useState, useEffect } from 'react'
import img1 from '../../assets/Images/About/about-3.jpg'
import img2 from '../../assets/Images/About/about-4.jpg'
import aboutBg from '../../assets/Images/About/about-shape2.png'
import {FaStar, FaEye, FaBullseye} from 'react-icons/fa'
import img3 from '../../assets/Images/About/choose_img01.jpg'
import BreadCrumb from '../../Components/Shared/BreadCrumb'
const AboutUs = () => {
  const [ yearsExp, setYearsExp ] = useState(0);
  useEffect(() => {
    let a = new Date;
    let currentYear = a.getFullYear();
    let startYear = 2018;
    let yearsOfExp = currentYear - startYear;
    setYearsExp(yearsOfExp);
  }, [])
  
 
  

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

  const keyPoints = [
    {
      text: <>"We work in different business models <br/>  tailored to the clients business needs like <br/> IT support services, Managed Services and <br/> Client managed Services to provide end to <br/> end solutions to manage IT solutions."</>,
      icon: <FaStar/>,
    },

    {
      text: <>"Our core competency is with ERP Solutions <br/> like SAP S/4HANA, SAP BI-BO, SAP Ariba, SAP <br/> Application development (ABAP on HANA, <br/> FIORI, SAP UI5), SAP BASIS, SAP Cloud Services."</>,
      icon: <FaStar/>,
    }
  ]
  

  return (
    <div>
      
        <>
        <BreadCrumb heading={"About Us"} link={"About Us"}/>
      <div className=" flex items-center justify-center flex-col lg:flex-row lg:flex lg:mt-4">
        <div style={{backgroundImage : `url(${aboutBg})`}} className="flex lg:w-1/2 bg-no-repeat bg-center items-center
         justify-center md:h-[600px] h-[200px] w-[100px]">
            {images.map((image, index) => <img src={image.image} key={index} className={image.class}/>)}
        </div>
        
        <div className="lg:w-1/2 lg:pt-12 p-20">
          <b className="text-md text-slate-500 block">WHO WE ARE</b>
          <b className="text-4xl pt-4 text-[#336298]">We run all kinds of IT services that
            vow your success</b>
          <p className="text-black text-md pt-4">Founded in 2018 with an Idea of providing IT Services and Solutions to the Corporate and Consumer industries, iDiligence Solutions is the next-gen IT enterprise focused on SAP and Digital Services.</p>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:flex-row md:flex-row md:items-center bg-[#336298] w-full lg:mt-20 lg:pt-20 lg:pb-20 md:flex sm:flex sm:flex-col sm:justify-center sm:items-center sm:pb-26 flex justify-center items-center flex-col pb-40">
          <div className="w-1/2 lg:pl-20">
              <p className="text-md text-slate-500">What We Do</p>
              <b className="lg:text-4xl md:text-xl text-[#9AB2CC]">We Offer <span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent">IT Solutions</span> <br/> For Your Problems</b>
              {keyPoints.map((key, index) => <div key={index} className="flex [perspective:1000px]">
                <h1 className="lg:pt-2 pt-6 gradient-text lg:text-4xl  transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">{key.icon}</h1>
                <p className="lg:text-lg md:text-sm pt-6 lg:ml-2 md:ml-0 text-white" key={index}>{key.text}</p>
                </div>)}
              </div>
          <div className="w-1/2">
            <img src={img3} alt="About" className="rounded-lg lg:w-[600px] md:w-[400px]w-[600px]"/>
            <div className="card w-30 lg:w-60 md:w-40 bg-primary text-primary-content absolute lg:mt-[-160px] lg:ml-[-80px] md:mt-[-100px] md:ml-[-8px] mt-4 mr-20 lg:animate-[wiggle_5s_ease-in-out_infinite]">
            <div className="card-body">
              <h2 className="card-title text-xl lg:text-8xl md:text-4xl">{yearsExp}<p className="lg:text-lg md:text-sm text-sm">Years of Experience in IT</p></h2>
            </div>
          </div>
          </div>
        </div>
        <div className='flex justify-evenly bg-[#336298] pb-8 mt-[-2px]'>
    <div className="collapse collapse-arrow  border-2 border-solid  sm:w-[600px] md:w-1/3">
        <input  type="checkbox"/> 
            <div  className="collapse-title text-xl font-medium text-white">
                    <FaEye className="inline mr-2"/>Our Vision
            </div>
            <div className=" collapse-content text-slate-100">
              To be an IT Solution provider bringing value to customer through persistent service.
            </div>
     </div>
     <div className="collapse collapse-arrow  border-2 border-solid  sm:w-[600px] md:w-1/3">
        <input  type="checkbox"/> 
            <div  className="collapse-title text-xl font-medium text-white ">
                   <FaBullseye className="inline mr-2"/> Our Mission
            </div>
            <div className="collapse-content text-slate-100"> 
              To plan and execute customers Vision with continous innovation and enhancement.
            </div>
     </div>
    </div>
    </>
    
</div>

  )
}

export default AboutUs
