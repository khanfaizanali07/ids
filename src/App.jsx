import NavBar from "./Components/Home_Components/NavBar"
import Footer from "./Components/Home_Components/Footer"
import AboutUs from "./Components/AboutUs"
import Home from "./Components/Home"
import { FaTwitter, FaFacebook, FaLinkedin, FaTumblr, FaReddit } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact"

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

  return (
    <>
    <Router>
    <NavBar socialLinks={socialLinks}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    <Footer socialLinks={socialLinks}/>
    </Router>
      
    </>
  )
}

export default App
