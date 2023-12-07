import analytics1 from '../../../assets/Images/Analytics/dashboards-icon-13.jpg'
import analytics2 from '../../../assets/Images/Analytics/microsoft-power-bi-embedded.jpg'
import analytics3 from '../../../assets/Images/Analytics/data.png'
import analytics4 from '../../../assets/Images/Analytics/Qlikview.jpg'
import analytics5 from '../../../assets/Images/Analytics/image (55).png'
import analytics6 from '../../../assets/Images/Analytics/image (57).png'
import analytics7 from '../../../assets/Images/Analytics/image (58).png'
import AnalyticsCard from '../../../Components/services/digital services/AnalyticsCard'
import BuisnessCards from '../../../Components/services/digital services/BuisnessCards'
const Analytics = () => {
   const analyticsObj = [
    {
      image: analytics1,
      heading: 'SAP Business Objects Dashboard & Analytics',
      text: 'DS Analytics expert teams discover, define & deploy modern analytics solutions by adapting industry standards with business for informed solutions.iDS Data Analytics Service helps business to eliminate ambiguity.'
    },
    {
      image: analytics2,
      heading: 'Microsoft Power BI Services',
      text: 'Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.'
    },
    {
      image: analytics3,
      heading: 'The Tableu Reporting Services',
      text: 'Tableau helps people see and understand data. Our visual analytics platform is transforming the way people use data to solve problems. See why organizations of all sizes trust Tableau to help them be more data-driven.'
    },
    {
      image: analytics4,
      heading: 'The QlikView Reporting Services',
      text: 'Modern analytics started right here and that was just the beginning. Ride the next wave with Qlik Sense®.The modern analytics era truly began with the launch of QlikView.'
    }
   ]
   const buisnessObj = [
    {
      image: analytics5,
      heading: 'Key Performence Indicators',
      styles: 'py-7'
    },
    {
      image: analytics6,
      heading: 'Key Performance Indicator & BI Dashboards',
      styles: ''
    },
    {
      image: analytics7,
      heading: 'Buisness Scorecards',
      styles: 'py-8'
    }
   ]
  return (
    <div className="bg-[#f6fafe]">
      <h1 className="text-center text-4xl p-10">Data Analytics</h1>
      <p className="text-justify text-lg lg:px-28 px-4 py-4">iDS Data Analytics team provide services for small to mid-level companies & large organizations with solutions like Business Intelligence reports for planning & analytics purpose for future trend growth as data management solutions.</p>
      <div className="flex justify-center items-center flex-wrap gap-10 lg:px-4  sm:px-0 py-10">
        {analyticsObj.map((analytics, index)=> <AnalyticsCard analytics={analytics} key={'d'+index}/>)}
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 py-10">
        {buisnessObj.map((buisness, index)=> <BuisnessCards buisness={buisness} key={'e'+index}/>)}
      </div>
    </div>
  )
}

export default Analytics
