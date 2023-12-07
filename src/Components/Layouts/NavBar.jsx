import {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import ids18 from '../../assets/Images/ids18.png'
import { Link } from 'react-router-dom'
const NavBar = ({ socialLinks, showDropdown1, showDropdown2, showDropdown3, showDropdown4, showDropdown5, Show1, Show2, Show3, Show4, Show5}) => {
 
  
    const contact = ['9975547576', '|', 'Contact@i-diligence.com', '|', 'Mon. - Fri.10:00 - 06:00'];
    

    useEffect(() => {
      window.addEventListener('scroll', isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };
    }, []);
    const isSticky = (e) => {
      const nav = document.querySelector('nav');
      const scrollTop = window.scrollY;
      scrollTop >= 100 ? nav.classList.add('sticky') : nav.classList.remove('sticky');
    };
   
  return (
    <>
      <div className="hidden lg:flex w-full bg-black">
            <div className="flex h-10 place-content-evenly items-center w-1/2 ml-24">
                    {contact.map((item, index) => <p key={index} className='text-white text-xs'>{item}</p>)}
            </div>
            
            <div className="flex w-1/2 place-content-end gap-4 items-center text-white mr-24">
              <p className='text-xs'>Follow Us</p>
                {socialLinks?.map((social, index) =>  <a key={index} className= {social.styles} href={social.href} target='_blank'>{social.icon}</a>)}
            </div>
      </div>

      <div className='w-full bg-[#c2deff] sticky top-0 z-40 shadow-md'>
      <nav className="container px-[10px] sm:px-0 flex justify-between lg:flex lg:justify-around  h-20 lg:px-[0px] items-center">
        <div className="flex items-start  lg:items-center ">
          <Link to="/"><img src={ids18} alt="Logo" className='h-12'/></Link>
        </div>
        <div className="flex z-40 lg:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer"><FaBars/></label>
        </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
      <Link to="/"><img src={ids18} alt="Logo" className='h-20 ml-8'/></Link>
      <li><Link className="m-1 mt-10 text-xl font-medium" to='/'>Home</Link></li>
    
      <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3"/> 
          <div className="collapse-title text-xl font-medium">
            Company
          </div>
          <div className="collapse-content"> 
            <li><Link to='/about' className="font-bold">About Us</Link></li>
            <li><Link to='/contact' className="font-bold">Contact Us</Link></li>
            <li><Link to='/careers' className="font-bold">Careers</Link></li>
            <li><Link to='/enquiryForm' className="font-bold">Enquiry Form</Link></li>
          </div>
        </div>
      
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium">
            SAP Offerings
          </div>
          <div className="collapse-content"> 
            <li><Link to='/SapOfferings' className="font-bold">SAP Services</Link></li>
            <li><Link to='/functionalServices' className="font-bold">Core Functional Services</Link></li>
            <li><Link to='/s/4hana' className="font-bold">S/4HANA</Link></li>
            <li><Link to='/cloud' className="font-bold">Cloud</Link></li>
            <li><Link to='/fiori' className="font-bold">Fiori</Link></li>
            <li><Link to='analytics' className="font-bold">Analytics</Link></li>
            <li><Link to='/technicalServices' className="font-bold">Technical Services</Link></li>
            <li><Link to='/infra' className="font-bold">Infra (BASIS)</Link></li>
          </div>
        </div>
      
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium">
            Our Services
          </div>
          <div className="collapse-content">
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Digital Services
          </div>
          <div className="collapse-content">
                  <li><Link to='/cloud' className="font-bold">Cloud</Link></li>
                  <li><Link to='/analytics' className="font-bold">Data Analytics</Link></li>
                  <li><Link to='/iot' className="font-bold">Internet of Things</Link></li>
                  <li><Link to='/marketing' className="font-bold">Digital Marketing</Link></li>
                  <li><Link to='/mobility' className="font-bold">Mobility</Link></li>
                  <li><Link to='/uiux' className="font-bold">UI/UX</Link></li>
                  <li><Link to='/portal' className="font-bold">Portal/Website</Link></li>
          </div>
          </div> 
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
          Managed Services
          </div>
          <div className="collapse-content">
          <li><a className="font-bold">Application Development & Support</a></li>
                  <li><a className="font-bold">Application Managed Services</a></li>
                  <li><a className="font-bold">IT Operations</a></li>
          </div>
          </div> 
            <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
          Infrastructre Services
          </div>
          <div className="collapse-content">
          <li><a className="font-bold">Cloud & on Premise Management</a></li>
                  <li><a className="font-bold">Network Managemnent</a></li>
                  <li><a className="font-bold">Data Migration</a></li>
          </div>
          </div> 
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
          IT Buisness & Consulting
          </div>
          <div className="collapse-content">
                  
                  <li><Link to='/process' className="font-bold">Process Transformation & Enhancement</Link></li>
                  <li><Link to='/agile' className="font-bold">Agile & DevOps</Link></li>
                  <li><Link to='/governence' className="font-bold">IT Governance & Strategy</Link></li>
                  <li><a className="font-bold">Information Strategy & Governance</a></li>
                  <li><a className="font-bold">Quality Assurance Strategy & process</a></li>
          </div>
          </div> 
          <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
          ERP Solutions
          </div>
          <div className="collapse-content">
          <li><Link to='/sap' className="font-bold">SAP</Link></li>
              <li><a className="font-bold">Microsoft</a></li>
          </div>
          </div> 
          </div>
        </div>
     
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium">
            Credentials
          </div>
          <div className="collapse-content"> 
            <li><Link to="/industries" className="font-bold">Industries Domain</Link></li> 
            <li><Link to="/consultant" className="font-bold">Consultant Portfolio</Link></li>  
          </div>
        </div>
      

        <div className="flex gap-4 justify-center mt-24 text-xl">
    {socialLinks?.map((social, index) =>  <a key={"t_"+index} className= {social.styles} href={social.href} target='_blank' >{social.icon}</a>)}
    </div>
    </ul>    
  </div>
</div>

        </div>
        <ul className="hidden lg:flex">
            <li className='flex gap-4 items-center'>
            <Link to='/'>Home</Link>
              <div className="dropdown dropdown-hover z-40">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">Company</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                  <li><Link to='/careers'>Careers</Link></li>
                  <li><Link to='/enquiryForm'>Enquiry Form</Link></li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover z-100">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">SAP Offerings</label>
                <ul tabIndex={0} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to='/SapOfferings'>SAP Services</Link></li>
                  <li><Link to='/functionalServices'>Core Functional Services</Link></li>
                  <li><Link to='/s/4hana'>S/4HANA</Link></li>
                  <li><Link to='/cloudComp'>Cloud</Link></li>
                  <li><Link to='/fiori'>Fiori</Link></li>
                  <li><Link to='/sapAnalytics'>Analytics</Link></li>
                  <li><Link to='/technicalServices'>Technical Services</Link></li>
                  <li><Link to='/infra'>Infra (BASIS)</Link></li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover z-100">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">Our Services</label>
                <ul tabIndex={0} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52">
                <div className="dropdown dropdown-hover dropdown-right z-100">
                  <li><a className="cursor-pointer" onMouseOver={showDropdown1}>Digital Services</a></li>
                  <li><a className="cursor-pointer" onMouseOver={showDropdown2}>Managed Services</a></li>
                  <li><a className="cursor-pointer" onMouseOver={showDropdown3} >Infrastructure Services</a></li>
                  <li><a className="cursor-pointer" onMouseOver={showDropdown4}>IT Buisness & Consulting</a></li>
                  <li><a className="cursor-pointer" onMouseOver={showDropdown5}>ERP Solutions</a></li>
                {Show1 && (
                  <ul tabIndex={1} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52 ml-2 mt-0">
                  <label tabIndex={0} className="cursor-pointer font-bold">Digital Services</label>
                  <li><Link to='/cloud'>Cloud</Link></li>
                  <li><Link to='/analytics'>Data Analytics</Link></li>
                  <li><Link to='/iot'>Internet of Things</Link></li>
                  <li><Link to='/marketing'>Digital Marketing</Link></li>
                  <li><Link to='/mobility'>Mobility</Link></li>
                  <li><Link to='/uiux'>UI/UX</Link></li>
                  <li><Link to='/portal'>Portal/Website</Link></li>
                  </ul>)
                }
                {Show2 && (
                  <ul tabIndex={1} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52 ml-2 mt-8">
                  <label tabIndex={0} className="cursor-pointer font-bold">Managed Services</label>
                  <li><a>Application Development & Support</a></li>
                  <li><a>Application Managed Services</a></li>
                  <li><a>IT Operations</a></li>
                  </ul>)
                }
                {Show3 && (
                  <ul tabIndex={1} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52 ml-2 mt-16">
                  <label tabIndex={0} className="cursor-pointer font-bold">Infrastructure Management</label>
                  <li><a>Cloud & on Premise Management</a></li>
                  <li><a>Network Managemnent</a></li>
                  <li><a>Data Migration</a></li>
                  </ul>)
                }
                {Show4 && (
                  <ul tabIndex={1} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52 ml-2 mt-28">
                  <label tabIndex={0} className="cursor-pointer font-bold">IT Buisness & Consulting</label>
                  <li><Link to='/process'>Process Transformation & Enhancement</Link></li>
                  <li><Link to='/agile'>Agile & DevOps</Link></li>
                  <li><Link to='/governence'>IT Governance & Strategy</Link></li>
                  <li><a>Information Strategy & Governance</a></li>
                  <li><a>Quality Assurance Strategy & process</a></li>
                </ul>)
                }
                {Show5 && (
                  <ul tabIndex={1} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52 ml-2 mt-36">
                  <label tabIndex={0} className="cursor-pointer font-bold">ERP Solutions</label>
                  <li><Link to='/sap'>SAP</Link></li>
                  <li><a>Microsoft</a></li>
                </ul>)
                }
                </div>
                </ul>
              </div>
              <div className="dropdown dropdown-hover z-100">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">Credentials</label>
                <ul tabIndex={0} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to="/industries">Industries Domain</Link></li>
                  <li><Link to="/consultant">Consultant Portfolio</Link></li>  
                </ul>
              </div>
            </li>
        </ul>
        <button className="hidden lg:flex btn bg-[#336298] mr-4 text-white hover:opacity-0.100 hover:bg-black"><Link to='/enquiryForm'>Enquiry Form</Link></button>
      </nav>
      </div>   

    </>

  )
}

export default NavBar
