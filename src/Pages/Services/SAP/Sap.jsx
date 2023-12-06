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
        heading: <><p>Cost Optimization</p></>,
        text: <><p className='py-[24px]'>Reduce SAP Infrastructure support cost with an offshore resource staffing model.</p></>
    },
    {
      image: sap2,
      heading: <><p>Speed/Capacity</p></>,
      text: <><p className='py-[24px]'><br/>24*7 Timely Support Coverage Period</p></>
    },
    {
      image: sap3,
      heading: <><p>Quality Management</p></>,
      text: <p>The offshore SAP Application Management resource delivery model, translates to a high degree of engagement quality, lower risks and measurable economic value.</p>
    },
    {
      image: sap4,
      heading: <><p>Risk Management</p></>,
      text: <><p className='py-[24px]'>All engagements follow a proven methodology and focus on best practices.</p></>
    },
    {
      image: sap5,
      heading: <><p>Expand SAP </p></>,
      text: <><p className='py-[12px]'>Projects often require specific skills unavailable within internal staff - increases the availability of skills and capacities for SAP projects.</p></>
    },
    {
      image: sap6,
      heading: <><p >Re-direct Internal Staff</p></>,
       text: <><p className='py-[12px]'>Allows internal IT staff to work on strategic projects, while the iDS SAP Functional support team maintains existing SAP landscape help desk support.</p></>
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
