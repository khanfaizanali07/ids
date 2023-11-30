import React from 'react'
import sap from '../../../assets/Images/SAP Offerings/sap-partner.png'
import sap1 from '../../../assets/Images/SAP Offerings/sap 1.jpg'
import sap2 from '../../../assets/Images/SAP Offerings/sap 2.jpeg'
import sap3 from '../../../assets/Images/SAP Offerings/sap 3.jpg'
import sap4 from '../../../assets/Images/SAP Offerings/sap 4.jpeg'
import sap5 from '../../../assets/Images/SAP Offerings/sap 5.jpeg'
import sap6 from '../../../assets/Images/SAP Offerings/sap 6.jpeg'
import SapCard from '../../../Components/services/sap/SapCard'
const Sap = () => {
  const sapObj = [
    {
        image: sap1,
        heading: 'Cost Optimization',
        text: 'Reduce SAP Infrastructure support cost with an offshore resource staffing model.',
        style: 'p-10 pt-10'
    },
    {
      image: sap2,
      heading: 'Speed/Capacity',
      text: '24*7 Timely Support Coverage Period',
      style: 'p-16 pt-8'
    },
    {
      image: sap3,
      heading: <><h1>Quality</h1></>,
      text: <p  className="pt-[20px]">The offshore SAP Application Management <br/> resource delivery model, translates to a high degree of engagement quality, <br/> lower risks and measurable economic value.</p>,
      style: 'pt-6'
    },
    {
      image: sap4,
      heading: 'Risk Management',
      text: 'All engagements follow a proven methodology and focus on best practices.',
      style: 'p-10 pt-10'
    },
    {
      image: sap5,
      heading: 'Expand SAP Functional Support Expertise',
      text: 'Projects often require specific skills unavailable within internal staff - increases the availability of skills and capacities for SAP projects.',
      style: 'p-4 pt-2'
    },
    {
      image: sap6,
      heading: 'Re-direct Internal Staff',
      text: 'Allows internal IT staff to work on strategic projects, while the iDS SAP Functional support team maintains existing SAP landscape help desk support.',
      style: 'p-[14px] pt-10'
    }
  ]
  return (
    <div>
        <div className="flex w-full pt-20 p-6 flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/4 w-full p-8">
                <img src={sap} alt="SAP" className="w-[400px]"/>
            </div>
            <div className="md:w-3/4 w-full">
              <p className="text-justify text-sm font-semibold p-4">It is very important for organizations to implement end to end solutions in the digital age. In that case, SAP consulting company can help you to achieve the goal and transform your organization with latest tools. iDS can help to provide a consistent SAP Services which enabled to make simplified operations & faster decision making for Organization. iDS is a “SAP Partner Edge open ecosystem” consulting organization having proficiency in providing SAP services E to E implementation, Core SAP Functional, Analytical, Technical & Infrastructure Module Support.</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 sm:flex sm:flex-wrap sm:justify-evenly  sm:w-full  p-[20px]'>
        {
            sapObj.map((details, index) => 
               <SapCard details= {details} key={'k' + index}/>
            )
        }        
    </div>
    </div>
  )
}

export default Sap
