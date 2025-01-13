import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const[mobileMenu , setMobileMenu] = useState(false)

  return (
    <div className='w-full bg-[#AC8968] flex items-center justify-between py-2 px-2  '>  
          <img src='/images/LOGO.png' alt='logo' className='size-7'/>
          
          <div className='hidden header-menu lg:flex gap-2'>
                <p className='text-[#3E362E] hover:text-[#93785B] font-serif text-sm'>Home</p>
                <p className='text-[#3E362E] hover:text-[#93785B] font-serif text-sm'>Components</p>
          </div>
          <div className='hidden header-icon lg:flex gap-2'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#3E362E]' />
                <FontAwesomeIcon icon={faGithub}  className='text-[#3E362E]'/>
                <FontAwesomeIcon icon={faSun} className='text-[#3E362E]'/>
                <div className='Avatar bg-black rounded-[100%] size-4'></div>
          </div>
          <p className='text-base  font-semibold font-inter text-[#ECE0D4]'>Find Your First Component..</p>
          <FontAwesomeIcon icon={faBars}  className='lg:hidden text-[#ECE0D4] cursor-pointer' onClick={() =>setMobileMenu(!mobileMenu)}/>
          {mobileMenu && (
            <div className="absolute top-14 right-2 bg-[#AC8968] shadow-lg rounded-md p-3 flex  gap-4 lg:hidden">
               <Link to='/'> <p className="text-[#3E362E] hover:text-[#93785B] font-inter text-sm cursor-pointer">Home</p> </Link>
               <Link to='/components'> <p className="text-[#3E362E] hover:text-[#93785B] font-inter text-sm cursor-pointer">Components</p></Link>
               <div className="flex items-center gap-4">
                 <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#3E362E]" />
                 <FontAwesomeIcon icon={faGithub} className="text-[#3E362E]" />
                 <FontAwesomeIcon icon={faSun} className="text-[#3E362E]" />
               </div>
             </div>
           )}
    </div>
  )
}

export default Header
