import { faCss, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from "react-router-dom";
import HeroCard from './HeroCard.jsx';
import Testimonial from './Testimonial.jsx';
import Footer from './Footer.jsx';
const Hero = () => {
  const navigate  = useNavigate();
  return (
    <div className='flex flex-col items-center  gap-4'>
            <div className='Hero-Main-Container lg:flex lg:gap-4 lg:items-center w-[85%] lg:w-[98%] bg--500'>
               <div className='Hero-Info-Button-Container w-[100%] flex flex-col gap-4'>
                 <div className='Hero-Info w-[100%] p-2 rounded-md bg-[#865D36] flex flex-col gap-4 '>
                    <p className='text-2xl md:text-3xl font-semibold font-inter text-[#3E362E]'><span className='text-[#ECE0D4]'>EasyUI, </span>Effortless UI for Developers</p>
                    <div className='flex  gap-3 text-base md:text-lg font-inter font-semibold text-[#3E362E] '>
                         <p className=''>Build Using:</p>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faReact} className='text-[#ECE0D4]'/>
                         <p>React</p>
                         </div>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faCss} className='text-[#ECE0D4]'/>
                         <p>Tailwind</p>
                         </div>
                    </div>
                    <p className='text-sm md:text-base font-normal font-inter text-[#ECE0D480]'>Easy UI is a platform where developers can access ready-to-use UI components built with React.js and Tailwind CSS. Customize and integrate them into your projects without needing to worry about creating components from scratch.</p>
                 </div>
                 <div className='Hero-buttons flex flex-col md:flex-row gap-4 w-[100%]  '>
               <button onClick={() => navigate('/components')} className='Hero-button w-[100%] bg-[#865D36] rounded font-inter font-normal p-2 text-[#ECE0D4] shadow'>Get Started</button>
               <button onClick={() => navigate('/components')} className='Hero-button w-[100%]  border-[1px] border-[#3E362E50] rounded font-inter font-normal p-2 text-[#3E362E] shadow'>What is EasyUI?</button>          
                  </div>
               </div>
           
               <div className='Hero-Image bg--300 w-[100%]'>
                <img src='/images/HeroImage.png' alt='hero-image' className=''/>
               </div>
            </div>
           <div className='HeroCard-Container w-[85%] lg:w-[98%] flex flex-col gap-4 lg:flex-row lg:mt-16'>
           <HeroCard/>
           </div>
           <Testimonial/>
           <Footer/>
    </div>
  )
}

export default Hero
