import React from 'react'
import industries1 from '../../assets/Images/Industries/industries1.png'
import industries2 from '../../assets/Images/Industries/industries2.jpg'
import industries3 from '../../assets/Images/Industries/industries3.png'
import industries4 from '../../assets/Images/Industries/industries4.png'
import industries5 from '../../assets/Images/Industries/industries5.png'
import industries6 from '../../assets/Images/Industries/industries6.png'
import industries7 from '../../assets/Images/Industries/industries7.png'
import industries8 from '../../assets/Images/Industries/industries8.png'
import industries9 from '../../assets/Images/Industries/industries9.png'
import IndustriesCard from '../../Components/credentials/IndustriesCard'
const Industries = () => {
    const industriesObj = [
        {
            image: industries1,
            heading: 'FMCG (Poultry, Dairy, Beverages)'
        },
        {
          image: industries2,
          heading: 'White Goods & Auto Ancillary'
        },
        {
          image: industries3,
          heading: 'IS-Oil',
          style: 'p-4'
        },
        {
          image: industries4,
          heading: 'Electronics & Consumer Durables'
        },
        {
          image: industries5,
          heading: 'Pharma',
          style: 'p-4'
        },
        {
          image: industries6,
          heading: 'Health Care',
          style: 'p-4'
        },
        {
          image: industries7,
          heading: 'Retail Sector',
          style: 'p-4'
        },
        {
          image: industries8,
          heading: 'Telcos & Hitech',
          style: 'p-4'
        },
        {
          image: industries9,
          heading: 'Life Science',
          style: 'p-4'
        },

    ]
  return (
    <div className="bg-[#f6fafe]">
      <p className="text-center font-bold text-lg text-slate-500 p-4">Industries We Serve</p>
      <h1 className="text-center text-2xl font-bold lg:px-40">We Offer Trusted and Reliable SAP Services and Solutions to Companies from Various Sectors.</h1>
      <div className="flex flex-wrap gap-16 px-20 justify-center items-center py-10">
          {industriesObj.map((obj, index) => <IndustriesCard obj={obj} key={'k'+index}/> )}
      </div>
    </div>
  )
}

export default Industries
