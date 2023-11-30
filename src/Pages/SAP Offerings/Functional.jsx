import React from 'react'
import img1 from '../../assets/images/SAP/SD.png'
import img2 from '../../assets/images/SAP/mm3.png'
import img3 from '../../assets/images/SAP/pp-pm-qm.png'
import img4 from '../../assets/images/SAP/fi-co.png'
import img5 from '../../assets/images/SAP/hr.png'
import img6 from '../../assets/images/SAP/ps.png'
import img7 from '../../assets/images/SAP/bpm.png'
import img8 from '../../assets/images/SAP/ds.png'
import FunctionalComp from '../../Components/sap offerings/FunctionalComp'

const Functional = () => {
    const cardDetails = [
      {
        image : img1,
        heading : "SD",
        para : <><p>The order fulfillment process from order inquiry, quotation, order creation, available to
        promise, shipping and reporting.</p></>
      },
      {
        image : img2,
        heading : "MM",
        para : <><p>Material master data, stocking data, warehouse data, periodic inventories, and performance reporting.
        </p></>
      },
      {
        image : img3,
        heading : "PP/PM/QM",
        para : <><p className='leading-loose'> SAP PP - Production Planning<br/>SAP PM - Plant Maintenance<br/>SAP QM - Quality Management</p></>
      },
      {
        image : img4,
        heading : "FI/CO",
        para : <><p> The financial processes related to general ledger, payables, receivables, cash management, and financial reporting. </p></>
      },
      {
        image : img5,
        heading : "HR",
        para : <><p>Optimise core HR.<br/> - Organizational Management.<br/>  - Accurate payroll processing & monitoring.<br/></p></>
      },
      {
        image : img6,
        heading : "Upgrade",
        para : <><p className='leading-loose'>Project Management, scheduling, planning, execution, reporting of costs.</p></>
      },
      {
        image : img7,
        heading : "Migration",
        para : <><p>- Joint modeling of processes by business and IT specialists.<br/> - Central process execution via a Java-based process engine.</p></>
      },
      {
        image : img8,
        heading : "Support",
        para : <><p>-SAP Data Services provides the capability to extract, transform, and load (ETL) data from any source and to any target.</p></>
      }
    ];
    return (
        <>
        <div className='w-full sm:px-[150px]'>
        <div className=' w-full font-semibold text-center text-[#336298] font-nunito text-3xl sm:text-4xl p-[20px]' >
              Core Functional Services
        </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-3 sm:flex sm:flex-wrap sm:justify-evenly  sm:w-full  p-[20px] '>
        {
            cardDetails.map((details,key)=> 
               <FunctionalComp details= {details}/>
            )
        }        
    </div>
    </>
  )
}

export default Functional
