import React, { useState } from 'react';
import BreadCrumb from './Shared/BreadCrumb';
import {FaPaperPlane, FaPhone} from 'react-icons/fa'
const EnquiryForm = () => {
  const [currentSection1, setCurrentSection1] = useState(true);
  const [currentSection2, setCurrentSection2] = useState(false);

  const handleSectionChange1 = () => {
    setCurrentSection2(false);
    setCurrentSection1(true);
  };
  const handleSectionChange2 = () => {
    setCurrentSection1(false);
    setCurrentSection2(true);
  };

  return (

    <>
    <BreadCrumb heading={"Enquiry Form"} link={"Enquiry Form"} />
    
    <div className="flex lg:flex-row md:justify-center w-full  flex-wrap flex-col">
        <div className="lg:w-1/2 w-full bg-[#336298] lg:pl-20 pl-6 py-20">
          <h1 className="md:text-4xl text-xl font-bold text-[#9AB2CC]">Let's get in touch</h1>
          <p className="md:text-xl text-md text-white py-20">We Love to hear from you. Our friendly team <br/> is always here to Response.</p>
          <FaPhone className="md:text-4xl text-xl border-2 border-black lg:ml-2 ml-2 p-1 inline"/>
          <p className="md:text-lg text-md text-white inline lg:ml-7 ml-4">Phone: <a href="tel:9860721526">(+91) 98607 21526</a></p><br />
          <FaPaperPlane className="md:text-4xl text-xl border-2 border-black p-1 inline lg:m-2 m-2"/>
          <p className="md:text-lg text-md text-white inline lg:ml-5 ml-2">Sales: <a href="mailto:Contact@i-diligence.com">Contact@i-diligence.com</a></p>
          
        </div>
        
        <div className="lg:w-1/2 w-full lg:px-6 py-8">
        <div className='w-full border-2 rounded-lg shadow-2xl pb-8'>
            <div className=" mx-auto p-4">
        <div className="flex mb-4"> 
            <button
            className={`mr-4 ${
                currentSection1 ? 'bg-[#336298] ' : 'bg-gray-300 hover:bg-black'
            } p-2 text-white rounded w-1/2`}
            onClick={() => handleSectionChange1()}
            >
            Enquiry For Digital Services
            </button>
            <button
            className={`${
                currentSection2 ? 'bg-[#336298]' : 'bg-gray-300 hover:bg-black'
            } p-2 text-white rounded w-1/2`}
            onClick={() =>handleSectionChange2()}
            >
            Enquiry For SAP Services
            </button>
        </div>

        
            
               <div className="flex justify-evenly mt-4 gap-6 px-4">
               <input type="text" placeholder="First Name *" className="input input-bordered border-[#336298] w-full md:input-md sm:input-sm input-xs " />  
               <input type="text" placeholder="Last Name *" className="input input-bordered border-[#336298] w-full md:input-md sm:input-sm input-xs " />
               </div>
               <div className="flex justify-evenly mt-4 gap-6 px-4">
               <input type="email" placeholder="Email *" className="input input-bordered border-[#336298] w-full md:input-md sm:input-sm input-xs" />  
               <input type="number" placeholder="Phone No *" className="input input-bordered border-[#336298] w-full md:input-md sm:input-sm input-xs" />
               </div>
               <div className='w-full mt-4 px-4'>
            {currentSection1 && (
                <select className="select input input-bordered border-[#336298] w-full lg:select-lg md:select-md sm:select-sm select-xs">
                 <option disabled selected>Select Which Digital Service You Want *</option>
                 <option>Cloud (Amazon & Azure)</option>
                 <option>Data Analytics (PowerBI, Tableu, QlikView)</option>
                 <option>Internet Of things</option>
                 <option>Mobility (Android, iOS, Flutter, React-Native, Mobile Apps)</option>
                 <option>UI/UX (AdobeXD, Figma)</option>
                 <option>Portal/Website (Website, EMS Portals)</option>
                 <option>E-Commerce</option>
                 <option>Point Of Sale (PoS)</option>
                 <option>Barcode/QRcode Application for Tracking &amp; Traceability</option>
                 <option>NA</option>
             </select>
            )}
            {currentSection2 && (
              <select className="select input input-bordered border-[#336298] w-full lg:select-lg md:select-md sm:select-sm select-xs">
              <option disabled selected>Select Which SAP Service You Want *</option>
              <option>SAP ECC Core Services (FICO, SD, MM, PP, HR, etc)</option>
              <option>SAP S/4HANA Services (On-Premises & On-Cloud)</option>
              <option>SAP ABAP</option>
              <option>SAP Fiori Apps</option>
              <option>SAP BASIS Infrastructure services</option>
              <option>SAP Cloud services (Amazon, SAP Cloud) RISE ON SAP</option>
              <option>SAP Business Intelligence</option>
              <option>SAP Analytics Cloud</option>
              <option>SAP Ariba</option>
              <option>SAP Success Factors</option>
              <option>NA</option>
          </select>
        )}
               <textarea className="textarea border-[#336298] md:textarea-md sm:textarea-sm textarea-xs w-full mt-4 h-[157px]" placeholder="Additional Information"></textarea>
               <div className="w-full lg:px-20 px-4">
               <button className=" btn bg-[#336298] text-white hover:opacity-0.100 hover:bg-black w-full mt-4">Send Message</button>
               </div>
               </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;