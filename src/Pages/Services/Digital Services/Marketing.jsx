import React from 'react'
import marketing1 from '../../../assets/Images/Marketing/marketing1.jpg'
import marketing2 from '../../../assets/Images/Marketing/marketing2.png'
import marketing3 from '../../../assets/Images/Marketing/marketing3.png'
import marketing4 from '../../../assets/Images/Marketing/marketing4.jpg'
import marketing5 from '../../../assets/Images/Marketing/marketing5.jpg'
import MarketingCard from '../../../Components/services/digital services/MarketingCard'
const Marketing = () => {
  const marketingObj = [
    {
      image: marketing1,
      heading: 'Social Media Marketing',
      text: 'We Help your business to reach maximum targeted audience not only in your geographic presence but from the entire world, resulting in larger customer base to unstoppable client engagement. We handle all of your social media accounts, to name few but not limited to like Fb, Tw, Lin, Insta, etc.'
    },
    {
      image: marketing2,
      heading: 'Search, Dispaly and Video Ads',
      text: 'Search engine marketing ensure to show your ads presence where your audience is searching products like yours, which results in new customer acquisition, Accurate Leads generation, increased business revenue. Customers takes call to action directly on your ads to Buy now, etc..'
    },
    {
      image: marketing3,
      heading: 'Search Engine Optimization',
      text: 'Our SEO experts are always in research for hand crafted content and developing unique strategies to ensure maximum generic traffic on to your website through various search engines like Google, Yahoo, Bing, AOL, etc... With good SEP strategy & latest analytical tools we ensure you stay on top of search results always..'
    },
    {
      image: marketing4,
      heading: 'Mobile Marketing',
      text: 'There are around 5.5 billion unique mobile subscribers in the world as per GSMA intelligence report 2020. We utilize multichannel marketing strategy to promote advertise and reach target audience specifically using only smart phones, Tablets, and other similar devices.'
    },
    {
      image: marketing5,
      heading: 'E-Mail Marketing',
      text: 'Analogous with utilizing SEO & SMM tools & techniques, your business needs to be garnished with a professional touch via E-mail marketing to nurture leads and boost your customer’s loyalty towards your business by briefing more information to potential customers about your product or service offerings.'
    },
    {
      image: marketing1,
      heading: 'Content Marketing',
      text: 'The more you educate your customers the more likely they will be loyal to you. A strategic marketing approach is implemented focused on delivering highly relevant, consistent, valuable information to hold your audience with you and attract new audience towards your products and services.'
    }
]
  return (
    <div className="bg-[#f6fafe]">
      <h1 className="text-4xl text-center py-8 font-bold">Digital Marketing</h1>
      <div className="flex justify-center items-center flex-wrap gap-28">
            {marketingObj.map((item, index) => <MarketingCard key={'j'+index} item={item}/>)}
    </div>
    </div>
  )
}

export default Marketing
