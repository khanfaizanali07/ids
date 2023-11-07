import React from 'react'
import BreadCrumb from './Shared/BreadCrumb'
import { Link } from 'react-router-dom'
import ContactCards from './Shared/ContactCards'
import info1 from '../assets/Images/Contacts/info-1.png'
import info2 from '../assets/Images/Contacts/info-2.png'
import info3 from '../assets/Images/Contacts/info-3.png'
const Contact = () => {
  const contactDetails = [
    {
      text: <>9975547576 <br/> 9860721526 <br/> 9890669234</>,
      icon: info1,
      heading: "Give us a call",
      style: "p-4"
    },
    {
      text: 'Contact@i-diligence.com',
      icon: info2,
      heading: "Drop us a line",
      style: "p-7"
    },
    {
      text: 'Plot No. 13, Tuljai Nagar, Gadiya Vihar, Aurangabad - 431001, Maharashtra, INDIA',
      icon: info3,
      heading: "Visit our office",
      style: "p-2"
    }
  ]
  return (
  <div>
      <BreadCrumb heading={"Contact us"} link={"Contact us"} />
      <div className="flex justify-center items-center py-[80px] w-full overflow-hidden">
      <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5'>
            {contactDetails.map((detail, index) => <ContactCards key={index} detail={detail}/>)}
    </div>
      </div>
      <div className="sm:px-16 sm:py-8 lg:px-44">
     <div className='w-full border-2 rounded-lg shadow-2xl pb-8'>
        <h1 className='text-center text-4xl mt-4'>How May We Help You!</h1>
        <div className="flex justify-evenly mt-4 gap-6 px-4">
        <input type="text" placeholder="Name *" className="input input-bordered border-[#336298] w-full " />  
        <input type="text" placeholder="Email *" className="input input-bordered border-[#336298] w-full " />
        </div>
        <div className='w-full mt-4 px-4'><input type="text" placeholder="Subject *" className="input input-bordered border-[#336298] w-full "/>
        <textarea className="textarea border-[#336298]   w-full mt-4 h-[157px]" placeholder="Please Describe What you Need"></textarea>
        <div className="w-full lg:px-20 px-4">
        <button className=" btn bg-[#336298] text-white hover:opacity-0.100 hover:bg-black w-full mt-4">Send Message</button>
        </div>
        </div>
     </div>
     </div>
  </div>
  )
}

export default Contact
