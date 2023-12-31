import { motion } from 'framer-motion';
import {useState} from 'react'

const ServiceCard = ({item}) => {
    const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  
    const handleMouseEnter = () => {
      setIsParagraphVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsParagraphVisible(false);
    };
 
  return (
    <>
    <div className="card border-2 h-[350px] bg-base-100 shadow-xl cursor-pointer flex justify-center items-end overflow-hidden transition ease-in-out duration-1000 hover:transition [hover:scale-110] hover:ease-in-out hover:duration-700 mb-[50px] ms-[10px] md:w-[240px] lg:w-[280px]">
    <figure style={{backgroundImage: `url(${item.bgImage})`}} className={`bg-[url(./assets/Images/Serviceimage-2.jpg)] h-full w-[250px] sm:w-[280px]  md:w-[240px] lg:w-[280px] bg-no-repeat bg-center p-[0px] hover:duration-300`} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
  <div className="card-body">
    <h2  className=" justify-self-end card-title text-white">{item.heading}</h2>
    {isParagraphVisible && (
      <motion.p
      initial={{y:444}}
      animate={{y:4}}
      transition={{duration: 2,
      delay:0,
      ease:[0, 0.71, 0.2, 1.01]
      }}
       className="text-xs text-white lg:text-white text-md">{item.content}</motion.p>
    )}
  </div>
  </figure>
  
</div>
</>
  )
}

export default ServiceCard
