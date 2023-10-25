import React from 'react'
import logo from '../../assets/Images/ids18.png'
const Footer = ({ socialLinks }) => {
    const date = new Date;
  return (
    <div>
        <footer className=" pt-32 footer p-10 bg-[#bbc8d7] text-base-content lg:flex justify-center  lg:gap-[260px] footer-center ">
            <nav>
                <header className="footer-title text-[#336298]">Our Services</header> 
                <a className="link link-hover text-black">Digital Services</a> 
                <a className="link link-hover text-black">Managed Services</a> 
                <a className="link link-hover text-black">ERP Solutions</a> 
            </nav> 
            <nav>
                <header className="footer-title text-[#336298]">Company</header> 
                <a className="link link-hover text-black">About Us</a> 
                <a className="link link-hover text-black">Contact Us</a> 
                <a className="link link-hover text-black">Careers</a> 
                <a className="link link-hover text-black">Enquiry Form</a>
            </nav> 
            <nav>
                <header className="footer-title text-[#336298]">SAP Offerings</header> 
                <a className="link link-hover text-black">SAP S/4HANA</a> 
                <a className="link link-hover text-black">SAP Cloud</a> 
                <a className="link link-hover text-black">SAP Fiori</a>
                <a className="link link-hover text-black">SAP Analytics</a>
                <a className="link link-hover text-black">SAP Infra (Basis)</a>
                
            </nav>
            </footer> 
            <footer className="footer px-10 py-4 bg-[#bbc8d7] text-base-content border-base-300 lg:flex items-center justify-center gap-8 footer-center">
            <aside className="items-center grid-flow-col">
                <img src={logo} width="120" height="120"/>
                <p>Plot No. 13, Tuljai Nagar, Gadiya Vihar,<br/>
                    Aurangabad - 431001, Maharashtra,<br/>
                    India
                </p>
            </aside> 
                <p>&copy;{date.getFullYear()} i-diligence. All Rights Reserved.</p>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    {socialLinks?.map((social, index)=> <a key={index} href={social.href} className={social.styles} style={{fontSize: '30px'}}>
                        {social.icon}
                    </a> )}
                </div>
            </nav>
        </footer>
    </div>
  )
}

export default Footer
