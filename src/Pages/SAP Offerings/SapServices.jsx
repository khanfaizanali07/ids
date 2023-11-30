import React from 'react'
import img1 from '../../assets/images/SAP/SAP_1.jpg'
import img2 from '../../assets/images/SAP/SAP_2.jpg'
import img3 from '../../assets/images/SAP/SAP_3.jpg'
import img4 from '../../assets/images/SAP/SAP_4.jpg'
import SapServiceComp from '../../Components/sap offerings/SapServiceComp'
import SapNavbar from '../../Components/Layouts/SapNavbar'
const SapServices = () => {
  const cardDetails = [
  {
    image : img1,
    heading : "Implementation",
    para : <><p>End to End Implementation <><br/></>- Instances (ECC, S/4, BI/BO, FIORI, CRM/SRM) <><br/></>- Modules (FI/CO, MM,SD,PP,HCM etc.) <><br/></>- Functionalities (COPA, PCA, MRP, PAYROLL, ESS/MSS)</p></>
  },
  {
    image : img2,
    heading : "Upgrade",
    para : "We provide services for upgrading SAP system to new system version, on-premise to cloud system, streamline sap functional processes."
  },
  {
    image : img3,
    heading : "Migration",
    para : <><p>From Non-SAP ERP to SAP  <><br/></>- SAP ECC to SAP S/4HANA <><br/></>- Database Migration to HANA <><br/></>- Operating system - Cloud Migration"</p></>
  },
  {
    image : img4,
    heading : "Support",
    para : <><p> Ticket Based Support <><br/></>- Fixed hour based support <><br/></>- SAP Project Support <><br/></>- SAP Infra Support <><br/></>- Project Functional Support"</p></>
  }
]
   return (
    <>
    <SapNavbar/>
    <div className='flex flex-wrap justify-center items-center gap-3 sm:flex sm:flex-wrap sm:justify-evenly  sm:w-full border-2 border-red-600 p-[20px] '>
        {
            cardDetails.map((details,key)=> 
               <SapServiceComp details= {details}/>
            )
        }        
    </div>
    </>
  )
}

export default SapServices
