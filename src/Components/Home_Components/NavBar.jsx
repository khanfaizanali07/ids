import {useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import ids18 from '../../assets/Images/ids18.png'
import { Link } from 'react-router-dom'
const NavBar = ({ socialLinks }) => {
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

      <nav className="flex justify-between shadow-md lg:flex place-content-evenly lg:justify-around w-full h-20 items-center sticky top-0 z-40 bg-[#c2deff]">
        <div className="flex items-start ml-4  lg:items-center">
          <a href=""><img src={ids18} alt="Logo" className='h-12'/></a>
        </div>
        <div className="flex mr-8 z-40 lg:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer"><FaBars/></label>
        </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
      <a  href=""><img src={ids18} alt="Logo" className='h-20 ml-8'/></a>
      <li><Link className="m-1 mt-20" to='/'>Home</Link></li>
      <li><details className="dropdown">
      <summary className="m-1">Company</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><a>Careers</a></li>
        <li><a>Enquiry Form</a></li>
    </ul>
</details>
</li>
<li>
  <details className="dropdown">
      <summary className="m-1">SAP Offerings</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><a>SAP Services</a></li>
        <li><a>Core Functional Services</a></li>
        <li><a>S/4HANA</a></li>
        <li><a>Cloud</a></li>
        <li><a>Fiori</a></li>
        <li><a>Analytics</a></li>
        <li><a>Technical Services</a></li>
        <li><a>Infra (BASIS)</a></li>
  </ul>
 </details>
</li>
        <li><a className="m-1">Our Services</a></li>
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
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">Company</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                  <li><a>Careers</a></li>
                  <li><a>Enquiry Form</a></li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover z-100">
                <label tabIndex={0} className="cursor-pointer hover:text-blue-600">SAP Offerings</label>
                <ul tabIndex={0} className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>SAP Services</a></li>
                  <li><a>Core Functinal Services</a></li>
                  <li><a>S/4HANA</a></li>
                  <li><a>Cloud</a></li>
                  <li><a>Fiori</a></li>
                  <li><a>Analytics</a></li>
                  <li><a>Technical Services</a></li>
                  <li><a>Infra (BASIS)</a></li>
                </ul>
              </div>
              <a href="">Our Services</a>
            </li>
        </ul>
        <button className="hidden lg:flex btn bg-[#336298] mr-4 text-white hover:opacity-0.100 hover:bg-black">Enquiry Form</button>
      </nav>
       

    </>
  )
}

export default NavBar
