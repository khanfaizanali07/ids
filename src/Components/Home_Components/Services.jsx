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
    <>
    <p className="text-center mt-4 font-bold">REASON TO CHOOSE US</p>
    <h1 className='text-center text-lg lg:text-3xl font-bold mt-8'>For your very specific industry,<br/>
        we have<br/>
        highly-tailored IT solutions.</h1>
    <div className="flex items-center justify-center p-[50px] ">
        <div className=' grid grid-cols-1  md:grid-cols-2 md:gap-5 lg:card lg:grid lg:grid-cols-3 lg:gap-5 '>
            {cardDetails.map((item, index) => <ServiceCard key={index} item={item}/>)}
    </div>
    </div>
    </>
  )
}

export default Services
