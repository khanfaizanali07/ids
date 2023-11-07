import { useState } from "react"
import LoadingBar from "react-top-loading-bar"
import NavBar from "./Components/Home_Components/NavBar"
import Footer from "./Components/Home_Components/Footer"
import AboutUs from "./Components/AboutUs"
import Home from "./Components/Home"
import { FaTwitter, FaFacebook, FaLinkedin, FaTumblr, FaReddit } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact"
import SapServices from "./Components/SAP_Components/SapServices"
import Careers from "./Components/Careers"
import EnquiryForm from "./Components/EnquiryForm"
import UiUx from "./Components/UiUx"

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
  
  const [progress, setProgress] = useState(0)

  return (
    <>
    <Router>
    {

      <LoadingBar
      progress={progress}
      loaderSpeed={1000}
      height={3}
      // onLoaderFinished={setProgress(0)}
      />
    }
    <NavBar socialLinks={socialLinks} showDropdown1={() => showDropdown1()} showDropdown2={() => showDropdown2()} showDropdown3={() => showDropdown3()} showDropdown4={() => showDropdown4()} showDropdown5={() => showDropdown5()} Show1={Show1} Show2={Show2} Show3={Show3} Show4={Show4} Show5={Show5}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs setProgress={setProgress}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/sapOfferings" element={<SapServices/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/enquiryForm" element={<EnquiryForm/>}/>
      <Route path="/uiux" element={<UiUx/>}/>
     </Routes>
    <Footer socialLinks={socialLinks}/>
    </Router>
      
    </>
  )
}

export default App
