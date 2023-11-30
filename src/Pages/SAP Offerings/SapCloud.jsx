import React from 'react'
import img1 from '../../assets/Images/SAP/cloud1.png'
import img2 from '../../assets/Images/SAP/cloud2.png'
import img3 from '../../assets/images/SAP/cloud3.png'
import img4 from '../../assets/images/SAP/cloud4.png'
import CloudComponent from '../../Components/sap offerings/CloudComponent'
const Cloud = () => {
    const cardDetails = [
        {
          image : img1,
          heading : "Ariba",
          para : <><p>Provides overall sourcing &amp; procurement solutions<br/>- Procure-to-Pay <br/>- Procure-to-Order <br/>- Procurement Content <br/>- Services Procurement <br/>  - Invoice & Payment</p></>,
        },
        {
          image : img2,
          heading : "Success Factor",
          para : <><p>Provides overall HR operation.<br/> - Employee Central <br/> - Employee Central Payroll
          <br/> - Time and Attendance <br/>- Onboarding <br/>- Performance and Goals <br/>  - Compensation</p></>
        },
        {
          image : img3,
          heading : "Hybris",
          para : <><p>- Supporting any SAP Hybris deployment option <br/>- on-premise, cloud, or hybrid <br/>
          - Supporting all end-to-end processes in the SAP Hybris implementation </p></>
        },
        {
          image : img4,
          heading : "SAC",
          para : <><p>- Provides all the analytics functionalities (Planning, Predictive, Business Intelligence) <br/> - SAP Analytics provides inituitibe data visalization using dashboards</p></>
        }
      ];
  return (
    <div className=' flex flex-wrap justify-center  gap-[15px]  w-full '>
        {
            cardDetails.map((details,key)=>
                <CloudComponent details= {details}/>
            )
        }  
    </div>
  )
}

export default Cloud
