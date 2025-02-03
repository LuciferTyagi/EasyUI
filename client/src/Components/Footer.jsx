import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className='w-full px-4 py-20 font-inter bg--300 border-t border-neutral-100 bg-white'>
            <div className='Footer-Parent max-w-[1400px] mx-auto flex flex-col gap-10'>
                  <div className='First-Child flex flex-col items-start gap-2 bg--300'>
                        <a href='/' className='Company-Name&Logo flex items-center justify-center gap-2'>
                            <img src='/images/E-2.png' alt='logo' width={60} className=''/>
                            <h1 className='font-bold text-2xl'>Easy UI</h1>
                        </a>
                        <h2 className='text-sm text-zinc-400 my-2'>Build by <span><a href='https://www.linkedin.com/in/lucifertyagi/' className='text-zinc-700 font-medium'>@YagyanshTyagi</a></span></h2>
                        <button className='text-sm flex items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-md'>Share Your Thoughts On <FontAwesomeIcon icon={faLinkedin} className='text-lg'/> </button>
                  </div>

                  <nav className='Second-Child grid grid-cols-3 gap-10 items-start text-zinc-500 text-sm'>
                        <ul className='flex justify-center space-y-4 flex-col mt-4 '>
                          <li><a href='' className=''>Components</a></li>
                          <li><a href='' className=''>Documentation</a></li>
                          <li><a href='' className=''>Portfolio</a></li>
                          <li><a href='' className=''>Accordion</a></li>
                          <li><a href='' className=''>Alert</a></li>
                        </ul>
                        <ul className='flex justify-center space-y-4 flex-col mt-4'>
                          <li><a href='' className=''>Linkedin</a></li>
                          <li><a href='' className=''>Github</a></li>
                          <li><a href='' className=''>Foody</a></li>
                        </ul>
                        <ul className='flex justify-center space-y-4 flex-col mt-4'>
                          <li><a href='' className=''>EasyUI</a></li>
                        </ul>
                  </nav>
            </div>
    </footer>
  )
}

export default Footer
