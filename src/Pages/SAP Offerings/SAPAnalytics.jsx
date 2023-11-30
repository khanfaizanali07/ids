import React from 'react'
import AnalyticsComp from '../../Components/sap offerings/SAPAnalyticsComp'
import img1 from '../../assets/images/SAP/analytics_1.png'
import img2 from '../../assets/images/SAP/analytics_2.png'
import img3 from '../../assets/images/SAP/analytics_3.png'
import img4 from '../../assets/images/SAP/analytics_4.png'
import img5 from '../../assets/images/SAP/analytics_5.png'
const Analytics = () => {
    const cardDetails1 = [
        {
          image : img1,
          heading : "BI BW",
          para : <><p>– Complete ETL Solution (Extraction, Transformation, Loading).<br/>– End to End Implementation .<br/> – Upgrade / Migration .<br/> – Data Anaysis & Planning.</p></>
        },
        {
          image : img2,
          heading : "BW/4HANA",
          para : <><p>- End to End Implementation .<br/>– S4HANA Based Analytical Solution.<br/>– Simplyfied Data Loading Process.<br/>– Advanced & Fast Reporting Solution. <br/> – High Performance Hana Computing.</p></>
        },
        {
          image : img3,
          heading : " BO",
          para : <><p>– Attractive Graphical Reporting.<br/>– KPI Dashboard.<br/>– Performance Dashboards.</p></>
        },
        {
            image : img4,
            heading : "Lumira",
            para : <><p>– Predict future outcomes and forecasting.<br/>– Data visualizations and stories from multiple Datasource.</p></>,
            style: 'w-[400px]'
        },
        {
            image : img5,
            heading : "Analytics Cloud",
            para : <><p>– SaaS based Analytic tool.<br/> – HANA Cloud platform.<br/>– analytical and ad-hoc reporting.<br/>– basic, medium, and complex dashboard.<br/>– support predictive planning.</p></>,
            style: 'w-[400px]'
        }
      ];

        
    return (
    <>  
    <div className='row-one flex flex-wrap justify-center gap-[30px] lg:gap-[30px]  w-full '>
        {
            cardDetails1.map((details,index)=>
                <AnalyticsComp details= {details} key={index}/>
            )
        }  
    </div>
    </>
  )
}

export default Analytics
