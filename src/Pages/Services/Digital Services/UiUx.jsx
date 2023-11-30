import {useState} from 'react'
import ui1 from '../../../assets/Images/UI/ui-ux.webp'
import ui2 from '../../../assets/Images/UI/info-arch.webp'
import ui3 from '../../../assets/Images/UI/ux-logo.webp'
import ui4 from '../../../assets/Images/UI/ui-logo.webp'  
import ui5 from '../../../assets/Images/UI/unique.webp'
import ui6 from '../../../assets/Images/UI/ps.webp'
import ui7 from '../../../assets/Images/UI/ai.webp'
import ui8 from '../../../assets/Images/UI/id.webp'
import ui9 from '../../../assets/Images/UI/coral.webp'
import ui11 from '../../../assets/Images/UI/figma.webp'
import ui12 from '../../../assets/Images/UI/ux-html.webp'
import ui13 from '../../../assets/Images/UI/ux-css.webp'
import ui14 from '../../../assets/Images/UI/ux-js.webp'
import ui15 from '../../../assets/Images/UI/react.webp'
import ui16 from '../../../assets/Images/UI/angular.webp'
import ui17 from '../../../assets/Images/UI/vue.webp'
import ui18 from '../../../assets/Images/UI/ux-bootstrap.webp'
import ui19 from '../../../assets/Images/UI/ux-tailwind.webp'
import ui20 from '../../../assets/Images/UI/ux-materialize.webp'

const UiUx = () => {
    const ui = [ui6, ui7, ui8, ui9, ui11];
    const ux = [ui12, ui13, ui14, ui15, ui16, ui17, ui18, ui19,ui20]
    const [paragraph1, setParagraph1] = useState(true);
    const [paragraph2, setParagraph2] = useState(false);
    const [paragraph3, setParagraph3] = useState(false);
    const [paragraph4, setParagraph4] = useState(false);
    const [images1, setImages1] = useState(true)
    const [images2, setImages2] = useState(false)
    
        const handlePara1 = () => {
            setParagraph4(false)
            setParagraph3(false)
            setParagraph2(false)
            setParagraph1(true)
           
        }
        
        const handlePara2 = () => {
            setParagraph1(false)
            setParagraph3(false)
            setParagraph4(false)
            setParagraph2(true)
        }
        
        const handlePara3 = () => {
            setParagraph1(false)
            setParagraph2(false)
            setParagraph4(false)
            setParagraph3(true)
        }
        const handlePara4 = () => {
            setParagraph1(false)
            setParagraph2(false)
            setParagraph3(false)
            setParagraph4(true)
        }
        const handleImages1 = () => {
            setImages2(false)
            setImages1(true)
        }
        const handleImages2 = () => {
            setImages1(false)
            setImages2(true)
        }

  return (
   <div className="bg-[#f6fafe]">
        <div className="w-full flex items-center flex-col pl-4 pt-16 md:p-14 md:flex-row gap-4">
            <div className="md:w-[70%] w-full">
                <h1 className="text-2xl font-bold"><span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent">UI/UX</span> Design & Development Services</h1>
                <p className="pl-2 text-justify md:pr-24 pr-8 text-md">User Engagement is a very important factor for the success of any digital product. Therefore, we don't stop until we get an eye-catching and engaging design. We go to the edge to design error free and appealing UI UX which resonate with the target audiences.</p>
            </div>
            <div className="md:w-[30%] w-full">
                <img src={ui1} alt="UI/UX"/>
            </div>
        </div>
        <div className="pr-8">
            <h1 className="text-2xl font-bold pl-4 md:pl-14">Our<span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent"> UI/UX</span> Design System</h1>
            </div>
            <p className="pl-6 md:pl-16 text-justify md:pr-10 pr-4">We have developed our ui ux design methodology according to well known principles patterns and frameworks which ensure code consistency, code modularity and a sophisticated product development process. Components of the design system are reusable across multiple parts of a product and even across different projects.</p>
            <div className="flex w-full md:flex-row flex-col px-6 mt-4">
                <div className="md:pl-11 gap-4 grid lg:grid-cols-1 2xl:grid-cols-2 md:w-1/2 w-full place-items-center">
                <div onClick={() => handlePara1()} className="shadow-lg w-60 py-4 flex items-center cursor-pointer hover:shadow-2xl border-2 border-gray-300 rounded-lg">
                    <img src={ui2} alt="image" className="w-14 pl-2"/>
                    <p className="ml-2">Information Organisation</p>
                </div>
                <div onClick={() => handlePara2()} className="shadow-lg w-60 py-4 flex items-center cursor-pointer hover:shadow-2xl border-2 border-gray-300 rounded-lg">
                    <img src={ui3} alt="image" className="w-14 pl-2"/>
                    <p className="ml-2">UX Development</p>
                </div>
                <div onClick={() => handlePara3()} className="shadow-lg w-60 py-4 flex items-center cursor-pointer hover:shadow-2xl border-2 border-gray-300 rounded-lg">
                    <img src={ui4} alt="image" className="w-14 pl-2"/>
                    <p className="ml-2">UI Design</p>
                </div>
                <div onClick={() => handlePara4()} className="shadow-lg w-60 py-4 flex items-center cursor-pointer hover:shadow-2xl border-2 border-gray-300 rounded-lg">
                    <img src={ui5} alt="image" className="w-14 pl-2"/>
                    <p className="ml-2">Unique & Engaging solution</p>
                </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-4 rounded-lg shadow-lg border-2 border-gray-300">
                    {paragraph1 && (
                    <>
                    <h1 className="text-xl font-bold pt-4 pl-4 text-[#336298]">Information Organisation</h1>
                    <p className="text-md pl-4">We choose the best way to organize and structure the content and data of your web and mobile apps. We deeply analyze your users’ behavior and actions, as well as their incentives, to create an appropriate solution that will match your core business goals.</p>
                    </>
                )}
                {paragraph2 && (
                    <>
                    <h1 className="text-xl font-bold pt-4 pl-4 text-[#336298]">UX Development</h1>
                    <p className="text-md pl-4">We consider all aspects and possibilities of how an end-user will interact with the app in the future. To achieve your target goals, we extensively analyze both the users’ behavior and the core features of the system to allow the accurate rendering of all visual and functional elements.</p>
                    </>
                )}
                {paragraph3 && (
                    <>
                    <h1 className="text-xl font-bold pt-4 pl-4 text-[#336298]">UI Design</h1>
                    <p className="text-md pl-4">We will deliver our best efforts to ingeniously turn your ideas and thoughts into a clear and fully functional design. We are not only responsible for designing the architecture of the application but also for its convenient end-user interface.</p>
                    </>
                )}
                {paragraph4 && (
                    <>
                    <h1 className="text-xl font-bold pt-4 pl-4 text-[#336298]">Unique & Engaging solution</h1>
                    <p className="text-md pl-4">We create outstanding individual solutions for any business. Our skilled UX/UI development team can design an amazing UI for your future app that definitely will help to differentiate your business solution from others and increase the target audience.</p>
                    </>
                )}
                </div>
            </div>
            <h1 className="lg:text-4xl md:text-2xl text-xl text-center lg:mt-20 mt-10 font-bold">Technologies We Use for <span className="bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent">UI/UX</span> Design</h1>
            <div className="md:px-40 px-4 mt-8 pb-6">
            <div className="flex items-center justify-center flex-col w-full border-2 border-gray-300 rounded-xl shadow-2xl py-4">
                <div className="w-1/2 flex justify-center items-center gap-6">
                    <p className={`${
                images1 ? 'text-[#336298]' : 'text-gray-400 hover:text-black'
            }lg:text-2xl md:text-xl text-lg font-bold cursor-pointer`} onClick={() => handleImages1()}>UI (User Interface)</p>
                    <p className={`${
                images2 ? 'text-[#336298]' : 'text-gray-400 hover:text-black'
            }lg:text-2xl md:text-xl text-lg font-bold cursor-pointer`} onClick={() => handleImages2()}>UX (User Experience)</p>
                </div>
                { images1 && (
                <div className="flex items-center justify-center gap-4 w-1/2 pt-10 flex-wrap">
                    {
                        ui.map((uiImg, index) => 
                            <div className="rounded-md border-2 border-gray-300 lg:w-1/5 md:w-1/4 w-1/3">
                                <img src={uiImg} key={"t"+index} alt="UI Images" className="lg:p-2 p-1"/>
                            </div>
                            )
                            }
                </div>
                )}
                { images2 && (
                <div className="flex items-center justify-center gap-4 w-1/2 pt-10 flex-wrap">
                    {
                        ux.map((uxImg, index) => 
                            <div className="rounded-md border-2 border-gray-300 lg:w-1/5 md:w-1/4 w-1/3">
                                <img src={uxImg} key={"u"+index} alt="UI Images" className="lg:p-2 p-1"/>
                            </div>
                            )
                            }
                </div>
                )}

            </div>
            </div>
   </div>
  )
}

export default UiUx
