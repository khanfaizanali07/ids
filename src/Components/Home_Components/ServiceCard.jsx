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
    <div className="card bg-base-100 shadow-xl cursor-pointer flex items-end  translate-y-1 hover:scale-110 duration-300 overflow-hidden h-[300px] md:h-[350px] mt-5">
    <figure style={{backgroundImage: `url(${item.bgImage})`}} className={`bg-[url(./assets/Images/Serviceimage-2.jpg)] w-[200px] h-full md:w-[300px] bg-cente`} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
  <div className="card-body">
    <h2  className=" justify-self-end card-title text-white">{item.heading}</h2>
    {isParagraphVisible && (
      <motion.p
      initial={{y:220}}
      animate={{y:4}}
      transition={{duration: 1, 
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
