import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoon, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PopUp from './PopUp';
import Searchbar from './Searchbar';
const Header = () => {
    const[mobileMenu , setMobileMenu] = useState(false)
    const[showPopUp , setShowPopUp] = useState(false);
  return (
    <header className='w-full  bg-white border-b'>
    <div className='flex items-center max-w-[1400px] mx-auto justify-center font-inter text-zinc-700 bg-slate-400 py-2'>
      <span className='font-semibold'>Under Active Development</span>
    </div>
    <nav className='Mobile-Nav flex lg:hidden w-full bg-white  items-center justify-between py-4 px-4'>
          <a href='#' className='Company-LOGO flex items-center gap-1'>           
             <img src='/images/E-2.png' alt='logo' width='50' height='50'  className=''/>
             
          </a>  
          
          <div className='Searchbar&Menu flex items-center  gap-4'>
          <Searchbar/>
          <FontAwesomeIcon icon={faBars}  className='size-5  cursor-pointer' onClick={() =>setMobileMenu(!mobileMenu)}/>
          </div>
          {mobileMenu && (
            <div className='Mobile-Menu fixed inset-0 z-[100] bg-white flex flex-col pt-4 space-y-10 transition duration-300'>
                <div className='Mobile-Menu-Header w-full flex items-center justify-between px-4  bg--500'>
                    <a href='#' className='flex items-center'>
                    <img src='/images/E-2.png' alt='Logo' width={50} className=''/>
                    </a>
                    <div className='flex items-center justify-center gap-3 bg--300'>
                          <button className='DarkMode-Button '>
                                  <FontAwesomeIcon icon={faMoon} className='size-5 '/>
                          </button>
                          <button onClick={() =>setMobileMenu(false)} className='Close-Button'>
                                  <FontAwesomeIcon icon={faX} className='size-5 '/>
                          </button>
                    </div>
                </div>
                <div className='Mobile-Menu-Items  flex flex-col items-start justify-start gap-3 px-4 bg-rd-400 text-2xl font-inter w-fit'>
                      <a href='#'><span>Components</span></a>
                      <a href='#'><span>Documentation</span></a>
                      <a href='#'><span>Portfolio</span></a>
                      <a href='#'><span>Github</span></a>
                </div>
          </div>
          )}
          
          
            
    </nav>

    <nav className='Desktop-Nav hidden lg:flex items-center justify-between mx-auto max-w-[1400px] py-8 bg-red-300 font-inter'>
          < a href='/' className='Company-LOGO flex items-center gap-3'>
              <img src='/images/E-2.png' alt='logo' width={60} className=''/>
              <h1 className='text-2xl font-bold'>Easy UI</h1>
          </a>
          <ul className='Nav-Primary-Items flex  gap-5 text-base text-[#00000060] bg--400'>
              <li>
                <a href='/components'>Components</a>
              </li>
              <li>
                <a href='/components'>Documentation</a>
              </li>
              <li>
                <a href='https://foody-734ba.web.app/'>Porfolio</a>
              </li>        
          </ul>
          <div className='Nav-Secondary-Items flex  items-center gap-5 bg--400'>
                <a href='https://github.com/LuciferTyagi' className='text-base text-[#00000060]'>Github</a>
                <button className='DarkMode-Button '>
                    <FontAwesomeIcon icon={faMoon} className='size-5 '/>
                </button>
                <Searchbar/>
          </div>
    </nav>
    </header>
  )
}

export default Header
4