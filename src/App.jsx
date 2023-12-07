import { useState } from "react"
import NavBar from "./Components/Layouts/NavBar"
import Footer from "./Components/Layouts/Footer"
import AboutUs from "./Pages/Company/AboutUs"
import Home from "./Pages/Home"
import { FaTwitter, FaFacebook, FaLinkedin, FaTumblr, FaReddit } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Pages/Company/Contact"
import SapServices from "./Pages/SAP Offerings/SapServices"
import Careers from "./Pages/Company/Careers"
import EnquiryForm from "./Pages/Company/EnquiryForm"
import UiUx from "./Pages/Services/Digital Services/UiUx"
import Cloud from "./Pages/Services/Digital Services/Cloud"
import Mobility from "./Pages/Services/Digital Services/Mobility"
import Analytics from "./Pages/Services/Digital Services/Analytics"
import Portal from "./Pages/Services/Digital Services/Portal"
import Iot from "./Pages/Services/Digital Services/Iot"
import Marketing from "./Pages/Services/Digital Services/Marketing"
import Sap from "./Pages/Services/SAP/Sap"
import Industries from "./Pages/Credentials/Industries"
import Consultant from "./Pages/Credentials/Consultant"
import Spinner from "./Components/Shared/Spinner"
import ProcessTransformation from "./Pages/IT Buisness/ProcessTransformation"
import Functional from "./Pages/SAP Offerings/Functional"
import Hana from "./Pages/SAP Offerings/Hana"
import SapCloud from "./Pages/SAP Offerings/SapCloud"
import Fiori from "./Pages/SAP Offerings/Fiori"
import SAPAnalytics from "./Pages/SAP Offerings/SAPAnalytics"
import TechService from "./Pages/SAP Offerings/TechService"
import Infra from "./Pages/SAP Offerings/Infra"
import Agile from "./Pages/IT Buisness/Agile"
import ItGovernence from "./Pages/IT Buisness/ItGovernence"


function App() {
  const socialLinks = [ 
    {
      href: 'https://twitter.com/IdiligenceS',
      icon: <FaTwitter/>,
      styles: 'hover:text-blue-500'
    },
    {
      href: 'https://www.facebook.com/iDiligenceSolutions',
      icon: <FaFacebook/>,
      styles: 'hover:text-blue-900'
    },
    {
      href: 'https://www.linkedin.com/in/ids-solutions-pvt-ltd/',
      icon: <FaLinkedin/>,
      styles: 'hover:text-blue-700'
    },
    {
      href: 'https://www.reddit.com/user/idiligencesolutions/',
      icon: <FaReddit/>,
      styles: 'hover:text-orange-600'
    },
    {
      href: 'https://www.tumblr.com/idiligencesolutions',
      icon: <FaTumblr/>,
      styles: 'hover:text-slate-600'
    },
    {
      href: 'mailto: Contact@i-diligence.com',
      icon: <GrMail/>,
      styles: 'hover:text-red-600'
    }
  ]
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);
  const [Show5, setShow5] = useState(false);
  const showDropdown1 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false)
  }
  const showDropdown5 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(true);
  }
  const showDropdown2 = () => {
    setShow1(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow2(true);
  }
  const showDropdown3 = () => {
    setShow1(false);
    setShow2(false);
    setShow4(false);
    setShow5(false);
    setShow3(true);
  }
  const showDropdown4 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow5(false);
    setShow4(true);
  }
    const [isLoading, setIsLoading] = useState(true);
    const showSpinner = () => {
      setIsLoading(false)
    }
    setTimeout(() => {
      showSpinner()
    }, 1000);
  return (
    <>
    
    <Router>
    {isLoading ? <Spinner/> :
      <>
    <NavBar socialLinks={socialLinks} showDropdown1={() => showDropdown1()} showDropdown2={() => showDropdown2()} showDropdown3={() => showDropdown3()} showDropdown4={() => showDropdown4()} showDropdown5={() => showDropdown5()} Show1={Show1} Show2={Show2} Show3={Show3} Show4={Show4} Show5={Show5}/>
     <Routes>
     
      <Route path="/" element={<Home isLoading={isLoading} showSpinner={() => showSpinner()}/>}/>

      <Route path="/about" element={<AboutUs isLoading={isLoading} showSpinner={() => showSpinner()}/>}/>
      
      <Route path="/contact" element={<Contact/>}/>
       
      <Route path="/careers" element={<Careers/>}/>
       
      <Route path="/enquiryForm" element={<EnquiryForm/>}/>
       
      <Route path="/uiux" element={<UiUx/>}/>
      
      <Route path="/cloud" element={<Cloud/>}/>
       
      <Route path="/mobility" element={<Mobility/>}/>
       
      <Route path="/analytics" element={<Analytics/>}/>
      
      <Route path="/portal" element={<Portal/>}/>
       
      <Route path="/iot" element={<Iot/>}/>
       
      <Route path="/marketing" element={<Marketing/>}/>
      
      <Route path="/sap" element={<Sap/>}/>
       
      <Route path="/industries" element={<Industries/>}/>
       
      <Route path="/consultant" element={<Consultant/>}/>

      <Route path="/process" element={<ProcessTransformation/>}/>

      <Route path="/sapOfferings" element={<SapServices/>}/>

      <Route path="/functionalServices" element={<Functional/>}/>

      <Route path="/cloudComp" element={<SapCloud/>}/>

      <Route path="/s/4hana" element={<Hana/>}/>

      <Route path="/fiori" element={<Fiori/>}/>
      
      <Route/>

      <Route path="/sapAnalytics" element={<SAPAnalytics/>}/>

      <Route path="/technicalServices" element={<TechService/>}/>

      <Route path="/infra" element={<Infra/>}/>

      <Route path="/agile" element={<Agile/>}/>

      <Route path="/governence" element={<ItGovernence/>}/>
     </Routes>
     
    <Footer socialLinks={socialLinks}/>
    </>
}
    </Router>
    
    </>
  )
}

export default App
