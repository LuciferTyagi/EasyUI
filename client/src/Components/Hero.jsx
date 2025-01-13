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
            <div className='Hero-Info w-[85%] p-2 rounded-md bg-[#865D36] flex flex-col gap-4 '>
                    <p className='text-2xl font-semibold font-inter text-[#3E362E]'><span className='text-[#ECE0D4]'>EasyUI, </span>Effortless UI for Developers</p>
                    <div className='flex  gap-3 text-base font-inter font-semibold text-[#3E362E] '>
                         <p className=' '>Build Using:</p>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faReact} className='text-[#ECE0D4]'/>
                         <p>React</p>
                         </div>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faCss} className='text-[#ECE0D4]'/>
                         <p>Tailwind</p>
                         </div>
                    </div>
                    <p className='text-sm font-normal font-inter text-[#ECE0D480]'>Easy UI is a platform where developers can access ready-to-use UI components built with React.js and Tailwind CSS. Customize and integrate them into your projects without needing to worry about creating components from scratch.</p>
            </div>
            <button onClick={() => navigate('/components')} className='Hero-button w-[85%] bg-[#865D36] rounded font-inter font-normal p-2 text-[#ECE0D4] shadow'>Get Started</button>
            <div className='Hero-Image bg--300 w-[85%]'>
                <img src='/images/HeroImage.png' alt='hero-image' className=''/>
            </div>
           <HeroCard/>
           <Testimonial/>
           <Footer/>
    </div>
  )
}

export default Hero
