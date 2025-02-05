import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'motion/react'
import { useTime, useTransform } from 'framer-motion'
import Faq from './Faq'

const Introduction = () => {
    const time = useTime();
    const rotate = useTransform(time , [0,3000] , [0,360],{
        clamp:false,
    })
    const rotatingBg = useTransform(rotate,(r) =>{
        return `conic-gradient(from ${r}deg, #00416A, #E4E5E6)`
    })
  return (
    <div className='Introduction-Container-Parent flex flex-col gap-10 bg-red-300'>
          <div className='First-Child flex flex-col gap-4'>
                            <h1 className='text-4xl font-bold tracking-tighter text-zinc-700'>Easy UI</h1>
                            <p className='text-xl text-zinc-500'>Easy UI provides ready-to-use UI components that integrate seamlessly into your projects—no need to build from scratch or install any external libraries</p>
                            <div className='Button-Container flex gap-4'>
                                  <button className='flex items-center justify-center gap-3 bg-slate-900 text-white px-4 py-2 rounded-lg'>Get Started <FontAwesomeIcon icon={faArrowRight} className=''/></button>
                                  <button style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className='flex items-center justify-center gap-3 bg-transparent text-zinc-700 px-4 py-2 rounded-lg'>LinkedIn <FontAwesomeIcon icon={faLinkedin} className=''/></button>
                                  <button className='flex items-center justify-center gap-3 bg-slate-900 text-white px-4 py-2 rounded-lg'>Github <FontAwesomeIcon icon={faGithub} className=''/></button>
                            </div>
          </div>

          <div className='Second-Child flex flex-col gap-4 '>
                           <h1 className='text-4xl font-bold tracking-tighter text-zinc-700'>Why Easy UI?</h1>
                           <ul className='flex flex-col gap-2 text-base text-zinc-500'>
                            <li>• Pre-Built React Components: Ready-to-use components like buttons, navbars, modals, and more—designed for fast development.</li>
                            <li>• Tailwind CSS Design: Every component is styled with Tailwind CSS for easy customization using utility-first classes.</li>
                            <li>• No Installation Required: Simply copy and paste the code you need into your project, without the need for an npm install.</li>
                            <li>• Responsive and Modern: All components are built to be fully responsive and optimized for modern web applications.</li>
                           </ul>
          </div>
                
          <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className='Third-Child p-3 flex flex-col items-center gap-4 rounded-lg mx-auto text-center w-[40%] max-w-[420px]'>
                            <div className='relative'>
                                <div className='relative bg-white py-2 px-5 rounded-xl z-10'>
                                <span className='text-3xl bg-gradient-to-bl from-[#00416A] to-[#E4E5E6] font-bold text--600 bg-clip-text text-transparent'>100+</span>
                                </div>
                                 <motion.div className='absolute -inset-[1px] rounded-xl'style={{background:rotatingBg}}/>
                            </div>
                            <p className='text-base text-zinc-500'>From grid layouts to navbars,buttons,form,tables and many more.</p>
                            <a href='/components' className='flex items-center gap-3 text-zinc-700 font-medium'>Get Started <FontAwesomeIcon icon={faArrowRight} className=''/></a>
          </div>   
          <Faq/>
     </div>
  )
}

export default Introduction
