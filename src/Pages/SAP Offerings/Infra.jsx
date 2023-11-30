import React from 'react'
import InfraComp from '../../Components/sap offerings/InfraComp'
import img1 from '../../assets/images/SAP/infra_1.png'
import img2 from '../../assets/images/SAP/infra_2.png'
import img3 from '../../assets/images/SAP/infra_3.png'
import img4 from '../../assets/images/SAP/infra_4.png'
import img5 from '../../assets/images/SAP/infra_5.png'
const Infra = () => {
    const cardDetails = [
        {
          image : img1,
          heading : "Planning and Consulting Services",
          para : <><p>From capacity planning to selecting the hardware Designing an entire SAP system, our consulting services provide whatever support your organisation requires.</p></>,
          style : 'w-[450px]'
        },
        {
          image : img2,
          heading : "Implementation",
          para : <><p>We handle complete installation of SAP products, including troubleshooting and backups.</p></>,
          style : 'w-[450px]'
        },
        {
          image : img3,
          heading : "Monitoring",
          para : <><p> Our Team Handles Monitoring of SAP Application Servers, ABAP Dump, System log information, and Performance tuning.</p></>
        },
        {
          image : img4,
          heading : "Operations",
          para : <><p>Operational Tasks Includes performing backup, restore and snapshoots; Transport management; Daily Checks; Security Database management,etc..</p></>
        },
        {
          image : img5,
          heading : "Migration & Upgrades",
          para : <><p>IDS supports migrations such as Platform changes, system moves, and Version upgrades.</p></>
        }   
      ]
    return (
    <div className='w-full flex flex-wrap justify-center gap-[10px]'>
      {
        cardDetails.map((details,index)=>
            <InfraComp details={details} key={"ab"+index}/>
        )
      }
    </div>
  )
}

export default Infra
