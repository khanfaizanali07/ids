import React from 'react'
import {FiPhone} from 'react-icons/fi'
import headphone from '../../assets/Images/cta-icon2.png'
import backgroundImg from '../../assets/images/contact-bg.jpg'
const Contact = () => {
    const numbers = [
        {
            phone: '9975547576',
            href: 'tel: 9975547576',
        },
        {
            phone: '9890669234',
            href: 'tel: 9890669234'
        },
        {
            phone: '9860721526',
            href: 'tel: 9860721526'
        }
    ]
  return (
    <div className="px-16 flex justify-center mb-[-102px] mt-8">
      <div style={{backgroundImage : `url(${backgroundImg})`}} className=" bg-cover rounded-xl bg-center relative bg-no-repeat lg:h-[200px] lg:w-full flex flex-wrap h-auto md:w-[600px] lg:flex justify-evenly items-center gap-4">
            <div className="text-center">
                <b className="text-2xl lg:text-3xl">Obtain further information <br/> by contacting with our <br/> experienced IT staffs.</b>
                <p className="text-xs mt-2">We're available 24*7 <br/>Contact to require a detailed analysis and assessment of your plan.</p>
            </div>
            <div className="bg-sky-900 rounded-full h-20 w-20 flex justify-center items-center">
                <img src={headphone} alt="Contact" className=""/>
            </div>
            <div className="text-center">
               {numbers.map((number, index) => <a key= {index} href={number.href} className="text-lg lg:text-3xl"><b className="text-white inline transition-all duration-600 hover:text-black">{number.phone}</b><FiPhone className="inline text-sm text-white ml-2"/><br/></a>)}
            </div>
      </div>
    </div>
  )
}

export default Contact
