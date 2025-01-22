import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faCircle, faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PageInfo = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
            <div className='Why-box bg-[#865D36] w-[90%] flex flex-col gap-2 p-3 rounded-md mt-2'>
                    <p className='text-xl  font-semibold text-[#3E362E]'>Why EasyUI?</p>
                    <p className='text-[#AC8968] font-medium'><FontAwesomeIcon icon={faCircle} className='size-2 text-[#3E362E] mr-1 mb-1'/>Pre-Built React Components: Ready-to-use components like buttons, navbars, modals, and more—designed for fast development.</p>
                    <p className='text-[#AC8968] font-medium'><FontAwesomeIcon icon={faCircle} className='size-2 text-[#3E362E] mr-1 mb-1'/>Tailwind CSS Design: Every component is styled with Tailwind CSS for easy customization using utility-first classes.</p>
                    <p className='text-[#AC8968] font-medium'><FontAwesomeIcon icon={faCircle} className='size-2 text-[#3E362E] mr-1 mb-1'/>No Installation Required: Simply copy and paste the code you need into your project, without the need for an npm install.</p>
                    <p className='text-[#AC8968] font-medium'><FontAwesomeIcon icon={faCircle} className='size-2 text-[#3E362E] mr-1 mb-1'/>Responsive and Modern: All components are built to be fully responsive and optimized for modern web applications.</p>
            </div>

            <div className='Card rounded-md border-[1px] border-[#865D36] bg-[] w-[90%] flex flex-col items-center'>
            <FontAwesomeIcon icon={faDice} className='text-[#865D36] size-12'/>
            <p className='text-[#865D36] text-lg font-semibold'>100+ Componets</p>
            <p className='text-[#865D36] font-semibold text-center'>From grid layouts to navbars,buttons,form,tables and many more.</p>
            <p className='text-[#3E362E] font-semibold'>Get started <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
            <div className='Card-2 rounded-md border-[1px] border-[#865D36] bg-[] w-[90%] flex flex-col items-center'>
            <FontAwesomeIcon icon={faGithub} className='text-[#865D36] size-12'/>
            <p className='text-[#865D36] text-lg font-semibold'>EasyUI, Github Repo</p>
            <p className='text-[#865D36] font-semibold text-center'>From grid layouts to navbars,buttons,form,tables and many more.</p>
            <p className='text-[#3E362E] font-semibold'>Get started <FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
    </div>
  )
}

export default PageInfo
