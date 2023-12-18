import React from 'react'
import BreadCrumb from '../../Components/Shared/BreadCrumb'
import ContactCards from '../../Components/company/ContactCards'
import info1 from '../../assets/Images/Contacts/info-1.png'
import info2 from '../../assets/Images/Contacts/info-2.png'
import info3 from '../../assets/Images/Contacts/info-3.png'
import {contactSchema} from '../../Schemas'
import { useFormik } from 'formik'
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
}
const Contact = () => {
 const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
        console.log(values)
    }
  })
  const contactDetails = [
    {
      text: <>9975547576 <br/> 9860721526 <br/> 9890669234</>,
      icon: info1,
      heading: "Give us a call",
      // style: "p-4"
    },
    {
      text: 'Contact@i-diligence.com',
      icon: info2,
      heading: "Drop us a line",
      style: "p-14"
    },
    {
      text: 'Plot No. 13, Tuljai Nagar, Gadiya Vihar, Aurangabad - 431001, Maharashtra, INDIA',
      icon: info3,
      heading: "Visit our office",
      // style: "p-2"
    }
  ]
  return (
  <div className="bg-[#f6fafe]">
      <BreadCrumb heading={"Contact us"} link={"Contact us"}/>
      <div className="flex justify-center items-center py-[80px] w-full overflow-hidden">
      <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5'>
            {contactDetails.map((detail, index) => <ContactCards key={index} detail={detail}/>)}
    </div>
      </div>
      <div className="sm:px-16 sm:py-8 lg:px-44">
        <form onSubmit={handleSubmit}>
          <div className='w-full border-2 rounded-lg shadow-2xl pb-8 bg-white'>
          <h1 className='text-center text-4xl mt-4'>How May We Help You!</h1>
          <div className="flex justify-center items-center mt-4 px-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
          <input type="name" autoComplete="off" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name *" className="input input-bordered border-[#336298] w-full"/>
          {errors.name && touched.name ? <span className="text-red-500 text-xs">{errors.name}</span> : null}
          </div>
          <div>  
          <input type="email" autoComplete="off" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email *" className="input input-bordered border-[#336298] w-full"/>
          {errors.email && touched.email ? <span className="text-red-500 text-xs">{errors.email}</span> : null}
          </div>
          </div>
          </div>
          <div className='w-full mt-4 px-4'>
          <input type="text" autoComplete="off" name="subject" id="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Subject *" className="input input-bordered border-[#336298] w-full"/>
          {errors.subject && touched.subject ? <span className="text-red-500 text-xs">{errors.subject}</span> : null}
          <textarea className="textarea border-[#336298]   w-full mt-4 h-[157px]" placeholder="Please Describe What you Need" autoComplete="off" name="message" id="message" value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
          {errors.message && touched.message ? <span className="text-red-500 text-xs">{errors.message}</span> : null}
          <div className="w-full lg:px-20 px-4">
          <button className="btn bg-[#336298] text-white hover:opacity-0.100 hover:bg-black w-full mt-4" type="submit">Send Message</button>
          </div>
          </div>
          </div>
        </form>
     </div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6975373620417!2d75.34295097361476!3d19.852746827132307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987fbf6eaaab%3A0x60bec136787bcfb2!2siDiligence%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1699521949247!5m2!1sen!2sin" height="450" className="w-full"></iframe>
    </div>
  )
}

export default Contact
