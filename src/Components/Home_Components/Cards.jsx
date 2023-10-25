import React from 'react'
import CardComponent from './CardComponent'
import logo1 from '../../assets/images/1st_logo.png'
import logo2 from '../../assets/images/2nd_logo.png'
import logo3 from '../../assets/images/3rd_logo.png'
const Cards = () => {
    const cardDetails = [
        {
            heading : 'Discover',
            image : logo1,
            content : 'Analyzing the existing Business processes, rules, procedures and identifying the business needs, issues, gaps and challenges is the first and Key milestone for any change, enhancement and Solution'
        },
        {
            heading : 'Define',
            image : logo2,
            content : "Based on the Discovery of Business Processes, we define the New Processes, Workflows, Business rules and Develop the solutions based on the Discovery phase results and outcome."
        },
        {
            heading : 'Deploy',
            image : logo3,
            content : "Deployment or rollout of changes to production without impacting BAU is an important and ultimate milestone for any project to be completed successfully."
        }
    ]
  
return (
    <div className=' flex justify-center'>        
    <div className='card w-[1100px] h-[280px]  relative z-10 grid grid-cols-3 gap-5 bottom-[140px]'>
      {cardDetails.map((card,index) => <CardComponent cardDetails={card} />)}
    </div>

    </div>    
  )
}

export default Cards
