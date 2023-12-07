import React from 'react'
import cloud1 from '../../../assets/Images/Cloud/image (21).png'
import cloud2 from '../../../assets/Images/Cloud/image (22).png'
import cloud3 from '../../../assets/Images/Cloud/image (23).png'
import cloud4 from '../../../assets/Images/Cloud/New Project (24).png'
import cloud5 from '../../../assets/Images/Cloud/New Project (25).png'
import cloud6 from '../../../assets/Images/Cloud/New Project (26).png'
import cloud7 from '../../../assets/Images/Cloud/New Project (27).png'
import CloudCards from '../../../Components/services/digital services/CloudCards'
import DeployCards from '../../../Components/services/digital services/DeployCards'
const Cloud = () => {
    const cloudObj = [
        {
            img1: cloud1,
            heading: 'Software as a Service (SAAS)',
            text: 'Software is provided as a service. Access is charged as per subscription basis at price per user Currently used for non core and nondiffrentiating applications such as CRM, HR or PROC.',
            style: 'pt-12'
        },
        {
            img1: cloud2,
            heading: 'Platform as a Service (PAAS)',
            text: 'This allow complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications.',
            style: 'pt-6'
        },
        {
            img1: cloud3,
            heading: 'Infrastructre as a Service (IAAS)',
            text: 'Outsourced equipment to support operations including storage,hardware,servers and networking equipments. IaaS provider owns the equipments i.e. offers an infrastructure which is an Virtual machine with given amount of power.',
            style: ''
        }
    ]

    const deployObj = [
        {
            img1: cloud4,
            heading: 'Hybrid Cloud',
            text: 'There is no hybrid solution by themselves it is how company decides. By joining dedicated and cloud, businesses can establish IT landscape that Provide best balance of convenience and security.',
            style: ''
        },
        {
            img1: cloud5,
            heading: 'Managed Cloud',
            text: 'Resource dedicated to one customer and mange be provider and Accessed by VPN. Managed is built on top of Private cloud with dedicated hardware owned By cloud provider.',
            style: ''
        },
        {
            img1: cloud6,
            heading: 'Private Cloud',
            text: 'resources dedicated to one customer while infrastructure is managed and operated by customer/third party. Located on premise of customer or third party. To mitigate data security issues.',
            style: ''
        },
        {
            img1: cloud7,
            heading: 'Public Cloud',
            text: 'provide access to provider application running on cloud. Located on cloud provider premises and shared by multiple customers. Major driving factor is to reduce the overall IT infra.',
            style: ''
        }
    ]
  return (
    <div className="bg-[#f6fafe]">
            <h1 className="text-4xl font-bold text-center py-10">Cloud Service Models</h1>
            <div className="flex justify-center items-center">
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:card lg:grid  gap-10 pb-8">
                    {cloudObj.map((obj, index) => <CloudCards key={'a'+index} obj={obj}/>)}
                </div>
            </div>
            <h1 className="text-center text-2xl font-bold py-10">Deployment Models</h1>
            <div className="flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-2  md:grid-cols-4 lg:card lg:grid lg:grid-cols-4 gap-7 pb-8">
                    {deployObj.map((dep, index) => <DeployCards key={'b'+index} dep={dep}/>)}
                </div>
            </div>

    </div>
  )
}

export default Cloud
