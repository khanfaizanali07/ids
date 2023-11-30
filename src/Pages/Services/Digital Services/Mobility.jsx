import {useState} from 'react'
import mobility1 from '../../../assets/Images/Mobility/image (29).png'
import mobility2 from '../../../assets/Images/Mobility/image (30).png'
import mobility3 from '../../../assets/Images/Mobility/image (31).png'
import mobility4 from '../../../assets/Images/Mobility/image (32).png'
import mobolity5 from '../../../assets/Images/Mobility/image (33).png'
import mobolity6 from '../../../assets/Images/Mobility/image (34).png'
import mobolity7 from '../../../assets/Images/Mobility/image (35).png'
import mobolity8 from '../../../assets/Images/Mobility/image (36).png'
import mobolity9 from '../../../assets/Images/Mobility/image (37).png'
import mobolity10 from '../../../assets/Images/Mobility/image (38).png'
import mobolity11 from '../../../assets/Images/Mobility/image (39).png'
import mobolity12 from '../../../assets/Images/Mobility/image (40).png'
import MobileMockup from '../../../Components/services/digital services/MobileMockup'
const Mobility = () => {
    const [image1, setImage1] = useState(true);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    const [image5, setImage5] = useState(false);
    const [image6, setImage6] = useState(false);
    const [image7, setImage7] = useState(false);
    const [image8, setImage8] = useState(false);
    const showImage1 = () => {
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage1(true);
    }
    const showImage2 = () => {
        setImage1(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage2(true);
    }
    const showImage3 = () => {
        setImage1(false);
        setImage2(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage3(true);
    }
    const showImage4 = () => {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage4(true);
    }
    const showImage5 = () => {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage5(true);
    }
    const showImage6 = () => {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage7(false);
        setImage8(false);
        setImage6(true);
    }
    const showImage7 = () => {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage8(false);
        setImage7(true);
    }
    const showImage8 = () => {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(true);
    }
    const mobObj = [
        {
            img: mobility2,
            heading: 'Cross Platform',
            text: 'The idea of cross-platform development is that a software application or product should work well in more than one specific digital habitat. This capability is typically pursued in order to sell software for more than one proprietary operating system.'
        },
        {
            img: mobility3,
            heading: 'Native',
            text: 'If you are looking for an effective way of making an impact on the digital market with your business strategies and services, then Native App Development is the perfect way to do so. Native applications are those apps, which are specifically designed and developed according to a particular platform.'
        },
        {
            img: mobility4,
            heading: 'Enterprise Mobility Solutions',
            text: 'Enterprise mobility has become an essential practise where a business enables its employees to work at anytime from anywhere, using a wide range of devices and applications.'
        }
    ]
  return (
    <>
        <div className="bg-[#f6fafe]">
            <h1 className="text-center text-4xl font-bold py-20">Mobility</h1>
            <div className="md:pl-20 pl-4 pb-8 hover:transition-all">
                <img src={mobility1} alt="Mobile Image" className="inline md:w-40 w-20"/>
                <h1 className="text-2xl font-bold inline text-center">Mobile Application Development</h1>
                <p className="block">Full stack Mobile app development from analysis & design to live phase, iDS offers enterprise and consumer applications using standard industrialized processes, resources, and tools that differentiate our clients in the market and enhance productivity & efficiency. Platforms: Android™, Apple® iOS, Windows using Native and Cross Platform application development approach, Responsive & Dynamic Mobile-Web Applications.</p>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-20">
                {mobObj.map((mob, index) => <MobileMockup mob={mob} key={'f'+index}/>)}
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold p-8">Domains We Serve</h1>
                <div className="flex justify-center items-center w-full lg:flex-row flex-col">
                    <div className="flex justify-center items-center w-1/2">
                            {image1 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity5} alt="" className="w-60"/>
                                </div>
                            )}
                        
                        
                            {image2 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity6} alt="" className="w-60"/>
                                </div>
                            )}
                       
                       
                            {image3 && (
                                 <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity7} alt="" className="w-60"/>
                                </div>
                            )}
                        
                        
                            {image4 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity8} alt="" className="w-60"/>
                                </div>
                            )}
                        
                        
                            {image5 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity9} alt="" className="w-60"/>
                                </div>
                            )}
                       
                        
                            {image6 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity10} alt="" className="w-60"/>
                                </div>
                            )}
                        
                        
                            {image7 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity11} alt="" className="w-60"/>
                                </div>
                            )}
                        
                        
                            {image8 && (
                                <div className="flex justify-center items-center w-1/2 p-4">
                                    <img src={mobolity12} alt="" className="w-60"/>
                                </div>
                            )}
                        
                    </div>
                    <div className="flex w-1/2 lg:flex-row flex-col">
                        <div className="flex w-1/2 flex-col gap-6">
                            <h1 onMouseOver={()=> showImage1()} className="font-bold text-[#336298]">mCommerce</h1>
                            <h1 onMouseOver={()=> showImage2()} className="font-bold text-[#336298]">IOT</h1>
                            <h1 onMouseOver={()=> showImage3()} className="font-bold text-[#336298]">Logistic</h1>
                            <h1 onMouseOver={()=> showImage4()} className="font-bold text-[#336298]">Chatbots</h1>
                        </div>
                        <div className="flex w-1/2 flex-col gap-6">
                            <h1 onMouseOver={()=> showImage5()} className="font-bold text-[#336298]">Lms</h1>
                            <h1 onMouseOver={()=> showImage6()} className="font-bold text-[#336298]">Analytics</h1>
                            <h1 onMouseOver={()=> showImage7()} className="font-bold text-[#336298]">Tracking</h1>
                            <h1 onMouseOver={()=> showImage8()} className="font-bold text-[#336298]">Messaging App</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mobility
