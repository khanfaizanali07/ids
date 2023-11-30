import React from 'react'
import FioriComp from '../../Components/sap offerings/FioriComp';
import img1 from '../../assets/images/SAP/fiori_1.png'
import img2 from '../../assets/images/SAP/fiori_2.png'
import img3 from '../../assets/images/SAP/fiori_3.png'
import img4 from '../../assets/images/SAP/fiori_4.png'
const Fiori = () => {
    const cardDetails = [
        {
          image : img1,
          heading : "App Implimentation",
          para : <><p>- E2E implementation (Scoping, Installation, Configuration)<br/>- Embedded, Central, Cloud Deployment options. <br/>- Transactional, Fact-sheets, Analytical Apps.<br/>- FIORI Launch pad configuration & customization.</p></>
        },
        {
          image : img2,
          heading : "App Enhancement",
          para : <><p>- Deploy Standard Fiori App as per system version.<br/> - Fiori enhancement as per extension point meeting business requirement.<br/>- On-Cloud & On-Premise Fiori App deployment.</p></>
        },
        {
          image : img3,
          heading : " SAPUI5 Development",
          para : <><p>- Develop E2E custom Fiori App as per business requirement.<br/>- Provide Digital Age UI / UX. <br/>- As business process app development.<br/>- Expertise in developing UI across all LOB.
         </p></>
        },
        {
          image : img4,
          heading : "Theme & Brand Designing",
          para : <><p>- Help customers apply their own branding for Fiori.<br/>- Branding colors, images and logos.<br/>- Device compatibility.<br/>- Increase S4HANA User Experience.</p></>
        }
      ];
    return (
    <div className=' flex flex-wrap justify-center  lg:gap-[50px]  w-full px-[30px]'>
        {
            cardDetails.map((details,key)=>
                <FioriComp details= {details}/>
            )
        }  
    </div>
  )
}

export default Fiori
