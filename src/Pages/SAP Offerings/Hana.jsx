import React from 'react'
import HanaComp from '../../Components/sap offerings/HanaComp';
import img1 from '../../assets/images/SAP/hana_1.png'
import img2 from '../../assets/images/SAP/hana_2.png'
import img3 from '../../assets/images/SAP/hana_3.png'
import img4 from '../../assets/images/SAP/hana_4.png'
import img5 from '../../assets/images/SAP/hana_5.png'
const Hana = () => {
    const cardDetails = [
        {
          image : img1,
          heading : "S4 HANA Implementation",
          para : <><p>End to End Implementation <br/>SAP  system / package
          (S4, BI, BO, Fiori)<br/>Module wise (SAP PP, SD, FI)<br/>SAP Functionality(SAP COPA, PCA, MRP, ESS, MSS)</p></>
        },
        {
          image : img2,
          heading : "SAP HANA Assesment Services",
          para : <><p>SAP HANA readiness assessment.<br/> - SAP Licensing assistance.<br/>- Infrastructure provisioning and installation (on-site and cloud)- Architecture and Infrastructure assessment.<br/>- SAP HANA Roadmap & New SAP Implementations.</p></>
        },
        {
          image : img3,
          heading : "SAP HANA Business Transformation Services",
          para : <><p> - SAP BW on HANA transformation.<br/> -  Business Suite on HANA transformation.<br/> -  BI transformation.<br/> - SAP S/4HANA transformation.</p></>
        },
        {
          image : img4,
          heading : "SAP S/4HANA Upgrade and Migration Services",
          para : <><p> - OS and DB (SAP HANA) Migration.<br/> -  SAP HANA Live Deployment and Adoption.<br/>– ABAP Code Remediation.<br/> - SAP S/4HANA Finance Migration. </p></>
        },
        {
          image : img5,
          heading : "SAP HANA Application and Analytic Services",
          para : <><p> - Industry and Line of Business <br/> - Rapid Deployment solutions.<br/> - Custom applications and reporting.<br/> - Operational reporting solutions.</p></>
        }
      ];
  return (
    <div>
      <div className='heading-section w-full px-[50px] py-[10px] md:px-[100px] md:py-[20px] font-nunito '>
        <h1 className='text-center text-xl md:text-3xl font-semibold text-[#336298]'>S/4 HANA</h1>
        <p className='text-md md:text-xl '>S/4HANA is a next-generation business suite designed to simplify business's digital transformation. The intelligent suite offers a personalized user interface with SAP Fiori and built on the advanced in-memory database, SAP HANA. It is a completely new product line released in 2015.</p>
      </div>
      <div>
      {
         cardDetails.map((details,index)=> 
             <div className={index%2!==0 ? 'lg:float-right' : 'lg:float-left' }>
               <HanaComp details= {details} index = {index  }/>
             </div>
          )
      }
      </div>
    </div>
  )
}

export default Hana
