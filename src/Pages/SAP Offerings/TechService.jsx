import React from 'react'
import TechServiceComp from '../../Components/sap offerings/TechServiceComp'
import img1 from '../../assets/images/SAP/sap_abap_factory.png'
import img2 from '../../assets/images/SAP/abap4hana.png'
import img3 from '../../assets/images/SAP/workflow4.png'
import img4 from '../../assets/images/SAP/sap_grc.png'
import img5 from '../../assets/images/SAP/sap_mdm.png'
import img6 from '../../assets/images/SAP/sap_pi.png'
const TechService = () => {
    const cardDetails = [
        {
          image : img1,
          heading : "SAP ABAP Factory",
          para : <><p>- WRICEF<br/>- Reports <br/>- Interface <br/>( ALE / IDOC , RFC / BAPI )<br/>- Smart Forms<br/>- Exits ( User / Customer / Menu ) <br/>- WD-ABAP</p></>
        },
        {
          image : img2,
          heading : "ABAP4HANA",
          para : <><p>- Strong expertise on OOPs ABAP <br/>- CDS Views<br/>- Odata<br/>- Enhancement Framework<br/>- Adobe forms</p></>
        },
        {
          image : img3,
          heading : "Workflow",
          para : <><p>- Approval processes - such as purchase requisition, purchase order, and invoice approval.<br/>- Definition of specific workflow processes.<br/>- Integration with Organisational Management.</p></>
        },
        {
          image : img4,
          heading : "SAP GRC/Security",
          para : <><p>- User and Role management.<br/>- SAP Application Security.<br/>- Authentication and SSO using SAML, Kerberos ..etc<br/> - GRC Implementation & Support (Access Control and Process Control)<br/>- IDM - Identity Management (design, implement and support)</p></>
        },
        {
          image : img5,
          heading : "MDM / MDG",
          para : <><p>- Usage of Master Data<br/>- Material Master<br/>- Vendor Master<br/>- Customer Master<br/>- Application of SAP Master Data<br/>- Maintain complete & accurate master Data
          </p></>
        },
        {
          image : img6,
          heading : "PI / PO",
          para : <><p>- Connection with SAP and Non-SAP systems<br/> - Cross-component business process management<br/>- System Landscape Directory<br/>- Enterprise Service Repository<br/>- Application of SAP Master Data</p></>
        }
      ]
    return (
    <div>
      <div className=' flex flex-wrap justify-center  lg:gap-[30px]  w-full  border-2 border-black'>
        {
            cardDetails.map((details,index)=>
                <TechServiceComp details= {details} key={index}/>
            )
        }  
    </div>
    </div>
  )
}

export default TechService
