import React from 'react'
import ServiceCard from './ServiceCard'
import serviceImage1 from '../../assets/Images/Serviceimage-2.jpg'
import serviceImage2 from '../../assets/Images/Serviceimage-3.jpg'
import serviceImage3 from '../../assets/Images/Serviceimsge-1.jpg'
import serviceImage4 from '../../assets/Images/serviceimage4.jpg'
import serviceImage5 from '../../assets/Images/Serviceimage-5.jpg'
import serviceImage6 from '../../assets/Images/Serviceimage-6.jpg'
const Services = () => {
    const cardDetails = [
        {
            bgImage: serviceImage1,
            heading: 'Digital Services',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.',
        },
        
        {
            bgImage: serviceImage2,
            heading: 'Managed Services',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.',
        },
        
        {
            bgImage: serviceImage3,
            heading: 'Infrastructure Management',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.',
        },
        
        {
            bgImage: serviceImage4,
            heading: 'IT Buisness Consulting',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.',
        },
        
        {
            bgImage: serviceImage5,
            heading: 'ERP Consulting',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.', 
        },

        {
            bgImage: serviceImage6,
            heading: 'SAP Services',
            content: 'SAP consulting company can help you to achieve the goal and transform your organization with latest tools.', 
        }

    ]
  return (
    <div className='pt-[90px] sm:pt-[50px] md:pt-[200px] '>
    <p className="text-center  font-bold  text-slate-500 ">REASON TO CHOOSE US</p>
    <h1 className='text-center text-lg lg:text-3xl font-bold '>For your very specific industry,<br/>
        we have<br/>
        <h1 className=' text-[#336298]'>highly-tailored IT solutions.</h1></h1>
    <div className="flex items-center justify-center p-[30px] ">
        <div className='grid sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-3  lg:gap-[15px]'>
            {cardDetails.map((item, index) => <ServiceCard key={index} item={item}/>)}
    </div>
    </div>
    </div>
  )
}

export default Services
