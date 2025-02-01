import { testimonialsData } from "../Utils/Constant";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialSlider = () => {
    const [active, setActive] = useState(0);
  
    const nextTestimonial = () => {
        setActive((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      };
    
      const prevTestimonial = () => {
        setActive((prevIndex) =>
          prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
      };
   
    const isActive = (number) => number === active
    
    const randomRotate = () => Math.floor(Math.random() * 21) - 10;
    return (
      <div className="w-full flex flex-col  items-center  bg--400 mt-6 ">
        <div className="w-full max-w-[400px]    relative h-[200px]  bg--400">
            <AnimatePresence>
        {testimonialsData.map((test ,idx) =>{
            const rotation = useMemo(() => randomRotate(), [idx]);
            return (
            <motion.div 
            key={test.id}
            initial={{
                opacity: 0,
                scale:0.9,
                z:-100,
                rotate:rotation,
                y:0,
            }}
            animate={{
                opacity: isActive(idx) ? 1 : 0.7,
                scale: isActive(idx) ? 1 : 0.95,
                rotate: isActive(idx) ? 0 : rotation,
                zIndex: isActive(idx) ? 999 : testimonialsData.length + 2 - idx,
                y: isActive(idx) ? [0,-80,0] : 0,
            }}
            exit={{
                opacity:0,
                scale:0.9,
                z:100,
                rotate:rotation,
            }}
            className="Testimonial-Wrapper absolute inset-0  origin-bottom    bg-white  shadow-lg  border-x-[1px] border-black/20 text-center rounded-xl"> 
             <img
               src={test.image}
               alt={test.name}
               className="absolute -top-10 left-1/2 transform -translate-x-1/2 size-20 object-cover rounded-full border-2 border-white "
             />
             <span className="mt-10 mb-2 inline-block font-bold text-black/60">{test.name}</span>
             <p className="text-zinc-700 text-sm">{test.description}</p>     
           </motion.div> 
            );
        })}
        </AnimatePresence>
    
     </div>
     <div className="Testimonial-Controller  flex justify-center gap-6 mt-4  text-black/70">
          <button onClick={prevTestimonial}>
          <FontAwesomeIcon icon={faArrowLeft} className=""/>
          </button>
          <button onClick={nextTestimonial}>
          <FontAwesomeIcon icon={faArrowRight} className=""/>
          </button>
          </div> 
     </div>
 
    );
  }

  export default TestimonialSlider