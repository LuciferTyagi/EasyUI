import { faCss, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import HeroCard from './HeroCard.jsx';
import Testimonial from './Testimonial.jsx';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useAnimatedHeading from '../Hooks/useAnimatedHeading.jsx';
import { wordArray } from '../Utils/Constant.js';
const Hero = () => {
  const navigate  = useNavigate();
  const { word, isAnimating } = useAnimatedHeading(wordArray);
  return (
    <section className='Hero-Section bg--400 w-full  px-4 py-20 font-inter'>
    {/* <div className='  bg--400 flex flex-col items-center  gap-4 px-2 2xl:px-6 '>
            <div className='Hero-Main-Container  lg:flex lg:justify-between lg:items-center    bg--500'>
               <div className='Hero-Info-&Button-Container 2xl:w-[40%] bg--300  flex flex-col gap-4'>
                 <div className='Hero-Info w-[100%]  p-2 rounded-md bg-[#865D36] flex flex-col gap-4 '>
                    <p className='text-2xl md:text-3xl 2xl:text-4xl font-semibold font-inter text-[#3E362E]'><span className='text-[#ECE0D4]'>EasyUI, </span>Effortless UI for Developers</p>
                    <div className='flex  gap-3 text-base md:text-lg 2xl:text-xl font-inter font-semibold text-[#3E362E] '>
                         <p className=''>Build Using:</p>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faReact} className='text-[#ECE0D4]'/>
                         <p>ReactJs</p>
                         </div>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faCss} className='text-[#ECE0D4]'/>
                         <p>Tailwind</p>
                         </div>
                    </div>
                    <p className='text-sm md:text-base 2xl:text-lg font-normal font-inter text-[#ECE0D480]'>Easy UI is a platform where developers can access ready-to-use UI components built with React.js and Tailwind CSS. Customize and integrate them into your projects without needing to worry about creating components from scratch.</p>
                 </div>
                 <div className='Hero-buttons flex flex-col md:flex-row gap-4 w-[100%]  '>
               <button onClick={() => navigate('/components')} className='Hero-button w-[100%] bg-[#865D36] rounded font-inter font-normal p-2 text-[#ECE0D4] shadow'>Get Started</button>
               <button onClick={() => navigate('/components')} className='Hero-button w-[100%]  border-[1px] border-[#3E362E50] rounded font-inter font-normal p-2 text-[#3E362E] shadow'>What is EasyUI?</button>          
                  </div>
               </div>
           
               <div className='Hero-Image bg--300 2xl:w-[50%] '>
                <img src='/images/HeroImage.png' alt='hero-image' className='md:scale-90 2xl:scale-100'/>
               </div>
            </div>

           <div className='HeroCard-Container  flex flex-col gap-4 lg:flex-row lg:mt-16 bg--300'>
           <HeroCard/>
           </div>
           <Testimonial/>
           
    </div> */}
    <div className='w-full h-screen max-w-[1400px]  mx-auto flex flex-col bg--200  '>
          <div className='flex flex-col items-start bg--300'>
                
                <button className='Request-Buttom flex items-center gap-2 bg-neutral-100 rounded-full p-3 ring-1 ring-[#00000060] '>
                  <span className='text-xs'>Request For Components</span>
                  <FontAwesomeIcon icon={faArrowRight} className='size-3'/>
                </button>
                <h1 className='font-bold text-4xl md:text-7xl text-[#3F3F46] my-4'>EasyUI, Effortless<br></br> UI For <span className={`inline-block transition-all duration-300 ${isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>{word}</span></h1>
                <h3 className='text-base sm:text-xl text-zinc-300 my-4 max-w-xl'>Easy UI provides ready-to-use UI components that integrate seamlessly into your projects—no need to build from scratch or install any external libraries.</h3>
                <div className='Hero-Buttons flex flex-col sm:flex-row   gap-4 w-full'>
                      <button className='Component-Button w-full bg-slate-900 p-4 rounded-2xl sm:w-52'>
                              <a href='#' className='text-white '>Browse Components</a>
                      </button>
                      <button className='GetStarted-Button w-full sm:sm:w-52 bg-white-900 p-4 rounded-2xl hover:shadow-lg transition duration-200 shadow-[-20px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                              <a href='#' className='text-black/60 '>Get Started</a>
                      </button>
                </div>
          </div>
    </div>
    <Testimonial/>
    </section>
  )
}

export default Hero
