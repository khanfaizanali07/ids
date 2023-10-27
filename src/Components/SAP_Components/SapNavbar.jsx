import React from 'react'
import SapServices from './SapServices'
import {FaBars} from 'react-icons/fa'
import ids18 from '../../assets/Images/ids18.png'

const SapNavbar = () => {
  const common_class = ' w-full shadow-lg p-[5px] rounded-md   bg-[#336298]  text-white hover:bg-black text-md hvr-float-shadow ';
  const common_class1 = ' w-full shadow-lg p-[5px] rounded-md hover:bg-black bg-[#336298] text-white text-md hvr-float-shadow';
  // this nav is above 786px [md]
  return (
    <>
    
    <div className= "hidden parent md:w-full lg:block border-2 border-black rounded-lg  bg-[grey]">
    <ul className='flex flex-wrap gap-[12px] justify-center items-center border-2 rounded-lg py-[20px] font-semibold'>
      <li><a href="" className={common_class} >SAP Services </a></li>    
      <li><a href="" className={common_class1}>Functional Services </a></li>  
      <li><a href="" className={common_class}>S/4HANA</a></li>  
      <li><a href="" className={common_class1}>Cloud</a></li>  
      <li><a href="" className={common_class}>Fiori</a></li>  
      <li><a href="" className={common_class1}>Analytics</a></li>  
      <li><a href="" className={common_class}>Technical Services</a></li>  
      <li><a href="" className={common_class1}>Infra(Basis)</a></li>  
    </ul> 
    </div>

        <div className="lg:hidden drawer drawer-end parent md:w-full text-end  border-2 border-black  bg-[grey] p-[15px]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn bg-[#c2deff]">{<FaBars/>}</label>
      </div> 
      <div className="drawer-side z-50 ">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          
            <div className="flex justify-center w-[250px] p-[20px]">
              <a href=""><img src={ids18} alt="Logo" className=''/></a>
            </div>
          
          {/* Sidebar content here */}
          <li><a>SAP Services</a></li>
          <li><a>Functional Services</a></li>
          <li><a>S/4HANA</a></li>
          <li><a>Cloud</a></li>
          <li><a>Fiori</a></li>
          <li><a>Analytics</a></li>
          <li><a>Technical Services</a></li>
          <li><a>Infra(Basis)</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default SapNavbar
