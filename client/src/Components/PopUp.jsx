import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faCoffee, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const PopUp = ({onClose}) => {
    const popRef = useRef();
    const closePopUp = (e) =>{
        if(popRef.current === e.target){
            onClose();
        }
    }
  return (
    <div ref={popRef} onClick={closePopUp} className=' hidden lg:flex items-center  fixed inset-0 z-[50]  backdrop-blur-sm font-inter '>
        <div className='bg-[#d49860] rounded-md lg:w-[65%]  xl:w-[50%] mx-auto p-4'>
           <button onClick={onClose} className='text-[#ECE0D4]'><FontAwesomeIcon icon={faX}/></button>
            <p className='text-3xl font-semibold text-[#3E362E]'><span className='text-[#ECE0D4]'>Hi, I'm </span>Yagyansh Tyagi</p>
            <div className='flex gap-8  mt-4'>
            <div className='w-[40%] h-[100%] bg-[#AC8968] rounded-md p-2 text-[#3E362E]'>
                <p>I am a passionate Frontend Developer with experience in building intuitive and responsive web interfaces. Over the past year, I’ve worked extensively with ReactJS, creating reusable components and dynamic UIs that enhance user experiences.</p>
            </div>
            <div className='w-[30%] h-[] bg-[#865D36] text-[#3E362E] rounded-md p-2'>
                <p><span className='text-[#ECE0D4]'>I’ve also completed two internships</span> at startups, where I collaborated with teams using daily stand-up meetings to ensure smooth progress and timely delivery. My skill set includes ReactJS, Tailwind CSS, and JavaScript, and I’m continuously improving my expertise in modern web development tools and frameworks.</p>
            </div>
            </div>
            <div className='Avatar-Wrapper relative bg--200 w-fit '>
            <div className="relative w-40 h-40 rounded-full bg-pink-400 overflow-hidden">
             <img src="/images/Cj.jpg" alt="me" className="w-full h-full object-cover" />
            </div>
             <FontAwesomeIcon icon={faLinkedin} className='absolute size-6 top-0 left-[85%]   text-[#ECE0D4]'/>
             <FontAwesomeIcon icon={faGithub} className='absolute size-6 top-[25%] left-[98%]   text-[#ECE0D4]'/>
             <FontAwesomeIcon icon={faBowlFood} className='absolute size-6 top-[54%] left-[101%]   text-[#ECE0D4]'/>
             <FontAwesomeIcon icon={faCoffee} className='absolute size-6 top-[82%] left-[86%]   text-[#ECE0D4]'/>

            </div>

        </div>
    </div>
  )
}

export default PopUp
