import React from 'react'
import website1 from '../../../assets/Images/Portal/image (40).png'
import website2 from '../../../assets/Images/Portal/image (41).png'
import website3 from '../../../assets/Images/Portal/image (42).png'
import website4 from '../../../assets/Images/Portal/image (43).png'
import website5 from '../../../assets/Images/Portal/image (44).png'
import website6 from '../../../assets/Images/Portal/image (45).png'
import website7 from '../../../assets/Images/Portal/image (46).png'
import website8 from '../../../assets/Images/Portal/image (47).png'
import website9 from '../../../assets/Images/Portal/image (48).png'
import website10 from '../../../assets/Images/Portal/image (49).png'
import website11 from '../../../assets/Images/Portal/image (50).png'
import website12 from '../../../assets/Images/Portal/image (51).png'
import website13 from '../../../assets/Images/Portal/image (52).png'
import website14 from '../../../assets/Images/Portal/image (53).png'
import website15 from '../../../assets/Images/Portal/image (54).png'
import PortalCard from '../../../Components/services/digital services/PortalCard'
import EcommerceCard from '../../../Components/services/digital services/EcommerceCard'
import OfferingsCard from '../../../Components/services/digital services/OfferingsCard'
const Portal = () => {
  const portalObj = [
      {
          image: website1,
          heading: 'Web Portal',
          text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
          styles: 'w-40'
      },
      {
        image: website2,
        heading: 'Corporate Portal',
        text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
        styles: 'w-40'
    },
    {
      image: website3,
      heading: 'Sales Portal',
      text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-28'
    },
    {
      image: website4,
      heading: 'HR Portal',
      text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-40'
    },
    {
      image: website5,
      heading: 'Educational Portal',
      text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-44'
    },
    {
      image: website6,
      heading: 'Online Web Presence',
      text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-42'
    },
    {
      image: website7,
      heading: 'Product / Service Marketing Portal',
      text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-40'
    }
  ]

  const ecommerceObj=[
    {
      image: website8,
      heading: 'B2B Portal for Business Customers',
      text:'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles:'w-48'
    },
    {
      image: website9,
      heading: 'B2C Portal for End Customers',
      text:'We provide the most responsive and functional IT design for companies and businesses worldwide.',
      styles: 'w-[297px]'
    }
  ]
  const web = [
    {
      image: website10,
      heading: 'UI / UX Designing',
      style: 'py-0'
    },
    {
      image: website11,
      heading: 'Web Application',
      style: 'py-0'
    },
    {
      image: website12,
      heading: 'CMS Website',
      style: 'py-0'
    },
    {
      image: website13,
      heading: 'Digital Marketing',
      style: 'py-0'
    },
    {
      image: website14,
      heading: 'Domains & Hosting',
      style: 'py-0'
    },
    {
      image: website15,
      heading: 'SEO',
      style: 'py-[14px]'
    }
  ]
  return (
    <div className="bg-[#f6fafe]">
        <h1 className="text-4xl text-center font-bold py-8">Portal / Website</h1>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {portalObj.map((portal, index)=> <PortalCard portal={portal} key={'f'+index}/>)}
        </div>
        <h1 className="text-2xl text-center font-bold py-8">E-Commerce Portal</h1>
        <div className="flex justify-center items-center flex-wrap gap-20">
          {ecommerceObj.map((ecommerce, index)=> <EcommerceCard ecommerce={ecommerce} key={'g'+index}/>)}
        </div>
        <h1 className="text-2xl text-center font-bold py-8">I-Diligence Web & Portal Offerings</h1>
        <div className="flex justify-center items-center flex-wrap gap-10 pb-4">
          {web.map((obj, index)=> <OfferingsCard obj={obj} key={'h'+index}/>)}
        </div>
    </div>
  )
}

export default Portal
