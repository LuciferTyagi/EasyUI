import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useAnimatedHeading from '../Hooks/useAnimatedHeading.jsx';
import { wordArray } from '../Utils/Constant.js';
import { hover, motion } from "motion/react"
import TestimonialSlider from './TestimonialCard.jsx';
const FlipAnimation = ({children}) =>{
  return <motion.span
          initial="initial"
          whileHover="hovered"
          className='text-white bg--300 mr-2 relative overflow-hidden whitespace-nowrap text-2xl'>
          <motion.div
          variants={{
            initial:{y:0},
            hovered:{y:'-100%'},
          }}
          >
          {children} 
          </motion.div>
          <motion.div
          className='absolute inset-0'
          variants={{
            initial:{y:'100%'},
            hovered:{y:0},
          }}
          >
          {children} 
          </motion.div>    
          </motion.span>
}
const Hero = () => {
  const navigate  = useNavigate();
  const { word, isAnimating } = useAnimatedHeading(wordArray);
  return (
    <section className='Hero-Section bg--400 w-full  px-4 py-20 font-inter'>
    <div className='Hero-Section-Info w-full  max-w-[1400px]  mx-auto flex flex-col xl:grid xl:grid-cols-2 xl:gap-10  bg-red-200  '>
          
          <div className='flex flex-col items-start bg-green-300'>
                
                <button className='Request-Buttom flex items-center gap-2 bg-neutral-100 rounded-full p-3 ring-1 ring-[#00000060] '>
                  <span className='text-xs'>Request For Components</span>
                  <FontAwesomeIcon icon={faArrowRight} className='size-3'/>
                </button>
                <h1 className='font-bold text-4xl md:text-7xl text-[#3F3F46] my-4 '>EasyUI, Effortless<br></br> UI For <span className={`inline-block transition-all duration-300 ${isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>{word}</span></h1>
                <h3 className='text-base sm:text-xl text-zinc-300 my-4 max-w-xl'>Easy UI provides ready-to-use UI components that integrate seamlessly into your projects—no need to build from scratch or install any external libraries.</h3>
                <div className='Hero-Buttons flex flex-col sm:flex-row   gap-4 w-full'>
                      <button className='Component-Button w-full bg-slate-900 p-4 rounded-2xl sm:w-52'>
                              <a href='#' className='text-white '>Browse Components</a>
                      </button>
                      <button className='GetStarted-Button w-full sm:sm:w-52 bg-white-900 p-4 rounded-2xl hover:shadow-lg transition duration-200 shadow-[-20px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                              <a href='#' className='text-black/60 '>Get Started</a>
                      </button>
                </div>
                <div className='Build-Using flex gap-4 bg--300 text-sm mt-8 opacity-60'>
                      <div className='flex gap-1 md:gap-2 items-center'>
                            <FontAwesomeIcon icon={faReact} className='size-4 md:size-10'/>
                            <span className='font-semibold text--700'>React.js</span>
                      </div>
                      <div className='flex gap-1 md:gap-2 items-center'>
                            <img src='/images/tailwind.svg' alt='css' className='size-4 md:size-10'/>
                            <span className='font-semibold text--700'>TailwindCSS</span>
                      </div>
                </div>
          </div>
          <div className='Hero-Section-Card sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[100%] xl:mx-0  mx-auto mt-20 xl:mt-0 bg-yellow-300'>
          <div className='Hover-Me bg-[#1d1c20] border border-white/[0.08]  relative overflow-hidden w-full rounded-xl p-4'>
                <h2 className='text-white mb-4'>Accelerate Your Development Workflow</h2>
                <p className='text-[#a9a9a9] text-sm'>Save time with ready-to-use React components, optimized for performance and accessibility.</p>
                <div className='Hover-Me-Animation h-20 xl:h-40 flex items-center text-white'>
                  <FlipAnimation>Hover</FlipAnimation>
                  <FlipAnimation>Me</FlipAnimation>
                  <FlipAnimation>Here</FlipAnimation>
                  <FlipAnimation>!</FlipAnimation>
                </div>
          </div>
          <div className='flex items-center justify-center mt-5 bg--400'>
                <TestimonialSlider/>
          </div>
         </div>
    </div>
   
    
    </section>
  )
}

export default Hero
