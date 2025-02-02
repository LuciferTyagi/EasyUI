import { motion ,useInView } from "framer-motion";

import React, {  useRef  } from "react";
import { testimonialsData, wordArray } from "../Utils/Constant";
import AnimatedHeading from "../Hooks/AnimatedHeading";
import ScrollingColumn from "./ScrollingColumn";
const sentence = "Real stories from users who have transformed their projects with EasyUI."
const Testimonial = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
  return (
     <section className="Testimonials-Section w-full px-4 py-20 font-inter bg--300 ">
      <div className="Testimonials max-w-[1400px] mx-auto bg--200">
            <h2 className="text-3xl text-center font-medium tracking-tight text-zinc-600">Loved by <AnimatedHeading words={wordArray}/></h2>
            <motion.p 
            ref={ref}
             initial="hidden"
             animate={isInView ? "visible" : "hidden"}
             variants={{
                visible: { transition: { staggerChildren: 0.05, repeat: Infinity, repeatDelay: 2 } },
               }}
               className="text-center text-zinc-500 text-lg mt-3">{sentence.split("").map((char , index) => (
                  <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                     hidden: { opacity: 0, y: 10 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.08 } }
                  }}
                  >
                   {char === " " ? "\u00A0" : char}
               </motion.span>
            ))}</motion.p>
      <div className="relative flex flex-col items-center overflow-hidden h-[600px] mt-10"> 
         <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>   
      <div className="md:hidden"><ScrollingColumn testimonials={testimonialsData} /></div>
      <div className="hidden md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-6">
             <ScrollingColumn testimonials={testimonialsData} />
             <ScrollingColumn testimonials={testimonialsData} duration="8s" />
             <div className="hidden lg:flex"><ScrollingColumn testimonials={testimonialsData} /></div>
      </div>
    </div>


      </div>
    </section>
  );
};

export default Testimonial;
