import { motion } from 'framer-motion';
import {useState} from 'react'
const MarketingCard = ({item}) => {
    const [isParagraphVisiblee, setIsParagraphVisiblee] = useState(false);
    const handleMouseEnter = () => {
        setIsParagraphVisiblee(true);
      };
    
      const handleMouseLeave = () => {
        setIsParagraphVisiblee(false);
      };
  return (
    <div>
            <div className="card border-2 h-[350px] bg-base-100 shadow-xl cursor-pointer flex justify-center items-end overflow-hidden transition ease-in-out duration-1000 hover:transition hover:scale-110 hover:ease-in-out hover:duration-700 mb-[50px] ms-[10px] md:w-[300px]">
    <figure style={{backgroundImage: `url(${item.image})`}} className={`bg-[url(./assets/Images/Serviceimage-2.jpg)] w-[200px] h-full md:w-[300px] bg-no-repeat bg-center p-[0px] hover:duration-300`} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
  <div className="card-body bg-[#336298] opacity-80">
    <h2  className=" justify-self-end card-title text-white font-bold">{item.heading}</h2>
    {isParagraphVisiblee && (
      <motion.p
      initial={{y:444}}
      animate={{y:4}}
      transition={{duration: 2, 
      delay:0,
      ease:[0, 0.71, 0.2, 1.01]
      }}
       className=" text-white text-xs">{item.text}</motion.p>
    )}
  </div>
  </figure>
  
</div>
    </div>
  )
}

export default MarketingCard
