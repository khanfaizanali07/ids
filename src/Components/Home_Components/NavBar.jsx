import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaTumblr, FaReddit } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
const NavBar = () => {
    const contact = ['9975547576', '|', 'Contact@i-diligence.com', '|', 'Mon. - Fri.10:00 - 06:00'];
    const socialLinks = [ 
      {
        href: 'https://twitter.com/IdiligenceS',
        icon: <FaTwitter/>
      },
      {
        href: 'https://www.facebook.com/iDiligenceSolutions',
        icon: <FaFacebook/>
      },
      {
        href: 'https://www.linkedin.com/in/ids-solutions-pvt-ltd/',
        icon: <FaLinkedin/>
      },
      {
        href: 'https://www.reddit.com/user/idiligencesolutions/',
        icon: <FaReddit/>
      },
      {
        href: 'https://www.tumblr.com/idiligencesolutions',
        icon: <FaTumblr/>
      },
      {
        href: 'mailto: Contact@i-diligence.com',
        icon: <GrMail/>
      }
    ]
   
  return (
    <>
        <div className="flex w-full bg-black">
            <div className="flex h-10 place-content-evenly items-center w-1/2 ml-24">
                    {contact.map((item, index) => <p key={index} className='text-white text-xs'>{item}</p>)}
            </div>
            <div className="flex w-1/2 place-content-end gap-4 items-center text-white mr-24">
              <p className='text-xs'>Follow Us</p>
                {socialLinks.map((social) =>  <a href={social.href} target='_blank'>{social.icon}</a>)}
            </div>
       </div>
       

    </>
  )
}

export default NavBar
