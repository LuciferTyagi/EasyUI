import { faCss, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-16'>
            <div className='Hero-Info w-[85%] p-3 rounded-md bg-[#865D36] flex flex-col gap-4 '>
                    <p className='text-2xl font-semibold text-[#3E362E]'>EasyUI,Effortless UI for Developers</p>
                    <div className='flex  gap-3 text-base '>
                         <p>Build Using:</p>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faReact} />
                         <p>React</p>
                         </div>
                         <div className='flex items-center gap-1'>
                         <FontAwesomeIcon icon={faCss} />
                         <p>Tailwind</p>
                         </div>
                    </div>
                    <p className='text-sm font-normal'>Easy UI is a platform where developers can access ready-to-use UI components built with React.js and Tailwind CSS. Customize and integrate them into your projects without needing to worry about creating components from scratch.</p>
            </div>

            <div className='Hero-Image'>
                <img src='/images/HeroImage.png' alt='hero-image' className=''/>
            </div>
    </div>
  )
}

export default Hero
