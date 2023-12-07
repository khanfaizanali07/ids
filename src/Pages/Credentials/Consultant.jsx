import {useState} from 'react'
import consultant1 from '../../assets/Images/Consultant/consultant1.png'
import consultant2 from '../../assets/Images/Consultant/consultant2.png'
import consultant3 from '../../assets/Images/Consultant/consultant3.png'
import consultant4 from '../../assets/Images/Consultant/consultant4.png'
import consultant5 from '../../assets/Images/Consultant/consultant5.png'
import consultant6 from '../../assets/Images/Consultant/consultant6.png'
import consultant7 from '../../assets/Images/Consultant/consultant7.png'
import consultant8 from '../../assets/Images/Consultant/consultant8.png'
import consultant9 from '../../assets/Images/Consultant/consultant9.png'
import consultant10 from '../../assets/Images/Consultant/consultant10.png'
import consultant11 from '../../assets/Images/Consultant/consultant11.png'
import consultant12 from '../../assets/Images/Consultant/consultant12.jpg'
import consultant13 from '../../assets/Images/Consultant/consultant13.png'
import consultant14 from '../../assets/Images/Consultant/consultant14.png'
import consultant15 from '../../assets/Images/Consultant/consultant15.png'
import consultant16 from '../../assets/Images/Consultant/consultant16.png'
import consultant17 from '../../assets/Images/Consultant/consultant17.jpg'
import consultant18 from '../../assets/Images/Consultant/consultant18.png'
import SapCertificationCard from '../../Components/credentials/SapCertificationCard'
import DevCard from '../../Components/credentials/DevCard'
import ProcessCard from '../../Components/credentials/ProcessCard'

const Consultant = () => {
  const [sapCertification, setSapCertification] = useState(true)
  const [dev, setDev] = useState(false)
  const [process, setProcess] = useState(false)
  const handleSap = () => {
    setDev(false)
    setProcess(false)
    setSapCertification(true)
  }
  const handleDev = () => {
    setSapCertification(false)
    setProcess(false)
    setDev(true)
  }
  const handleProcess = () => {
    setSapCertification(false)
    setDev(false)
    setProcess(true)
  }
  const sapObj = [
    {
        image: consultant1,
        heading: 'SAP Certified ABAP Consultant'
    },
    {
      image: consultant2,
      heading: 'SAP Certified Application Associate - SAP HANA 2.0'
    },
    {
      image: consultant3,
      heading: 'SAP Certified ABAP Consultant'
    },
    {
      image: consultant4,
      heading: 'Open SAP Certified Professional in Cloud migration'
    },
    {
      image: consultant5,
      heading: 'SAP Certified Application Associate HANA Cloud Platform'
    },
    {
      image: consultant6,
      heading: 'SAP Certified Application Associate - SAP HANA 2.0'
    },
    {
      image: consultant7,
      heading: 'Open SAP Certified Professional in Cloud migration'
    },
    {
      image: consultant8,
      heading: 'Open SAP Certified Professional in S/4 HANA migration'
    },
    {
      image: consultant9,
      heading: 'SAP MM , SAP PM , SAP IM , SAP PP Certified Professionals'
    }
  ]
  const devObj = [
    {
        image: consultant10,
        heading: 'Azure Certified Development Associate'
    },
    {
      image: consultant11,
      heading: 'AWS Certified Cloud Consultant'
    },
    {
      image: consultant12,
      heading: 'Power BI Trained and experienced Consultants'
    }
  ]
  const proObj = [
    {
        image: consultant13,
        heading: 'Project Management Certified Professionals'
    },
    {
      image: consultant14,
      heading: 'Agile Certified Professionals'
    },
    {
      image: consultant15,
      heading: 'Certified Scrum Masters'
    },
    {
      image: consultant16,
      heading: 'SAFe Agilist (SA)',
      style: 'transition-all duration-[0.1s]'
    },
    {
      image: consultant17,
      heading: 'SAFe POPM',
    },
    {
      image: consultant18,
      heading: 'ITIL Certified process Consultants'
    }
  ]
  
  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-4">Consultants Portfolio</h1>
      <div className="flex justify-center items-center flex-wrap gap-10 p-4">
          <p className={`p-4 w-80 text-center font-bold cursor-pointer rounded-lg transition-all duration-1000 ${sapCertification ? 'border-2 border-[#336298] text-[#336298]' : 'border-2 border-gray-300 text-gray-300'}`} onClick={()=> handleSap()}>SAP Certification <br/> & Experience</p>
          <p className={`p-4 w-80 text-center font-bold cursor-pointer rounded-lg transition-all duration-1000 ${dev ? 'border-2 border-[#336298] text-[#336298]' : 'border-2 border-gray-300 text-gray-300'}`} onClick={()=> handleDev()}>Development, Cloud & Analytics Consultants</p>
          <p className={`p-4 w-80 text-center font-bold cursor-pointer rounded-lg transition-all duration-1000 ${process ? 'border-2 border-[#336298] text-[#336298]' : 'border-2 border-gray-300 text-gray-300'}`} onClick={()=> handleProcess()}>Process & Project Management Consultant</p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-6 py-4 transition-all duration-1000">
        { sapCertification && (sapObj.map((obj, index) => <SapCertificationCard obj={obj} key={'l'+index}/>))}
        { dev && devObj.map((obj, index) => <DevCard obj={obj} key={'m'+index}/>)}
        { process && proObj.map((obj, index) => <ProcessCard obj={obj} key={'n'+index}/>)}
      </div>
    </div>
  )
}

export default Consultant
