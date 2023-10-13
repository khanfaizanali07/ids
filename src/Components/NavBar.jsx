import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaTumblr, FaReddit } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
const NavBar = () => {
    const contact = ['9975547576', '|', 'Contact@i-diligence.com', '|', 'Mon. - Fri.10:00 - 06:00'];
   
  return (
    <>
        <div className="flex w-full bg-black">
            <div className="flex h-10 place-content-evenly items-center w-1/2 ml-24">
                    {contact.map((item, index) => <p key={index} className='text-white text-xs'>{item}</p>)}
            </div>
            <div className="flex w-1/2 place-content-end gap-4 items-center text-white mr-24">
              <p className='text-xs'>Follow Us</p>
              <a target='_blank' href="https://twitter.com/IdiligenceS"><FaTwitter/></a>
              <a target='_blank' href="https://www.facebook.com/iDiligenceSolutions"><FaFacebook/></a>
              <a target='_blank' href="https://www.linkedin.com/in/ids-solutions-pvt-ltd/"><FaLinkedin/></a>
              <a target='_blank' href="https://www.reddit.com/user/idiligencesolutions/"><FaReddit/></a>
              <a target='_blank' href="https://www.tumblr.com/idiligencesolutions"><FaTumblr/></a>
              <a href=""><GrMail/></a>
            </div>
       </div>
    </>
  )
}

export default NavBar
