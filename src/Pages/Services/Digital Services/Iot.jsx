import React from 'react'
import iot1 from '../../../assets/Images/IOT/iot_analytics.jpg'
import iot2 from '../../../assets/Images/IOT/iot_consulting.jpg'
import iot3 from '../../../assets/Images/IOT/iot_dev.jpg'
import iot4 from '../../../assets/Images/IOT/iot_engg1.svg'
import iot5 from '../../../assets/Images/IOT/iot_support2.png'
import iot6 from '../../../assets/Images/IOT/iot_testing.jpg'
import IotCard from '../../../Components/services/digital services/IotCard'

const Iot = () => {
    const iotObj = [
        {
            image: iot1,
            heading: 'IOT Consulting',
            text: 'Acting as a bridge between man and machines our consultant make sure our client avail maximum operational proficiency through precise requirement gathering & implementing the same on small as well as major projects'
        },
        {
            image: iot2,
            heading: 'IOT-Engineering',
            text: 'iDS provide customized engineered solution by developing, installing and configuring equipments for the development & enhancement in process automation of the organization.'
        },
        {
            image: iot3,
            heading: 'IOT-Development',
            text: 'We provide our customers with tailor made software & applications development to provide real time data with utmost accuracy, hence growing business values.'
        },
        {
            image: iot4,
            heading: 'IOT-Support',
            text: 'Upgradation & Enhancement is the key to be updated with latest trends & to be competitive in business, iDS provide 24*7*365 support for real time data generation and managing a complete life cycle.'
        },
        {
            image: iot5,
            heading: 'IOT-Testing',
            text: 'Striving for quality is the new normal in today`s world for better business outcome but unfortunately is lacked by many businesses. We at iDS satisfy our clients with exceptional quality, compatibility, manageability, accountable & Performances.'
        },
        {
            image: iot6,
            heading: 'IOT-Analytics',
            text: 'We provide the most responsive and functional IT design for companies and businesses worldwide.'
        },
    ]
  return (
    <div className="bg-[#f6fafe]">
        <h1 className="text-center text-4xl font-bold py-10">Internet of Things</h1>
       <div className="flex justify-center items-center flex-wrap gap-28">
            {iotObj.map((item, index) => <IotCard key={'i'+index} item={item}/>)}
    </div>
    </div>
  )
}

export default Iot
